import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Factory, Building2, Ship, Train, Wrench, HardHat } from "lucide-react";

const industries = [
  {
    icon: Factory,
    name: "Metal Fabrication",
    description: "Sheet metal workshops and manufacturing facilities",
  },
  {
    icon: Building2,
    name: "Construction",
    description: "Structural steel and building envelope work",
  },
  {
    icon: Ship,
    name: "Shipbuilding",
    description: "Marine construction and repair yards",
  },
  {
    icon: Train,
    name: "Rail & Transit",
    description: "Railway vehicle manufacturing and maintenance",
  },
  {
    icon: Wrench,
    name: "HVAC",
    description: "Ductwork fabrication and installation",
  },
  {
    icon: HardHat,
    name: "Heavy Equipment",
    description: "Industrial machinery and equipment building",
  },
];

interface IndustriesSectionProps {
  id?: string;
}

export default function IndustriesSection({ id }: IndustriesSectionProps) {
  return (
    <section
      id={id}
      className="py-20 lg:py-32 bg-background"
      data-testid="section-industries"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="text-3xl lg:text-4xl font-bold tracking-tight mb-4"
            data-testid="text-industries-title"
          >
            Industries We Serve
          </h2>
          <p
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
            data-testid="text-industries-subtitle"
          >
            From precision sheet metal work to heavy industrial applications, our tools are
            trusted across the most demanding sectors.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Card
                className="p-5 text-center h-full hover-elevate cursor-pointer"
                data-testid={`card-industry-${industry.name.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className="w-12 h-12 mx-auto rounded-md bg-muted flex items-center justify-center mb-3">
                  <industry.icon className="w-6 h-6 text-muted-foreground" />
                </div>
                <h3 className="font-semibold text-sm mb-1">{industry.name}</h3>
                <p className="text-xs text-muted-foreground">{industry.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
