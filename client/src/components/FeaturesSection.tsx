import { Card } from "@/components/ui/card";
import { Shield, Zap, Award, Globe } from "lucide-react";
import { motion } from "framer-motion";
import precisionImage from "@assets/generated_images/precision_cutting_detail.png";

const features = [
  {
    icon: Shield,
    title: "Swiss Precision",
    description:
      "Manufactured in Switzerland with meticulous attention to detail and quality control.",
  },
  {
    icon: Zap,
    title: "Cordless Power",
    description:
      "Advanced battery technology for maximum mobility without compromising performance.",
  },
  {
    icon: Award,
    title: "100+ Years Heritage",
    description:
      "A century of innovation and engineering excellence backing every tool we make.",
  },
  {
    icon: Globe,
    title: "Global Support",
    description:
      "Worldwide dealer network with expert technical support in 86 countries.",
  },
];

interface FeaturesSectionProps {
  id?: string;
}

export default function FeaturesSection({ id }: FeaturesSectionProps) {
  return (
    <section
      id={id}
      className="py-20 lg:py-32 bg-card"
      data-testid="section-features"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-3xl lg:text-4xl font-bold tracking-tight mb-6"
              data-testid="text-features-title"
            >
              Why Choose TRUMP Elektrowerkzeuge
            </h2>
            <p
              className="text-muted-foreground text-lg mb-8"
              data-testid="text-features-subtitle"
            >
              When precision matters, professionals trust TRUMP. Our power tools combine
              German engineering philosophy with Swiss manufacturing excellence.
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
                    className="p-5 h-full"
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
            <div className="aspect-[4/3] rounded-md overflow-hidden">
              <img
                src={precisionImage}
                alt="Precision cutting detail"
                className="w-full h-full object-cover"
                data-testid="img-features"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-md max-w-[200px]">
              <div className="text-4xl font-bold mb-1">5.4B</div>
              <div className="text-sm text-primary-foreground/80">EUR Group Revenue</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
