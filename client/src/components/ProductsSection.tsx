import { useState } from "react";
import { Button } from "@/components/ui/button";
import ProductCard, { type Product } from "./ProductCard";
import ProductModal from "./ProductModal";
import nibblerImage from "@assets/generated_images/nibbler_product_photo.png";
import shearsImage from "@assets/generated_images/shears_product_photo.png";
import bevelerImage from "@assets/generated_images/beveler_product_photo.png";
import laserCleanerImage from "@assets/generated_images/laser_cleaner_product_photo.png";

// todo: remove mock functionality - Produktbilder werden vom Kunden hinzugefügt
const mockProducts: Product[] = [
  {
    id: "nibbler-n700",
    name: "TruTool N 700",
    category: "Nibbler",
    description: "Hochleistungs-Nibbler für präzises Schneiden von Blechen bis 7mm. Ideal für Konturen und Kurven.",
    price: "1.299 €",
    image: nibblerImage,
    isNew: true,
  },
  {
    id: "shear-c160",
    name: "TruTool C 160",
    category: "Schlitzscheren",
    description: "Akku-Schlitzschere mit Spanabschneider für saubere, gratfreie Schnitte in Edelstahl.",
    price: "1.849 €",
    image: shearsImage,
  },
  {
    id: "beveler-tka500",
    name: "TruTool TKA 500",
    category: "Kantenfräsen",
    description: "Professionelle Kantenfräsmaschine zur Schweißnahtvorbereitung. Erzeugt präzise 15° bis 60° Fasen.",
    price: "2.499 €",
    image: bevelerImage,
    isNew: true,
  },
  {
    id: "laser-tsc100",
    name: "TruTool TSC 100",
    category: "Reinigungsgeräte",
    description: "Innovativer Laser-Lamellenreiniger zum Entfernen von Schlacke von Plasma- und Laserschneidtischen.",
    price: "3.299 €",
    image: laserCleanerImage,
  },
];

const categories = ["Alle", "Nibbler", "Schlitzscheren", "Kantenfräsen", "Reinigungsgeräte"];

interface ProductsSectionProps {
  id?: string;
}

export default function ProductsSection({ id }: ProductsSectionProps) {
  const [activeCategory, setActiveCategory] = useState("Alle");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts =
    activeCategory === "Alle"
      ? mockProducts
      : mockProducts.filter((p) => p.category === activeCategory);

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
