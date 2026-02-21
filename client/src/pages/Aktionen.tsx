import { Helmet } from "react-helmet";
import { Navigation } from "@/components/Navigation";
import Footer from "@/components/Footer";
import PromotionHammerAktion from "@/components/PromotionHammerAktion";
import PromotionPanelCutterAktion from "@/components/PromotionPanelCutterAktion";
import { motion } from "framer-motion";

export default function Aktionen() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-background text-foreground antialiased selection:bg-primary/20">
      <Helmet>
        <title>Aktionen 2026 | TRUMPF Elektrowerkzeuge</title>
        <meta
          name="description"
          content="Profitieren Sie von unseren aktuellen TRUMPF Promotions mit kostenlosen Zugaben für Baden-Württemberg und Bayern."
        />
        <meta property="og:title" content="Aktionen 2026 | TRUMPF Elektrowerkzeuge" />
        <meta
          property="og:description"
          content="Aktuelle Promotionen mit kostenlosen Zugaben für Baden-Württemberg und Bayern."
        />
        <meta property="og:url" content="https://www.burk-trutool.de/aktionen" />
        <link rel="canonical" href="https://www.burk-trutool.de/aktionen" />
      </Helmet>

      <Navigation />

      <main className="flex-grow bg-slate-100 dark:bg-slate-950">
        <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-100 dark:from-slate-950 dark:via-slate-950 dark:to-slate-950" aria-hidden="true" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-4xl rounded-3xl border border-blue-300/20 bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-blue-950/85 px-6 py-10 text-center shadow-2xl shadow-slate-950/40 backdrop-blur-xl sm:px-8"
            >
              <h1 className="mb-6 text-4xl font-bold text-slate-50 sm:text-5xl lg:text-6xl">Aktuelle Promotionen</h1>
              <p className="mx-auto max-w-3xl text-base text-slate-200/95 sm:text-lg lg:text-xl">
                Sparen Sie jetzt mit unseren aktuellen TRUMPF Aktionen. Kostenlose Zugaben beim Kauf ausgewählter Produkte, nur für begrenzte Zeit.
              </p>
            </motion.div>
          </div>
        </section>

        <PromotionHammerAktion />
        <PromotionPanelCutterAktion />

        <section className="pb-16 pt-8 sm:pb-20 sm:pt-10 lg:pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-slate-200/80 bg-white/80 p-8 text-center shadow-lg shadow-slate-900/5 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/80 dark:shadow-black/20 sm:p-10"
            >
              <h2 className="mb-8 text-3xl font-bold text-slate-900 dark:text-slate-100">Mehr zu den Aktionen erfahren</h2>
              <p className="mx-auto mb-8 max-w-2xl text-base text-slate-600 dark:text-slate-300 sm:text-lg">
                Kontaktieren Sie uns für eine persönliche Beratung zu den aktuellen TRUMPF Aktionen.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <a
                  href="tel:+497141921912"
                  aria-label="Telefonnummer +49 7141 921 912"
                  className="inline-flex items-center justify-center rounded-xl bg-primary px-8 py-3 font-semibold text-white transition-colors duration-200 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-900"
                >
                  +49 7141 921 912
                </a>
                <a
                  href="mailto:burk-trutools@web.de"
                  aria-label="E-Mail an burk-trutools@web.de"
                  className="inline-flex items-center justify-center rounded-xl border border-primary/30 bg-primary/5 px-8 py-3 font-semibold text-primary transition-colors duration-200 hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-primary/40 dark:bg-primary/10 dark:text-blue-300 dark:hover:bg-primary/20 dark:focus-visible:ring-offset-slate-900"
                >
                  burk-trutools@web.de
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
