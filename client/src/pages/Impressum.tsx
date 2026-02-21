import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Navigation } from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

export default function Impressum() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen font-sans bg-background text-foreground antialiased selection:bg-primary/20">
      <Helmet>
        <title>Impressum | Thomas Burk GmbH</title>
        <meta name="description" content="Impressum der Thomas Burk GmbH, Ihr TRUMPF Partner in Ludwigsburg." />
        <meta property="og:title" content="Impressum | Thomas Burk GmbH" />
        <meta property="og:description" content="Impressum der Thomas Burk GmbH." />
        <meta property="og:url" content="https://burk-trutool.de/impressum" />
        <link rel="canonical" href="https://burk-trutool.de/impressum" />
      </Helmet>

      <Navigation />
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="border-none shadow-lg rounded-3xl overflow-hidden bg-white dark:bg-slate-900">
            <CardContent className="p-8 md:p-12">
              <h1 className="text-4xl font-bold mb-8 text-slate-900 dark:text-white">Impressum</h1>

              <div className="space-y-8 text-slate-600 dark:text-slate-400 leading-relaxed">
                <section>
                  <p className="text-sm uppercase tracking-widest font-bold text-primary mb-2">Angaben gemäß § 5 TMG</p>
                  <div className="text-lg">
                    <p className="font-bold text-slate-900 dark:text-white">Thomas Burk GmbH</p>
                    <p>Friedrich-Naumann-Str. 11</p>
                    <p>71636 Ludwigsburg</p>
                    <p>Deutschland</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Kontakt</h2>
                  <div className="text-lg">
                    <p>Telefon: +49 (0) 7141 921 912</p>
                    <p>
                      E-Mail:{" "}
                      <a href="mailto:burk-trutools@web.de" className="text-primary hover:underline">
                        burk-trutools@web.de
                      </a>
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Vertretungsberechtigt</h2>
                  <p className="text-lg">Thomas Burk</p>
                </section>

                <section className="pt-8 border-t border-slate-100 dark:border-slate-800 text-sm text-slate-500">
                  <p>
                    Haftungsausschluss: Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links.
                    Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
                  </p>
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
