import { useState } from "react";
import { Button } from "@/components/ui/button";
import ProductCard, { type Product } from "./ProductCard";
import ProductModal from "./ProductModal";
import { products } from "@/data/products";

const categories = ["Alle", ...Array.from(new Set(products.map((p) => p.category)))];

interface ProductsSectionProps {
  id?: string;
}

export default function ProductsSection({ id }: ProductsSectionProps) {
  const [activeCategory, setActiveCategory] = useState("Alle");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts =
    activeCategory === "Alle"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section id={id} className="py-20 lg:py-32 bg-background" data-testid="section-products">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4" data-testid="text-products-title">
            TRUMPF TruTool Produkte
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto" data-testid="text-products-subtitle">
            Professionelle Elektrowerkzeuge für höchste Ansprüche in der Metallverarbeitung.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12" data-testid="filter-categories">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "secondary"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              data-testid={`button-category-${category.toLowerCase()}`}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetails={setSelectedProduct}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" data-testid="button-view-catalog">
            Gesamtkatalog ansehen
          </Button>
        </div>
      </div>

      <ProductModal
        product={selectedProduct}
        open={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
}
