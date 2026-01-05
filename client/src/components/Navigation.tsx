import { useState, useEffect } from "react";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useLocation } from "wouter";

interface NavigationProps {
  onNavigate?: (section: string) => void;
}

export function Navigation({ onNavigate }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "leistungen", label: "Leistungen" },
    { href: "produkte", label: "Produkte", isPage: true },
    { href: "promotions", label: "Aktionen", isPage: true },
    { href: "ueber-uns", label: "Über uns" },
    { href: "kontakt", label: "Kontakt" },
  ];

  const handleNavClick = (href: string, isPage?: boolean) => {
    if (isPage) {
      setLocation("/" + href);
    } else {
      if (location !== "/") {
        setLocation("/#" + href);
      } else {
        onNavigate?.(href);
      }
    }
    setIsOpen(false);
  };

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled || isOpen || location !== "/" 
            ? "bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-border shadow-sm py-3" 
            : "bg-transparent py-5"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <button
            onClick={() => {
              if (location !== "/") setLocation("/");
              else handleNavClick("hero");
            }}
            className="flex items-center gap-2 cursor-pointer"
          >
            <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">TB</span>
            </div>
            <div className="flex flex-col text-left">
              <span className={cn(
                "font-bold text-lg leading-none transition-colors",
                scrolled || isOpen || location !== "/" ? "text-foreground" : "text-white"
              )}>
                Thomas Burk GmbH
              </span>
              <span className={cn(
                "text-xs font-medium tracking-wider uppercase transition-colors",
                scrolled || isOpen || location !== "/" ? "text-muted-foreground" : "text-white/80"
              )}>
                TRUMPF Partner
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href, link.isPage)}
                className={cn(
                  "text-sm font-medium hover:text-primary transition-colors cursor-pointer relative group",
                  scrolled || location !== "/" ? "text-foreground/80" : "text-white/90"
                )}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <div 
              className={cn(
                "flex items-center gap-2 font-medium text-sm transition-colors",
                scrolled || location !== "/" ? "text-foreground" : "text-white"
              )}
            >
              <Phone className="w-4 h-4 text-primary" />
              +49 7141 921 912
            </div>
            <Button 
              onClick={() => handleNavClick("kontakt")}
              className="rounded-full px-6 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:-translate-y-0.5"
            >
              Beratung anfordern <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={cn("lg:hidden p-2 rounded-lg", scrolled || isOpen || location !== "/" ? "text-foreground" : "text-white")}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background pt-24 px-4 lg:hidden overflow-y-auto"
          >
            <nav className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  onClick={() => handleNavClick(link.href, link.isPage)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="p-4 text-xl font-medium border-b border-border/50 hover:bg-muted/50 rounded-xl cursor-pointer text-left w-full"
                >
                  {link.label}
                </motion.button>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-8 flex flex-col gap-4"
              >
                <Button 
                  size="lg" 
                  className="w-full text-lg h-14 rounded-xl"
                  onClick={() => handleNavClick("kontakt")}
                >
                  Beratung anfordern
                </Button>
                <div
                  className="w-full text-lg h-14 rounded-xl border border-primary/20 bg-primary/5 text-primary flex items-center justify-center font-bold"
                >
                  <Phone className="mr-2 w-5 h-5 pointer-events-none" /> +49 7141 921 912
                </div>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
