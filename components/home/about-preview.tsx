import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { homeContent } from "@/lib/data/site-config";

export function AboutPreview() {
  return (
    <section className="border-t border-soft/30 bg-deep-violet py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:items-start">
          <div className="hidden lg:block">
            <div className="h-px w-full bg-soft/40" />
            <p className="mt-5 max-w-[220px] text-[12px] italic leading-[1.65] text-dark-text">
              Художественный мир, мастерская, память места и внимательная работа с натурой.
            </p>
          </div>

          <div>
            <p className="mb-3 text-[10px] uppercase tracking-[0.14em] text-gold">о художнике</p>
            <h2 className="mb-6 font-serif text-[30px] font-normal text-background">Лев Авксентьевич Овчинников</h2>

            <div className="mb-7 space-y-4 text-[14px] leading-[1.65] text-dark-text">
              {homeContent.aboutPreview.split("\n\n").map((paragraph, index) => (
                <p key={index} className="text-pretty">{paragraph}</p>
              ))}
            </div>

            <Link href="/about" className="inline-flex items-center gap-2 text-[12px] text-gold italic transition-colors hover:text-background">
              Подробнее о художнике
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
