import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Wrench, Settings, MessageSquare, Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    id: "vertrieb",
    icon: ShoppingBag,
    title: "Vertrieb & Verkauf",
    description: "Umfassende Beratung und professioneller Verkauf von TRUMPF TruTool Elektrowerkzeugen für Industrie und Handwerk.",
    features: ["Vollständiges Sortiment", "Fachkundige Beratung", "Schnelle Lieferung"],
    cta: "Produkte ansehen",
    ctaHref: "#produkte",
  },
  {
    id: "wartung",
    icon: Settings,
    title: "Wartung & Service",
    description: "Professionelle Wartungsservices zur Verlängerung der Lebensdauer und Sicherstellung optimaler Performance.",
    features: ["Präventive Wartung", "Verschleißteilprüfung", "Wartungsprotokolle"],
    cta: "Wartung anfragen",
    ctaHref: "#kontakt",
  },
  {
    id: "reparatur",
    icon: Wrench,
    title: "Reparatur",
    description: "Schnelle und fachgerechte Reparaturen von TRUMPF Elektrowerkzeugen durch geschulte Servicetechniker.",
    features: ["Express-Service", "Original Ersatzteile", "Funktionsprüfung"],
    cta: "Reparatur beauftragen",
    ctaHref: "#kontakt",
  },
  {
    id: "beratung",
    icon: MessageSquare,
    title: "Beratung & Support",
    description: "Kompetente Beratung und umfassender Support für alle Fragen rund um TRUMPF TruTool Elektrowerkzeuge.",
    features: ["Kostenlose Erstberatung", "Anwendungsberatung", "Telefonsupport"],
    cta: "Beratung anfordern",
    ctaHref: "#kontakt",
  },
];

interface ServicesSectionProps {
  id?: string;
  onNavigate?: (section: string) => void;
}

export default function ServicesSection({ id, onNavigate }: ServicesSectionProps) {
  return (
    <section id={id} className="py-20 lg:py-32 bg-background" data-testid="section-services">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4" data-testid="text-services-title">
            TRUMPF TruTool Leistungen
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto" data-testid="text-services-subtitle">
            Ihr kompetenter Partner für professionelle Elektrowerkzeuge – von der Beratung bis zur Wartung.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full flex flex-col" data-testid={`card-service-${service.id}`}>
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4 flex-1">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant="ghost"
                  className="justify-start p-0 h-auto gap-1"
                  onClick={() => onNavigate?.(service.ctaHref.replace("#", ""))}
                  data-testid={`button-service-${service.id}`}
                >
                  {service.cta}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
