import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import nodemailer from "nodemailer";

// Web.de SMTP Konfiguration
// WICHTIG: Erstellen Sie in Ihrem Web.de Account ein App-Passwort:
// 1. Einstellungen → Sicherheit → App-Passwörter
// 2. Neues Passwort erstellen für "Andere Anwendung"
// 3. Das generierte Passwort in EMAIL_PASSWORD eintragen

const EMAIL_USER = process.env.EMAIL_USER || "burk-trutools@web.de";
const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD || ""; // App-Passwort hier eintragen
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "burk-trutools@web.de";

// Nodemailer Transporter für Web.de
const transporter = nodemailer.createTransport({
  host: "smtp.web.de",
  port: 587,
  secure: false, // TLS
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASSWORD,
  },
});

interface ContactFormData {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Kontaktformular API-Endpunkt
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      const { name, company, email, phone, subject, message }: ContactFormData = req.body;

      // Validierung
      if (!name || !email || !message) {
        return res.status(400).json({
          success: false,
          error: "Bitte füllen Sie alle Pflichtfelder aus.",
        });
      }

      // E-Mail-Format validieren
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({
          success: false,
          error: "Bitte geben Sie eine gültige E-Mail-Adresse an.",
        });
      }

      // Aktuelles Datum formatieren
      const now = new Date();
      const dateStr = now.toLocaleDateString("de-DE", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });

      // HTML E-Mail erstellen (mit Inline-Styles für maximale E-Mail-Client-Kompatibilität)
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
          
          <!-- Roter Akzent-Balken -->
          <tr>
            <td style="height: 5px; background-color: #e30613;"></td>
          </tr>
          
          <!-- Header -->
          <tr>
            <td style="padding: 35px 40px 25px 40px; border-bottom: 1px solid #eaeaea;">
              <h1 style="margin: 0 0 8px 0; font-size: 24px; font-weight: 700; color: #1a1a1a;">Neue Kontaktanfrage</h1>
              <p style="margin: 0; font-size: 14px; color: #888888;">Thomas Burk GmbH • TRUMPF Partner</p>
            </td>
          </tr>
          
          <!-- Betreff-Badge -->
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
          
          <!-- Kontaktdaten -->
          <tr>
            <td style="padding: 25px 40px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border: 1px solid #eaeaea; border-radius: 8px; overflow: hidden;">
                
                <!-- Name -->
                <tr>
                  <td style="padding: 15px 20px; background-color: #fafafa; border-bottom: 1px solid #eaeaea; width: 120px;">
                    <span style="font-size: 11px; font-weight: 700; color: #888888; text-transform: uppercase; letter-spacing: 0.5px;">Name</span>
                  </td>
                  <td style="padding: 15px 20px; background-color: #ffffff; border-bottom: 1px solid #eaeaea;">
                    <span style="font-size: 15px; font-weight: 600; color: #1a1a1a;">${name}</span>
                  </td>
                </tr>
                
                ${company ? `
                <!-- Unternehmen -->
                <tr>
                  <td style="padding: 15px 20px; background-color: #fafafa; border-bottom: 1px solid #eaeaea;">
                    <span style="font-size: 11px; font-weight: 700; color: #888888; text-transform: uppercase; letter-spacing: 0.5px;">Unternehmen</span>
                  </td>
                  <td style="padding: 15px 20px; background-color: #ffffff; border-bottom: 1px solid #eaeaea;">
                    <span style="font-size: 15px; color: #333333;">${company}</span>
                  </td>
                </tr>
                ` : ""}
                
                <!-- E-Mail -->
                <tr>
                  <td style="padding: 15px 20px; background-color: #fafafa; border-bottom: 1px solid #eaeaea;">
                    <span style="font-size: 11px; font-weight: 700; color: #888888; text-transform: uppercase; letter-spacing: 0.5px;">E-Mail</span>
                  </td>
                  <td style="padding: 15px 20px; background-color: #ffffff; border-bottom: 1px solid #eaeaea;">
                    <a href="mailto:${email}" style="font-size: 15px; color: #0066cc; text-decoration: none;">${email}</a>
                  </td>
                </tr>
                
                ${phone ? `
                <!-- Telefon -->
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
          
          <!-- Nachricht -->
          <tr>
            <td style="padding: 0 40px 30px 40px;">
              <p style="margin: 0 0 12px 0; font-size: 11px; font-weight: 700; color: #888888; text-transform: uppercase; letter-spacing: 0.5px;">Nachricht</p>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background-color: #f8f9fa; border-left: 4px solid #e30613; padding: 20px 25px; border-radius: 0 8px 8px 0;">
                    <p style="margin: 0; font-size: 15px; line-height: 1.7; color: #333333;">${message.replace(/\n/g, "<br>")}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Footer -->
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

      // Plaintext-Version
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

      // E-Mail senden
      if (EMAIL_PASSWORD) {
        await transporter.sendMail({
          from: `"Thomas Burk GmbH Website" <${EMAIL_USER}>`,
          to: EMAIL_RECIPIENT,
          replyTo: email,
          subject: `[Kontaktanfrage] ${subject || "Neue Anfrage"} - ${name}`,
          text: textContent,
          html: htmlContent,
        });

        console.log(`✅ Kontaktanfrage von ${name} (${email}) erfolgreich gesendet`);
      } else {
        // Wenn kein Passwort konfiguriert, nur loggen
        console.log("⚠️ E-Mail-Passwort nicht konfiguriert. Anfrage nur geloggt:");
        console.log({ name, company, email, phone, subject, message, timestamp: dateStr });
      }

      return res.status(200).json({
        success: true,
        message: "Ihre Anfrage wurde erfolgreich gesendet.",
      });
    } catch (error) {
      console.error("❌ Fehler beim Senden der E-Mail:", error);
      return res.status(500).json({
        success: false,
        error: "Es gab ein Problem beim Senden Ihrer Anfrage. Bitte versuchen Sie es später erneut.",
      });
    }
  });

  return httpServer;
}
