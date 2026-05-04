import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { homeContent } from "@/lib/data/site-config";

export function AboutPreview() {
  return (
    <section className="bg-deep-violet py-16 md:py-22">
      <div className="container mx-auto px-4 md:px-6">
        <div className="border-t border-soft/30 pt-12 md:pt-16">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.55fr_1.45fr] lg:items-start">
            <div>
              <p className="mb-4 text-[10px] uppercase tracking-[0.14em] text-gold">о художнике</p>
              <h2 className="font-serif text-[30px] font-normal leading-tight text-background md:text-[36px]">Лев Авксентьевич Овчинников</h2>
            </div>

            <div>
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
      </div>
    </section>
  );
}
