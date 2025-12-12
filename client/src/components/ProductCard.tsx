import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  price: string;
  image: string;
  isNew?: boolean;
}

interface ProductCardProps {
  product: Product;
  onViewDetails?: (product: Product) => void;
}

export default function ProductCard({ product, onViewDetails }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card
        className="group overflow-visible cursor-pointer hover-elevate"
        onClick={() => onViewDetails?.(product)}
        data-testid={`card-product-${product.id}`}
      >
        <div className="relative aspect-square bg-gradient-to-br from-muted to-muted/50 rounded-t-md overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain p-6 transition-transform duration-500 group-hover:scale-105"
            data-testid={`img-product-${product.id}`}
          />
          {product.isNew && (
            <Badge className="absolute top-3 left-3 text-xs" data-testid={`badge-new-${product.id}`}>
              Neu
            </Badge>
          )}
        </div>

        <div className="p-5">
          <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
            {product.category}
          </div>
          <h3
            className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors"
            data-testid={`text-product-name-${product.id}`}
          >
            {product.name}
          </h3>
          <p
            className="text-sm text-muted-foreground mb-4 line-clamp-2"
            data-testid={`text-product-desc-${product.id}`}
          >
            {product.description}
          </p>
          <div className="flex items-center justify-between gap-4">
            <div className="font-mono text-sm text-muted-foreground">
              Ab <span className="font-semibold text-foreground">{product.price}</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
              data-testid={`button-view-${product.id}`}
            >
              Details <ArrowRight className="w-3 h-3" />
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
