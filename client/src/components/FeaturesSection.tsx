import { Card } from "@/components/ui/card";
import { Shield, Zap, Award, Globe } from "lucide-react";
import { motion } from "framer-motion";
import precisionImage from "@assets/generated_images/precision_cutting_detail.png";

const features = [
  {
    icon: Shield,
    title: "Präzise Fertigungsqualität",
    description:
      "Schnittbilder mit hoher Wiederholgenauigkeit und stabiler Prozessqualität im Serienbetrieb.",
  },
  {
    icon: Zap,
    title: "Leistung für den Alltag",
    description:
      "Ausgelegt für Werkstatt und Montage mit verlässlicher Leistung über lange Einsatzzeiten.",
  },
  {
    icon: Award,
    title: "Service mit Verantwortung",
    description:
      "Beratung aus einer Hand plus zuverlässige Lieferung von Original-Ersatzteilen und Verschleißteilen auf Anfrage.",
  },
  {
    icon: Globe,
    title: "Regionale Nähe",
    description:
      "Betreuung in Baden-Württemberg und Bayern mit direktem Ansprechpartner.",
  },
];

interface FeaturesSectionProps {
  id?: string;
}

export default function FeaturesSection({ id }: FeaturesSectionProps) {
  return (
    <section
      id={id}
      className="section bg-slate-50 dark:bg-slate-950"
      data-testid="section-features"
    >
      <div className="container mx-auto px-4">
        <div className="split-layout">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">Warum TRUMPF</span>
            <h2 className="section-title mb-6" data-testid="text-features-title">
              Werkzeuge für anspruchsvolle Metallverarbeitung
            </h2>
            <p className="section-subtitle mb-8" data-testid="text-features-subtitle">
              Unser Fokus liegt auf kontrollierbarer Qualität, klaren Prozessen und hoher Produktivität.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card
                    className="p-5 h-full bg-white dark:bg-slate-900 border border-border"
                    data-testid={`card-feature-${feature.title.toLowerCase().replace(" ", "-")}`}
                  >
                    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="image-frame aspect-[4/3]">
              <img
                src={precisionImage}
                alt="Präziser Schnitt in der Metallbearbeitung"
                className="w-full h-full object-cover"
                data-testid="img-features"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl max-w-[230px] shadow-xl">
              <div className="text-3xl font-bold mb-1">24h</div>
              <div className="text-sm text-primary-foreground/85">Rückmeldung an Werktagen</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
