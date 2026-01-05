import { motion } from "framer-motion";
import { Award, Shield, Clock, Users } from "lucide-react";

const stats = [
  { number: "30+", label: "Jahre Erfahrung", icon: Clock },
  { number: "1000+", label: "Zufriedene Kunden", icon: Users },
  { number: "100%", label: "TRUMPF Original", icon: Shield },
  { number: "24h", label: "Express-Service", icon: Award },
];

export default function TrustIndicators() {
  return (
    <section className="section-sm bg-white dark:bg-slate-900 border-y border-border" data-testid="section-trust">
      <div className="container mx-auto px-4">
        <div className="stats-row justify-center">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="stat-item text-center"
              data-testid={`text-trust-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
