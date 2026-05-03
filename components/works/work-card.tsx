import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import type { Work } from "@/lib/types";
import { periodLabels, techniqueLabels } from "@/lib/types";
import { PlaceholderImage } from "@/components/shared/placeholder-image";

interface WorkCardProps {
  work: Work;
  className?: string;
  priority?: boolean;
}

export function WorkCard({ work, className, priority = false }: WorkCardProps) {
  const hasImage = work.imageThumb || work.imageFull;

  return (
    <Link
      href={`/works/${work.slug}`}
      className={cn(
        "group block bg-card rounded-md border border-soft overflow-hidden [border-width:0.5px]",
        "hover:border-primary hover:shadow-md transition-all duration-300",
        className
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-placeholder">
        {hasImage ? (
          <Image
            src={work.imageThumb || work.imageFull || ""}
            alt={work.title}
            fill
            priority={priority}
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <PlaceholderImage
            aspectRatio="auto"
            className="w-full h-full rounded-none border-0"
            size="sm"
          />
        )}

        <div className="absolute inset-0 bg-heading/0 group-hover:bg-heading/5 transition-colors duration-300" />
      </div>

      <div className="p-4">
        <h3 className="font-serif text-[12px] font-normal text-heading line-clamp-2 mb-2 group-hover:text-primary transition-colors">
          {work.title}
        </h3>

        <div className="flex flex-wrap gap-x-3 gap-y-1 text-[10px] italic text-primary">
          {work.date && <span>{work.date}</span>}
          {!work.date && work.period && <span>{periodLabels[work.period]}</span>}
          {work.technique && <span>{techniqueLabels[work.technique]}</span>}
        </div>
      </div>
    </Link>
  );
}
