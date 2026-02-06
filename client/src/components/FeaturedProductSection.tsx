import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import type { Product } from "./ProductCard";

interface FeaturedProductSectionProps {
  product: Product;
  onContact: () => void;
}

const specKeyMap: Record<string, string> = {
  maxBlechdicke: "Max. Blechdicke",
  arbeitsgeschwindigkeit_m_min: "Arbeitsgeschwindigkeit",
  startloch_mm: "Startloch",
  kleinster_radius_mm: "Kleinster Radius",
  spannung_V: "Spannung",
  gewicht_kg: "Gewicht",
  abmessungen_mm: "Abmessungen",
  nennaufnahmeleistung_W: "Leistung",
  hubzahl_bei_nennlast_min_1: "Hubzahl unter Last",
  hubzahl_bei_leerlauf_min_1: "Hubzahl Leerlauf",
};

const materialKeyMap: Record<string, string> = {
  stahl400: "Stahl 400",
  stahl600: "Stahl 600",
  stahl800: "Stahl 800",
  alu250: "Alu 250",
};

const formatSpecKey = (key: string) => specKeyMap[key] || key.replace(/_/g, " ");

const formatUnit = (key: string, value: string) => {
  let displayValue = value;
  if (key.endsWith("_m_min") && !value.includes("m/min")) displayValue = `${value} m/min`;
  else if (key.endsWith("_mm") && !value.includes("mm")) displayValue = `${value} mm`;
  else if (key.endsWith("_V") && !value.includes("V")) displayValue = `${value} V`;
  else if (key.endsWith("_kg") && !value.includes("kg")) displayValue = `${value} kg`;
  else if (key.endsWith("_W") && !value.includes("W")) displayValue = `${value} W`;
  else if (key.endsWith("_min_1") && !value.includes("/min")) displayValue = `${value} /min`;
  return displayValue;
};

const formatSpecValue = (key: string, value: unknown) => {
  const raw = String(value);
  if (raw.includes(" / ")) {
    return raw
      .split(" / ")
      .map((part) => formatUnit(key, part.trim()))
      .join(" / ");
  }
  return formatUnit(key, raw);
};

const formatMaterialKey = (key: string) => materialKeyMap[key] || key;

export default function FeaturedProductSection({
  product,
  onContact,
}: FeaturedProductSectionProps) {
  const topSpecs = product.specs
    ? Object.entries(product.specs).filter(([, value]) => value !== null && value !== undefined).slice(0, 4)
    : [];

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
            className="image-frame border border-slate-200/60 bg-white"
          >
            <div className="relative aspect-square flex items-center justify-center overflow-hidden bg-white">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain transition-all duration-500"
                style={{
                  filter: "brightness(1.12) contrast(1.08)",
                  mixBlendMode: "multiply",
                }}
                loading="lazy"
                decoding="async"
              />
            </div>
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
                    <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1 break-words [overflow-wrap:anywhere]">
                      {formatSpecKey(key)}
                    </p>
                    {typeof value === "object" && value !== null ? (
                      <div className="space-y-1">
                        {Object.entries(value).map(([materialKey, materialValue]) => (
                          <div
                            key={materialKey}
                            className="flex items-start justify-between gap-3 text-sm"
                          >
                            <span className="text-muted-foreground break-words [overflow-wrap:anywhere]">
                              {formatMaterialKey(materialKey)}
                            </span>
                            <span className="font-medium whitespace-nowrap">
                              {String(materialValue)} mm
                            </span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="font-mono text-sm text-foreground break-words [overflow-wrap:anywhere]">
                        {formatSpecValue(key, value)}
                      </p>
                    )}
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
