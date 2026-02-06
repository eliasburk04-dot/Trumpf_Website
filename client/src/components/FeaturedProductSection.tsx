import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import type { Product } from "./ProductCard";

interface FeaturedProductSectionProps {
  product: Product;
  onContact: () => void;
}

export default function FeaturedProductSection({
  product,
  onContact,
}: FeaturedProductSectionProps) {
  const topSpecs = product.specs ? Object.entries(product.specs).slice(0, 4) : [];

  return (
    <section className="section bg-white dark:bg-slate-900" data-testid="section-featured-product">
      <div className="container mx-auto px-4">
        <div className="section-header section-header-left">
          <span className="section-label">Produkt-Spotlight</span>
          <h2 className="section-title">Flaggschiff für industrielle Schnitte</h2>
          <p className="section-subtitle">
            Hohe Schnittqualität, robuste Auslegung und klare Bedienführung für den täglichen Einsatz.
          </p>
        </div>

        <div className="split-layout">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="image-frame bg-slate-50 dark:bg-slate-800"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain p-6"
              loading="lazy"
              decoding="async"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="content-block"
          >
            <div>
              <p className="tag tag-primary mb-4">{product.category}</p>
              <h3 className="text-3xl font-display font-bold text-foreground mb-4">{product.name}</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                {product.longDescription || product.description}
              </p>
            </div>

            {product.highlights && product.highlights.length > 0 && (
              <ul className="check-list">
                {product.highlights.slice(0, 4).map((highlight) => (
                  <li key={highlight}>
                    <CheckCircle2 className="check-list-icon" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            )}

            {topSpecs.length > 0 && (
              <div className="grid sm:grid-cols-2 gap-3 mt-2">
                {topSpecs.map(([key, value]) => (
                  <div key={key} className="rounded-xl border border-border bg-slate-50 dark:bg-slate-800 p-3">
                    <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">{key}</p>
                    <p className="font-mono text-sm text-foreground">{String(value)}</p>
                  </div>
                ))}
              </div>
            )}

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Button onClick={onContact} className="rounded-full h-12 px-7">
                Beratung anfordern <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <span className="text-sm text-muted-foreground">Antwort innerhalb von 24h an Werktagen</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
