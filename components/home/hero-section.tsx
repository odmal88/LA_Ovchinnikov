import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig, homeContent } from "@/lib/data/site-config";
import { PlaceholderImage } from "@/components/shared/placeholder-image";

export function HeroSection() {
  return (
    <section className="min-h-[90vh] flex items-center pt-20 md:pt-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Текстовый блок */}
          <div className="order-2 lg:order-1">
            <div className="max-w-xl">
              {/* Статус архива */}
              <p className="text-sm text-ocher uppercase tracking-wide mb-4">
                {siteConfig.archiveStatus}
              </p>

              {/* Имя художника */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-foreground mb-3 text-balance">
                {siteConfig.artistName}
              </h1>

              {/* Годы жизни */}
              <p className="text-xl md:text-2xl text-muted-foreground mb-6">
                {siteConfig.artistYears}
              </p>

              {/* Вводный текст */}
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 text-pretty">
                {homeContent.heroSubtitle}
              </p>

              {/* Кнопки действий */}
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-olive hover:bg-olive/90">
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

          {/* Изображение */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Декоративная рамка */}
              <div className="absolute -inset-4 border border-soft rounded-sm -z-10 hidden md:block" />
              
              <PlaceholderImage
                aspectRatio="portrait"
                className="w-full max-w-md mx-auto lg:max-w-none"
                text="Изображение работы будет добавлено"
                size="lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
