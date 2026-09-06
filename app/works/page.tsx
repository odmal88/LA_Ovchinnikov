import type { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { WorksCatalog } from "@/components/works";
import { getPublicWorks } from "@/lib/data/works";
import { extraWorks } from "@/lib/data/works-extra";
import { archiveWorks } from "@/lib/data/works-archive";
import { worksPageContent } from "@/lib/data/site-config";

export const metadata: Metadata = {
  title: worksPageContent.title,
  description: worksPageContent.metadataDescription,
};

export default function WorksPage() {
  const works = [...getPublicWorks(), ...extraWorks.filter((work) => work.isPublic),
    ...archiveWorks.filter((work) => work.isPublic)];

  return (
    <>
      <Header />
      <main className="pt-24 pb-16 md:pb-24">
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
