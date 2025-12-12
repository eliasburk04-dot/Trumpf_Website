import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Percent, ArrowRight, Gift } from "lucide-react";
import { motion } from "framer-motion";
import nibblerImage from "@assets/generated_images/nibbler_product_photo.png";
import shearsImage from "@assets/generated_images/shears_product_photo.png";

// todo: remove mock functionality
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
    <section id={id} className="py-20 lg:py-32 bg-card" data-testid="section-promotions">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            <Gift className="w-3 h-3 mr-1" />
            Aktuelle Aktionen
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4" data-testid="text-promotions-title">
            Aktionen & Sonderangebote
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto" data-testid="text-promotions-subtitle">
            Entdecken Sie unsere aktuellen Aktionen und profitieren Sie von exklusiven Angeboten für TRUMPF Elektrowerkzeuge.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {promotions.map((promo, index) => (
            <motion.div
              key={promo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredPromo(promo.id)}
              onMouseLeave={() => setHoveredPromo(null)}
            >
              <Card
                className="overflow-hidden h-full hover-elevate"
                data-testid={`card-promo-${promo.id}`}
              >
                <div className="grid md:grid-cols-2 h-full">
                  <div className="relative aspect-square md:aspect-auto bg-gradient-to-br from-muted to-muted/50 p-6 flex items-center justify-center">
                    <img
                      src={promo.image}
                      alt={promo.title}
                      className={`w-full h-full object-contain transition-transform duration-500 ${
                        hoveredPromo === promo.id ? "scale-110" : ""
                      }`}
                    />
                    <Badge className="absolute top-4 left-4" data-testid={`badge-promo-${promo.id}`}>
                      {promo.badge}
                    </Badge>
                  </div>
                  <div className="p-6 flex flex-col">
                    <h3 className="font-bold text-xl mb-2">{promo.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 flex-1">{promo.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2 text-primary font-semibold">
                        <Percent className="w-4 h-4" />
                        <span>{promo.discount}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>{promo.validUntil}</span>
                      </div>
                    </div>

                    <ul className="space-y-1 mb-6">
                      {promo.features.map((feature) => (
                        <li key={feature} className="text-sm text-muted-foreground flex items-center gap-2">
                          <span className="w-1 h-1 bg-primary rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Button
                      className="w-full gap-2"
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
      </div>
    </section>
  );
}
