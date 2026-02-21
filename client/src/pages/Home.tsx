import { useEffect } from "react";
import { useLocation } from "wouter";
import { Helmet } from "react-helmet";
import { Navigation } from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProductsSection from "@/components/ProductsSection";
import FeaturesSection from "@/components/FeaturesSection";
import FeaturedProductSection from "@/components/FeaturedProductSection";
import IndustriesSection from "@/components/IndustriesSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { products } from "@/data/products";

export default function Home() {
  const [location, setLocation] = useLocation();
  const featuredProduct = products.find((product) => product.id === "trutool-n-700") || products[0];

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
      <Helmet>
        <title>Thomas Burk GmbH | TRUMPF Elektrowerkzeuge für Industrie und Handwerk</title>
        <meta
          name="description"
          content="TRUMPF TruTool Elektrowerkzeuge für Baden-Württemberg und Bayern: Beratung, Verkauf, Service, Reparatur sowie Original-Ersatzteile und Verschleißteile auf Anfrage durch die Thomas Burk GmbH."
        />
        <meta property="og:title" content="Thomas Burk GmbH | TRUMPF Elektrowerkzeuge" />
        <meta
          property="og:description"
          content="Präzision in der Metallverarbeitung mit professioneller Beratung und schnellem Service."
        />
      </Helmet>

      <Navigation onNavigate={scrollToSection} />
      <main className="flex-grow">
        <Hero
          onExploreProducts={() => setLocation("/produkte")}
          onContactUs={() => scrollToSection("kontakt")}
        />
        <ProductsSection />
        <FeaturesSection id="leistungen" />
        <FeaturedProductSection product={featuredProduct} onContact={() => scrollToSection("kontakt")} />
        <IndustriesSection id="branchen" />
        <CTASection
          onFindDealer={() => scrollToSection("branchen")}
          onRequestCatalog={() => setLocation("/produkte")}
        />
        <ContactSection id="kontakt" />
      </main>
      <Footer />
      <FloatingCTA onNavigate={scrollToSection} />
    </div>
  );
}
