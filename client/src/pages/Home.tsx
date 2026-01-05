import { useEffect } from "react";
import { useLocation } from "wouter";
import { Navigation } from "@/components/Navigation";
import Hero from "@/components/Hero";
import TrustIndicators from "@/components/TrustIndicators";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";

export default function Home() {
  const [location, setLocation] = useLocation();

  // Scroll to hash on mount or location change
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.slice(1);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col min-h-screen font-sans bg-background text-foreground antialiased selection:bg-primary/20">
      <Navigation onNavigate={scrollToSection} />
      <main className="flex-grow">
        <Hero
          onExploreProducts={() => setLocation("/produkte")}
          onContactUs={() => scrollToSection("kontakt")}
        />
        <TrustIndicators />
        <ServicesSection id="leistungen" onNavigate={scrollToSection} />
        <AboutSection id="ueber-uns" />
        <ContactSection id="kontakt" />
      </main>
      <Footer />
      <FloatingCTA onNavigate={scrollToSection} />
    </div>
  );
}
