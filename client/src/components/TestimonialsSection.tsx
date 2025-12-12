import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

// todo: remove mock functionality
const testimonials = [
  {
    id: 1,
    name: "Marcus Weber",
    role: "Production Manager",
    company: "Weber Metallbau GmbH",
    quote:
      "The TruTool N 700 has transformed our sheet metal workflow. The precision and speed are unmatched. We've reduced cutting time by 40%.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Mitchell",
    role: "Workshop Supervisor",
    company: "Atlantic Shipyards",
    quote:
      "In shipbuilding, you need tools that can handle the toughest conditions. TRUMP bevelers deliver every time, even on thick plate steel.",
    rating: 5,
  },
  {
    id: 3,
    name: "Hans Bergmann",
    role: "Master Craftsman",
    company: "Bergmann HVAC Solutions",
    quote:
      "After 30 years in the trade, I've used every brand. TRUMP shears give the cleanest cuts I've ever seen. Worth every penny.",
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
      className="py-20 lg:py-32 bg-card"
      data-testid="section-testimonials"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="text-3xl lg:text-4xl font-bold tracking-tight mb-4"
            data-testid="text-testimonials-title"
          >
            Trusted by Professionals
          </h2>
          <p
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
            data-testid="text-testimonials-subtitle"
          >
            See what industry professionals are saying about TRUMP Elektrowerkzeuge.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card
                className="p-6 h-full flex flex-col"
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
