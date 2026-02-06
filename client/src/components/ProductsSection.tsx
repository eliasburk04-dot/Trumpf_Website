import { lazy, Suspense, useState } from "react";
import { Button } from "@/components/ui/button";
import ProductCard, { type Product } from "./ProductCard";
import { products } from "@/data/products";

const ProductModal = lazy(() => import("./ProductModal"));

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
    <section id={id} className="section bg-white dark:bg-slate-900" data-testid="section-products">
      <div className="container mx-auto px-4">
        <div className="section-header section-header-center">
          <span className="section-label">Produktkatalog</span>
          <h2 className="section-title text-slate-900 dark:text-white" data-testid="text-products-title">
            TRUMPF TruTool Produkte
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto" data-testid="text-products-subtitle">
            Professionelle Elektrowerkzeuge für hohe Ansprüche in der Metallverarbeitung.
          </p>
          <p className="text-sm text-muted-foreground mt-3 max-w-2xl mx-auto" data-testid="text-products-parts-note">
            Original-Ersatzteile und Verschleißteile für TRUMPF Maschinen - Verfügbarkeit auf Anfrage.
          </p>
          <Button variant="ghost" size="sm" className="mt-1 h-auto p-0 text-primary hover:bg-transparent hover:underline" asChild>
            <a href="/#kontakt" data-testid="link-products-parts-inquiry">Teile anfragen</a>
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-14" data-testid="filter-categories">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              className={activeCategory === category ? "shadow-lg" : "hover:bg-slate-100 dark:hover:bg-slate-800"}
              onClick={() => setActiveCategory(category)}
              data-testid={`button-category-${category.toLowerCase()}`}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" id="produkte-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} onViewDetails={setSelectedProduct} />
          ))}
        </div>

        <div className="text-center mt-16">
          <Button
            variant="outline"
            size="lg"
            className="shadow-sm hover:shadow-md transition-shadow"
            data-testid="button-view-catalog"
          >
            Gesamtkatalog ansehen
          </Button>
        </div>
      </div>

      <Suspense fallback={null}>
        <ProductModal
          product={selectedProduct}
          open={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      </Suspense>
    </section>
  );
}
