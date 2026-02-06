import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Percent, ArrowRight, Gift, Phone } from "lucide-react";
import { motion } from "framer-motion";
import nibblerImage from "@assets/generated_images/nibbler_product_photo.png";
import shearsImage from "@assets/generated_images/shears_product_photo.png";

const promotions = [
  {
    id: "sommer-aktion",
    title: "Sommer-Aktion 2025",
    description: "Profitieren Sie von attraktiven Rabatten auf ausgewählte TruTool Nibbler und Scheren. Nur solange der Vorrat reicht!",
    discount: "Bis zu 15% Rabatt",
    validUntil: "Gültig bis 31.08.2025",
    image: nibblerImage,
    badge: "Top-Angebot",
    features: ["Kostenlose Lieferung", "Verlängerte Garantie", "Gratis Zubehör-Set"],
  },
  {
    id: "service-paket",
    title: "Service-Paket Plus",
    description: "Buchen Sie jetzt unser Premium-Servicepaket und erhalten Sie eine kostenlose Wartung im ersten Jahr inklusive.",
    discount: "Wartung geschenkt",
    validUntil: "Dauerhaftes Angebot",
    image: shearsImage,
    badge: "Neu",
    features: ["1 Jahr Gratis-Wartung", "Prioritäts-Support", "10% auf Ersatzteile"],
  },
];

interface PromotionsSectionProps {
  id?: string;
  onContactClick?: () => void;
}

export default function PromotionsSection({ id, onContactClick }: PromotionsSectionProps) {
  const [hoveredPromo, setHoveredPromo] = useState<string | null>(null);

  return (
    <section id={id} className="section bg-white dark:bg-slate-900" data-testid="section-promotions">
      <div className="container mx-auto px-4">
        <div className="section-header section-header-center">
          <div className="inline-flex items-center gap-2 tag-orange mb-4">
            <Gift className="w-4 h-4" />
            <span>Aktuelle Aktionen</span>
          </div>
          <h2 className="section-title" data-testid="text-promotions-title">
            Aktionen & Sonderangebote
          </h2>
          <p className="section-subtitle" data-testid="text-promotions-subtitle">
            Entdecken Sie unsere aktuellen Aktionen und profitieren Sie von exklusiven Angeboten.
          </p>
        </div>

        <div className="card-grid-2">
          {promotions.map((promo, index) => (
            <motion.div
              key={promo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredPromo(promo.id)}
              onMouseLeave={() => setHoveredPromo(null)}
            >
              <Card
                className="group overflow-hidden h-full bg-white dark:bg-slate-900 border border-border rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500"
                data-testid={`card-promo-${promo.id}`}
              >
                <div className="grid md:grid-cols-2 h-full">
                  <div className="relative aspect-square md:aspect-auto bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 p-0 flex items-center justify-center overflow-hidden">
                    <img
                      src={promo.image}
                      alt={promo.title}
                      className={`w-full h-full object-contain transition-transform duration-700 ${
                        hoveredPromo === promo.id ? "scale-110" : ""
                      }`}
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="absolute top-4 left-4 tag-orange" data-testid={`badge-promo-${promo.id}`}>
                      {promo.badge}
                    </span>
                  </div>
                  <div className="p-8 flex flex-col">
                    <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors">{promo.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6 flex-1">{promo.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2 text-primary font-bold text-lg">
                        <Percent className="w-5 h-5" />
                        <span>{promo.discount}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>{promo.validUntil}</span>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {promo.features.map((feature) => (
                        <li key={feature} className="text-sm text-muted-foreground flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Button
                      className="w-full gap-2 rounded-full h-12"
                      onClick={onContactClick}
                      data-testid={`button-promo-${promo.id}`}
                    >
                      Jetzt anfragen
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="cta-section bg-primary rounded-3xl mt-16"
        >
          <div className="cta-content text-white px-8">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Präzision erleben – Projekte meistern.
            </h3>
            <p className="text-xl text-white/80 mb-8 max-w-2xl">
              Kompetente Beratung und erstklassige TRUMPF Elektrowerkzeuge für Baden-Württemberg und Bayern. Wir sind Ihr Partner vor Ort.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={onContactClick}
                className="h-14 px-10 text-lg rounded-full bg-white text-primary hover:bg-slate-100 shadow-2xl"
              >
                Jetzt Beratung anfordern
              </Button>
              <a
                href="tel:+497141921912"
                className="h-14 px-10 text-lg rounded-full border border-white/30 text-white bg-transparent flex items-center justify-center transition-colors hover:bg-white/10"
              >
                <Phone className="mr-2 w-5 h-5 text-white" /> +49 7141 921 912
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
