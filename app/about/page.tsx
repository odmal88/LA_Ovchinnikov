import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Header, Footer } from "@/components/layout";
import { siteConfig, aboutContent } from "@/lib/data/site-config";

export const metadata: Metadata = {
  title: "О художнике",
  description: `${siteConfig.artistName} — биография, художественная среда, мастерская и место в семейной художественной линии Овчинниковых.`,
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16 md:pb-24">
        <div className="container mx-auto px-4 md:px-6">
          {/* Заголовок */}
          <div className="max-w-3xl mb-12">
            <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
              О художнике
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
              {aboutContent.intro}
            </p>
          </div>

          {/* Секции */}
          <div className="max-w-3xl space-y-12">
            {aboutContent.sections.map((section, index) => (
              <section key={index}>
                <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
                  {section.title}
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  {section.text.split("\n\n").map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-pretty">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Ссылки на другие разделы */}
          <div className="max-w-3xl mt-16 pt-8 border-t border-soft">
            <h3 className="font-serif text-xl text-foreground mb-6">
              Продолжить изучение
            </h3>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/biography"
                className="group flex items-center gap-2 text-olive hover:text-foreground transition-colors"
              >
                Биография
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/works"
                className="group flex items-center gap-2 text-olive hover:text-foreground transition-colors"
              >
                Работы
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
