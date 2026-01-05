import { useEffect } from "react";
import { useLocation } from "wouter";
import { Navigation } from "@/components/Navigation";
import ProductsSection from "@/components/ProductsSection";
import Footer from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";

export default function ProductsPage() {
  const [_, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleNavigate = (sectionId: string) => {
    if (["produkte", "leistungen", "aktionen", "ueber-uns", "kontakt", "hero"].includes(sectionId)) {
        // If it's a section that might be on the home page, go there
        if (sectionId === "produkte") {
             window.scrollTo({ top: 0, behavior: "smooth" });
             return;
        }
        setLocation("/#" + sectionId);
    } else {
        setLocation("/" + sectionId);
    }
  };

  return (
    <div className="flex flex-col min-h-screen font-sans bg-background text-foreground antialiased selection:bg-primary/20">
      <Navigation onNavigate={handleNavigate} />
      <main className="flex-grow pt-20">
        <ProductsSection id="produkte" />
      </main>
      <Footer />
      <FloatingCTA onNavigate={handleNavigate} />
    </div>
  );
}
