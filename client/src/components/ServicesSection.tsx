import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Wrench, Settings, MessageSquare, Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    id: "vertrieb",
    icon: ShoppingBag,
    title: "Vertrieb und Verkauf",
    description:
      "Umfassende Beratung und professioneller Verkauf von TRUMPF TruTool Elektrowerkzeugen für Industrie und Handwerk.",
    features: ["Vollständiges Sortiment", "Fachkundige Beratung", "Schnelle Lieferung"],
    cta: "Produkte ansehen",
    ctaHref: "#produkte",
    gradient: "from-slate-200/40 to-slate-100/20",
  },
  {
    id: "wartung",
    icon: Settings,
    title: "Wartung und Service",
    description:
      "Professionelle Wartungsservices zur Verlängerung der Lebensdauer und Sicherstellung stabiler Performance.",
    features: ["Präventive Wartung", "Verschleißteilprüfung", "Wartungsprotokolle"],
    cta: "Wartung anfragen",
    ctaHref: "#kontakt",
    gradient: "from-slate-200/40 to-slate-100/20",
  },
  {
    id: "reparatur",
    icon: Wrench,
    title: "Reparatur",
    description:
      "Schnelle und fachgerechte Reparaturen von TRUMPF Elektrowerkzeugen durch geschulte Servicetechniker.",
    features: ["Express-Service", "Original Ersatzteile", "Funktionsprüfung"],
    cta: "Reparatur beauftragen",
    ctaHref: "#kontakt",
    gradient: "from-slate-200/40 to-slate-100/20",
  },
  {
    id: "beratung",
    icon: MessageSquare,
    title: "Beratung und Support",
    description:
      "Kompetente Beratung und umfassender Support für alle Fragen rund um TRUMPF TruTool Elektrowerkzeuge.",
    features: ["Kostenlose Erstberatung", "Anwendungsberatung", "Telefonsupport"],
    cta: "Beratung anfordern",
    ctaHref: "#kontakt",
    gradient: "from-slate-200/40 to-slate-100/20",
  },
];

interface ServicesSectionProps {
  id?: string;
  onNavigate?: (section: string) => void;
}

export default function ServicesSection({ id, onNavigate }: ServicesSectionProps) {
  return (
    <section id={id} className="section bg-slate-50 dark:bg-slate-950" data-testid="section-services">
      <div className="container mx-auto px-4">
        <div className="section-header section-header-center">
          <span className="section-label">Unsere Leistungen</span>
          <h2 className="section-title" data-testid="text-services-title">
            Ganzheitliche Lösungen für Ihre Werkzeuge
          </h2>
          <p className="section-subtitle" data-testid="text-services-subtitle">
            Ihr kompetenter Partner für professionelle Elektrowerkzeuge von der Beratung bis zur Wartung.
          </p>
        </div>

        <div className="card-grid-2">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className="group relative p-8 h-full flex flex-col bg-white dark:bg-slate-900 border border-border rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden"
                data-testid={`card-service-${service.id}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />

                <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6 flex-1">{service.description}</p>
                <ul className="check-list mb-6">
                  {service.features.map((feature) => (
                    <li key={feature}>
                      <Check className="check-list-icon" />
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant="ghost"
                  className="justify-start p-0 h-auto gap-2 text-primary font-medium group-hover:translate-x-2 transition-transform"
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
