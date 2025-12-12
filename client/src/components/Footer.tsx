import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  leistungen: [
    { label: "Vertrieb & Verkauf", href: "#leistungen" },
    { label: "Wartung & Service", href: "#leistungen" },
    { label: "Reparatur", href: "#leistungen" },
    { label: "Produktübersicht", href: "#produkte" },
  ],
  kontakt: [
    { label: "+49 (0) 7141 921 912", href: "tel:+497141921912" },
    { label: "burk-trutools@web.de", href: "mailto:burk-trutools@web.de" },
  ],
  rechtliches: [
    { label: "Impressum", href: "#impressum" },
    { label: "Datenschutz", href: "#datenschutz" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border" data-testid="footer">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">TB</span>
              </div>
              <span className="font-bold text-lg tracking-tight">Thomas Burk GmbH</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Ihr zuverlässiger Partner für TRUMPF TruTool Elektrowerkzeuge in Ludwigsburg 
              und Umgebung.
            </p>
            <Badge variant="secondary">Offizieller TRUMPF Partner</Badge>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Leistungen</h4>
            <ul className="space-y-2">
              {footerLinks.leistungen.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-2">
              {footerLinks.kontakt.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    data-testid={`link-footer-${link.label.replace(/[^a-z0-9]/gi, "-").toLowerCase()}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="text-sm text-muted-foreground">Mo–Fr: 7:00–17:00 Uhr</li>
            </ul>
            <div className="mt-4 text-sm text-muted-foreground">
              <div>Friedrich-Naumann-Str. 11</div>
              <div>71636 Ludwigsburg</div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Rechtliches</h4>
            <ul className="space-y-2">
              {footerLinks.rechtliches.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    data-testid={`link-footer-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs text-muted-foreground" data-testid="text-copyright">
            © {new Date().getFullYear()} Thomas Burk GmbH. Alle Rechte vorbehalten.
          </div>
          <div className="text-xs text-muted-foreground">
            Made with precision in Ludwigsburg.
          </div>
        </div>
      </div>
    </footer>
  );
}
