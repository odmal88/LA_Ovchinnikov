import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Header, Footer } from "@/components/layout";
import { aboutContent } from "@/lib/data/site-config";

export const metadata: Metadata = {
  title: aboutContent.title,
  description: aboutContent.metadataDescription,
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16 md:pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mb-12">
            <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
              {aboutContent.title}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
              {aboutContent.intro}
            </p>
          </div>

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

          <div className="max-w-3xl mt-16 pt-8 border-t border-soft">
            <h3 className="font-serif text-xl text-foreground mb-6">
              {aboutContent.continueTitle}
            </h3>
            <div className="flex flex-wrap gap-4">
              {aboutContent.continueLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center gap-2 text-olive hover:text-foreground transition-colors"
                >
                  {link.label}
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
