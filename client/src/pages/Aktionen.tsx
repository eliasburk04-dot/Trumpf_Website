import { Helmet } from "react-helmet";
import { Navigation } from "@/components/Navigation";
import Footer from "@/components/Footer";
import PromotionHammerAktion from "@/components/PromotionHammerAktion";
import PromotionPanelCutterAktion from "@/components/PromotionPanelCutterAktion";
import { motion } from "framer-motion";

export default function Aktionen() {
  return (
    <>
      <Helmet>
        <title>Aktionen 2026 | TRUMPF Elektrowerkzeuge</title>
        <meta name="description" content="Profitieren Sie von unseren aktuellen TRUMPF Promotions: HAMMER-AKTION mit gratis PS 100 und Frühjahrsaktion mit gratis N 160 Nibbler." />
        <meta property="og:title" content="Aktionen 2026 | TRUMPF Elektrowerkzeuge" />
        <meta property="og:description" content="Aktuelle Promotionen mit kostenlosen Zugaben für Baden-Württemberg und Bayern." />
      </Helmet>

      <Navigation />

      <main>
        {/* Header */}
        <section className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-50 py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
                Aktuelle Promotionen
              </h1>
              <p className="text-xl text-slate-200 max-w-3xl mx-auto">
                Sparen Sie jetzt mit unseren aktuellen TRUMPF Aktionen. Kostenlose Zugaben beim Kauf ausgewählter Produkte – nur für begrenzte Zeit!
              </p>
            </motion.div>
          </div>
        </section>

        {/* Promotion Sections */}
        <PromotionHammerAktion />
        <PromotionPanelCutterAktion />

        {/* Info Section */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Wollen Sie mehr erfahren?</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
                Kontaktieren Sie uns direkt für eine persönliche Beratung zu den aktuellen TRUMPF Aktionen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div
                  className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white rounded-lg font-semibold"
                >
                  ☎ +49 7141 921 912
                </div>
                <a
                  href="mailto:burk-trutools@web.de"
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors font-semibold"
                >
                  ✉ burk-trutools@web.de
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
