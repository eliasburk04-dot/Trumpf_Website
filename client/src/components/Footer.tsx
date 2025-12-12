import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { SiLinkedin, SiYoutube, SiInstagram } from "react-icons/si";

const footerLinks = {
  products: [
    { label: "Nibblers", href: "#" },
    { label: "Slitting Shears", href: "#" },
    { label: "Bevelers", href: "#" },
    { label: "Laser Cleaners", href: "#" },
    { label: "Accessories", href: "#" },
  ],
  resources: [
    { label: "Product Catalog", href: "#" },
    { label: "Technical Manuals", href: "#" },
    { label: "Video Tutorials", href: "#" },
    { label: "Safety Guidelines", href: "#" },
    { label: "FAQs", href: "#" },
  ],
  company: [
    { label: "About Us", href: "#" },
    { label: "Heritage", href: "#" },
    { label: "Careers", href: "#" },
    { label: "News", href: "#" },
    { label: "Sustainability", href: "#" },
  ],
  support: [
    { label: "Find a Dealer", href: "#" },
    { label: "Service Centers", href: "#" },
    { label: "Warranty", href: "#" },
    { label: "Contact Us", href: "#" },
  ],
};

export default function Footer() {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // todo: remove mock functionality
    console.log("Newsletter signup submitted");
  };

  return (
    <footer className="bg-card border-t border-border" data-testid="footer">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">T</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg tracking-tight">TRUMP</span>
                <span className="text-[10px] text-muted-foreground tracking-widest uppercase -mt-1">
                  Elektrowerkzeuge
                </span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              Swiss precision engineering since 1923. Professional power tools for metal
              fabrication experts worldwide.
            </p>
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                data-testid="link-linkedin"
                onClick={() => console.log("LinkedIn clicked")}
              >
                <SiLinkedin className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                data-testid="link-youtube"
                onClick={() => console.log("YouTube clicked")}
              >
                <SiYoutube className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                data-testid="link-instagram"
                onClick={() => console.log("Instagram clicked")}
              >
                <SiInstagram className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    data-testid={`link-footer-${link.label.toLowerCase().replace(" ", "-")}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    data-testid={`link-footer-${link.label.toLowerCase().replace(" ", "-")}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    data-testid={`link-footer-${link.label.toLowerCase().replace(" ", "-")}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Get updates on new products and industry insights.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
              <Input
                type="email"
                placeholder="Email address"
                className="flex-1"
                data-testid="input-newsletter"
              />
              <Button type="submit" size="sm" data-testid="button-newsletter">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
            <span data-testid="text-copyright">
              &copy; {new Date().getFullYear()} TRUMP Elektrowerkzeuge. All rights reserved.
            </span>
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Cookie Settings
            </a>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <div className="w-6 h-6 bg-destructive/10 rounded flex items-center justify-center">
                <span className="text-destructive font-bold text-[10px]">CH</span>
              </div>
              <span>Swiss Made</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <div className="w-6 h-6 bg-muted rounded flex items-center justify-center">
                <span className="font-bold text-[10px]">ISO</span>
              </div>
              <span>9001 Certified</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
