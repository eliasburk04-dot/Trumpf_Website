import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import workshopImage from "@assets/generated_images/modern_workshop_facility_interior.png";
import craftsmanImage from "@assets/generated_images/craftsman_precision_work_closeup.png";

interface AboutSectionProps {
  id?: string;
}

export default function AboutSection({ id }: AboutSectionProps) {
  return (
    <section id={id} className="section bg-white dark:bg-slate-900" data-testid="section-about">
      <div className="container mx-auto px-4">
        <div className="split-layout">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="content-block"
          >
            <span className="section-label">Unternehmen</span>
            <h2 className="section-title" data-testid="text-about-title">
              Partner für TRUMPF Elektrowerkzeuge
            </h2>
            <p className="text-lg text-muted-foreground" data-testid="text-about-description">
              Die Thomas Burk GmbH betreut Industrie- und Handwerkskunden in Baden-Württemberg
              und Bayern mit Beratung, Verkauf, Wartung und Reparatur.
            </p>
            <p className="text-lg text-muted-foreground">
              Unser Team verbindet Erfahrung in Elektrotechnik, Feinwerkmechanik und CNC-naher
              Fertigung mit praxisnahen Lösungsvorschlägen.
            </p>

            <ul className="check-list mt-8">
              {[
                "Offizieller TRUMPF Partner seit über 30 Jahren",
                "Individuelle Lösungskonzepte für Fertigung und Montage",
                "Hohe Zuverlässigkeit und kurze Reaktionszeiten",
                "Express-Service bei Reparaturen",
              ].map((item, i) => (
                <li key={i}>
                  <CheckCircle2 className="check-list-icon" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
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
                <div className="image-frame-floating aspect-[4/5]">
                  <img src={workshopImage} alt="Moderne Werkstatt" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="image-frame-floating aspect-[4/5]">
                  <img src={craftsmanImage} alt="Präzisionsarbeit" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-8 py-4 bg-primary text-primary-foreground rounded-2xl shadow-xl">
              <div className="text-center">
                <div className="font-bold text-lg">Meisterbetrieb</div>
                <div className="text-sm text-primary-foreground/80">seit 1990</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
