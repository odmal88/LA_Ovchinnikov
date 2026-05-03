import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getFeaturedWorks } from "@/lib/data/works";
import { WorkCard } from "@/components/works/work-card";

export function FeaturedWorks() {
  const works = getFeaturedWorks();

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        {/* Заголовок секции */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-10">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-2">
              Избранные работы
            </h2>
            <p className="text-muted-foreground">
              Произведения из корпуса работ художника
            </p>
          </div>

          <Link
            href="/works"
            className="group flex items-center gap-2 text-sm font-medium text-olive hover:text-foreground transition-colors"
          >
            Все работы
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Сетка работ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((work, index) => (
            <WorkCard key={work.id} work={work} priority={index < 3} />
          ))}
        </div>
      </div>
    </section>
  );
}
