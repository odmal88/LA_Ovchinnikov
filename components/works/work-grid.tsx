import type { Work } from "@/lib/types";
import { WorkCard } from "./work-card";

interface WorkGridProps {
  works: Work[];
}

export function WorkGrid({ works }: WorkGridProps) {
  if (works.length === 0) {
    return (
      <div className="py-16 text-center">
        <p className="text-muted-foreground">
          Работы не найдены. Попробуйте изменить параметры поиска.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {works.map((work) => (
        <WorkCard key={work.id} work={work} />
      ))}
    </div>
  );
}
