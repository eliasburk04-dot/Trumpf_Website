import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Award, Users } from "lucide-react";
import { motion } from "framer-motion";
import workshopImage from "@assets/generated_images/modern_workshop_facility_interior.png";
import craftsmanImage from "@assets/generated_images/craftsman_precision_work_closeup.png";

const stats = [
  { icon: Award, value: "30+", label: "Jahre Erfahrung" },
  { icon: Users, value: "1000+", label: "Zufriedene Kunden" },
  { icon: MapPin, value: "BW", label: "Regional tätig" },
  { icon: Clock, value: "24h", label: "Antwortzeit" },
];

interface AboutSectionProps {
  id?: string;
}

export default function AboutSection({ id }: AboutSectionProps) {
  return (
    <section id={id} className="py-20 lg:py-32 bg-card" data-testid="section-about">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="secondary" className="mb-4">Über uns</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-6" data-testid="text-about-title">
              Ihr Partner für TRUMPF Elektrowerkzeuge in Baden-Württemberg
            </h2>
            <p className="text-muted-foreground text-lg mb-6" data-testid="text-about-description">
              Die Thomas Burk GmbH ist Ihr zuverlässiger Partner für TRUMPF TruTool Elektrowerkzeuge 
              in der Region Ludwigsburg und ganz Baden-Württemberg. Als Meisterbetrieb verbinden wir 
              fundiertes Fachwissen mit persönlicher Beratung.
            </p>
            <p className="text-muted-foreground mb-8">
              Unser Team aus erfahrenen Fachleuten für Elektrotechnik, Feinwerkmechanik und CNC-Technik 
              steht Ihnen bei allen Fragen rund um professionelle Elektrowerkzeuge zur Seite – von der 
              Beratung über den Verkauf bis hin zu Wartung und Reparatur.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="p-4 text-center" data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}>
                    <stat.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
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
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[4/5] rounded-md overflow-hidden">
                  <img
                    src={workshopImage}
                    alt="Moderne Werkstatt"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-[4/5] rounded-md overflow-hidden">
                  <img
                    src={craftsmanImage}
                    alt="Präzisionsarbeit"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <Card className="absolute -bottom-6 left-1/2 -translate-x-1/2 p-4 bg-primary text-primary-foreground">
              <div className="text-center">
                <div className="font-bold text-lg">Meisterbetrieb</div>
                <div className="text-sm text-primary-foreground/80">seit 1990</div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
