import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="bg-background py-14 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="order-1">
            <div className="max-w-xl">
              <p className="mb-5 text-[10px] uppercase tracking-[0.14em] text-primary">официальный цифровой арт-архив</p>
              <h1 className="mb-4 font-serif text-[42px] leading-[1.08] text-heading md:text-[56px]">Лев Авксентьевич Овчинников</h1>
              <p className="mb-6 text-[16px] italic text-gold">1926–2001</p>
              <p className="mb-8 text-[14px] leading-[1.65] text-foreground">
                Художник, чья жизнь и работа связаны с профессиональной культурой мастерской, вниманием к натуре, предмету, месту и человеческой памяти.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="rounded-none border border-gold bg-primary px-[18px] py-[9px] text-primary-foreground hover:bg-heading">
                  <Link href="/works">Смотреть работы<ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-none border-soft px-[18px] py-[9px] text-primary hover:border-heading hover:text-heading">
                  <Link href="/about">О художнике</Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="order-2">
            <div className="border border-soft bg-gold p-4 md:p-6">
              <img src="/images/hero/rainbow-landscape.png" alt="Панорамный пейзаж с радугой" className="w-full border border-soft bg-placeholder object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
