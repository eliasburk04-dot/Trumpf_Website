import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { type Product } from "./ProductCard";
import { Check, Phone } from "lucide-react";

interface ProductModalProps {
  product: Product | null;
  open: boolean;
  onClose: () => void;
}

const specKeyMap: Record<string, string> = {
  maxBlechdicke: "Max. Blechdicke",
  arbeitsgeschwindigkeit_m_min: "Arbeitsgeschw.",
  startloch_mm: "Startloch Ø",
  kleinster_radius_mm: "Kl. Radius",
  spannung_V: "Spannung",
  gewicht_kg: "Gewicht",
  abmessungen_mm: "Abmessungen",
  nennaufnahmeleistung_W: "Leistung",
  hubzahl_bei_nennlast_min_1: "Hubzahl (Last)",
  hubzahl_bei_leerlauf_min_1: "Hubzahl (Leer)",
};

const formatSpecKey = (key: string) => {
  return specKeyMap[key] || key.replace(/_/g, ' ');
};

const formatSpecValue = (key: string, value: any) => {
  if (typeof value === 'object' && value !== null) {
    return (
      <div className="flex flex-col gap-1 mt-1 bg-slate-50/50 p-2 rounded-md border border-slate-100">
        {Object.entries(value).map(([k, v]) => {
          const shortK = k
            .replace('stahl400', 'St400')
            .replace('stahl600', 'St600')
            .replace('stahl800', 'St800')
            .replace('alu250', 'Al250');
          return (
            <div key={k} className="flex justify-between items-center text-[13px] border-b border-slate-200/60 pb-1 last:border-0 last:pb-0">
              <span className="text-muted-foreground font-normal">{shortK}</span>
              <span className="font-semibold text-slate-700">{String(v)} mm</span>
            </div>
          );
        })}
      </div>
    );
  }
  
  const v = String(value);
  
  // Handle strings with " / " (variants)
  if (v.includes(' / ')) {
    return (
      <div className="flex flex-col gap-0.5">
        {v.split(' / ').map((part, i) => (
          <span key={i} className="block border-l-2 border-primary/20 pl-2 py-0.5">
            {formatUnit(key, part)}
          </span>
        ))}
      </div>
    );
  }

  return formatUnit(key, v);
};

const formatUnit = (key: string, value: string) => {
  let displayValue = value;
  if (key.endsWith('_m_min') && !value.includes('m/min')) displayValue = `${value} m/min`;
  else if (key.endsWith('_mm') && !value.includes('mm')) displayValue = `${value} mm`;
  else if (key.endsWith('_V') && !value.includes('V')) displayValue = `${value} V`;
  else if (key.endsWith('_kg') && !value.includes('kg')) displayValue = `${value} kg`;
  else if (key.endsWith('_W') && !value.includes('W')) displayValue = `${value} W`;
  else if (key.endsWith('_min_1') && !value.includes('/min')) displayValue = `${value} /min`;
  return displayValue;
};

export default function ProductModal({ product, open, onClose }: ProductModalProps) {
  if (!product) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto" data-testid="modal-product">
        <DialogHeader>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            {product.isNew && <Badge data-testid="modal-badge-new">Neu</Badge>}
            <Badge variant="secondary">TRUMPF Partner</Badge>
          </div>
          <DialogTitle className="text-2xl" data-testid="modal-title">
            {product.name}
          </DialogTitle>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-8 mt-6">
          <div className="space-y-6">
            <div className="aspect-square flex items-center justify-center p-0">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain"
                style={{ 
                  filter: 'brightness(1.12) contrast(1.08)',
                  mixBlendMode: 'multiply'
                }}
                data-testid="modal-img"
              />
            </div>

            {product.highlights && (
              <div className="bg-slate-50 rounded-xl p-5">
                <h4 className="font-bold text-slate-800 mb-4">Highlights</h4>
                <ul className="space-y-3">
                  {product.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                      <Check className="h-5 w-5 text-primary mt-0 shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div>
              <div className="inline-block bg-primary/10 text-primary font-bold px-4 py-2 rounded-full text-lg mb-4">{product.price}</div>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {product.longDescription || product.description}
              </p>

              <div className="flex flex-wrap gap-3">
                <Button className="w-full shadow-lg hover:shadow-xl transition-shadow" size="lg" data-testid="modal-btn-contact">
                  <Phone className="mr-2 h-5 w-5" />
                  {product.ctaPrimary || "Kontakt aufnehmen"}
                </Button>
              </div>
            </div>

            <Tabs defaultValue="specs" className="w-full">
              <TabsList className="w-full">
                <TabsTrigger value="specs" className="flex-1">Technische Daten</TabsTrigger>
                <TabsTrigger value="accessories" className="flex-1">Zubehör</TabsTrigger>
              </TabsList>

              <TabsContent value="specs" className="mt-4 space-y-4">
                {product.specs ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {Object.entries(product.specs).map(([key, value]) => (
                      <div key={key} className="space-y-1">
                        <span className="text-xs text-muted-foreground uppercase tracking-wider">
                          {formatSpecKey(key)}
                        </span>
                        <div className="font-medium text-sm">
                          {formatSpecValue(key, value)}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground">Keine technischen Daten verfügbar.</p>
                )}
              </TabsContent>

              <TabsContent value="accessories" className="mt-4">
                {product.accessories ? (
                  <ul className="space-y-2">
                    {product.accessories.map((acc, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {acc}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-muted-foreground">Kein Zubehör gelistet.</p>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
