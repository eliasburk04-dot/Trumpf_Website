import ProductCard, { type Product } from "../ProductCard";
import nibblerImage from "@assets/generated_images/nibbler_product_photo.png";

const mockProduct: Product = {
  id: "nibbler-n700",
  name: "TruTool N 700",
  category: "Nibblers",
  description:
    "High-performance nibbler for precise sheet metal cutting up to 7mm. Ideal for contours and curves.",
  price: "$1,299",
  image: nibblerImage,
  isNew: true,
  isSwissMade: true,
};

export default function ProductCardExample() {
  return (
    <div className="max-w-sm">
      <ProductCard
        product={mockProduct}
        onViewDetails={(product) => console.log("View details:", product.name)}
      />
    </div>
  );
}
