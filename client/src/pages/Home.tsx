import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustIndicators from "@/components/TrustIndicators";
import ServicesSection from "@/components/ServicesSection";
import ProductsSection from "@/components/ProductsSection";
import PromotionsSection from "@/components/PromotionsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onNavigate={scrollToSection} />
      <main>
        <Hero
          onExploreProducts={() => scrollToSection("produkte")}
          onContactUs={() => scrollToSection("kontakt")}
        />
        <TrustIndicators />
        <ServicesSection id="leistungen" onNavigate={scrollToSection} />
        <PromotionsSection id="aktionen" onContactClick={() => scrollToSection("kontakt")} />
        <ProductsSection id="produkte" />
        <AboutSection id="ueber-uns" />
        <ContactSection id="kontakt" />
      </main>
      <Footer />
    </div>
  );
}
