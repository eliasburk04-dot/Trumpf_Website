import Hero from "../Hero";

export default function HeroExample() {
  return (
    <Hero
      onExploreProducts={() => console.log("Explore products clicked")}
      onLearnMore={() => console.log("Learn more clicked")}
    />
  );
}
