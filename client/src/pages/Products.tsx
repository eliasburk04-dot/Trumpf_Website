import { useEffect } from "react";
import { useLocation } from "wouter";
import { Helmet } from "react-helmet";
import { Navigation } from "@/components/Navigation";
import ProductsSection from "@/components/ProductsSection";
import Footer from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";

export default function ProductsPage() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleNavigate = (sectionId: string) => {
    if (["leistungen", "branchen", "kontakt", "hero"].includes(sectionId)) {
      setLocation(`/#${sectionId}`);
    } else if (sectionId === "produkte") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setLocation(`/${sectionId}`);
    }
  };

  return (
    <div className="flex flex-col min-h-screen font-sans bg-background text-foreground antialiased selection:bg-primary/20">
      <Helmet>
        <title>Produkte | TRUMPF TruTool Elektrowerkzeuge</title>
        <meta
          name="description"
          content="Produktübersicht der TRUMPF TruTool Elektrowerkzeuge mit technischen Daten, Einsatzfeldern und direkter Beratung durch Thomas Burk GmbH."
        />
      </Helmet>

      <Navigation onNavigate={handleNavigate} />
      <main className="flex-grow pt-20">
        <ProductsSection id="produkte" />
      </main>
      <Footer />
      <FloatingCTA onNavigate={handleNavigate} />
    </div>
  );
}
