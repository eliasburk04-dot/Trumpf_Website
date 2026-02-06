import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Factory, Building2, Ship, Train, Wrench, HardHat } from "lucide-react";

const industries = [
  {
    icon: Factory,
    name: "Metallbau",
    description: "Zuschnitt, Kantenbearbeitung und Nacharbeit in Serien- und Projektfertigung.",
  },
  {
    icon: Building2,
    name: "Dach und Fassade",
    description: "Sichere Bearbeitung von Profilen, Paneelen und Sichtkanten auf der Baustelle.",
  },
  {
    icon: Ship,
    name: "Anlagenbau",
    description: "Robuste Werkzeuge für dickere Bleche und wiederholbare Ergebnisse im Dauerbetrieb.",
  },
  {
    icon: Train,
    name: "Fahrzeugbau",
    description: "Präzise Schnittqualität für Triebfahrzeuge, Nutzfahrzeuge und Sonderaufbauten.",
  },
  {
    icon: Wrench,
    name: "Lüftungsbau",
    description: "Effiziente Fertigung von Kanälen und Falzverbindungen mit hoher Prozesssicherheit.",
  },
  {
    icon: HardHat,
    name: "Werkstattservice",
    description: "Wartung und Reparatur für verlässliche Maschinenverfügbarkeit im Tagesgeschäft.",
  },
];

interface IndustriesSectionProps {
  id?: string;
}

export default function IndustriesSection({ id }: IndustriesSectionProps) {
  return (
    <section
      id={id}
      className="section bg-white dark:bg-slate-900"
      data-testid="section-industries"
    >
      <div className="container mx-auto px-4">
        <div className="section-header section-header-center">
          <span className="section-label">Branchen</span>
          <h2 className="section-title" data-testid="text-industries-title">
            Einsatzfelder mit hohem Anspruch
          </h2>
          <p className="section-subtitle" data-testid="text-industries-subtitle">
            Unsere Lösungen decken typische Fertigungsaufgaben in Handwerk und Industrie ab.
          </p>
        </div>

        <div className="card-grid-3">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Card
                className="p-6 text-center h-full border border-border bg-slate-50 dark:bg-slate-800 hover:shadow-lg transition-shadow"
                data-testid={`card-industry-${industry.name.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <industry.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-base mb-2">{industry.name}</h3>
                <p className="text-sm text-muted-foreground">{industry.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
