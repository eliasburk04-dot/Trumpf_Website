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
          <div className="space-y-6">
            <div className="aspect-square bg-muted rounded-lg overflow-hidden flex items-center justify-center p-8">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain"
                data-testid="modal-img"
              />
            </div>

            {product.highlights && (
              <div>
                <h4 className="font-semibold mb-3">Highlights</h4>
                <ul className="space-y-2">
                  {product.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">{product.price}</h3>
              <p className="text-muted-foreground mb-4">
                {product.longDescription || product.description}
              </p>

              <div className="flex flex-wrap gap-3">
                <Button className="flex-1" data-testid="modal-btn-contact">
                  <Phone className="mr-2 h-4 w-4" />
                  {product.ctaPrimary || "Kontakt aufnehmen"}
                </Button>
                <Button variant="outline" className="flex-1" data-testid="modal-btn-datasheet">
                  <Download className="mr-2 h-4 w-4" />
                  {product.ctaSecondary || "Datenblatt"}
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
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(product.specs).map(([key, value]) => (
                      <div key={key} className="space-y-1">
                        <span className="text-xs text-muted-foreground uppercase tracking-wider">
                          {key.replace(/_/g, ' ')}
                        </span>
                        <p className="font-medium text-sm">
                          {typeof value === 'object' ? JSON.stringify(value).replace(/["{}]/g, '').replace(/:/g, ': ').replace(/,/g, ', ') : value}
                        </p>
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
