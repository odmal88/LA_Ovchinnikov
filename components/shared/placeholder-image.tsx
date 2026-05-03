import { cn } from "@/lib/utils";

interface PlaceholderImageProps {
  className?: string;
  aspectRatio?: "square" | "portrait" | "landscape" | "auto";
  text?: string;
  size?: "sm" | "md" | "lg";
}

export function PlaceholderImage({
  className,
  aspectRatio = "landscape",
  text = "Изображение будет добавлено",
  size = "md",
}: PlaceholderImageProps) {
  const aspectClasses = {
    square: "aspect-square",
    portrait: "aspect-[3/4]",
    landscape: "aspect-[4/3]",
    auto: "",
  };

  const textSizes = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  };

  return (
    <div
      className={cn(
        "bg-card-museum border border-soft rounded-sm flex items-center justify-center",
        aspectClasses[aspectRatio],
        className
      )}
    >
      <div className="flex flex-col items-center gap-2 p-4 text-center">
        {/* Иконка рамки */}
        <svg
          className="w-8 h-8 text-muted-foreground/50"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        >
          <rect x="3" y="3" width="18" height="18" rx="1" />
          <rect x="5" y="5" width="14" height="14" rx="0.5" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="M5 15l3-3 2 2 4-4 5 5" />
        </svg>
        <span className={cn("text-muted-foreground/70", textSizes[size])}>
          {text}
        </span>
      </div>
    </div>
  );
}
