import CTASection from "../CTASection";

export default function CTASectionExample() {
  return (
    <CTASection
      onFindDealer={() => console.log("Find dealer clicked")}
      onRequestCatalog={() => console.log("Request catalog clicked")}
    />
  );
}
