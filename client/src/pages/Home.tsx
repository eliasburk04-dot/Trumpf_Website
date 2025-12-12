import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductsSection from "@/components/ProductsSection";
import FeaturesSection from "@/components/FeaturesSection";
import IndustriesSection from "@/components/IndustriesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
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
          onExploreProducts={() => scrollToSection("products")}
          onLearnMore={() => scrollToSection("technology")}
        />
        <ProductsSection id="products" />
        <FeaturesSection id="technology" />
        <IndustriesSection id="industries" />
        <TestimonialsSection id="testimonials" />
        <CTASection
          onFindDealer={() => scrollToSection("contact")}
          onRequestCatalog={() => scrollToSection("contact")}
        />
        <ContactSection id="contact" />
      </main>
      <Footer />
    </div>
  );
}
