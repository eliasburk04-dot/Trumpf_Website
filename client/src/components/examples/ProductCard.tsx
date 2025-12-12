import ProductCard, { type Product } from "../ProductCard";
import nibblerImage from "@assets/generated_images/nibbler_product_photo.png";

const mockProduct: Product = {
  id: "nibbler-n700",
  name: "TruTool N 700",
  category: "Nibbler",
  description:
    "Hochleistungs-Nibbler für präzises Schneiden von Blechen bis 7mm. Ideal für Konturen und Kurven.",
  price: "1.299 €",
  image: nibblerImage,
  isNew: true,
};

export default function ProductCardExample() {
  return (
    <div className="max-w-sm">
      <ProductCard
        product={mockProduct}
        onViewDetails={(product) => console.log("Details anzeigen:", product.name)}
      />
    </div>
  );
}
