import HeroSlider from "@/components/home/HeroSlider";
import BestSellers from "@/components/home/BestSellers";
import AboutPreview from "@/components/home/AboutPreview";
import CollectionsTiles from "@/components/home/CollectionsTiles";
import InfoSection from "@/components/home/InfoSection";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <BestSellers />
      <AboutPreview />
      <CollectionsTiles />
      <InfoSection />
    </>
  );
}
