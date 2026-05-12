import type { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { JsonLd } from "@/components/seo/json-ld";
import { WorksCatalog } from "@/components/works";
import { getPublicWorks } from "@/lib/data/works";
import { seoKeywords, siteConfig, siteUrl, worksPageContent } from "@/lib/data/site-config";

export const metadata: Metadata = {
  title: worksPageContent.title,
  description: worksPageContent.metadataDescription,
  keywords: [...seoKeywords.works],
  alternates: {
    canonical: "/works",
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: `${siteUrl}/works`,
    siteName: siteConfig.siteTitle,
    title: worksPageContent.title,
    description: worksPageContent.metadataDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: worksPageContent.title,
    description: worksPageContent.metadataDescription,
  },
};

const worksJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${siteUrl}/works#collection`,
  url: `${siteUrl}/works`,
  name: worksPageContent.title,
  description: worksPageContent.metadataDescription,
  inLanguage: "ru-RU",
  isPartOf: {
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: siteConfig.siteTitle,
  },
  about: {
    "@type": "Person",
    "@id": `${siteUrl}/#lev-ovchinnikov`,
    name: siteConfig.artistName,
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Главная",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Работы",
        item: `${siteUrl}/works`,
      },
    ],
  },
};

export default function WorksPage() {
  const works = getPublicWorks();

  return (
    <>
      <Header />
      <main className="pt-24 pb-16 md:pb-24">
        <JsonLd data={worksJsonLd} />
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-10">
            <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
              {worksPageContent.title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              {worksPageContent.description}
            </p>
          </div>

          <WorksCatalog works={works} />
        </div>
      </main>
      <Footer />
    </>
  );
}
