import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useCountdown } from "@/hooks/useCountdown";
import { Zap, Clock, Wrench, Check } from "lucide-react";

export default function PromotionHammerAktion() {
  const endDate = new Date("2026-04-30T23:59:59");
  const countdown = useCountdown(endDate);

  const features = [
    { icon: Zap, label: "TSC 100 und TSC 200", description: "Für normale oder zähe Schlacke" },
    { icon: Clock, label: "4-8 m/min", description: "Arbeitsgeschwindigkeit" },
    { icon: Wrench, label: "Bis 25 mm Schlacke", description: "Maximale Dicke" },
    { icon: Check, label: "Bis 75% Ersparnis", description: "Bis zu 4x längere Leistenutzung" },
  ];

  const handleContact = () => {
    window.location.href =
      "mailto:burk-trutools@web.de?subject=Anfrage%20HAMMER-AKTION%20TSC%20-%20Gratis%20PS%20100";
  };

  return (
    <section className="pb-10 pt-4 sm:pb-12 sm:pt-6 lg:pb-14 lg:pt-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <article className="rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-xl shadow-slate-900/5 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/75 dark:shadow-black/20 sm:p-8 lg:p-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center sm:mb-12"
        >
          <Badge className="mb-4 rounded-full bg-primary/15 px-4 py-1 text-primary hover:bg-primary/20 dark:bg-primary/25 dark:text-blue-200 dark:hover:bg-primary/30">
            HAMMER-AKTION
          </Badge>
          <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-slate-100 sm:text-4xl lg:text-5xl">Dream Team für Laserschneidanlagen</h2>
          <p className="mx-auto mb-6 max-w-3xl text-base text-slate-600 dark:text-slate-300 sm:text-lg lg:text-xl">
            <strong>TruTool TSC 100/200</strong> + <strong>Gratis TruTool PS 100 (Wert 430 EUR*)</strong>
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
                <div className="text-2xl font-bold text-primary sm:text-3xl">{item.value}</div>
                <div className="text-xs uppercase tracking-wide text-slate-600 dark:text-slate-400">{item.label}</div>
              </div>
            ))}
          </div>

          <div className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200/80 bg-slate-50/80 px-4 py-2 text-sm text-slate-600 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-300">
            <Clock className="w-4 h-4" />
            19. Januar - 30. April 2026
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
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary dark:bg-primary/20 dark:text-blue-200">
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
              <h3 className="mb-4 text-2xl font-bold text-slate-900 dark:text-slate-100">1. Reinigungswerkzeug wählen</h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-200/80 bg-white/85 p-4 shadow-sm dark:border-slate-700 dark:bg-slate-950/70">
                  <p className="font-semibold text-slate-900 dark:text-slate-100">TruTool TSC 100</p>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Standard für normale Schlacke auf gängigen Lasermaschinen.</p>
                  <p className="mt-3 text-xs font-mono text-slate-500 dark:text-slate-400">Ref: #2574740</p>
                </div>
                <div className="rounded-xl border border-slate-200/80 bg-white/85 p-4 shadow-sm dark:border-slate-700 dark:bg-slate-950/70">
                  <p className="font-semibold text-slate-900 dark:text-slate-100">TruTool TSC 200</p>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Kraftmaschine für besonders harte Schlacke-Rückstände.</p>
                  <p className="mt-3 text-xs font-mono text-slate-500 dark:text-slate-400">Ref: #2816095</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-primary/25 bg-primary/[0.08] p-6 shadow-sm dark:border-primary/35 dark:bg-primary/[0.16] sm:p-7">
              <h3 className="mb-4 text-2xl font-bold text-slate-900 dark:text-slate-100">2. Gratis-Bonus erhalten</h3>
              <p className="mb-4 text-lg text-slate-900 dark:text-slate-100">
                <strong>TruTool PS 100 Teileseparator</strong> - Geschenkwert <strong>430 EUR*</strong>
              </p>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                <li className="flex items-start gap-2"><Check className="mt-1 h-4 w-4 text-primary dark:text-blue-300" /> Löst Kleinteile schnell aus dem Restgitter</li>
                <li className="flex items-start gap-2"><Check className="mt-1 h-4 w-4 text-primary dark:text-blue-300" /> Pneumatischer Antrieb für dauerhaften Einsatz</li>
                <li className="flex items-start gap-2"><Check className="mt-1 h-4 w-4 text-primary dark:text-blue-300" /> Deutliche Zeitersparnis beim Sortieren</li>
              </ul>
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400">*unverbindliche Preisempfehlung exkl. USt.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="xl:sticky xl:top-24 rounded-2xl border border-primary/40 bg-gradient-to-br from-primary/95 to-primary p-6 text-white shadow-xl shadow-primary/20 sm:p-7"
          >
            <div className="mb-6">
              <div className="text-4xl font-bold mb-2">430 EUR*</div>
              <div className="text-primary-foreground/80">Gratis-Wert</div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="rounded-xl border border-white/15 bg-white/10 p-4">
                <div className="text-sm text-primary-foreground/80 mb-1">Kontakt</div>
                <div className="font-semibold">Thomas Burk GmbH</div>
                <a
                  href="tel:+497141921912"
                  aria-label="Telefonnummer +49 7141 921 912"
                  className="mt-1 inline-block font-mono text-sm font-medium text-primary-foreground/90 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/90 focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                >
                  +49 7141 921 912
                </a>
              </div>

              <div className="rounded-xl border border-white/15 bg-white/10 p-4">
                <div className="text-sm text-primary-foreground/80 mb-1">E-Mail</div>
                <a
                  href="mailto:burk-trutools@web.de"
                  aria-label="E-Mail an burk-trutools@web.de"
                  className="break-all text-sm text-primary-foreground/90 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/90 focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                >
                  burk-trutools@web.de
                </a>
              </div>
            </div>

            <Button
              size="lg"
              onClick={handleContact}
              className="mb-3 w-full rounded-xl border border-white/30 bg-white font-bold text-primary transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-100 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              Jetzt anfragen
            </Button>

            <a
              href="https://www.trumpf.info/zf2w08"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Mehr Details zur HAMMER-AKTION"
              className="block w-full rounded-xl border border-white/30 py-3 text-center text-sm transition-colors duration-200 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/90 focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
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
