import type { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { Timeline } from "@/components/biography";
import { getPublicBiographyEvents } from "@/lib/data/biography";
import { siteConfig } from "@/lib/data/site-config";

export const metadata: Metadata = {
  title: "Биография",
  description: `Биография ${siteConfig.artistName} (${siteConfig.artistYears}). Хронология жизни и творчества художника.`,
};

export default function BiographyPage() {
  const events = getPublicBiographyEvents();

  return (
    <>
      <Header />
      <main className="pt-24 pb-16 md:pb-24">
        <div className="container mx-auto px-4 md:px-6">
          {/* Заголовок */}
          <div className="max-w-3xl mb-12">
            <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
              Биография
            </h1>
            <p className="text-xl text-muted-foreground">
              {siteConfig.artistName}
            </p>
            <p className="text-lg text-ocher mt-2">{siteConfig.artistYears}</p>
          </div>

          {/* Примечание */}
          <div className="max-w-3xl mb-12 p-6 bg-card rounded-sm border border-soft relative pl-8">
            <span className="absolute left-0 top-0 h-full w-1 bg-brick" aria-hidden="true" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Биографические сведения уточняются на основе архивных материалов,
              документов и семейных воспоминаний. Если вы располагаете
              дополнительной информацией, пожалуйста,{" "}
              <a
                href="/contacts"
                className="text-ash-blue hover:text-foreground underline underline-offset-2 transition-colors"
              >
                свяжитесь с архивом
              </a>
              .
            </p>
          </div>

          {/* Хронология */}
          <div className="max-w-3xl">
            <Timeline events={events} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
