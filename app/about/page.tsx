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

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="bg-background pt-20">
        <section className="border-b border-soft/60 bg-background py-14 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-16">
              <div className="max-w-4xl">
                <p className="mb-5 text-[10px] uppercase tracking-[0.18em] text-primary">
                  {siteConfig.archiveStatus}
                </p>
                <h1 className="mb-6 font-serif text-[42px] leading-[1.06] text-heading md:text-[64px] lg:text-[76px]">
                  {aboutContent.title}
                </h1>
                <p className="max-w-3xl text-[18px] leading-[1.75] text-primary md:text-[22px] md:leading-[1.65]">
                  {aboutContent.intro}
                </p>
              </div>

              <aside className="border border-soft bg-card p-6 md:p-7">
                <p className="mb-5 text-[10px] uppercase tracking-[0.16em] text-primary">
                  Материалы страницы
                </p>
                <div className="grid gap-4 text-heading">
                  <div className="border-t border-soft pt-4">
                    <div className="text-[30px] italic leading-none text-gold md:text-[38px]">
                      {siteConfig.artistYears}
                    </div>
                    <p className="mt-2 text-[13px] leading-[1.6] text-muted-foreground">
                      годы жизни художника
                    </p>
                  </div>
                  <div className="border-t border-soft pt-4">
                    <div className="text-[30px] italic leading-none text-gold md:text-[38px]">
                      {articleSections.length}
                    </div>
                    <p className="mt-2 text-[13px] leading-[1.6] text-muted-foreground">
                      разделов большой статьи
                    </p>
                  </div>
                  <div className="border-t border-soft pt-4">
                    <p className="text-[14px] leading-[1.7] text-foreground">
                      Биография, художественная школа, северный путь, графика,
                      сказочный корпус, музейное присутствие и семейная преемственность.
                    </p>
                  </div>
                </div>
              </aside>
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
                    Содержание
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
                        <p
                          key={pIndex}
                          className={`text-pretty ${
                            index === 0 && pIndex === 0
                              ? "text-[18px] leading-[1.8] text-heading md:text-[20px]"
                              : ""
                          }`}
                        >
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
                    Как читать
                  </p>
                  <p className="text-[13px] leading-[1.7] text-muted-foreground">
                    Страница построена как длинная архивная статья. Для быстрого
                    движения по материалу используйте оглавление слева; каждый
                    раздел отделён как самостоятельный смысловой блок.
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
