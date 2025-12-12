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
      className="py-20 lg:py-32 bg-primary text-primary-foreground"
      data-testid="section-cta"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2
            className="text-3xl lg:text-4xl font-bold tracking-tight mb-4"
            data-testid="text-cta-title"
          >
            Ready to Experience Swiss Precision?
          </h2>
          <p
            className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8"
            data-testid="text-cta-subtitle"
          >
            Connect with an authorized dealer near you or request our comprehensive
            product catalog to learn more about our professional power tools.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              variant="secondary"
              className="gap-2"
              onClick={onFindDealer}
              data-testid="button-cta-dealer"
            >
              <MapPin className="w-4 h-4" />
              Find a Dealer
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              onClick={onRequestCatalog}
              data-testid="button-cta-catalog"
            >
              Request Catalog
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
