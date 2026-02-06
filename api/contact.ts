import nodemailer from "nodemailer";

interface ContactFormData {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

function getEmailConfig() {
  const user = process.env.EMAIL_USER || "";
  const password = process.env.EMAIL_PASSWORD || "";
  const recipient = process.env.EMAIL_RECIPIENT || "";
  const missing: string[] = [];

  if (!user) missing.push("EMAIL_USER");
  if (!password) missing.push("EMAIL_PASSWORD");
  if (!recipient) missing.push("EMAIL_RECIPIENT");

  return { user, password, recipient, missing };
}

async function readJson(req: any) {
  const chunks: Buffer[] = [];
  for await (const chunk of req) {
    chunks.push(Buffer.from(chunk));
  }
  const raw = Buffer.concat(chunks).toString("utf-8");
  if (!raw) return {};
  return JSON.parse(raw);
}

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.statusCode = 405;
    res.setHeader("Allow", "POST");
    res.end("Method Not Allowed");
    return;
  }

  try {
    const body = req.body ?? (await readJson(req));
    const { name, company, email, phone, subject, message }: ContactFormData = body;

    if (!name || !email || !message) {
      res.statusCode = 400;
      res.setHeader("Content-Type", "application/json");
      res.end(
        JSON.stringify({
          success: false,
          error: "Bitte füllen Sie alle Pflichtfelder aus.",
        }),
      );
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      res.statusCode = 400;
      res.setHeader("Content-Type", "application/json");
      res.end(
        JSON.stringify({
          success: false,
          error: "Bitte geben Sie eine gültige E-Mail-Adresse an.",
        }),
      );
      return;
    }

    const { user, password, recipient, missing } = getEmailConfig();
    if (missing.length > 0) {
      console.warn(
        `Kontaktformular nicht konfiguriert. Fehlend: ${missing.join(", ")}`,
      );
      res.statusCode = 500;
      res.setHeader("Content-Type", "application/json");
      res.end(
        JSON.stringify({
          success: false,
          error:
            "Das Kontaktformular ist aktuell nicht konfiguriert. Bitte versuchen Sie es spaeter erneut.",
        }),
      );
      return;
    }

    const now = new Date();
    const dateStr = now.toLocaleDateString("de-DE", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #f4f4f7; font-family: Arial, Helvetica, sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f7; padding: 30px 10px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
          <tr>
            <td style="height: 5px; background-color: #e30613;"></td>
          </tr>
          <tr>
            <td style="padding: 35px 40px 25px 40px; border-bottom: 1px solid #eaeaea;">
              <h1 style="margin: 0 0 8px 0; font-size: 24px; font-weight: 700; color: #1a1a1a;">Neue Kontaktanfrage</h1>
              <p style="margin: 0; font-size: 14px; color: #888888;">Thomas Burk GmbH • TRUMPF Partner</p>
            </td>
          </tr>
          <tr>
            <td style="padding: 25px 40px 0 40px;">
              <table role="presentation" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background-color: #e30613; color: #ffffff; padding: 8px 16px; border-radius: 4px; font-size: 13px; font-weight: 600;">
                    ${subject || "Allgemeine Anfrage"}
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding: 25px 40px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border: 1px solid #eaeaea; border-radius: 8px; overflow: hidden;">
                <tr>
                  <td style="padding: 15px 20px; background-color: #fafafa; border-bottom: 1px solid #eaeaea; width: 120px;">
                    <span style="font-size: 11px; font-weight: 700; color: #888888; text-transform: uppercase; letter-spacing: 0.5px;">Name</span>
                  </td>
                  <td style="padding: 15px 20px; background-color: #ffffff; border-bottom: 1px solid #eaeaea;">
                    <span style="font-size: 15px; font-weight: 600; color: #1a1a1a;">${name}</span>
                  </td>
                </tr>
                ${company ? `
                <tr>
                  <td style="padding: 15px 20px; background-color: #fafafa; border-bottom: 1px solid #eaeaea;">
                    <span style="font-size: 11px; font-weight: 700; color: #888888; text-transform: uppercase; letter-spacing: 0.5px;">Unternehmen</span>
                  </td>
                  <td style="padding: 15px 20px; background-color: #ffffff; border-bottom: 1px solid #eaeaea;">
                    <span style="font-size: 15px; color: #333333;">${company}</span>
                  </td>
                </tr>
                ` : ""}
                <tr>
                  <td style="padding: 15px 20px; background-color: #fafafa; border-bottom: 1px solid #eaeaea;">
                    <span style="font-size: 11px; font-weight: 700; color: #888888; text-transform: uppercase; letter-spacing: 0.5px;">E-Mail</span>
                  </td>
                  <td style="padding: 15px 20px; background-color: #ffffff; border-bottom: 1px solid #eaeaea;">
                    <a href="mailto:${email}" style="font-size: 15px; color: #0066cc; text-decoration: none;">${email}</a>
                  </td>
                </tr>
                ${phone ? `
                <tr>
                  <td style="padding: 15px 20px; background-color: #fafafa;">
                    <span style="font-size: 11px; font-weight: 700; color: #888888; text-transform: uppercase; letter-spacing: 0.5px;">Telefon</span>
                  </td>
                  <td style="padding: 15px 20px; background-color: #ffffff;">
                    <a href="tel:${phone}" style="font-size: 15px; color: #0066cc; text-decoration: none;">${phone}</a>
                  </td>
                </tr>
                ` : `
                <tr>
                  <td style="padding: 0;" colspan="2"></td>
                </tr>
                `}
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding: 0 40px 30px 40px;">
              <p style="margin: 0 0 12px 0; font-size: 11px; font-weight: 700; color: #888888; text-transform: uppercase; letter-spacing: 0.5px;">Nachricht</p>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background-color: #f8f9fa; border-left: 4px solid #e30613; padding: 20px 25px; border-radius: 0 8px 8px 0;">
                    <p style="margin: 0; font-size: 15px; line-height: 1.7; color: #333333;">${String(message).replace(/\n/g, "<br>")}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding: 25px 40px; background-color: #f8f9fa; border-top: 1px solid #eaeaea; text-align: center;">
              <p style="margin: 0 0 5px 0; font-size: 13px; color: #666666;">Thomas Burk GmbH • Präzision in Werkzeugen</p>
              <p style="margin: 0; font-size: 11px; color: #999999;">Eingegangen am ${dateStr}</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `;

    const textContent = `
NEUE KONTAKTANFRAGE - Thomas Burk GmbH
========================================

Betreff: ${subject || "Allgemeine Anfrage"}
Name: ${name}
${company ? `Unternehmen: ${company}` : ""}
E-Mail: ${email}
${phone ? `Telefon: ${phone}` : ""}

Nachricht:
${message}

----------------------------------------
Eingegangen am ${dateStr}
    `;

    const transporter = nodemailer.createTransport({
      host: "smtp.web.de",
      port: 587,
      secure: false,
      auth: {
        user,
        pass: password,
      },
    });

    await transporter.sendMail({
      from: `"Thomas Burk GmbH Website" <${user}>`,
      to: recipient,
      replyTo: email,
      subject: `[Kontaktanfrage] ${subject || "Neue Anfrage"} - ${name}`,
      text: textContent,
      html: htmlContent,
    });

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(
      JSON.stringify({
        success: true,
        message: "Ihre Anfrage wurde erfolgreich gesendet.",
      }),
    );
  } catch (error) {
    console.error("Fehler beim Senden der E-Mail:", error);
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.end(
      JSON.stringify({
        success: false,
        error: "Es gab ein Problem beim Senden Ihrer Anfrage. Bitte versuchen Sie es später erneut.",
      }),
    );
  }
}
