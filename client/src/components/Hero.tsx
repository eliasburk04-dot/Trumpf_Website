import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@assets/generated_images/hero_power_tool_action_shot.png";

interface HeroProps {
  onExploreProducts?: () => void;
  onLearnMore?: () => void;
}

export default function Hero({ onExploreProducts, onLearnMore }: HeroProps) {
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
            data-testid="badge-swiss-made"
          >
            Swiss Precision Engineering
          </Badge>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6"
            data-testid="text-hero-title"
          >
            Professional Power Tools for{" "}
            <span className="text-primary">Metal Fabrication</span>
          </h1>

          <p
            className="text-lg lg:text-xl text-white/80 leading-relaxed max-w-2xl mb-8"
            data-testid="text-hero-description"
          >
            100+ years of German engineering excellence. Industry-leading nibblers, shears,
            and bevelers trusted by professionals worldwide. Built in Switzerland.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="gap-2"
              onClick={onExploreProducts}
              data-testid="button-explore-products"
            >
              Explore Products
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 border-white/30 text-white backdrop-blur-sm hover:bg-white/20"
              onClick={onLearnMore}
              data-testid="button-learn-more"
            >
              Learn More
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-8 mt-12 pt-8 border-t border-white/20">
            <div data-testid="stat-years">
              <div className="text-3xl font-bold text-white">100+</div>
              <div className="text-sm text-white/60">Years of Innovation</div>
            </div>
            <div data-testid="stat-countries">
              <div className="text-3xl font-bold text-white">86</div>
              <div className="text-sm text-white/60">Countries Served</div>
            </div>
            <div data-testid="stat-manufacturing">
              <div className="text-3xl font-bold text-white">Swiss</div>
              <div className="text-sm text-white/60">Manufacturing</div>
            </div>
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
