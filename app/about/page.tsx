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

const featuredSection = articleSections[0];
const featuredQuote =
  featuredSection?.paragraphs[1] ||
  "До художественного училища в его жизни были война, морское училище, годы плаваний, порты, дальние страны, тяжёлый труд и опыт большой дороги.";

const dateChips = [
  { year: "1926", label: "Пурех" },
  { year: "1943", label: "морское училище" },
  { year: "1950-е", label: "Ленинград" },
  { year: "2003", label: "Санкт-Петербург" },
];

const geoTags = ["Пурех", "Ленинград", "Белое море", "Ладога", "Соловки", "Север"];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="bg-background pt-20">
        <section className="bg-[#18140f] text-[#ddd5c0]">
          <div className="h-[3px] bg-[#2e2820]" aria-hidden="true">
            <div className="h-full w-1/4 bg-gold" />
          </div>

          <div className="border-b border-[#2e2820]">
            <div className="container mx-auto flex flex-wrap items-center justify-between gap-4 px-4 py-5 md:px-6">
              <p className="text-[10px] uppercase tracking-[0.18em] text-[#8a7d6a]">
                Архив Л.А. Овчинникова · {siteConfig.artistYears}
              </p>
              <nav className="flex flex-wrap gap-5 text-[11px] uppercase tracking-[0.08em] text-[#8a7d6a]">
                <Link href="/works" className="hover:text-gold">Работы</Link>
                <Link href="/biography" className="hover:text-gold">Биография</Link>
                <Link href="/about" className="text-gold">О художнике</Link>
                <Link href="/contacts" className="hover:text-gold">Контакты</Link>
              </nav>
            </div>
          </div>

          <div className="container mx-auto px-4 py-10 md:px-6 md:py-14 lg:py-16">
            <div className="grid gap-10 lg:grid-cols-[260px_minmax(0,1fr)] xl:grid-cols-[300px_minmax(0,900px)]">
              <aside className="hidden lg:block">
                <div className="sticky top-28 border-r border-[#2e2820] pr-6">
                  <p className="mb-5 text-[10px] uppercase tracking-[0.16em] text-[#6a5f52]">
                    Разделы статьи
                  </p>
                  <nav className="grid gap-1">
                    {articleSections.slice(0, 14).map((section, index) => (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        className={`grid grid-cols-[32px_1fr] gap-3 border-l-2 px-3 py-2 text-[12px] leading-[1.35] transition-colors ${
                          index === 0
                            ? "border-gold bg-[#211d17] text-gold"
                            : "border-transparent text-[#8a7d6a] hover:bg-[#211d17] hover:text-gold"
                        }`}
                      >
                        <span className="text-[9px] text-[#6a5f52]">{section.number}</span>
                        <span>{section.title}</span>
                      </a>
                    ))}
                  </nav>
                </div>
              </aside>

              <div>
                <div className="mb-7 text-[10px] uppercase tracking-[0.15em] text-[#6a5f52]">
                  01 / О художнике
                </div>

                <h1 className="max-w-4xl font-serif text-[38px] leading-[1.08] text-[#e8dfc8] md:text-[60px] lg:text-[74px]">
                  {aboutContent.title}
                </h1>
                <p className="mt-5 max-w-3xl text-[15px] leading-[1.75] text-[#a89880] md:text-[18px]">
                  {aboutContent.intro}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {dateChips.map((chip) => (
                    <div key={chip.year} className="border border-[#3a3530] bg-[#211d17] px-4 py-2">
                      <span className="mr-2 text-[12px] text-gold">{chip.year}</span>
                      <span className="text-[12px] text-[#8a7d6a]">{chip.label}</span>
                    </div>
                  ))}
                </div>

                <div className="my-9 border-l-4 border-gold bg-[#201c16] px-6 py-5">
                  <p className="text-[17px] italic leading-[1.75] text-gold md:text-[20px]">
                    {featuredQuote}
                  </p>
                </div>

                <div className="max-w-3xl space-y-5 text-[15px] leading-[1.85] text-[#a89880] md:text-[16px]">
                  {featuredSection?.paragraphs.slice(0, 3).map((paragraph, index) => (
                    <p key={index} className="text-pretty">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  <span className="border border-[#4a3f35] px-3 py-1 text-[10px] uppercase tracking-[0.06em] text-gold">
                    Маршруты и память
                  </span>
                  {geoTags.map((tag) => (
                    <span key={tag} className="border border-[#3a3530] px-3 py-1 text-[10px] uppercase tracking-[0.06em] text-[#6a5f52]">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-10 flex flex-wrap gap-5 border-t border-[#2e2820] pt-6">
                  <a href="#article" className="inline-flex items-center gap-2 text-[13px] text-gold hover:text-[#e8dfc8]">
                    Читать статью полностью
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <Link href="/biography" className="inline-flex items-center gap-2 text-[13px] text-[#8a7d6a] hover:text-gold">
                    Биографическая хроника
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="article" className="py-10 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <details className="mb-8 border border-soft bg-card p-5 lg:hidden">
              <summary className="cursor-pointer text-[11px] uppercase tracking-[0.14em] text-primary">
                Содержание статьи
              </summary>
              <nav className="mt-5 grid gap-3">
                {articleSections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="grid grid-cols-[34px_1fr] gap-3 text-[13px] leading-[1.45] text-foreground"
                  >
                    <span className="italic text-gold">{section.number}</span>
                    <span>{section.title}</span>
                  </a>
                ))}
              </nav>
            </details>

            <div className="grid gap-10 lg:grid-cols-[280px_minmax(0,780px)] xl:grid-cols-[300px_minmax(0,820px)_1fr] xl:gap-14">
              <aside className="hidden lg:block">
                <div className="sticky top-28 border-l border-soft pl-5">
                  <p className="mb-5 text-[10px] uppercase tracking-[0.16em] text-primary">
                    Полный текст
                  </p>
                  <nav className="grid gap-3">
                    {articleSections.map((section) => (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        className="group grid grid-cols-[36px_1fr] gap-3 text-[12px] leading-[1.45] text-muted-foreground transition-colors hover:text-heading"
                      >
                        <span className="italic text-gold transition-colors group-hover:text-heading">
                          {section.number}
                        </span>
                        <span>{section.title}</span>
                      </a>
                    ))}
                  </nav>
                </div>
              </aside>

              <article className="space-y-11 md:space-y-14">
                {articleSections.map((section, index) => (
                  <section
                    key={section.id}
                    id={section.id}
                    className={`scroll-mt-28 ${
                      index === 0
                        ? "border border-soft bg-card p-6 md:p-9"
                        : "border-t border-soft pt-10 md:pt-12"
                    }`}
                  >
                    <div className="mb-6 grid gap-3 md:grid-cols-[56px_1fr] md:gap-5">
                      <span className="text-[24px] italic leading-none text-gold md:text-[34px]">
                        {section.number}
                      </span>
                      <h2 className="font-serif text-[28px] leading-[1.14] text-heading md:text-[36px]">
                        {section.title}
                      </h2>
                    </div>

                    <div className="space-y-5 text-[16px] leading-[1.85] text-foreground md:text-[17px] md:leading-[1.9]">
                      {section.paragraphs.map((paragraph, pIndex) => (
                        <p key={pIndex} className="text-pretty">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </section>
                ))}
              </article>

              <aside className="hidden xl:block">
                <div className="sticky top-28 border border-soft/70 bg-card/60 p-5">
                  <p className="mb-4 text-[10px] uppercase tracking-[0.16em] text-primary">
                    Принцип страницы
                  </p>
                  <p className="text-[13px] leading-[1.7] text-muted-foreground">
                    Верхний блок работает как экспозиционный вход в биографию и
                    художественный мир. Ниже сохранён полный текст большой статьи
                    для внимательного чтения и поисковой доступности.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="border-t border-soft bg-deep-violet py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl">
              <p className="mb-4 text-[10px] uppercase tracking-[0.16em] text-gold">
                {aboutContent.continueTitle}
              </p>
              <div className="flex flex-wrap gap-5">
                {aboutContent.continueLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group inline-flex items-center gap-2 border-b border-gold pb-1 text-[16px] text-background transition-colors hover:text-gold"
                  >
                    {link.label}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
