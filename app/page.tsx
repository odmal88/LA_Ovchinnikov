import { Header, Footer } from "@/components/layout";
import { JsonLd } from "@/components/seo/json-ld";
import {
  HeroSection,
  FeaturedWorks,
  ArchiveStructure,
  AboutPreview,
  QuoteBlock,
  CollectMaterials,
} from "@/components/home";
import { siteConfig, siteUrl } from "@/lib/data/site-config";

const homeJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: siteConfig.siteTitle,
    description: siteConfig.siteDescription,
    inLanguage: "ru-RU",
    publisher: {
      "@type": "Organization",
      name: "Официальный цифровой архив Льва Авксентьевича Овчинникова",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${siteUrl}/#profile`,
    url: siteUrl,
    name: siteConfig.artistName,
    description:
      "Официальный цифровой архив Льва Авксентьевича Овчинникова: биография, произведения, графика, выставки, мастерская и наследие художника.",
    inLanguage: "ru-RU",
    mainEntity: {
      "@type": "Person",
      "@id": `${siteUrl}/#lev-ovchinnikov`,
      name: siteConfig.artistName,
      givenName: "Лев",
      additionalName: "Авксентьевич",
      familyName: "Овчинников",
      birthDate: "1926-08-06",
      deathDate: "2003-03-04",
      birthPlace: {
        "@type": "Place",
        name: "Пурех, Нижегородская земля",
      },
      deathPlace: {
        "@type": "Place",
        name: "Санкт-Петербург",
      },
      jobTitle: "Художник",
      hasOccupation: [
        { "@type": "Occupation", name: "живописец" },
        { "@type": "Occupation", name: "график" },
        { "@type": "Occupation", name: "скульптор" },
      ],
      knowsAbout: [
        "живопись",
        "графика",
        "ксилография",
        "линогравюра",
        "офорт",
        "северная тема",
        "ленинградская школа",
        "сказочная графика",
        "декоративно-прикладное искусство",
      ],
      url: siteUrl,
    },
  },
];

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <JsonLd data={homeJsonLd} />
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
