import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Header, Footer } from "@/components/layout";
import { Timeline } from "@/components/biography";
import { getPublicBiographyEvents } from "@/lib/data/biography";
import { siteConfig, biographyPageContent } from "@/lib/data/site-config";

export const metadata: Metadata = {
  title: biographyPageContent.title,
  description: biographyPageContent.metadataDescription,
};

const biographyFilters = ["Все", "Море", "Искусство", "Север", "Педагогика", "Память"];

const biographyLegend = [
  { label: "жизнь", className: "bg-gold" },
  { label: "учёба", className: "bg-primary" },
  { label: "работа", className: "bg-heading" },
  { label: "публикации", className: "bg-ocher" },
];

export default function BiographyPage() {
  const events = getPublicBiographyEvents();

  return (
    <>
      <Header />
      <main className="bg-background pt-20">
        <section className="border-b border-soft bg-card py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-wrap items-end justify-between gap-8">
              <div className="max-w-3xl">
                <p className="mb-5 text-[10px] uppercase tracking-[0.18em] text-primary">
                  биографическая хроника
                </p>
                <h1 className="mb-4 font-serif text-[42px] leading-[1.08] text-heading md:text-[64px]">
                  {biographyPageContent.title}
                </h1>
                <p className="text-[18px] leading-[1.65] text-foreground md:text-[22px]">
                  {siteConfig.artistName}
                </p>
                <p className="mt-2 text-[16px] italic text-gold md:text-[20px]">
                  {siteConfig.artistYears}
                </p>
              </div>

              <div className="flex max-w-xl flex-wrap gap-2">
                {biographyFilters.map((filter, index) => (
                  <span
                    key={filter}
                    className={`border px-3 py-1 text-[11px] tracking-[0.08em] ${
                      index === 0
                        ? "border-heading bg-heading text-background"
                        : "border-soft text-muted-foreground"
                    }`}
                  >
                    {filter}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-[280px_minmax(0,840px)] xl:grid-cols-[300px_minmax(0,860px)_1fr] xl:gap-14">
              <aside className="hidden lg:block">
                <div className="sticky top-28 border-l border-soft pl-5">
                  <p className="mb-5 text-[10px] uppercase tracking-[0.16em] text-primary">
                    Линии биографии
                  </p>
                  <div className="grid gap-3">
                    {biographyLegend.map((item) => (
                      <div key={item.label} className="flex items-center gap-3 text-[12px] text-muted-foreground">
                        <span className={`h-2 w-2 rounded-full ${item.className}`} />
                        <span>{item.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 border border-soft bg-card p-4">
                    <p className="text-[13px] leading-[1.7] text-muted-foreground">
                      Хроника собирает не только даты, но и биографические узлы:
                      Пурех, море, Ленинград, мастерскую, педагогическую линию и
                      посмертную работу с наследием.
                    </p>
                  </div>
                </div>
              </aside>

              <div>
                <div className="mb-8 border border-soft bg-card p-5 md:p-6">
                  <p className="text-[14px] leading-[1.75] text-muted-foreground md:text-[15px]">
                    {biographyPageContent.noteText}{" "}
                    <Link
                      href={biographyPageContent.noteLinkHref}
                      className="text-primary underline underline-offset-4 transition-colors hover:text-heading"
                    >
                      {biographyPageContent.noteLinkText}
                    </Link>
                    .
                  </p>
                </div>

                <Timeline events={events} title="Жизнь, работа и память" />
              </div>

              <aside className="hidden xl:block">
                <div className="sticky top-28 border border-soft bg-card p-5">
                  <p className="mb-4 text-[10px] uppercase tracking-[0.16em] text-primary">
                    Связанные разделы
                  </p>
                  <div className="grid gap-3">
                    <Link href="/about" className="group inline-flex items-center gap-2 text-[13px] text-primary hover:text-heading">
                      О художнике
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                    <Link href="/works" className="group inline-flex items-center gap-2 text-[13px] text-primary hover:text-heading">
                      Работы
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
