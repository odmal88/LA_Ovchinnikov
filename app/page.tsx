import { Header, Footer } from "@/components/layout";
import {
  HeroSection,
  FeaturedWorks,
  AboutPreview,
  QuoteBlock,
  CollectMaterials,
} from "@/components/home";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="bg-[#eae4f4]">
        <HeroSection />
        <FeaturedWorks />
        <AboutPreview />
        <QuoteBlock />
        <CollectMaterials />
      </main>
      <Footer />
    </>
  );
}
