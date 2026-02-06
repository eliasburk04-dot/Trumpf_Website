import { Facebook, Instagram, Linkedin, MapPin, Mail, Phone } from "lucide-react";

const footerLinks = {
  leistungen: [
    { label: "Beratung und Verkauf", href: "/#leistungen" },
    { label: "Wartung und Service", href: "/#leistungen" },
    { label: "Reparatur", href: "/#leistungen" },
    { label: "Original-Ersatzteile & Verschleißteile", href: "/#kontakt" },
    { label: "Produktübersicht", href: "/produkte" },
    { label: "Aktuelle Aktionen", href: "/aktionen" },
  ],
  unternehmen: [
    { label: "Branchen", href: "/#branchen" },
    { label: "Kontakt", href: "/#kontakt" },
    { label: "Impressum", href: "/impressum" },
    { label: "Datenschutz", href: "/datenschutz" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-200 pt-20 pb-8 border-t border-slate-900" data-testid="footer">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">TB</span>
              </div>
              <span className="font-bold text-xl text-white">Thomas Burk GmbH</span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6">
              Ihr zertifizierter Partner für TRUMPF TruTool Elektrowerkzeuge in Baden-Württemberg
              und Bayern. Beratung, Verkauf, Wartung und Reparatur für professionelle Anwendungen.
              Lieferung von Original-Ersatzteilen und Verschleißteilen auf Anfrage.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Facebook Profil"
                className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Instagram Profil"
                className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn Profil"
                className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Leistungen</h3>
            <ul className="space-y-4">
              {footerLinks.leistungen.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-slate-400 hover:text-primary transition-colors cursor-pointer">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Unternehmen</h3>
            <ul className="space-y-4">
              {footerLinks.unternehmen.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-slate-400 hover:text-primary transition-colors cursor-pointer">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Kontakt</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
                <span className="text-slate-400">
                  Friedrich-Naumann-Str. 11
                  <br />
                  71636 Ludwigsburg
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+497141921912" className="text-slate-400 hover:text-white transition-colors">
                  +49 7141 921 912
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:burk-trutools@web.de" className="text-slate-400 hover:text-white transition-colors">
                  burk-trutools@web.de
                </a>
              </li>
            </ul>
            <p className="text-slate-500 text-sm mt-4">Mo-Fr: 7:00-17:00 Uhr</p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-900">
          <h3 className="text-white font-bold text-lg mb-6 text-center">Unser Einzugsgebiet in Süddeutschland</h3>
          <p className="text-center text-slate-400 text-sm max-w-4xl mx-auto leading-relaxed">
            Wir betreuen Industrie- und Handwerkskunden in Baden-Württemberg und Bayern,
            unter anderem in Stuttgart, Ludwigsburg, Heilbronn, Ulm, Karlsruhe, München,
            Augsburg, Nürnberg, Regensburg und Ingolstadt.
          </p>
        </div>

        <div className="border-t border-slate-900 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p data-testid="text-copyright">© {new Date().getFullYear()} Thomas Burk GmbH. Alle Rechte vorbehalten.</p>
          <p>Präzision für Süddeutschland.</p>
        </div>
      </div>
    </footer>
  );
}
