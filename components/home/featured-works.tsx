import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getFeaturedWorks } from "@/lib/data/works";
import { WorkCard } from "@/components/works/work-card";

export function FeaturedWorks() {
  const works = getFeaturedWorks().slice(0, 6);

  return (
    <section className="bg-background py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 border-b border-soft pb-6 sm:flex-row sm:items-end">
          <div>
            <p className="mb-2 text-[10px] uppercase tracking-[0.14em] text-primary">архивная витрина</p>
            <h2 className="mb-2 font-serif text-[28px] font-normal text-heading">Избранные работы</h2>
          </div>

          <Link href="/works" className="group flex items-center gap-2 text-[12px] text-primary transition-colors hover:text-heading">
            Все работы
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((work, index) => (
            <WorkCard key={work.id} work={work} priority={index < 3} />
          ))}
        </div>
      </div>
    </section>
  );
}
