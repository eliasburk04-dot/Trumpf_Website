import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface HeaderProps {
  onNavigate?: (section: string) => void;
}

export default function Header({ onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      label: "Products",
      href: "#products",
      dropdown: ["Nibblers", "Shears", "Bevelers", "Laser Cleaners"],
    },
    { label: "Technology", href: "#technology" },
    { label: "Industries", href: "#industries" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (section: string) => {
    onNavigate?.(section);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
      data-testid="header"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-16 lg:h-20">
          <a
            href="#"
            className="flex items-center gap-2"
            data-testid="link-logo"
            onClick={() => handleNavClick("hero")}
          >
            <div className="flex items-center gap-2">
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
          </a>

          <nav className="hidden lg:flex items-center gap-1" data-testid="nav-desktop">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                  data-testid={`link-nav-${item.label.toLowerCase()}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href.replace("#", ""));
                  }}
                >
                  {item.label}
                  {item.dropdown && <ChevronDown className="w-3 h-3" />}
                </a>
                {item.dropdown && activeDropdown === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="absolute top-full left-0 mt-1 w-48 bg-popover border border-popover-border rounded-md shadow-lg py-2"
                  >
                    {item.dropdown.map((subItem) => (
                      <a
                        key={subItem}
                        href={`#${subItem.toLowerCase().replace(" ", "-")}`}
                        className="block px-4 py-2 text-sm text-foreground/80 hover:bg-accent hover:text-foreground transition-colors"
                        data-testid={`link-dropdown-${subItem.toLowerCase()}`}
                      >
                        {subItem}
                      </a>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              data-testid="button-find-dealer"
              onClick={() => handleNavClick("contact")}
            >
              Find a Dealer
            </Button>
            <Button
              size="sm"
              data-testid="button-request-quote"
              onClick={() => handleNavClick("contact")}
            >
              Request Quote
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border"
            data-testid="nav-mobile"
          >
            <div className="px-6 py-4 flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="py-3 text-foreground font-medium border-b border-border last:border-0"
                  data-testid={`link-mobile-${item.label.toLowerCase()}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href.replace("#", ""));
                  }}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-4">
                <Button variant="outline" data-testid="button-mobile-dealer">
                  Find a Dealer
                </Button>
                <Button data-testid="button-mobile-quote">Request Quote</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
