import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Header, Footer } from "@/components/layout";
import { ArticleProgress } from "@/components/shared/article-progress";
import { ArticleToc } from "@/components/shared/article-toc";
import { aboutContent } from "@/lib/data/site-config";

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

const tocSections = articleSections.map(({ id, number, title }) => ({ id, number, title }));

const pullNotes: Record<string, string> = {
  "01": "До художественного училища в его жизни были война, море, дальние страны, тяжёлый труд и опыт большой дороги.",
  "02": "Пурех в биографии Овчинникова — не просто место рождения, а культурный источник и глубинный пласт памяти.",
  "03": "Морская служба вошла в искусство не как экзотика, а как дисциплина взгляда, труда и формы.",
  "04": "Ленинградская школа стала для него инструментом, но не клеткой: профессиональная выучка встретилась с уже сложившимся жизненным опытом.",
  "06": "Север у Овчинникова — не декоративный мотив, а пространство предельной формы: воды, дерева, камня, ветра и человеческой стойкости.",
  "07": "Разные техники у Овчинникова — это разные способы думать о форме, материале и памяти.",
  "08": "Символический реализм здесь рождается не из ухода от жизни, а из её углубления.",
  "09": "Графика 1960-х соединяет суровую лаконичность формы с народным знаком и древнерусской символикой.",
  "10": "Сказка у Овчинникова — не только детская тема, а способ видеть мир по законам мифа, игры и памяти.",
  "13": "Музейное присутствие художника значительно, но широкая публичная известность до сих пор не соответствует масштабу наследия.",
  "16": "Главное в его искусстве — способность превращать простую жизненную сцену в знак.",
};

const timelineItems = [
  { year: "1926", label: "Пурех" },
  { year: "1943", label: "море" },
  { year: "1950-е", label: "Ленинград" },
  { year: "1963", label: "педагогика" },
  { year: "2003", label: "память" },
];

const routeTags = ["Индия", "Япония", "Франция", "Греция", "Югославия", "Китай", "Арктика", "Ладога"];

export default function AboutPage() {
  return (
    <>
      <Header />
      <ArticleProgress />
      <main className="bg-background">
        <section className="border-b border-soft bg-card/75">
          <div className="container mx-auto px-4 py-10 md:px-6 md:py-14">
            <div className="grid gap-10 lg:grid-cols-[220px_minmax(0,760px)] xl:grid-cols-[240px_minmax(0,780px)_1fr] xl:gap-14">
              <div className="hidden lg:block" aria-hidden="true" />

              <div>
                <p className="mb-5 text-[10px] uppercase tracking-[0.16em] text-primary">01 / О художнике</p>
                <h1 className="max-w-3xl font-serif text-[42px] leading-[1.06] text-heading md:text-[62px]">
                  {aboutContent.title}
                </h1>
                <p className="mt-5 max-w-2xl text-[17px] leading-[1.65] text-primary md:text-[20px]">
                  {aboutContent.intro}
                </p>

                <div className="mt-7 grid grid-cols-2 overflow-hidden border border-soft sm:grid-cols-5">
                  {timelineItems.map((item) => (
                    <div key={`${item.year}-${item.label}`} className="border-b border-r border-soft px-3 py-3 sm:border-b-0">
                      <span className="block text-[13px] italic text-gold">{item.year}</span>
                      <span className="block text-[11px] leading-[1.35] text-primary">{item.label}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-2 border border-soft bg-background/60 p-3">
                  <span className="text-[10px] uppercase tracking-[0.12em] text-gold">маршруты →</span>
                  {routeTags.map((tag) => (
                    <span key={tag} className="border border-soft px-2 py-0.5 text-[10px] text-primary/80">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <aside className="hidden xl:block">
                <div className="sticky top-28 border border-soft bg-background/65 p-5">
                  <p className="mb-4 text-[10px] uppercase tracking-[0.16em] text-primary">Внутренняя логика</p>
                  <p className="text-[13px] leading-[1.7] text-muted-foreground">
                    Раздел раскрывает художника через биографию, материал, северный путь, графику,
                    фольклорную систему и семейную художественную преемственность.
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

        <section className="py-10 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <details className="mb-8 border border-soft bg-card p-5 lg:hidden">
              <summary className="cursor-pointer text-[11px] uppercase tracking-[0.14em] text-primary">Содержание статьи</summary>
              <nav className="mt-5 grid gap-3">
                {articleSections.map((section) => (
                  <a key={section.id} href={`#${section.id}`} className="grid grid-cols-[34px_1fr] gap-3 text-[13px] leading-[1.45] text-foreground">
                    <span className="italic text-gold">{section.number}</span>
                    <span>{section.title}</span>
                  </a>
                ))}
              </nav>
            </details>

            <div className="grid gap-10 lg:grid-cols-[220px_minmax(0,760px)] xl:grid-cols-[240px_minmax(0,780px)_1fr] xl:gap-14">
              <aside className="hidden lg:block">
                <ArticleToc sections={tocSections} />
              </aside>

              <article className="space-y-11 md:space-y-14">
                {articleSections.map((section, index) => (
                  <section key={section.id} id={section.id} className={index === 0 ? "scroll-mt-32 border border-soft bg-card p-6 md:p-8" : "scroll-mt-32 border-t border-soft pt-10 md:pt-12"}>
                    <div className="mb-6 flex items-baseline gap-4 border-b border-soft pb-4">
                      <span className="text-[15px] italic leading-none text-gold md:text-[17px]">{section.number}</span>
                      <h2 className="font-serif text-[24px] leading-[1.18] text-heading md:text-[30px]">{section.title}</h2>
                    </div>
                    <div className="space-y-5 text-[15px] leading-[1.85] text-foreground md:text-[16px] md:leading-[1.9]">
                      {section.paragraphs.map((paragraph, pIndex) => (
                        <div key={pIndex}>
                          {pIndex === 1 && pullNotes[section.number] && (
                            <aside className="my-7 border-l-[3px] border-gold bg-card px-5 py-4 md:px-6">
                              <p className="text-[16px] italic leading-[1.65] text-primary md:text-[18px]">{pullNotes[section.number]}</p>
                            </aside>
                          )}
                          <p className="text-pretty">{paragraph}</p>
                        </div>
                      ))}
                    </div>
                  </section>
                ))}
              </article>

              <aside className="hidden xl:block" aria-hidden="true" />
            </div>
          </div>
        </section>

        <section className="border-t border-soft bg-deep-violet py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <p className="mb-4 text-[10px] uppercase tracking-[0.16em] text-gold">{aboutContent.continueTitle}</p>
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
