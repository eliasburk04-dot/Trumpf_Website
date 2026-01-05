import { useEffect } from "react";
import { useLocation } from "wouter";
import { Navigation } from "@/components/Navigation";
import PromotionsSection from "@/components/PromotionsSection";
import Footer from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";

export default function PromotionsPage() {
  const [_, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleNavigate = (sectionId: string) => {
    if (["produkte", "leistungen", "aktionen", "ueber-uns", "kontakt", "hero"].includes(sectionId)) {
        if (sectionId === "aktionen") {
            window.scrollTo({ top: 0, behavior: "smooth" });
            return;
        }
        setLocation("/#" + sectionId);
    } else {
        setLocation("/" + sectionId);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col min-h-screen font-sans bg-background text-foreground antialiased selection:bg-primary/20">
      <Navigation onNavigate={handleNavigate} />
      <main className="flex-grow pt-20">
        <PromotionsSection id="aktionen" onContactClick={() => {
            const contactSection = document.getElementById("kontakt");
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
            } else {
                setLocation("/#kontakt");
            }
        }} />
      </main>
      <Footer />
      <FloatingCTA onNavigate={handleNavigate} />
    </div>
  );
}
