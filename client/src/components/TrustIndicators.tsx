import { motion } from "framer-motion";

const indicators = [
  "Meisterbetrieb",
  "Elektrotechnik",
  "Feinwerkmechanik",
  "CNC-Service",
  "TRUMPF Partner",
];

export default function TrustIndicators() {
  return (
    <section className="py-8 bg-card border-y border-border" data-testid="section-trust">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-wrap justify-center lg:justify-between items-center gap-6 lg:gap-8">
          {indicators.map((item, index) => (
            <motion.span
              key={item}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-sm font-semibold text-muted-foreground uppercase tracking-wider"
              data-testid={`text-trust-${item.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {item}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
