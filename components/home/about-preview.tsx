import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { homeContent } from "@/lib/data/site-config";

export function AboutPreview() {
  return (
    <section className="py-16 md:py-24 bg-deep-violet">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-[22px] font-normal text-background mb-8">
            О художнике
          </h2>

          <div className="space-y-4 text-[13px] text-dark-text leading-[1.65] mb-8">
            {homeContent.aboutPreview.split("\n\n").map((paragraph, index) => (
              <p key={index} className="text-pretty">
                {paragraph}
              </p>
            ))}
          </div>

          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-[12px] text-gold hover:text-background font-normal transition-colors"
          >
            Подробнее о художнике
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
