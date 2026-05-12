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
  const imageAlt = `${work.artist}. ${work.title}. ${work.date || periodLabels[work.period]}. ${techniqueLabels[work.technique]}. Официальный цифровой архив.`;

  return (
    <Link
      href={`/works/${work.slug}`}
      className={cn(
        "group block overflow-hidden border border-soft bg-card [border-width:1px]",
        "transition-all duration-300 hover:border-primary",
        className,
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden border-b border-soft bg-placeholder">
        {hasImage ? (
          <Image
            src={work.imageThumb || work.imageFull || ""}
            alt={imageAlt}
            fill
            priority={priority}
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        ) : (
          <PlaceholderImage
            aspectRatio="auto"
            className="h-full w-full rounded-none border-0"
            size="sm"
          />
        )}
      </div>

      <div className="p-4">
        <h3 className="mb-2 font-serif text-[14px] font-normal text-heading line-clamp-2 transition-colors group-hover:text-primary">
          {work.title}
        </h3>

        <div className="flex flex-wrap gap-x-3 gap-y-1 text-[11px] italic text-primary">
          {work.date && <span>{work.date}</span>}
          {!work.date && work.period && <span>{periodLabels[work.period]}</span>}
          {work.technique && <span>{techniqueLabels[work.technique]}</span>}
        </div>
      </div>
    </Link>
  );
}
