import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useCountdown } from "@/hooks/useCountdown";
import { Zap, Clock, Ruler, Gauge, Check, Shield } from "lucide-react";

export default function PromotionPanelCutterAktion() {
  const endDate = new Date("2026-04-30T23:59:59");
  const countdown = useCountdown(endDate);

  const features = [
    { icon: Zap, label: "Eintauchschnitt", description: "Keine Bohrung nötig" },
    { icon: Ruler, label: "165 mm Dicke", description: "In einem Arbeitsgang" },
    { icon: Gauge, label: "4 m/min", description: "Arbeitsgeschwindigkeit" },
    { icon: Shield, label: "5 Jahre", description: "Garantie" },
  ];

  const handleContact = () => {
    window.location.href =
      "mailto:burk-trutools@web.de?subject=Anfrage%20FR%C3%9CHJAHRSAKTION%202026%20TPC%20165%20-%20Gratis%20N%20160";
  };

  return (
    <section className="pb-14 pt-10 sm:pb-16 sm:pt-12 lg:pb-20 lg:pt-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <article className="rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-xl shadow-slate-900/5 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/75 dark:shadow-black/20 sm:p-8 lg:p-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center sm:mb-12"
        >
          <Badge className="mb-4 rounded-full bg-emerald-500/15 px-4 py-1 text-emerald-700 hover:bg-emerald-500/20 dark:bg-emerald-500/20 dark:text-emerald-200 dark:hover:bg-emerald-500/30">
            FRÜHJAHRSAKTION 2026
          </Badge>
          <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-slate-100 sm:text-4xl lg:text-5xl">Panel Cutter Aktion</h2>
          <p className="mx-auto mb-6 max-w-3xl text-base text-slate-600 dark:text-slate-300 sm:text-lg lg:text-xl">
            <strong>TruTool TPC 165</strong> + <strong>Gratis TruTool N 160 (Wert 510 EUR*)</strong>
          </p>

          <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {[
              { label: "Tage", value: countdown.days },
              { label: "Stunden", value: countdown.hours },
              { label: "Minuten", value: countdown.minutes },
              { label: "Sekunden", value: countdown.seconds },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-200/80 bg-white/90 px-4 py-3 shadow-sm dark:border-slate-700 dark:bg-slate-900/70"
              >
                <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-300 sm:text-3xl">{item.value}</div>
                <div className="text-xs uppercase tracking-wide text-slate-600 dark:text-slate-400">{item.label}</div>
              </div>
            ))}
          </div>

          <div className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200/80 bg-slate-50/80 px-4 py-2 text-sm text-slate-600 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-300">
            <Clock className="w-4 h-4" />
            1. Februar - 30. April 2026
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.label}
                className="rounded-2xl border border-slate-200/80 bg-white/90 p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0 dark:border-slate-800 dark:bg-slate-900/75"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-300">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h4 className="text-base font-semibold text-slate-900 dark:text-slate-100">{feature.label}</h4>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300">{feature.description}</p>
              </div>
            );
          })}
        </motion.div>

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-3 xl:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 xl:col-span-2"
          >
            <div className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/60 sm:p-7">
              <h3 className="mb-4 text-2xl font-bold text-slate-900 dark:text-slate-100">1. Investition in den Panel Cutter</h3>
              <div className="rounded-xl border border-emerald-500/25 bg-emerald-500/[0.08] p-6 dark:border-emerald-500/35 dark:bg-emerald-500/[0.16]">
                <div className="mb-4 flex flex-col justify-between gap-4 md:flex-row">
                  <div>
                    <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">TruTool TPC 165</div>
                    <div className="font-medium tracking-tight text-emerald-700 dark:text-emerald-300">Panel Cutter für Sandwichpaneele</div>
                  </div>
                  <div className="self-start rounded border border-emerald-500/30 bg-white/60 px-2 py-1 text-xs font-mono dark:bg-slate-950/40">Ref: #2451582</div>
                </div>
                <p className="mb-4 leading-relaxed text-slate-700 dark:text-slate-200">
                  Trennen Sie Sandwichpaneele bis 165 mm Dicke massgenau und ohne Vorbohren in einem Arbeitsgang.
                </p>
                <div className="grid grid-cols-1 gap-3 text-sm text-slate-600 dark:text-slate-200 sm:grid-cols-2">
                  <div className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-600 dark:text-emerald-300" /> Eintauchen ohne Startloch</div>
                  <div className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-600 dark:text-emerald-300" /> Maßgenaues Schneiden</div>
                  <div className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-600 dark:text-emerald-300" /> Keine Nacharbeit nötig</div>
                  <div className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-600 dark:text-emerald-300" /> Handlich und mobil</div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-emerald-500/35 bg-emerald-500/[0.08] p-6 shadow-sm dark:border-emerald-500/45 dark:bg-emerald-500/[0.16] sm:p-7">
              <h3 className="mb-4 text-2xl font-bold text-slate-900 dark:text-slate-100">2. Gratis-Bonus erhalten</h3>
              <p className="mb-4 text-lg text-slate-800 dark:text-slate-100">
                <strong>TruTool N 160 12V Akku-Nibbler</strong> - Geschenkwert <strong>510 EUR*</strong>
              </p>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                <li className="flex items-start gap-2"><Check className="mt-1 h-4 w-4 text-emerald-600 dark:text-emerald-300" /> Für Flach- und Wellbleche bis 1,6 mm</li>
                <li className="flex items-start gap-2"><Check className="mt-1 h-4 w-4 text-emerald-600 dark:text-emerald-300" /> Funkenfrei, verzugsfrei und korrosionsfrei</li>
                <li className="flex items-start gap-2"><Check className="mt-1 h-4 w-4 text-emerald-600 dark:text-emerald-300" /> Ideal für Ausklinkungen und feine Schnitte</li>
              </ul>
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400">*unverbindliche Preisempfehlung exkl. USt.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="xl:sticky xl:top-24 rounded-2xl border border-emerald-500/40 bg-gradient-to-br from-emerald-600/95 to-emerald-700 p-6 text-white shadow-xl shadow-emerald-900/20 sm:p-7"
          >
            <div className="mb-6">
              <div className="text-4xl font-bold mb-2">510 EUR*</div>
              <div className="text-green-100">Gratis-Wert</div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="rounded-xl border border-white/15 bg-white/10 p-4">
                <div className="text-sm text-green-100 mb-1">Kontakt</div>
                <div className="font-semibold">Thomas Burk GmbH</div>
                <a
                  href="tel:+497141921912"
                  aria-label="Telefonnummer +49 7141 921 912"
                  className="mt-1 inline-block font-mono text-sm font-medium text-green-100 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/90 focus-visible:ring-offset-2 focus-visible:ring-offset-emerald-700"
                >
                  +49 7141 921 912
                </a>
              </div>

              <div className="rounded-xl border border-white/15 bg-white/10 p-4">
                <div className="text-sm text-green-100 mb-1">E-Mail</div>
                <a
                  href="mailto:burk-trutools@web.de"
                  aria-label="E-Mail an burk-trutools@web.de"
                  className="break-all text-sm text-green-100 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/90 focus-visible:ring-offset-2 focus-visible:ring-offset-emerald-700"
                >
                  burk-trutools@web.de
                </a>
              </div>
            </div>

            <Button
              size="lg"
              onClick={handleContact}
              className="mb-3 w-full rounded-xl border border-white/30 bg-white font-bold text-emerald-700 transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-100 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              Jetzt anfragen
            </Button>

            <a
              href="https://www.trumpf.info/4f96mc"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Mehr Details zur FRÜHJAHRSAKTION 2026"
              className="block w-full rounded-xl border border-white/30 py-3 text-center text-sm transition-colors duration-200 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/90 focus-visible:ring-offset-2 focus-visible:ring-offset-emerald-700"
            >
              Mehr Details
            </a>
          </motion.div>
        </div>
        </article>
      </div>
    </section>
  );
}
