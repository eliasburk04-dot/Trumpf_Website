import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useCountdown } from "@/hooks/useCountdown";
import { Zap, Clock, FileText, Wrench, Check } from "lucide-react";

export default function PromotionHammerAktion() {
  const endDate = new Date('2026-04-30T23:59:59');
  const countdown = useCountdown(endDate);

  const features = [
    { icon: Zap, label: "TSC 100 & TSC 200", description: "Für normale oder zähe Schlacke" },
    { icon: Clock, label: "4-8 m/min", description: "Arbeitsgeschwindigkeit" },
    { icon: Wrench, label: "Bis 25mm Schlacke", description: "Maximale Dicke" },
    { icon: Check, label: "75% Ersparnis", description: "Bis zu 4x längere Leistenutzung" },
  ];

  const highlights = [
    "Gratis TruTool PS 100 Teileseparator (Wert 430€*)",
    "Reinigung bis 30 Min. pro Palette",
    "Schlackendicke bis 25mm",
    "Einmann-Bedienung",
    "Hauptzeitparallele Reinigung",
    "Bis zu 75% Kostenersparnis",
  ];

  const handleContact = () => {
    window.location.href = 'mailto:burk-trutools@web.de?subject=Anfrage%20HAMMER-AKTION%20TSC%20-%20Gratis%20PS%20100';
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge className="mb-4 bg-red-600 hover:bg-red-700">HAMMER-AKTION</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Dream Team für Laserschneidanlagen
          </h2>
          <p className="text-xl text-slate-600 mb-6 max-w-3xl mx-auto">
            <strong>TruTool TSC 100/200</strong> + <strong>Gratis TruTool PS 100 (430€*)</strong>
          </p>

          {/* Countdown */}
          <div className="flex justify-center gap-4 mb-8">
            <div className="bg-white rounded-lg px-4 py-3 shadow-md">
              <div className="text-3xl font-bold text-primary">{countdown.days}</div>
              <div className="text-xs text-slate-600 uppercase">Tage</div>
            </div>
            <div className="bg-white rounded-lg px-4 py-3 shadow-md">
              <div className="text-3xl font-bold text-primary">{countdown.hours}</div>
              <div className="text-xs text-slate-600 uppercase">Stunden</div>
            </div>
            <div className="bg-white rounded-lg px-4 py-3 shadow-md">
              <div className="text-3xl font-bold text-primary">{countdown.minutes}</div>
              <div className="text-xs text-slate-600 uppercase">Minuten</div>
            </div>
            <div className="bg-white rounded-lg px-4 py-3 shadow-md">
              <div className="text-3xl font-bold text-primary">{countdown.seconds}</div>
              <div className="text-xs text-slate-600 uppercase">Sekunden</div>
            </div>
          </div>

          <div className="text-sm text-slate-500 flex items-center justify-center gap-2">
            <Clock className="w-4 h-4" />
            19. Januar – 30. April 2026
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
                  <Icon className="w-6 h-6 text-primary" />
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
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl shrink-0">1</div>
                <h3 className="text-2xl font-bold text-slate-900">Sie kaufen Ihr Reinigungswerkzeug</h3>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="relative group">
                  <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-5 border border-slate-200 transition-all group-hover:border-primary/50">
                    <div className="font-bold text-lg text-slate-900 mb-1">TruTool TSC 100</div>
                    <p className="text-sm text-slate-600 mb-4">Der Standard für normale Schlacke auf allen gängigen Lasermaschinen.</p>
                    <div className="inline-flex items-center text-xs font-mono bg-white px-2 py-1 rounded border">Ref: #2574740</div>
                  </div>
                </div>
                <div className="relative group">
                  <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-5 border border-slate-200 transition-all group-hover:border-primary/50">
                    <div className="font-bold text-lg text-slate-900 mb-1">TruTool TSC 200</div>
                    <p className="text-sm text-slate-600 mb-4">Die Kraftmaschine für besonders zähe und harte Schlacke-Rückstände.</p>
                    <div className="inline-flex items-center text-xs font-mono bg-white px-2 py-1 rounded border">Ref: #2816095</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: Receive Gift */}
            <div className="bg-red-600 rounded-2xl p-8 shadow-xl text-white relative overflow-hidden">
              <div className="absolute top-[-20px] right-[-20px] opacity-10">
                <Zap className="w-40 h-40" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6 text-white">
                  <div className="w-12 h-12 bg-white text-red-600 rounded-full flex items-center justify-center font-bold text-xl shrink-0">2</div>
                  <h3 className="text-2xl font-bold">Sie erhalten dieses Geschenk GRATIS</h3>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 mb-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <div className="text-sm uppercase tracking-widest text-red-100 mb-1">Ihr Bonus-Werkzeug:</div>
                      <div className="text-3xl font-bold">TruTool PS 100 Teileseparator</div>
                    </div>
                    <div className="bg-white text-red-600 px-6 py-2 rounded-full font-black text-xl shadow-lg">
                      Wert: 430 €*
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-bold text-lg border-b border-white/20 pb-2">Vorteile für Ihre Fertigung:</h4>
                    <ul className="space-y-2 text-red-50">
                      <li className="flex items-start gap-2 italic text-sm">
                        <Check className="w-4 h-4 mt-1 shrink-0" />
                        Löst Kleinteile blitzschnell aus dem Restgitter
                      </li>
                      <li className="flex items-start gap-2 italic text-sm">
                        <Check className="w-4 h-4 mt-1 shrink-0" />
                        Pneumatischer Antrieb für dauerhaften Einsatz
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-bold text-lg border-b border-white/20 pb-2">Ihr Profit:</h4>
                    <ul className="space-y-2 text-red-50">
                      <li className="flex items-start gap-2 italic text-sm">
                        <Check className="w-4 h-4 mt-1 shrink-0" />
                        Keine Beschädigungen an den Teilen
                      </li>
                      <li className="flex items-start gap-2 italic text-sm">
                        <Check className="w-4 h-4 mt-1 shrink-0" />
                        Deutliche Zeitersparnis beim Sortieren
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-xs text-slate-500 pt-4 px-8">
              *unverbindliche Preisempfehlung exkl. USt.
            </div>
          </motion.div>

          {/* CTA Box */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="sticky top-20 bg-gradient-to-br from-primary to-primary/90 rounded-2xl p-8 shadow-2xl text-white"
          >
            <div className="mb-6">
              <div className="text-4xl font-bold mb-2">430€*</div>
              <div className="text-primary-foreground/80">Gratis-Wert</div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-sm text-primary-foreground/80 mb-1">Kontakt</div>
                <div className="font-semibold">Thomas Burk GmbH</div>
                <div className="text-primary-foreground/90 font-medium font-mono text-sm mt-1">
                  +49 7141 921 912
                </div>
              </div>

              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-sm text-primary-foreground/80 mb-1">E-Mail</div>
                <a
                  href="mailto:burk-trutools@web.de"
                  className="text-primary-foreground/90 hover:text-white transition-colors break-all text-sm"
                >
                  burk-trutools@web.de
                </a>
              </div>
            </div>

            <Button
              size="lg"
              onClick={handleContact}
              className="w-full bg-white text-primary hover:bg-slate-100 font-bold text-base mb-3"
            >
              Jetzt anfragen
            </Button>

            <a
              href="https://www.trumpf.info/zf2w08"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center py-3 border border-white/30 rounded-lg hover:bg-white/10 transition-colors text-sm"
            >
              Mehr Details
            </a>

            <div className="mt-6 pt-6 border-t border-white/20 text-xs text-primary-foreground/80">
              <div>#trumpfpowertool</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
