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
  longDescription?: string;
  highlights?: string[];
  accessories?: string[];
  specs?: Record<string, any>;
  ctaPrimary?: string;
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
      className="h-full"
    >
      <Card
        className="group h-full overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-slate-200/60 shadow-sm bg-white rounded-2xl"
        onClick={() => onViewDetails?.(product)}
        data-testid={`card-product-${product.id}`}
      >
        <div className="relative aspect-square flex items-center justify-center overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain transition-all duration-500 group-hover:scale-110"
            style={{ 
              filter: 'brightness(1.12) contrast(1.08)',
              mixBlendMode: 'multiply'
            }}
            data-testid={`img-product-${product.id}`}
          />
          {product.isNew && (
            <Badge className="absolute top-4 left-4 text-xs bg-primary text-white shadow-lg" data-testid={`badge-new-${product.id}`}>
              Neu
            </Badge>
          )}
        </div>

        <div className="p-5 bg-white">
          <div className="text-xs font-semibold text-primary/70 uppercase tracking-widest mb-2">
            {product.category}
          </div>
          <h3
            className="font-bold text-lg mb-2 text-slate-800 group-hover:text-primary transition-colors line-clamp-1"
            data-testid={`text-product-name-${product.id}`}
          >
            {product.name}
          </h3>
          <p
            className="text-sm text-slate-500 mb-4 line-clamp-2 leading-relaxed"
            data-testid={`text-product-desc-${product.id}`}
          >
            {product.description}
          </p>
          <div className="flex items-center justify-between gap-4 pt-2 border-t border-slate-100">
            <div className="text-sm text-slate-600">
              <span className="font-bold text-primary text-base">{product.price}</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="gap-1 text-primary hover:bg-primary/10 font-medium"
              data-testid={`button-view-${product.id}`}
            >
              Details <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
