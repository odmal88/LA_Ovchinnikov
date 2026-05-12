import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header, Footer } from "@/components/layout";
import { JsonLd } from "@/components/seo/json-ld";
import { WorkDetail } from "@/components/works/work-detail";
import { getWorkBySlug, getPublicWorks } from "@/lib/data/works";
import { genreLabels, periodLabels, techniqueLabels } from "@/lib/types";
import { siteConfig, siteUrl } from "@/lib/data/site-config";

interface WorkPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const works = getPublicWorks();
  return works.map((work) => ({
    slug: work.slug,
  }));
}

export async function generateMetadata({
  params,
}: WorkPageProps): Promise<Metadata> {
  const { slug } = await params;
  const work = getWorkBySlug(slug);

  if (!work) {
    return {
      title: "Работа не найдена",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title = `${work.title} — ${siteConfig.artistName}`;
  const description =
    work.descriptionShort ||
    `${work.title} — произведение Льва Авксентьевича Овчинникова. ${techniqueLabels[work.technique]}, ${genreLabels[work.genre].toLowerCase()}. Сведения уточняются официальным цифровым архивом.`;
  const image = work.imageFull || work.imageThumb;

  return {
    title,
    description,
    keywords: [
      siteConfig.artistName,
      `${siteConfig.artistNameShort} ${work.title}`,
      `${siteConfig.artistNameShort} работы`,
      techniqueLabels[work.technique],
      genreLabels[work.genre],
      "официальный цифровой архив",
    ],
    alternates: {
      canonical: `/works/${work.slug}`,
    },
    openGraph: {
      type: "article",
      locale: "ru_RU",
      url: `${siteUrl}/works/${work.slug}`,
      siteName: siteConfig.siteTitle,
      title,
      description,
      images: image
        ? [
            {
              url: image,
              alt: `${work.artist}. ${work.title}. ${work.date || periodLabels[work.period]}.`,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [image] : undefined,
    },
  };
}

export default async function WorkPage({ params }: WorkPageProps) {
  const { slug } = await params;
  const work = getWorkBySlug(slug);

  if (!work || !work.isPublic) {
    notFound();
  }

  const description =
    work.descriptionShort ||
    `${work.title} — произведение Льва Авксентьевича Овчинникова. ${techniqueLabels[work.technique]}, ${genreLabels[work.genre].toLowerCase()}. Сведения уточняются официальным цифровым архивом.`;

  const workJsonLd = {
    "@context": "https://schema.org",
    "@type": "VisualArtwork",
    "@id": `${siteUrl}/works/${work.slug}#artwork`,
    name: work.title,
    url: `${siteUrl}/works/${work.slug}`,
    creator: {
      "@type": "Person",
      "@id": `${siteUrl}/#lev-ovchinnikov`,
      name: work.artist,
    },
    artist: {
      "@type": "Person",
      "@id": `${siteUrl}/#lev-ovchinnikov`,
      name: work.artist,
    },
    dateCreated: work.date || undefined,
    artform: genreLabels[work.genre],
    artMedium: techniqueLabels[work.technique],
    artworkSurface: work.material,
    width: work.dimensions,
    description,
    image: work.imageFull ? `${siteUrl}${work.imageFull}` : undefined,
    isPartOf: {
      "@type": "Collection",
      name: siteConfig.siteTitle,
      url: siteUrl,
    },
    inLanguage: "ru-RU",
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
        {
          "@type": "ListItem",
          position: 3,
          name: work.title,
          item: `${siteUrl}/works/${work.slug}`,
        },
      ],
    },
  };

  return (
    <>
      <Header />
      <main className="pt-24 pb-16 md:pb-24">
        <JsonLd data={workJsonLd} />
        <div className="container mx-auto px-4 md:px-6">
          <WorkDetail work={work} />
        </div>
      </main>
      <Footer />
    </>
  );
}
