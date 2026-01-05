import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Award, MapPin, ShieldCheck, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import heroImage from "@assets/generated_images/hero_power_tool_action_shot.png";

interface HeroProps {
  onExploreProducts?: () => void;
  onContactUs?: () => void;
}

export default function Hero({ onExploreProducts, onContactUs }: HeroProps) {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-slate-900"
      data-testid="section-hero"
    >
      <motion.div 
        style={{ y: heroY, opacity: heroOpacity }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/50 to-transparent z-10" />
        <img 
          src={heroImage} 
          alt="TRUMPF TruTool Elektrowerkzeuge" 
          className="w-full h-full object-cover scale-105"
        />
      </motion.div>

      <div className="container relative z-20 text-white py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Linke Spalte: Text-Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="pl-4 md:pl-12 lg:pl-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4 text-primary" />
              <span>Offizieller TRUMPF Partner</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8 tracking-tight">
              Präzision <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-primary to-cyan-400">
                die bewegt.
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 leading-relaxed mb-10 max-w-xl">
              Professionelle TRUMPF TruTool Elektrowerkzeuge für Industrie und Handwerk. 
              Fachkundige Beratung, erstklassiger Service, verlässliche Qualität.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                onClick={onExploreProducts}
                className="h-14 px-8 text-lg rounded-full bg-primary hover:bg-primary/90 shadow-xl shadow-primary/25 hover:shadow-primary/40 transition-all hover:scale-105"
              >
                Produkte ansehen <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <div 
                className="h-14 px-8 text-lg rounded-full border border-white/30 text-white bg-transparent flex items-center justify-center transition-colors"
              >
                <Phone className="mr-2 w-5 h-5 text-primary" /> +49 7141 921 912
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-white/20">
              <div className="flex items-center gap-2 text-slate-300">
                <Award className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Offizieller Partner</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Baden-Württemberg & Bayern</span>
              </div>
            </div>
          </motion.div>

          {/* Rechte Spalte: Bleibt frei für Bild-Fokus */}
          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
}
