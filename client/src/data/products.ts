import { Product } from "@/components/ProductCard";

const productImages = import.meta.glob("../assets/products/*.{png,jpg,jpeg,webp,avif}", {
  eager: true,
  import: "default",
});

function getProductImage(slug: string): string {
  const preferredExtensions = ["avif", "webp", "jpg", "jpeg", "png"];
  const candidates = Object.entries(productImages).filter(([path]) => {
    const fileName = path.split("/").pop()?.split(".")[0] ?? "";
    return fileName === slug || path.includes(`/${slug}-`);
  });

  if (candidates.length > 0) {
    candidates.sort(([pathA], [pathB]) => {
      const extA = pathA.split(".").pop() ?? "";
      const extB = pathB.split(".").pop() ?? "";
      return preferredExtensions.indexOf(extA) - preferredExtensions.indexOf(extB);
    });
    return candidates[0][1] as string;
  }

  for (const path in productImages) {
    if (path.includes(slug)) {
      return productImages[path] as string;
    }
  }

  return "";
}

export const products: Product[] = [
  {
    id: "trutool-c-160",
    name: "TruTool C 160 (12V)",
    category: "Schlitzscheren",
    description: "Leichte Schlitzschere für dünne Bleche – präzise, verwindungsfrei, mit freier Sicht auf die Schnittlinie.",
    price: "Auf Anfrage",
    image: getProductImage("trutool-c-160"),
    longDescription: "Die TruTool C 160 ist die kompakte Lösung für saubere Trennschnitte in dünnen Blechen und Feinblech. Sie arbeitet funkenfrei und erzeugt glatte Kanten ohne Verzug. Dank der übersichtlichen Bauform behalten Anwender die Schnittlinie stets im Blick und setzen die Maschine schnell und sicher an – auch bei Innenausschnitten. Der werkzeuglose Messerwechsel reduziert Rüstzeiten auf ein Minimum. In der 12V‑Akku‑Variante ist sie extrem mobil und ideal für Montageeinsätze.",
    highlights: [
      "Saubere Kanten ohne Funkenflug",
      "Gute Sicht auf die Schnittlinie",
      "Werkzeugloser Messerwechsel",
      "Sehr handlich und leicht",
      "Hohe Schnittgeschwindigkeit"
    ],
    accessories: ["Messer (gerade)", "Kurvenmesser", "12V Akku/ Ladegerät"],
    specs: {
      "maxBlechdicke": {"stahl400": 1.6, "stahl600": 1.2, "alu250": 2.0},
      "arbeitsgeschwindigkeit_m_min": 9,
      "startloch_mm": 15,
      "kleinster_radius_mm": "90 / 90",
      "spannung_V": 12,
      "gewicht_kg": 1.5,
      "abmessungen_mm": "357 x 88"
    },
    ctaPrimary: "Jetzt anfragen",
  },
  {
    id: "trutool-c-200",
    name: "TruTool C 200 (18V)",
    category: "Schlitzscheren",
    description: "Kraftvolle Schlitzschere mit 18V Akku für stärkere Bleche und zügige Schnitte.",
    price: "Auf Anfrage",
    image: getProductImage("trutool-c-200"),
    longDescription: "Die TruTool C 200 liefert akkubetrieben konstante Leistung für das Trennen stärkerer Blechdicken. Sie überzeugt mit hoher Schnittgeschwindigkeit und stabiler Führung – ideal für lange Schnitte, Konturen und Besäumarbeiten. Der optionale Spanabtrenner erleichtert Innenausschnitte und verhindert verfangene Späne. Ergonomische Griffflächen und die ausgewogene Gewichtsverteilung sorgen für komfortables Arbeiten in jeder Lage.",
    highlights: [
      "18V Akku‑Power für mehr Materialstärke",
      "Hohe Schnittgeschwindigkeit",
      "Optionaler Spanabtrenner",
      "Ergonomische Handlage",
      "Schneller Messerwechsel"
    ],
    accessories: ["Messer-Sets", "Spanabtrenner", "18V Akku/ Ladegerät"],
    specs: {
      "maxBlechdicke": {"stahl400": 2.0, "stahl600": 1.5, "alu250": 3.0},
      "arbeitsgeschwindigkeit_m_min": 20,
      "startloch_mm": 10,
      "kleinster_radius_mm": "160 / 160",
      "spannung_V": 18,
      "gewicht_kg": 2.4,
      "abmessungen_mm": "394 x 119"
    },
    ctaPrimary: "Jetzt anfragen",
  },
  {
    id: "trutool-c-250",
    name: "TruTool C 250",
    category: "Schlitzscheren",
    description: "Schnelle Schlitzschere für lange Schnitte – optional mit Spanabtrennung.",
    price: "Auf Anfrage",
    image: getProductImage("trutool-c-250"),
    longDescription: "Die TruTool C 250 ist für Tempo auf langen, geraden Schnitten konzipiert und erzeugt glatte, gratarme Kanten. Mit optionalem Spanabtrenner eignet sie sich hervorragend für Innenausschnitte und Ausklinkungen. Die robuste Mechanik sorgt für lange Standzeiten, während die kompakte Bauform eine sichere Führung ermöglicht. Erhältlich als Netz‑ und Akkuvariante.",
    highlights: [
      "Sehr hohe Schnittgeschwindigkeit",
      "Optionaler Spanabtrenner",
      "Robuste Mechanik, lange Standzeiten",
      "Gute Sicht auf die Schnittlinie",
      "Netz- und Akkuvarianten verfügbar"
    ],
    accessories: ["Messer gerade/kurve", "Spanabtrenner", "18V Akku/ Ladegerät"],
    specs: {
      "spannung_V": "Netz / 18"
    },
    ctaPrimary: "Jetzt anfragen",
  },
  {
    id: "trutool-s-114",
    name: "TruTool S 114 (12V)",
    category: "Scheren",
    description: "Kompakte Schere für Radien und Konturen mit freier Sicht auf den Schnitt.",
    price: "Auf Anfrage",
    image: getProductImage("trutool-s-114"),
    longDescription: "Die TruTool S 114 ist auf enge Radien und kurvige Konturen ausgelegt. Sie schneidet dünne Bleche präzise und verzugsarm, wobei die Sicht auf die Schnittlinie stets erhalten bleibt. Durch die ergonomische Bauform ist die Maschine leicht zu führen und ideal für Dach‑, Fassaden‑ und Lüftungsarbeiten. Der Werkzeugwechsel gelingt schnell und ohne Spezialwerkzeug.",
    highlights: [
      "Sehr gute Radienfähigkeit",
      "Saubere Schnitte ohne Verzug",
      "Werkzeugloser Messerwechsel",
      "Leicht und handlich",
      "Gute Sicht auf die Schnittlinie"
    ],
    accessories: ["Ersatzmesser", "Führungsschiene", "12V Akku/ Ladegerät"],
    specs: {
      "spannung_V": 12,
      "arbeitsgeschwindigkeit_m_min": 13,
      "gewicht_kg": 1.8,
      "abmessungen_mm": "380 x 95"
    },
    ctaPrimary: "Jetzt anfragen",
  },
  {
    id: "trutool-s-160",
    name: "TruTool S 160 (12V)",
    category: "Scheren",
    description: "Feinblech präzise trennen – verzugsarm und mit hoher Schnittqualität.",
    price: "Auf Anfrage",
    image: getProductImage("trutool-s-160"),
    longDescription: "Die TruTool S 160 ist die Schere für feine Bleche und Sichtkanten. Sie vereint präzise Führung mit hoher Schnittqualität und geringer Materialverformung. Anwender profitieren von der guten Radienfähigkeit und einer klaren Sicht auf die Schnittlinie. Das 12V‑Akkusystem ermöglicht mobilen Einsatz ohne Abstriche bei der Performance.",
    highlights: [
      "Sehr saubere Schnittkanten",
      "Gute Radienführung",
      "Niedrige Verzugstendenz",
      "Leicht und kompakt",
      "12V Akku‑System"
    ],
    accessories: ["Ersatzmesser", "Führung", "Akku/ Ladegerät"],
    specs: {
      "spannung_V": 12,
      "maxBlechdicke": {"stahl400": 1.6, "stahl600": 1.2, "stahl800": 1.0, "alu250": 2.0},
      "arbeitsgeschwindigkeit_m_min": 9,
      "abmessungen_mm": "295 x 156"
    },
    ctaPrimary: "Jetzt anfragen",
  },
  {
    id: "trutool-s-250",
    name: "TruTool S 250",
    category: "Scheren",
    description: "Universelle Schere für Standardanwendungen – schnell und präzise.",
    price: "Auf Anfrage",
    image: getProductImage("trutool-s-250"),
    longDescription: "Die TruTool S 250 deckt ein breites Anwendungsspektrum ab, von geraden Schnitten bis zu weiten Radien. Sie verbindet hohe Schnittgeschwindigkeit mit reproduzierbarer Kantenqualität und ist als Netz‑ oder 18V‑Akkuvariante verfügbar. Dank guter Balance liegt sie sicher in der Hand und unterstützt ermüdungsarmes Arbeiten.",
    highlights: [
      "Schnell und universell",
      "Saubere Kanten",
      "Radienfähig",
      "Netz- und Akkuausführung",
      "Ergonomische Bauform"
    ],
    accessories: ["Ersatzmesser", "Führung", "18V Akku/ Ladegerät"],
    specs: {
      "spannung_V": 18,
      "maxBlechdicke": {"stahl400": 2.5, "stahl600": 2.0, "stahl800": 1.5, "alu250": 3.0},
      "arbeitsgeschwindigkeit_m_min": 28,
      "abmessungen_mm": "325 x 188"
    },
    ctaPrimary: "Jetzt anfragen",
  },
  {
    id: "trutool-s-450",
    name: "TruTool S 450",
    category: "Scheren",
    description: "Leistungsstarke Schere für dicke Bleche bis in den 4,5‑mm‑Bereich.",
    price: "Auf Anfrage",
    image: getProductImage("trutool-s-450"),
    longDescription: "Die TruTool S 450 ist auf höhere Materialstärken ausgelegt und bietet einen kraftvollen, kontrollierten Schnitt. Die stabile Führung ermöglicht sichere Ergebnisse an langen Kanten wie auch an Konturen. Mit ihrer robusten Mechanik ist die Maschine für den Dauereinsatz in Werkstatt und Montage prädestiniert.",
    highlights: [
      "Hohe Schnittkraft",
      "Stabile, sichere Führung",
      "Gute Sicht auf die Schnittlinie",
      "Robuste Mechanik für Dauereinsatz"
    ],
    accessories: ["Ersatzmesser", "Führung"],
    specs: {
      "maxBlechdicke": {"stahl400": 4.5, "stahl600": 3.5, "stahl800": 2.5, "alu250": 5.0},
      "arbeitsgeschwindigkeit_m_min": 6,
      "nennaufnahmeleistung_W": 1700,
      "gewicht_kg": 6.2,
      "abmessungen_mm": "334 x 280"
    },
    ctaPrimary: "Jetzt anfragen",
  },
  {
    id: "trutool-n-160",
    name: "TruTool N 160 (12V)",
    category: "Nibbler",
    description: "Wendiger Nibbler für enge Radien und präzise Innenausschnitte.",
    price: "Auf Anfrage",
    image: getProductImage("trutool-n-160"),
    longDescription: "Der TruTool N 160 trennt Feinblech funkenfrei und verzugsarm. Sein kleiner Kurvenradius prädestiniert ihn für Ausschnitte und Konturen. Dank 12V‑Akkubetrieb ist er mobil einsetzbar, mit sehr guter Sicht auf die Schnittlinie. Stempel und Matrize lassen sich schnell wechseln und halten die Prozesssicherheit hoch.",
    highlights: [
      "Kleine Radien möglich",
      "Funkenfreies Trennen",
      "Gute Sicht und Führung",
      "Schneller Werkzeugwechsel",
      "12V Akku‑System"
    ],
    accessories: ["Ersatzstempel", "Ersatzmatrize", "Schneidöl", "Akku/ Ladegerät"],
    specs: {
      "maxBlechdicke": {"stahl400": 1.6, "stahl600": 1.0, "stahl800": 0.7, "alu250": 2.0},
      "arbeitsgeschwindigkeit_m_min": 2.2,
      "startloch_mm": 24,
      "kleinster_radius_mm": 12,
      "spannung_V": 12,
      "gewicht_kg": 1.6,
      "abmessungen_mm": "307 x 170"
    },
    ctaPrimary: "Jetzt anfragen",
  },
  {
    id: "trutool-n-200",
    name: "TruTool N 200",
    category: "Nibbler",
    description: "Universeller Nibbler bis ca. 2,0 mm Stahl – verzugsfrei und profilgängig.",
    price: "Auf Anfrage",
    image: getProductImage("trutool-n-200"),
    longDescription: "Der TruTool N 200 ist das universelle Nibbler‑Werkzeug für Bleche mittlerer Stärke. Er arbeitet funkenfrei, erzeugt glatte Kanten und meistert auch Profile und Trapezbleche sicher. Mit seiner guten Sicht und dem schnellen Werkzeugwechsel ist er für Werkstatt und Montage gleichermaßen geeignet.",
    highlights: [
      "Universell bis ~2,0 mm Stahl",
      "Profil- und trapezblechgängig",
      "Saubere Schnittkanten",
      "Schneller Werkzeugwechsel"
    ],
    accessories: ["Stempel", "Matrizen", "Führungshilfe"],
    specs: {
      "maxBlechdicke": {"stahl400": 2.0, "stahl600": 1.5, "stahl800": 1.0, "alu250": 2.5},
      "arbeitsgeschwindigkeit_m_min": 1.7,
      "startloch_mm": 17,
      "kleinster_radius_mm": 4,
      "nennaufnahmeleistung_W": 550,
      "gewicht_kg": 1.8,
      "abmessungen_mm": "267 x 155"
    },
    ctaPrimary: "Jetzt anfragen",
  },
  {
    id: "trutool-n-350",
    name: "TruTool N 350",
    category: "Nibbler",
    description: "Robuster Nibbler für dickere Bleche mit stabiler Führung.",
    price: "Auf Anfrage",
    image: getProductImage("trutool-n-350"),
    longDescription: "Der TruTool N 350 ist für erhöhte Materialstärken ausgelegt und kombiniert hohe Schnittkraft mit guter Führbarkeit. Er eignet sich für lange Schnitte, Konturen und Ausschnitte in Stahl und Aluminium. Die robuste Konstruktion ist für den Dauerbetrieb optimiert.",
    highlights: [
      "Hohe Schnittleistung",
      "Gute Profilgängigkeit",
      "Robust für den Dauereinsatz",
      "Saubere, gratarme Kante"
    ],
    accessories: ["Stempel", "Matrizen", "Schneidöl"],
    specs: {
      "maxBlechdicke": {"stahl400": 3.5, "stahl600": 2.3, "stahl800": 1.8, "alu250": 3.5},
      "arbeitsgeschwindigkeit_m_min": 1.4,
      "startloch_mm": 30,
      "kleinster_radius_mm": 7,
      "nennaufnahmeleistung_W": 700,
      "gewicht_kg": 3.5,
      "abmessungen_mm": "381 x 227"
    },
    ctaPrimary: "Jetzt anfragen",
  },
  {
    id: "trutool-n-500",
    name: "TruTool N 500",
    category: "Nibbler",
    description: "Kraftvoller Nibbler mit hoher Profilgängigkeit für stärkere Materialien.",
    price: "Auf Anfrage",
    image: getProductImage("trutool-n-500"),
    longDescription: "Der TruTool N 500 trennt dickere Bleche zuverlässig und sauber. Durch seine Profilgängigkeit bewältigt er auch geformte Bleche und Schweißnahtüberbrückungen. Er ist die erste Wahl, wenn Leistung und Schnittbild gleichermaßen zählen.",
    highlights: [
      "Sehr hohe Leistung",
      "Profilgängig",
      "Gute Sicht und Kontrolle",
      "Lange Standzeiten"
    ],
    accessories: ["Stempel", "Matrizen", "Führungsschuh"],
    specs: {
      "maxBlechdicke": {"stahl400": 5.0, "stahl600": 4.0, "stahl800": 3.0, "alu250": 10.0},
      "arbeitsgeschwindigkeit_m_min": 1.1,
      "startloch_mm": 75,
      "kleinster_radius_mm": 300,
      "nennaufnahmeleistung_W": 1200,
      "gewicht_kg": 8.3,
      "abmessungen_mm": "381 x 235"
    },
    ctaPrimary: "Jetzt anfragen",
  },
  {
    id: "trutool-n-700",
    name: "TruTool N 700",
    category: "Nibbler",
    description: "Nibbler für Bleche bis ca. 7,0 mm – funkenfrei und prozesssicher.",
    price: "Auf Anfrage",
    image: getProductImage("trutool-n-700"),
    longDescription: "Der TruTool N 700 ist für hohe Materialstärken konzipiert und ermöglicht funkenfreies Trennen ohne Verzug. Er sorgt für sichere Ergebnisse bei Zuschnitt, Ausschnitt und Demontagearbeiten. Die Bauform unterstützt eine stabile Führung auch an geformten Blechen.",
    highlights: [
      "Trennen dicker Bleche bis ~7,0 mm",
      "Funkenfrei, prozesssicher",
      "Stabile Führung",
      "Robuste Mechanik"
    ],
    accessories: ["Schwerlast‑Stempel", "Matrizen", "Schneidöl"],
    specs: {
      "maxBlechdicke": {"stahl400": 7.0, "stahl600": 5.0, "stahl800": 4.0, "alu250": 10.0},
      "arbeitsgeschwindigkeit_m_min": 1.7,
      "startloch_mm": 75,
      "kleinster_radius_mm": 300,
      "nennaufnahmeleistung_W": 1700,
      "gewicht_kg": 14.7,
      "abmessungen_mm": "468 x 319"
    },
    ctaPrimary: "Jetzt anfragen",
  },
  {
    id: "trutool-n-1000",
    name: "TruTool N 1000",
    category: "Nibbler",
    description: "Nibbler für Schwerstarbeiten bis ca. 10 mm – sicher und effizient.",
    price: "Auf Anfrage",
    image: getProductImage("trutool-n-1000"),
    longDescription: "Der TruTool N 1000 ist für den Rückbau, Tankdemontage und Schwerstarbeiten entwickelt. Er trennt Materialstärken bis etwa 10 mm funkenfrei und prozesssicher – ideal in sensiblen Umgebungen. Die Maschine bietet eine stabile Führung und hohe Standzeiten der Werkzeuge.",
    highlights: [
      "Sehr hohe Materialstärken bis ~10 mm",
      "Funkenfreies Trennen",
      "Prozesssicherheit",
      "Lange Standzeiten"
    ],
    accessories: ["Stempel", "Matrizen", "Schutzführungen"],
    specs: {
      "maxBlechdicke": {"stahl400": 10.0, "stahl600": 7.0, "stahl800": 5.0, "alu250": 12.0},
      "arbeitsgeschwindigkeit_m_min": 1.3,
      "startloch_mm": 50,
      "kleinster_radius_mm": 140,
      "nennaufnahmeleistung_W": 2600,
      "gewicht_kg": 18.0,
      "abmessungen_mm": "645 x 301"
    },
    ctaPrimary: "Jetzt anfragen",
  },
  {
    id: "trutool-pn-200",
    name: "TruTool PN 200",
    category: "Profilnibbler",
    description: "Profilnibbler für Trapezblech – verzugsfrei mit hoher Wendigkeit.",
    price: "Auf Anfrage",
    image: getProductImage("trutool-pn-200"),
    longDescription: "Der TruTool PN 200 ist spezialisiert auf Profile und Trapezbleche. Er arbeitet verzugsfrei und überzeugt durch hohe Wendigkeit in Sicken und Wellen. Mit optionaler 18V‑Akkutechnik bleibt er mobil und liefert konstante Ergebnisse auf der Baustelle.",
    highlights: [
      "Verzugsfreies Trennen an Profilen",
      "Hohe Wendigkeit",
      "Schneller Werkzeugwechsel",
      "Netz- und 18V‑Akkuvarianten"
    ],
    accessories: ["Stempel/ Matrizen‑Sets", "Gleit‑/Führungselemente", "18V Akku/ Ladegerät"],
    specs: {
      "maxBlechdicke": {"stahl400": 2.0, "stahl600": 1.5, "stahl800": 1.0, "alu250": 3.0},
      "arbeitsgeschwindigkeit_m_min": 2.1,
      "startloch_mm": 24,
      "kleinster_radius_mm": 50,
      "nennaufnahmeleistung_W": 550,
      "gewicht_kg": 1.8,
      "abmessungen_mm": "267 x 147"
    },
    ctaPrimary: "Jetzt anfragen",
  },
  {
    id: "trutool-pn-201",
    name: "TruTool PN 201",
    category: "Profilnibbler",
    description: "Profilnibbler für größere Profilhöhen und Trapezblech mit hoher Sicht.",
    price: "Auf Anfrage",
    image: getProductImage("trutool-pn-201"),
    longDescription: "Der TruTool PN 201 erweitert den Arbeitsbereich für höhere Profile und tiefe Sicken. Er verbindet hohe Profilgängigkeit mit guter Sicht auf den Schnitt. Ideal für Dach und Fassade, wo zügige und reproduzierbare Schnitte gefordert sind.",
    highlights: [
      "Für größere Profilhöhen",
      "Sehr profilgängig",
      "Gute Sicht auf die Schnittlinie",
      "Optional mit 18V Akku"
    ],
    accessories: ["Stempel/ Matrizen", "Führungselemente", "18V Akku/ Ladegerät"],
    specs: {
      "maxBlechdicke": {"stahl400": 2.0, "stahl600": 1.5, "stahl800": 1.0, "alu250": 3.0},
      "arbeitsgeschwindigkeit_m_min": 2.2,
      "startloch_mm": 24,
      "kleinster_radius_mm": 50,
      "nennaufnahmeleistung_W": 550,
      "gewicht_kg": 2.0,
      "abmessungen_mm": "267 x 317"
    },
    ctaPrimary: "Jetzt anfragen",
  },
  {
    id: "trutool-tpc-165",
    name: "TruTool TPC 165",
    category: "Paneelsägen",
    description: "Paneelsägen für Sandwichpaneele – saubere Innenausschnitte und Tauchschnitte.",
    price: "Auf Anfrage",
    image: getProductImage("trutool-tpc-165"),
    longDescription: "Der TruTool TPC 165 ermöglicht Tauchschnitte und präzise Innenausschnitte in Sandwichpaneelen ohne Vorschneiden. Die einstellbare Schnitttiefe und die spezielle Kettengeometrie sorgen für geringe Ausrisse an den Deckschichten. Er ist damit die schnelle, saubere Lösung für Fenster‑ und Türöffnungen in Paneelen.",
    highlights: [
      "Tauchschnitt ohne Vorstechen",
      "Exakte Schnitttiefe einstellbar",
      "Geringe Ausrisse an Deckschichten",
      "Sichere Führung auf dem Paneel"
    ],
    accessories: ["Führungsschiene", "Schneidkette", "Absaugadapter"],
    specs: {
      "arbeitsgeschwindigkeit_m_min": 4,
      "nennaufnahmeleistung_W": 1700,
      "gewicht_kg": 9.6,
      "abmessungen_mm": "493 x 231"
    },
    ctaPrimary: "Jetzt anfragen",
  },
  {
    id: "trutool-f-125",
    name: "TruTool F 125",
    category: "Falzschließer",
    description: "Falzschließen an Steh- und Winkelfalzen – dicht, schnell, reproduzierbar.",
    price: "Auf Anfrage",
    image: getProductImage("trutool-f-125"),
    longDescription: "Der TruTool F 125 schließt Steh‑ und Winkelfalze mit gleichbleibender Qualität. Er ist für den Baustelleneinsatz konzipiert und ermöglicht schnelle, dichte Verbindungen ohne Nacharbeit. Die vibrationsarme Arbeitsweise trägt zu einem angenehmen Handling bei.",
    highlights: [
      "Konstante Dichtheit",
      "Schnelles Falzschließen",
      "Vibrationsarm",
      "Einfache Handhabung"
    ],
    accessories: ["Führungsrollen", "Schmiermittel"],
    specs: {
      "nennaufnahmeleistung_W": 550,
      "gewicht_kg": 2.8,
      "abmessungen_mm": "279 x 149"
    },
    ctaPrimary: "Jetzt anfragen",
  },
  {
    id: "trutool-f-140",
    name: "TruTool F 140",
    category: "Falzschließer",
    description: "Pittsburghfalze sicher schließen – automatische Blechdickenanpassung.",
    price: "Auf Anfrage",
    image: getProductImage("trutool-f-140"),
    longDescription: "Der TruTool F 140 ist auf Pittsburghfalze spezialisiert. Er passt sich automatisch an die Blechdicke an und liefert dadurch reproduzierbare Ergebnisse bei hoher Geschwindigkeit. Ideal für die Lüftungs‑ und Klimakanal‑Fertigung.",
    highlights: [
      "Automatische Anpassung an Blechdicke",
      "Konstante Falzqualität",
      "Vibrationsarm",
      "Schneller Vorschub"
    ],
    accessories: ["Führungsrollen", "Schmiermittel"],
    specs: {
      "nennaufnahmeleistung_W": 550,
      "gewicht_kg": 4.3,
      "abmessungen_mm": "321 x 257"
    },
    ctaPrimary: "Jetzt anfragen",
  },
  {
    id: "trutool-f-300",
    name: "TruTool F 300",
    category: "Falzschließer",
    description: "Falzschließen an Kanälen – dichte Kanäle direkt am Montageplatz.",
    price: "Auf Anfrage",
    image: getProductImage("trutool-f-300"),
    longDescription: "Der TruTool F 300 schließt Kanalverbindungen schnell und zuverlässig. Die Maschine ist für den Einsatz direkt am Montageplatz konzipiert und liefert konstante Dichtheit. Als 1700‑W‑Variante steht zusätzliche Leistungsreserve für dickere Falze zur Verfügung.",
    highlights: [
      "Konstante Dichtheit",
      "1700‑W‑Leistungsvariante",
      "Einfache Führung",
      "Robuste Bauweise"
    ],
    accessories: ["Führungsrollen", "Schmiermittel"],
    specs: {
      "nennaufnahmeleistung_W": "550 / 1700 (Variante)",
      "gewicht_kg": "5.5 / 6.5 (Variante)",
      "abmessungen_mm": "285 x 406 / 285 x 391 (Variante)"
    },
    ctaPrimary: "Jetzt anfragen",
  },
  {
    id: "trutool-f-301",
    name: "TruTool F 301",
    category: "Falzschließer",
    description: "Konstante Ergebnisse bei niedriger Vibration – komfortabel im Dauereinsatz.",
    price: "Auf Anfrage",
    image: getProductImage("trutool-f-301"),
    longDescription: "Der TruTool F 301 liefert gleichbleibende Falzqualität bei reduziertem Vibrationsniveau. Das erhöht den Bedienkomfort, insbesondere bei längeren Falzstrecken. Die robuste Ausführung ist für die Anforderungen in der Lüftungstechnik ausgelegt.",
    highlights: [
      "Vibrationsarme Arbeitsweise",
      "Reproduzierbare Falzqualität",
      "Robuste Bauweise",
      "Sichere Führung"
    ],
    accessories: ["Führungsrollen", "Schmiermittel"],
    specs: {
      "nennaufnahmeleistung_W": 550,
      "gewicht_kg": 5.3,
      "abmessungen_mm": "285 x 356"
    },
    ctaPrimary: "Jetzt anfragen",
  },
  {
    id: "trutool-tf-350",
    name: "TruTool TF 350",
    category: "Fügepresse",
    description: "Verbinden ohne Nieten oder Schrauben – korrosionsbeständige Fügepunkte.",
    price: "Auf Anfrage",
    image: getProductImage("trutool-tf-350"),
    longDescription: "Die TruTool TF 350 fügt Blechteile formschlüssig ohne Zusatzteile. Das Verfahren erzeugt korrosionsbeständige, belastbare Verbindungen bei minimaler Oberflächenbeeinflussung. Ideal für HVAC, Geräte‑ und Gehäusebau, wenn Prozesssicherheit und Kosteneffizienz gefragt sind.",
    highlights: [
      "Keine Nieten/Schrauben erforderlich",
      "Korrosionsbeständige Fügepunkte",
      "Hohe Prozesssicherheit",
      "Schnelle Taktzeiten"
    ],
    accessories: ["Fügewerkzeuge (Paar)", "Anschläge/ Auflagen", "18V Akku‑Variante verfügbar"],
    specs: {
      "nennaufnahmeleistung_W": 1700,
      "gewicht_kg": 8.3
    },
    ctaPrimary: "Jetzt anfragen",
  },
  {
    id: "trutool-tka-700",
    name: "TruTool TKA 700",
    category: "Kantenfräsgerät",
    description: "Kanten fräsen: Fasen und Rundungen an Sichtkanten in konstanter Qualität.",
    price: "Auf Anfrage",
    image: getProductImage("trutool-tka-700"),
    longDescription: "Das Kantenfräsgerät TruTool TKA 700 erzeugt gleichmäßig hohe Oberflächenqualität an Sichtkanten. Fasenwinkel und ‑tiefe sind reproduzierbar einstellbar, ebenso die Verrundung. Ideal zur Schweißnahtvorbereitung und Kantenveredelung im Stahl‑ und Metallbau.",
    highlights: [
      "Konstante Oberflächenqualität",
      "Einstellbarer Winkel und Tiefe",
      "Hoher Abtrag",
      "Sichere Führung auch an Konturen"
    ],
    accessories: ["Fräsköpfe (Fase/R‑Radius)", "Führungsplatten"],
    specs: {
      "nennaufnahmeleistung_W": 1700,
      "gewicht_kg": 3.9,
      "abmessungen_mm": "397 x 149"
    },
    ctaPrimary: "Jetzt anfragen",
  },
  {
    id: "trutool-tka-1500",
    name: "TruTool TKA 1500",
    category: "Kantenfräsgerät",
    description: "Lange Fasen mit hoher Oberflächenqualität – präzise einstellbar.",
    price: "Auf Anfrage",
    image: getProductImage("trutool-tka-1500"),
    longDescription: "Der TruTool TKA 1500 ist für lange Fasen konzipiert und liefert eine sehr hochwertige Oberfläche. Winkel und Tiefe sind fein justierbar, sodass Vorbereitung und Sichtkante in einem Durchgang gelingen. Das Gerät eignet sich für Stahl und Edelstahl gleichermaßen.",
    highlights: [
      "Lange Fasen in hoher Qualität",
      "Fein einstellbarer Winkel/Tiefe",
      "Hohe Vorschubleistung",
      "Robuste Bauweise"
    ],
    accessories: ["Fräsköpfe (Fase/R)", "Führungen"],
    specs: {
      "nennaufnahmeleistung_W": 2600,
      "gewicht_kg": 10.0,
      "abmessungen_mm": "679 x 197"
    },
    ctaPrimary: "Jetzt anfragen",
  },
  {
    id: "trutool-tkf-700",
    name: "TruTool TKF 700",
    category: "Schweißkantenformer",
    description: "Schweißkanten in konstanter Qualität – winkel‑ und tiefenverstellbar.",
    price: "Auf Anfrage",
    image: getProductImage("trutool-tkf-700"),
    longDescription: "Der TruTool TKF 700 bereitet Schweißkanten schnell und reproduzierbar vor. Fasenwinkel und ‑tiefe sind einstellbar, sodass die Schweißnahtqualität konstant hoch bleibt. Das Gerät ist konturtauglich und damit auch für komplexe Bauteile geeignet.",
    highlights: [
      "Konstante Fasenqualität",
      "Einstellbarer Winkel und Tiefe",
      "Konturtauglich",
      "Hohe Prozesssicherheit"
    ],
    accessories: ["Fräsköpfe/ Messer", "Führungsplatten"],
    specs: {
      "nennaufnahmeleistung_W": 1700,
      "gewicht_kg": 5.3,
      "abmessungen_mm": "342 x 240"
    },
    ctaPrimary: "Jetzt anfragen",
  },
  {
    id: "trutool-tkf-1500",
    name: "TruTool TKF 1500",
    category: "Schweißkantenformer",
    description: "Schweißnahtvorbereitung bis ca. 15 mm – konstant und wirtschaftlich.",
    price: "Auf Anfrage",
    image: getProductImage("trutool-tkf-1500"),
    longDescription: "Der TruTool TKF 1500 erzeugt Fasen für die Schweißnahtvorbereitung mit gleichbleibend hoher Qualität. Dank hoher Abtragsleistung verkürzt er Prozesszeiten. Optional ist eine 2‑Gang‑Variante für Materialvielfalt verfügbar.",
    highlights: [
      "Fasen bis ~15 mm",
      "Hohe Abtragsleistung",
      "Option 2‑Gang‑Ausführung",
      "Konstante Qualität"
    ],
    accessories: ["Fräsköpfe/ Messer", "Führungen"],
    specs: {
      "nennaufnahmeleistung_W": 2600,
      "gewicht_kg": 16.5,
      "abmessungen_mm": "554 x 360"
    },
    ctaPrimary: "Jetzt anfragen",
  },
  {
    id: "trutool-ps-100",
    name: "TruTool PS 100",
    category: "Teileseparator",
    description: "Kleinteile aus Restgittern lösen – gratarm, sicher und reproduzierbar.",
    price: "Auf Anfrage",
    image: getProductImage("trutool-ps-100"),
    longDescription: "Der TruTool PS 100 löst Kleinteile schnell und kontrolliert aus Restgittern. Das Verfahren reduziert Grat und Nacharbeit deutlich und erhöht die Prozesssicherheit in der Teileentnahme. Ergonomie und sichere Auflage unterstützen zügiges Arbeiten.",
    highlights: [
      "Schonende Ablösung",
      "Weniger Grat und Nacharbeit",
      "Hohe Prozesssicherheit",
      "Ergonomisches Arbeiten"
    ],
    accessories: ["Auflagen/ Einsätze", "Schmiermittel"],
    specs: {
      "gewicht_kg": 1.2,
      "abmessungen_mm": "223 x 88"
    },
    ctaPrimary: "Jetzt anfragen",
  },
  {
    id: "trutool-tsc-100",
    name: "TruTool TSC 100",
    category: "Auflageleisten‑Reiniger",
    description: "Auflageleisten schnell reinigen – bessere Schnittqualität und Standzeit.",
    price: "Auf Anfrage",
    image: getProductImage("trutool-tsc-100"),
    longDescription: "Der TruTool TSC 100 reinigt Auflageleisten von Lasermaschinen effizient. Saubere Leisten verbessern die Schnittqualität und verlängern deren Standzeit. Die Maschine ist für schnelles, prozesssicheres Arbeiten ausgelegt und amortisiert sich durch reduzierte Nacharbeit.",
    highlights: [
      "Schnelle, gründliche Reinigung",
      "Verbesserte Schnittqualität",
      "Längere Leisten‑Standzeit",
      "Prozesssicher und einfach"
    ],
    accessories: ["Ersatzwerkzeuge", "Absaugadapter"],
    specs: {
      "arbeitsgeschwindigkeit_m_min": 8,
      "nennaufnahmeleistung_W": 1700,
      "gewicht_kg": 18.0,
      "abmessungen_mm": "2104 x 342"
    },
    ctaPrimary: "Jetzt anfragen",
  },
  {
    id: "trutool-tsc-200",
    name: "TruTool TSC 200",
    category: "Auflageleisten‑Reiniger",
    description: "Mehr Tempo auf langen Auflageleisten – komfortabel und prozesssicher.",
    price: "Auf Anfrage",
    image: getProductImage("trutool-tsc-200"),
    longDescription: "Der TruTool TSC 200 beschleunigt die Reinigung langer Auflageleisten. Er reduziert Stillstandzeiten, steigert die Schnittqualität und erhöht die Standzeiten der Leisten. Ergonomische Führung erleichtert die Bedienung.",
    highlights: [
      "Sehr schnelle Reinigung",
      "Höhere Maschinenverfügbarkeit",
      "Verbesserte Schnittqualität",
      "Ergonomische Führung"
    ],
    accessories: ["Ersatzwerkzeuge", "Absaugadapter"],
    specs: {
      "arbeitsgeschwindigkeit_m_min": 10,
      "nennaufnahmeleistung_W": 1700,
      "gewicht_kg": 19.8,
      "abmessungen_mm": "2002 x 430"
    },
    ctaPrimary: "Jetzt anfragen",
  },
  {
    id: "trutool-tc-200",
    name: "TruTool TC 200 (18V)",
    category: "Tube Cutter",
    description: "Kunststoffrohre sauber schneiden – mobil mit 18V Akku.",
    price: "Auf Anfrage",
    image: getProductImage("trutool-tc-200"),
    longDescription: "Der TruTool TC 200 schneidet Kunststoffrohre schnell, sauber und nahezu spänefrei. Durch den 18V‑Akkubetrieb ist er mobil und flexibel einsetzbar. Der Klingenwechsel erfolgt einfach und sicher.",
    highlights: [
      "Saubere Schnittkante",
      "Mobiler 18V Akku‑Betrieb",
      "Schneller Klingenwechsel",
      "Sicheres, kontrolliertes Arbeiten"
    ],
    accessories: ["Ersatzklingen", "Führung"],
    specs: {
      "spannung_V": 18
    },
    ctaPrimary: "Jetzt anfragen",
  }
];
