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
    <section id={id} className="py-24 lg:py-32 bg-white" data-testid="section-products">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-widest mb-3">Produktkatalog</span>
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-5 text-slate-900" data-testid="text-products-title">
            TRUMPF TruTool Produkte
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed" data-testid="text-products-subtitle">
            Professionelle Elektrowerkzeuge für höchste Ansprüche in der Metallverarbeitung.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-14" data-testid="filter-categories">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              className={activeCategory === category ? "shadow-lg" : "hover:bg-slate-100"}
              onClick={() => setActiveCategory(category)}
              data-testid={`button-category-${category.toLowerCase()}`}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetails={setSelectedProduct}
            />
          ))}
        </div>

        <div className="text-center mt-16">
          <Button variant="outline" size="lg" className="shadow-sm hover:shadow-md transition-shadow" data-testid="button-view-catalog">
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
