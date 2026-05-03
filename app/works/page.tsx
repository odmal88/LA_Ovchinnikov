import type { Metadata } from "next";
import { Suspense } from "react";
import { Header, Footer } from "@/components/layout";
import { WorkFilters, WorkGrid } from "@/components/works";
import { filterWorks } from "@/lib/data/works";
import { siteConfig } from "@/lib/data/site-config";

export const metadata: Metadata = {
  title: "Работы",
  description: `Произведения ${siteConfig.artistName}. Каталог живописных и графических работ художника.`,
};

interface WorksPageProps {
  searchParams: Promise<{
    period?: string;
    genre?: string;
    technique?: string;
    search?: string;
  }>;
}

export default async function WorksPage({ searchParams }: WorksPageProps) {
  const params = await searchParams;
  const works = filterWorks(params);

  return (
    <>
      <Header />
      <main className="pt-24 pb-16 md:pb-24">
        <div className="container mx-auto px-4 md:px-6">
          {/* Заголовок */}
          <div className="mb-10">
            <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
              Работы
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Каталог произведений {siteConfig.artistName}. Сведения о работах
              уточняются на основе архивных материалов.
            </p>
          </div>

          {/* Фильтры */}
          <div className="mb-8">
            <Suspense fallback={<div className="h-20" />}>
              <WorkFilters currentFilters={params} />
            </Suspense>
          </div>

          {/* Количество работ */}
          <p className="text-sm text-muted-foreground mb-6">
            Найдено работ: {works.length}
          </p>

          {/* Сетка работ */}
          <WorkGrid works={works} />
        </div>
      </main>
      <Footer />
    </>
  );
}
