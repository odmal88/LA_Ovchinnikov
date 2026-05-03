import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="py-14 md:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <div className="max-w-xl">
              <p className="text-[9px] text-primary uppercase tracking-[0.14em] mb-4">ОФИЦИАЛЬНЫЙ ЦИФРОВОЙ АРХИВ</p>
              <h1 className="font-serif text-[30px] leading-tight text-heading mb-3">Лев Авксентьевич Овчинников</h1>
              <p className="text-[14px] italic text-primary mb-6">1926–2001</p>
              <p className="text-[13px] text-foreground leading-[1.65] mb-8">
                Художник, чья жизнь и работа связаны с профессиональной культурой мастерской, вниманием к натуре, предмету, месту и человеческой памяти.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-[18px] py-[9px]">
                  <Link href="/works">Смотреть работы<ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-md px-[18px] py-[9px] border-soft text-primary">
                  <Link href="/about">О художнике</Link>
                </Button>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-gold p-5 md:p-7 rounded-md">
              {/* TODO: Replace placeholder with source image file at public/images/hero/rainbow-landscape.png */}
              <img src="/images/hero/rainbow-landscape.png" alt="Панорамный пейзаж с радугой" className="w-full h-auto border border-soft bg-placeholder" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
