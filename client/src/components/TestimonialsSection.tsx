import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

// todo: remove mock functionality
const testimonials = [
  {
    id: 1,
    name: "Markus Weber",
    role: "Produktionsleiter",
    company: "Weber Metallbau GmbH",
    quote:
      "Mit der TruTool N 700 haben wir die Schnittzeiten in starken Blechen deutlich reduziert. Die Kantenqualität ist stabil und reproduzierbar.",
    rating: 5,
  },
  {
    id: 2,
    name: "Julia Schneider",
    role: "Werkstattleitung",
    company: "Schneider Anlagenbau",
    quote:
      "Die Kombination aus Beratung, Werkzeugauswahl und Service funktioniert für uns sehr gut. Ausfälle konnten wir messbar senken.",
    rating: 5,
  },
  {
    id: 3,
    name: "Daniel Kraus",
    role: "Meister",
    company: "Kraus Blechsysteme",
    quote:
      "Bei Montageeinsätzen zählt sauberes, schnelles Arbeiten. Die Maschinen sind robust und die Ersatzteilversorgung ist verlässlich.",
    rating: 5,
  },
];

interface TestimonialsSectionProps {
  id?: string;
}

export default function TestimonialsSection({ id }: TestimonialsSectionProps) {
  return (
    <section
      id={id}
      className="section bg-slate-50 dark:bg-slate-950"
      data-testid="section-testimonials"
    >
      <div className="container mx-auto px-4">
        <div className="section-header section-header-center">
          <span className="section-label">Referenzen</span>
          <h2 className="section-title" data-testid="text-testimonials-title">
            Rückmeldungen aus der Praxis
          </h2>
          <p className="section-subtitle" data-testid="text-testimonials-subtitle">
            Stimmen von Kunden aus Metallbau, Anlagenbau und Montage.
          </p>
        </div>

        <div className="card-grid-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card
                className="p-6 h-full flex flex-col border border-border bg-white dark:bg-slate-900"
                data-testid={`card-testimonial-${testimonial.id}`}
              >
                <Quote className="w-8 h-8 text-primary/20 mb-4" />
                <p className="text-foreground/90 mb-6 flex-1">{testimonial.quote}</p>
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-primary text-primary"
                      data-testid={`star-${testimonial.id}-${i}`}
                    />
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback className="bg-muted text-muted-foreground">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </div>
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
