import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

export default function Datenschutz() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen font-sans bg-background text-foreground antialiased selection:bg-primary/20">
      <Navigation />
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="border-none shadow-lg rounded-3xl overflow-hidden bg-white dark:bg-slate-900">
            <CardContent className="p-8 md:p-12">
              <h1 className="text-4xl font-bold mb-8 text-slate-900 dark:text-white">Datenschutzerklärung</h1>
              
              <div className="space-y-8 text-slate-600 dark:text-slate-400 leading-relaxed">
                <section>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">1. Datenschutz auf einen Blick</h2>
                  <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">2. Verantwortliche Stelle</h2>
                  <div className="text-lg">
                    <p className="font-bold text-slate-900 dark:text-white">Thomas Burk GmbH</p>
                    <p>Friedrich-Naumann-Str. 11</p>
                    <p>71636 Ludwigsburg</p>
                    <p>Deutschland</p>
                    <p>E-Mail: <a href="mailto:burk-trutools@web.de" className="text-primary hover:underline">burk-trutools@web.de</a></p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">3. Datenerfassung auf unserer Website</h2>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">Wie erfassen wir Ihre Daten?</h3>
                  <p>Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.</p>
                  <p className="mt-4">Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">4. Zweck der Datenverarbeitung</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Beantwortung von Kontaktanfragen und Kommunikation mit Nutzern</li>
                    <li>Bereitstellung des Onlineangebotes, seiner Funktionen und Inhalte</li>
                    <li>Sicherheitsmaßnahmen</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">5. Ihre Rechte</h2>
                  <p>Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.</p>
                </section>

                <section className="pt-8 border-t border-slate-100 dark:border-slate-800 text-sm italic">
                  <p>Hinweis: Diese Datenschutzerklärung dient als Platzhalter und sollte durch eine rechtlich geprüfte Version ersetzt werden, die alle spezifischen Tools und Verarbeitungen Ihrer Website berücksichtigt.</p>
                </section>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
