import { Header, Footer } from "@/components/layout";
import {
  HeroSection,
  FeaturedWorks,
  ArchiveStructure,
  AboutPreview,
  QuoteBlock,
  CollectMaterials,
} from "@/components/home";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturedWorks />
        <ArchiveStructure />
        <AboutPreview />
        <QuoteBlock />
        <CollectMaterials />
      </main>
      <Footer />
    </>
  );
}
