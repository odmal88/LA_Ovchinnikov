import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig, homeContent } from "@/lib/data/site-config";
import { PlaceholderImage } from "@/components/shared/placeholder-image";

export function HeroSection() {
  return (
    <section className="min-h-[90vh] flex items-center pt-24 md:pt-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="max-w-xl">
              <p className="text-[9px] font-normal text-primary uppercase tracking-[0.14em] mb-4">
                {siteConfig.archiveStatus}
              </p>
              <h1 className="font-serif text-[30px] leading-tight font-normal text-heading mb-3 text-balance">
                {siteConfig.artistName}
              </h1>
              <p className="text-[14px] italic text-primary mb-6">
                {siteConfig.artistYears}
              </p>
              <p className="text-[13px] text-foreground leading-[1.65] mb-8 text-pretty">
                {homeContent.heroSubtitle}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="/works">
                    Смотреть работы
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/about">О художнике</Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative max-w-md mx-auto lg:max-w-none bg-gold p-5 md:p-7 rounded-md">
              <div className="hidden md:block absolute -inset-3 border border-soft rounded-md" />
              <div className="relative">
                <PlaceholderImage
                  aspectRatio="portrait"
                  className="w-full border border-soft bg-placeholder"
                  text="Изображение работы будет добавлено"
                  size="lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
