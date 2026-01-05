import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useCountdown } from "@/hooks/useCountdown";
import { Zap, Clock, Ruler, Gauge, Check, Shield } from "lucide-react";

export default function PromotionPanelCutterAktion() {
  const endDate = new Date('2026-04-30T23:59:59');
  const countdown = useCountdown(endDate);

  const features = [
    { icon: Zap, label: "Eintauchschnitt", description: "Keine Bohrung nötig" },
    { icon: Ruler, label: "165mm Dicke", description: "In einem Arbeitsgang" },
    { icon: Gauge, label: "4 m/min", description: "Arbeitsgeschwindigkeit" },
    { icon: Shield, label: "5 Jahre", description: "Garantie" },
  ];

  const highlights = [
    "Gratis TruTool N 160 12V Akku-Nibbler (Wert 510€*)",
    "Keine Startlochbohrung erforderlich",
    "Maßgenau und rechtwinklig",
    "13 Schwertpositionen (0-90°)",
    "Für plane, trapez- und wellenförmige Bleche",
    "5 Jahre Garantie",
    "Inkl. robustem Koffer & Staubsaugeranschluss",
  ];

  const handleContact = () => {
    window.location.href = 'mailto:burk-trutools@web.de?subject=Anfrage%20FR%C3%9CHJAHRSAKTION%202026%20TPC%20165%20-%20Gratis%20N%20160';
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-emerald-50 via-green-50 to-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge className="mb-4 bg-green-600 hover:bg-green-700">FRÜHJAHRSAKTION 2026</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Panel Cutter Aktion
          </h2>
          <p className="text-xl text-slate-600 mb-6 max-w-3xl mx-auto">
            <strong>TruTool TPC 165</strong> + <strong>Gratis TruTool N 160 (510€*)</strong>
          </p>

          {/* Countdown */}
          <div className="flex justify-center gap-4 mb-8">
            <div className="bg-white rounded-lg px-4 py-3 shadow-md">
              <div className="text-3xl font-bold text-green-600">{countdown.days}</div>
              <div className="text-xs text-slate-600 uppercase">Tage</div>
            </div>
            <div className="bg-white rounded-lg px-4 py-3 shadow-md">
              <div className="text-3xl font-bold text-green-600">{countdown.hours}</div>
              <div className="text-xs text-slate-600 uppercase">Stunden</div>
            </div>
            <div className="bg-white rounded-lg px-4 py-3 shadow-md">
              <div className="text-3xl font-bold text-green-600">{countdown.minutes}</div>
              <div className="text-xs text-slate-600 uppercase">Minuten</div>
            </div>
            <div className="bg-white rounded-lg px-4 py-3 shadow-md">
              <div className="text-3xl font-bold text-green-600">{countdown.seconds}</div>
              <div className="text-xs text-slate-600 uppercase">Sekunden</div>
            </div>
          </div>

          <div className="text-sm text-slate-500 flex items-center justify-center gap-2">
            <Clock className="w-4 h-4" />
            1. Februar – 30. April 2026
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <Icon className="w-6 h-6 text-green-600" />
                  <h4 className="font-bold text-slate-900">{feature.label}</h4>
                </div>
                <p className="text-sm text-slate-600">{feature.description}</p>
              </div>
            );
          })}
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8 items-start mb-16">
          {/* Action Step-by-Step */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Step 1: Purchase */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl shrink-0">1</div>
                <h3 className="text-2xl font-bold text-slate-900">Ihre Investition in Schnelligkeit</h3>
              </div>
              
              <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-6 border-l-4 border-green-600">
                <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">
                  <div>
                    <div className="text-2xl font-bold text-slate-900">TruTool TPC 165</div>
                    <div className="text-green-700 font-medium tracking-tight">Der effiziente Panel Cutter für Sandwichpaneele</div>
                  </div>
                  <div className="text-xs font-mono bg-white/50 self-start px-2 py-1 rounded border border-green-200">Ref: #2451582</div>
                </div>
                
                <p className="text-slate-700 mb-4 leading-relaxed">
                  Mit dem TPC 165 trennen Sie Sandwichpaneele bis 165 mm Dicke maßgenau und ohne Vorbohren in nur einem Arbeitsgang.
                </p>

                <div className="grid sm:grid-cols-2 gap-3 text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" /> Eintauchen ohne Startloch
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" /> Maßgenaues Schneiden
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" /> Keine Nacharbeit nötig
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" /> Handlich & mobil
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: Receive Gift */}
            <div className="bg-white rounded-2xl border-2 border-green-600 p-8 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 bg-green-600 text-white px-10 py-2 rotate-45 translate-x-10 translate-y-2 font-bold shadow-md">
                GRATIS
              </div>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl shrink-0">2</div>
                <h3 className="text-2xl font-bold text-slate-900">Ihr kostenloser Bonus</h3>
              </div>

              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-1 space-y-4">
                  <div>
                    <div className="text-green-600 font-black text-3xl mb-1">TruTool N 160</div>
                    <div className="text-slate-500 font-semibold italic">12V Akku-Nibbler (ohne Akku-Set)</div>
                  </div>

                  <div className="inline-block bg-green-100 text-green-700 font-bold px-4 py-2 rounded-lg text-lg border border-green-200">
                    Geschenkwert: 510 €*
                  </div>

                  <div className="space-y-3">
                    <p className="text-slate-600 text-sm">
                      Zusätzlich zum Panel Cutter erhalten Sie den wendigen N 160 Nibbler. Perfekt für Ausklinkungen und Schnitte an Flach- und Wellblechen bis 1,6 mm Dicke.
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-2 text-[13px] text-slate-700 font-medium">
                      <li className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-500" /> Funkenfrei</li>
                      <li className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-500" /> Verzugsfrei</li>
                      <li className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-500" /> Korrosionsfrei</li>
                      <li className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-500" /> Federleicht</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Box */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="sticky top-20 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-8 shadow-2xl text-white"
          >
            <div className="mb-6">
              <div className="text-4xl font-bold mb-2">510€*</div>
              <div className="text-green-100">Gratis-Wert</div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-sm text-green-100 mb-1">Kontakt</div>
                <div className="font-semibold">Thomas Burk GmbH</div>
                <div className="text-green-100 font-medium font-mono text-sm mt-1">
                  +49 7141 921 912
                </div>
              </div>

              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-sm text-green-100 mb-1">E-Mail</div>
                <a
                  href="mailto:burk-trutools@web.de"
                  className="text-green-100 hover:text-white transition-colors break-all text-sm"
                >
                  burk-trutools@web.de
                </a>
              </div>
            </div>

            <Button
              size="lg"
              onClick={handleContact}
              className="w-full bg-white text-green-600 hover:bg-slate-100 font-bold text-base mb-3"
            >
              Jetzt anfragen
            </Button>

            <a
              href="https://www.trumpf.info/4f96mc"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center py-3 border border-white/30 rounded-lg hover:bg-white/10 transition-colors text-sm"
            >
              Mehr Details
            </a>

            <div className="mt-6 pt-6 border-t border-white/20 text-xs text-green-100">
              <div>#trumpfpowertool</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
