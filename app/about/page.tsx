import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Header, Footer } from "@/components/layout";
import { aboutContent, siteConfig } from "@/lib/data/site-config";

export const metadata: Metadata = {
  title: aboutContent.title,
  description: aboutContent.metadataDescription,
};

const articleSections = aboutContent.sections.map((section, index) => ({
  ...section,
  id: `about-section-${index + 1}`,
  number: String(index + 1).padStart(2, "0"),
  paragraphs: section.text.split("\n\n").filter(Boolean),
}));

const heroChips = [
  { year: "1926", label: "Пурех" },
  { year: "1943", label: "море" },
  { year: "1950-е", label: "Ленинград" },
  { year: "2003", label: "память" },
];

const routeTags = ["Индия", "Япония", "Франция", "Греция", "Югославия", "Китай", "Север", "Ладога"];

export default function AboutPage() {
  const firstSection = articleSections[0];
  const restSections = articleSections.slice(1);

  return (
    <>
      <Header />
      <main className="bg-background pt-20">
        <section className="bg-deep-violet text-background">
          <div className="h-1 bg-gold" />
          <div className="container mx-auto px-4 py-12 md:px-6 md:py-18">
            <div className="grid gap-10 lg:grid-cols-[240px_1fr] lg:gap-14">
              <aside className="hidden border-r border-soft/20 pr-6 lg:block">
                <p className="mb-6 text-[10px] uppercase tracking-[0.18em] text-gold">
                  Архив Л.А. Овчинникова
                </p>
                <nav className="grid gap-3">
                  {articleSections.slice(0, 14).map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="group grid grid-cols-[32px_1fr] gap-3 text-[12px] leading-[1.45] text-dark-text transition-colors hover:text-gold"
                    >
                      <span className="text-[10px] text-gold/70 group-hover:text-gold">
                        {section.number}
                      </span>
                      <span>{section.title}</span>
                    </a>
                  ))}
                </nav>
              </aside>

              <div>
                <div className="mb-7 flex flex-wrap items-center justify-between gap-4 border-b border-soft/20 pb-5">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-gold">
                    {siteConfig.archiveStatus}
                  </p>
                  <p className="text-[11px] tracking-[0.08em] text-dark-text">
                    {siteConfig.artistYears}
                  </p>
                </div>

                <p className="mb-5 text-[11px] uppercase tracking-[0.16em] text-dark-text">
                  01 / О художнике
                </p>
                <h1 className="max-w-4xl font-serif text-[42px] leading-[1.05] text-background md:text-[68px] lg:text-[82px]">
                  {aboutContent.title}
                </h1>
                <p className="mt-6 max-w-3xl text-[18px] leading-[1.7] text-gold md:text-[22px]">
                  {aboutContent.intro}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {heroChips.map((chip) => (
                    <div key={chip.year} className="border border-soft/20 bg-background/5 px-3 py-2">
                      <span className="mr-2 text-[12px] text-gold">{chip.year}</span>
                      <span className="text-[12px] text-dark-text">{chip.label}</span>
                    </div>
                  ))}
                </div>

                {firstSection && (
                  <div className="mt-10 border-l-2 border-gold bg-background/5 px-5 py-5 md:px-7">
                    <p className="text-[17px] italic leading-[1.75] text-gold md:text-[20px]">
                      {firstSection.paragraphs[0]}
                    </p>
                  </div>
                )}

                <div className="mt-8 flex flex-wrap gap-2">
                  <span className="border border-soft/20 px-3 py-1 text-[10px] uppercase tracking-[0.12em] text-gold">
                    маршруты →
                  </span>
                  {routeTags.map((tag) => (
                    <span key={tag} className="border border-soft/20 px-3 py-1 text-[10px] tracking-[0.08em] text-dark-text">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <details className="mb-8 border border-soft bg-card p-5 lg:hidden">
              <summary className="cursor-pointer text-[11px] uppercase tracking-[0.14em] text-primary">
                Содержание статьи
              </summary>
              <nav className="mt-5 grid gap-3">
                {articleSections.map((section) => (
                  <a key={section.id} href={`#${section.id}`} className="grid grid-cols-[34px_1fr] gap-3 text-[13px] leading-[1.45] text-foreground">
                    <span className="italic text-gold">{section.number}</span>
                    <span>{section.title}</span>
                  </a>
                ))}
              </nav>
            </details>

            <div className="grid gap-10 lg:grid-cols-[260px_minmax(0,820px)] xl:grid-cols-[280px_minmax(0,840px)_1fr] xl:gap-14">
              <aside className="hidden lg:block">
                <div className="sticky top-28 border-l border-soft pl-5">
                  <p className="mb-5 text-[10px] uppercase tracking-[0.16em] text-primary">
                    Разделы статьи
                  </p>
                  <nav className="grid gap-3">
                    {articleSections.map((section) => (
                      <a key={section.id} href={`#${section.id}`} className="group grid grid-cols-[36px_1fr] gap-3 text-[12px] leading-[1.45] text-muted-foreground transition-colors hover:text-heading">
                        <span className="italic text-gold transition-colors group-hover:text-heading">{section.number}</span>
                        <span>{section.title}</span>
                      </a>
                    ))}
                  </nav>
                </div>
              </aside>

              <article className="space-y-11 md:space-y-14">
                {firstSection && (
                  <section id={firstSection.id} className="scroll-mt-28 border border-soft bg-card p-6 md:p-9">
                    <div className="mb-6 grid gap-3 md:grid-cols-[56px_1fr] md:gap-5">
                      <span className="text-[24px] italic leading-none text-gold md:text-[34px]">{firstSection.number}</span>
                      <h2 className="font-serif text-[28px] leading-[1.14] text-heading md:text-[36px]">{firstSection.title}</h2>
                    </div>
                    <div className="space-y-5 text-[16px] leading-[1.85] text-foreground md:text-[17px] md:leading-[1.9]">
                      {firstSection.paragraphs.slice(1).map((paragraph, pIndex) => (
                        <p key={pIndex} className="text-pretty">{paragraph}</p>
                      ))}
                    </div>
                  </section>
                )}

                {restSections.map((section) => (
                  <section key={section.id} id={section.id} className="scroll-mt-28 border-t border-soft pt-10 md:pt-12">
                    <div className="mb-6 grid gap-3 md:grid-cols-[56px_1fr] md:gap-5">
                      <span className="text-[24px] italic leading-none text-gold md:text-[34px]">{section.number}</span>
                      <h2 className="font-serif text-[28px] leading-[1.14] text-heading md:text-[36px]">{section.title}</h2>
                    </div>
                    <div className="space-y-5 text-[16px] leading-[1.85] text-foreground md:text-[17px] md:leading-[1.9]">
                      {section.paragraphs.map((paragraph, pIndex) => (
                        <p key={pIndex} className="text-pretty">{paragraph}</p>
                      ))}
                    </div>
                  </section>
                ))}
              </article>

              <aside className="hidden xl:block">
                <div className="sticky top-28 border border-soft bg-card p-5">
                  <p className="mb-4 text-[10px] uppercase tracking-[0.16em] text-primary">
                    Внутренняя логика
                  </p>
                  <p className="text-[13px] leading-[1.7] text-muted-foreground">
                    Статья раскрывает художника через биографию, материал, северный путь,
                    графику, фольклорную систему и семейную художественную преемственность.
                  </p>
                  <Link href="/biography" className="mt-5 inline-flex items-center gap-2 text-[12px] text-primary hover:text-heading">
                    Открыть хронологию
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="border-t border-soft bg-deep-violet py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <p className="mb-4 text-[10px] uppercase tracking-[0.16em] text-gold">
              {aboutContent.continueTitle}
            </p>
            <div className="flex flex-wrap gap-5">
              {aboutContent.continueLinks.map((link) => (
                <Link key={link.href} href={link.href} className="group inline-flex items-center gap-2 border-b border-gold pb-1 text-[16px] text-background transition-colors hover:text-gold">
                  {link.label}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
