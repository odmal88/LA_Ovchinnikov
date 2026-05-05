import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { homeContent, siteConfig } from "@/lib/data/site-config";

export function HeroSection() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-18">
          <div className="order-1">
            <div className="max-w-2xl">
              <p className="mb-5 text-[10px] uppercase tracking-[0.14em] text-primary">
                {siteConfig.archiveStatus}
              </p>
              <h1 className="mb-5 font-serif text-[48px] leading-[1.04] text-heading md:text-[68px]">
                {siteConfig.artistName}
              </h1>
              <p className="mb-7 text-[18px] italic text-gold">
                {siteConfig.artistYears}
              </p>
              <p className="mb-9 max-w-xl text-[15px] leading-[1.65] text-foreground">
                {homeContent.heroSubtitle}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="rounded-none border border-gold bg-primary px-[22px] py-[10px] text-primary-foreground hover:bg-heading">
                  <Link href="/works">Смотреть работы<ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-none border-soft px-[22px] py-[10px] text-primary hover:border-heading hover:text-heading">
                  <Link href="/about">О художнике</Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="order-2">
            <figure className="ml-auto max-w-[430px] border border-soft bg-gold p-4 md:p-6">
              <img
                src="/works/lev/archive/lev-ovchinnikov-workshop.jpg?v=20260505-original"
                alt="Лев Авксентьевич Овчинников в мастерской"
                width={400}
                height={400}
                className="block h-auto w-full border border-soft bg-placeholder"
              />
              <figcaption className="mt-3 text-[12px] leading-relaxed text-heading/70">
                Лев Авксентьевич Овчинников в мастерской. Семейный архив.
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
