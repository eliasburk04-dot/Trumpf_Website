import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";

interface CTASectionProps {
  onFindDealer?: () => void;
  onRequestCatalog?: () => void;
}

export default function CTASection({ onFindDealer, onRequestCatalog }: CTASectionProps) {
  return (
    <section
      className="section bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white"
      data-testid="section-cta"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2
            className="text-3xl lg:text-5xl font-display font-bold tracking-tight mb-4"
            data-testid="text-cta-title"
          >
            Projekt besprechen und passende Lösung finden
          </h2>
          <p
            className="text-slate-300 text-lg max-w-2xl mx-auto mb-8"
            data-testid="text-cta-subtitle"
          >
            Wir beraten zu Werkzeugwahl, Einsatzgrenzen und Servicepaketen für Ihre Fertigung.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="gap-2 rounded-full h-12 px-7"
              onClick={onFindDealer}
              data-testid="button-cta-dealer"
            >
              <MapPin className="w-4 h-4" />
              Einsatzgebiet prüfen
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 rounded-full h-12 px-7 border-white/40 text-white hover:bg-white/10"
              onClick={onRequestCatalog}
              data-testid="button-cta-catalog"
            >
              Produktkatalog ansehen
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
