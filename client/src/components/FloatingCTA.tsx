import { useState, useEffect } from "react";
import { Phone, Calendar, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

interface FloatingCTAProps {
  onNavigate?: (section: string) => void;
}

export function FloatingCTA({ onNavigate }: FloatingCTAProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
          >
            <Button 
              size="lg" 
              onClick={() => onNavigate?.("kontakt")}
              className="h-14 rounded-full shadow-xl bg-primary hover:opacity-90 transition-all hover:scale-105 pr-6"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Beratung anfordern
            </Button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
