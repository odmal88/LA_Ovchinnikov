import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header, Footer } from "@/components/layout";
import { WorkDetail } from "@/components/works/work-detail";
import { getWorkBySlug, getPublicWorks } from "@/lib/data/works";
import { siteConfig } from "@/lib/data/site-config";

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
    };
  }

  return {
    title: work.title,
    description:
      work.descriptionShort ||
      `${work.title} — произведение ${siteConfig.artistName}`,
  };
}

export default async function WorkPage({ params }: WorkPageProps) {
  const { slug } = await params;
  const work = getWorkBySlug(slug);

  if (!work || !work.isPublic) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="pt-24 pb-16 md:pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <WorkDetail work={work} />
        </div>
      </main>
      <Footer />
    </>
  );
}
