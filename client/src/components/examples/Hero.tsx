import Hero from "../Hero";

export default function HeroExample() {
  return (
    <Hero
      onExploreProducts={() => console.log("Produkte ansehen geklickt")}
      onContactUs={() => console.log("Beratung anfordern geklickt")}
    />
  );
}
