import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Award, MapPin, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@assets/generated_images/Hero_Bild.png";

interface HeroProps {
  onExploreProducts?: () => void;
  onContactUs?: () => void;
}

export default function Hero({ onExploreProducts, onContactUs }: HeroProps) {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-slate-900"
      data-testid="section-hero"
      id="hero"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/55 to-transparent z-10" />
        <img
          src={heroImage}
          alt="TRUMPF TruTool Elektrowerkzeuge im industriellen Einsatz"
          className="w-full h-full object-cover scale-105"
          loading="eager"
          decoding="sync"
          fetchPriority="high"
        />
      </div>

      <div className="container relative z-20 text-white py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="pl-4 md:pl-12 lg:pl-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4 text-primary" />
              <span>Offizieller TRUMPF Partner in Süddeutschland</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8 tracking-tight">
              Stark in Metall. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-primary to-cyan-400">
                Stark im Service.
              </span>
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed mb-10 max-w-xl">
              Professionelle TRUMPF TruTool Elektrowerkzeuge für Industrie und Handwerk.
              Verlässliche Beratung, planbarer Service und hohe Prozesssicherheit.
              Original-Ersatzteile und Verschleißteile liefern wir für TRUMPF Maschinen auf Anfrage.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                size="lg"
                onClick={onExploreProducts}
                className="h-14 px-8 text-lg rounded-full bg-primary hover:bg-primary/90 shadow-xl shadow-primary/25 hover:shadow-primary/40 transition-all hover:scale-105"
              >
                Produkte ansehen <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={onContactUs}
                className="h-14 px-8 text-lg rounded-full border-white/40 bg-white/5 text-white hover:bg-white/10"
              >
                Beratung anfordern
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-white/20">
              <div className="flex items-center gap-2 text-slate-300">
                <Award className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Original TRUMPF Portfolio</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Baden-Württemberg und Bayern</span>
              </div>
              <a
                href="tel:+497141921912"
                className="flex items-center gap-2 text-slate-200 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">+49 7141 921 912</span>
              </a>
            </div>
          </motion.div>

          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
}
