import { Facebook, Instagram, Linkedin, MapPin, Mail, Phone } from "lucide-react";

const footerLinks = {
  leistungen: [
    { label: "Vertrieb & Verkauf", href: "/#leistungen" },
    { label: "Wartung & Service", href: "/#leistungen" },
    { label: "Reparatur", href: "/#leistungen" },
    { label: "Produktübersicht", href: "/produkte" },
    { label: "Aktuelle Aktionen", href: "/aktionen" },
  ],
  unternehmen: [
    { label: "Über uns", href: "/#ueber-uns" },
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
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">TB</span>
              </div>
              <span className="font-bold text-xl text-white">Thomas Burk GmbH</span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6">
              Ihr zertifizierter Partner für TRUMPF TruTool Elektrowerkzeuge in Baden-Württemberg 
              und Bayern. Wir bieten Beratung, Verkauf, Wartung und Reparatur für Nibbler, Scheren, 
              Fügepresse und Kantenentgrater in ganz Süddeutschland.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Leistungen */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Leistungen</h3>
            <ul className="space-y-4">
              {footerLinks.leistungen.map((item) => (
                <li key={item.label}>
                  <a 
                    href={item.href}
                    className="text-slate-400 hover:text-primary transition-colors cursor-pointer"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Unternehmen */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Unternehmen</h3>
            <ul className="space-y-4">
              {footerLinks.unternehmen.map((item) => (
                <li key={item.label}>
                  <a 
                    href={item.href}
                    className="text-slate-400 hover:text-primary transition-colors cursor-pointer"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Kontakt</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
                <span className="text-slate-400">Friedrich-Naumann-Str. 11<br />71636 Ludwigsburg</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span className="text-slate-400">+49 7141 921 912</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:burk-trutools@web.de" className="text-slate-400 hover:text-white transition-colors">burk-trutools@web.de</a>
              </li>
            </ul>
            <p className="text-slate-500 text-sm mt-4">Mo–Fr: 7:00–17:00 Uhr</p>
          </div>
        </div>

        {/* Service Area (SEO) */}
        <div className="mt-16 pt-8 border-t border-slate-900">
          <h3 className="text-white font-bold text-lg mb-6 text-center">Unser Einzugsgebiet in Süddeutschland</h3>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-xs text-slate-400 max-w-5xl mx-auto">
            {[
              'Baden-Württemberg', 'Bayern', 'Stuttgart', 'München', 'Nürnberg', 'Augsburg', 'Karlsruhe', 'Mannheim', 
              'Heidelberg', 'Ulm', 'Freiburg im Breisgau', 'Regensburg', 'Ingolstadt', 'Heilbronn', 'Ludwigsburg', 
              'Pforzheim', 'Reutlingen', 'Fürth', 'Würzburg', 'Erlangen', 'Bamberg', 'Bayreuth', 'Landshut', 
              'Aschaffenburg', 'Kempten (Allgäu)', 'Rosenheim', 'Neu-Ulm', 'Esslingen am Neckar', 'Tübingen', 
              'Villingen-Schwenningen', 'Konstanz', 'Friedrichshafen', 'Offenburg', 'Göppingen', 'Waiblingen', 
              'Ravensburg', 'Biberach an der Riß', 'Passau', 'Hof', 'Straubing', 'Freising', 'Dachau', 
              'Schwäbisch Hall', 'Aalen', 'Sindelfingen', 'Böblingen', 'Memmingen', 'Kaufbeuren', 'Weiden in der Oberpfalz',
              'Ansbach', 'Coburg', 'Schwabach', 'Germering', 'Neumarkt in der Oberpfalz'
            ].map((region) => (
              <span key={region} className="hover:text-primary transition-colors cursor-default whitespace-nowrap">{region}</span>
            ))}
          </div>
          <p className="text-center text-slate-500 text-xs mt-8">
            Wir betreuen Industrie- und Handwerkskunden in ganz Baden-Württemberg und Bayern mit erstklassigem TRUMPF Service.
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
