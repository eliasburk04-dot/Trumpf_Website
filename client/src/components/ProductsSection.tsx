import { useState } from "react";
import { Button } from "@/components/ui/button";
import ProductCard, { type Product } from "./ProductCard";
import ProductModal from "./ProductModal";
import nibblerImage from "@assets/generated_images/nibbler_product_photo.png";
import shearsImage from "@assets/generated_images/shears_product_photo.png";
import bevelerImage from "@assets/generated_images/beveler_product_photo.png";
import laserCleanerImage from "@assets/generated_images/laser_cleaner_product_photo.png";

// todo: remove mock functionality
const mockProducts: Product[] = [
  {
    id: "nibbler-n700",
    name: "TruTool N 700",
    category: "Nibblers",
    description:
      "High-performance nibbler for precise sheet metal cutting up to 7mm. Ideal for contours and curves.",
    price: "$1,299",
    image: nibblerImage,
    isNew: true,
    isSwissMade: true,
  },
  {
    id: "shear-c160",
    name: "TruTool C 160",
    category: "Slitting Shears",
    description:
      "Cordless slitting shears with chip clipper for clean, burr-free cuts in stainless steel.",
    price: "$1,849",
    image: shearsImage,
    isSwissMade: true,
  },
  {
    id: "beveler-tka500",
    name: "TruTool TKA 500",
    category: "Bevelers",
    description:
      "Professional plate beveler for weld preparation. Creates precise 15° to 60° bevels.",
    price: "$2,499",
    image: bevelerImage,
    isNew: true,
  },
  {
    id: "laser-tsc100",
    name: "TruTool TSC 100",
    category: "Laser Cleaners",
    description:
      "Innovative laser slat cleaner for removing slag from plasma and laser cutting tables.",
    price: "$3,299",
    image: laserCleanerImage,
    isSwissMade: true,
  },
];

const categories = ["All", "Nibblers", "Slitting Shears", "Bevelers", "Laser Cleaners"];

interface ProductsSectionProps {
  id?: string;
}

export default function ProductsSection({ id }: ProductsSectionProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts =
    activeCategory === "All"
      ? mockProducts
      : mockProducts.filter((p) => p.category === activeCategory);

  return (
    <section
      id={id}
      className="py-20 lg:py-32 bg-background"
      data-testid="section-products"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="text-3xl lg:text-4xl font-bold tracking-tight mb-4"
            data-testid="text-products-title"
          >
            Professional Power Tools
          </h2>
          <p
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
            data-testid="text-products-subtitle"
          >
            Swiss-engineered precision tools designed for the most demanding metal fabrication
            applications.
          </p>
        </div>

        <div
          className="flex flex-wrap justify-center gap-2 mb-12"
          data-testid="filter-categories"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "secondary"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              data-testid={`button-category-${category.toLowerCase().replace(" ", "-")}`}
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
            View Full Catalog
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
