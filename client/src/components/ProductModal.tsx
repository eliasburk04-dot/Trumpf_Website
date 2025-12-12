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
import { Check, Download, Phone } from "lucide-react";

interface ProductModalProps {
  product: Product | null;
  open: boolean;
  onClose: () => void;
}

// todo: remove mock functionality
const mockSpecs = {
  "Materialstärke": "Bis zu 7mm (Stahl)",
  "Schnittgeschwindigkeit": "6 m/min",
  "Gewicht": "2,8 kg",
  "Leistung": "710 W",
  "Hubzahl": "2.600 Hübe/min",
};

const mockApplications = [
  "Blechbearbeitung",
  "HLK-Kanalbau",
  "Automobilbau",
  "Industriemaschinen",
  "Baustahl",
];

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

        <div className="grid md:grid-cols-2 gap-8 mt-4">
          <div className="bg-muted rounded-md p-6">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto object-contain"
              data-testid="modal-image"
            />
          </div>

          <div>
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="w-full justify-start" data-testid="modal-tabs">
                <TabsTrigger value="overview">Übersicht</TabsTrigger>
                <TabsTrigger value="specs">Technische Daten</TabsTrigger>
                <TabsTrigger value="applications">Anwendungen</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-6">
                <p className="text-muted-foreground mb-6" data-testid="modal-description">
                  {product.description}
                </p>
                <div className="space-y-3 mb-6">
                  {["Präzisionstechnik", "Ergonomisches Design", "Lange Lebensdauer"].map(
                    (feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    )
                  )}
                </div>
                <div className="text-2xl font-bold mb-6" data-testid="modal-price">
                  Ab {product.price}
                </div>
              </TabsContent>

              <TabsContent value="specs" className="mt-6">
                <div className="space-y-3">
                  {Object.entries(mockSpecs).map(([key, value]) => (
                    <div
                      key={key}
                      className="flex justify-between py-2 border-b border-border last:border-0"
                    >
                      <span className="text-muted-foreground">{key}</span>
                      <span className="font-mono text-sm">{value}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="applications" className="mt-6">
                <ul className="space-y-2">
                  {mockApplications.map((app) => (
                    <li key={app} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary" />
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </TabsContent>
            </Tabs>

            <div className="flex flex-col gap-3 mt-8">
              <Button className="w-full gap-2" data-testid="modal-button-quote">
                <Phone className="w-4 h-4" />
                Angebot anfordern
              </Button>
              <Button variant="outline" className="w-full gap-2" data-testid="modal-button-download">
                <Download className="w-4 h-4" />
                Datenblatt herunterladen
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
