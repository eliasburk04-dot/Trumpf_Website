import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@assets/generated_images/hero_power_tool_action_shot.png";

interface HeroProps {
  onExploreProducts?: () => void;
  onContactUs?: () => void;
}

export default function Hero({ onExploreProducts, onContactUs }: HeroProps) {
  const handleScrollDown = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-testid="section-hero"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <Badge
            variant="secondary"
            className="mb-6 bg-white/10 text-white border-white/20 backdrop-blur-sm"
            data-testid="badge-partner"
          >
            Offizieller TRUMPF Partner
          </Badge>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6"
            data-testid="text-hero-title"
          >
            Effiziente Lösungen für{" "}
            <span className="text-primary">Elektrotechnik & CNC</span>
          </h1>

          <p
            className="text-lg lg:text-xl text-white/80 leading-relaxed max-w-2xl mb-8"
            data-testid="text-hero-description"
          >
            Wir unterstützen Industrie und Handwerk mit geprüften TRUMPF Elektrowerkzeugen, 
            fachkundiger Beratung und verlässlichem Service – aus Ludwigsburg für Baden-Württemberg.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="gap-2"
              onClick={onExploreProducts}
              data-testid="button-produkte"
            >
              Produkte ansehen
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 border-white/30 text-white backdrop-blur-sm hover:bg-white/20"
              onClick={onContactUs}
              data-testid="button-beratung"
            >
              Beratung anfordern
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-2 mt-8">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm text-white/60">Heute verfügbar bis 17:00 Uhr</span>
          </div>
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={handleScrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors"
        data-testid="button-scroll-down"
      >
        <ChevronDown className="w-8 h-8 animate-bounce" />
      </motion.button>
    </section>
  );
}
