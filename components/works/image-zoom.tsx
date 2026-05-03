"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";
import { cn } from "@/lib/utils";
import { PlaceholderImage } from "@/components/shared/placeholder-image";

interface ImageZoomProps {
  src?: string;
  alt: string;
  className?: string;
}

export function ImageZoom({ src, alt, className }: ImageZoomProps) {
  const [isZoomed, setIsZoomed] = useState(false);

  if (!src) {
    return (
      <PlaceholderImage
        aspectRatio="portrait"
        className={cn("w-full", className)}
        text="Изображение будет добавлено после оцифровки"
        size="lg"
      />
    );
  }

  return (
    <>
      {/* Превью изображения */}
      <button
        onClick={() => setIsZoomed(true)}
        className={cn(
          "relative group cursor-zoom-in overflow-hidden rounded-sm",
          className
        )}
      >
        <div className="relative aspect-[3/4]">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Оверлей с иконкой зума */}
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 p-2 rounded-full">
            <ZoomIn className="h-5 w-5 text-foreground" />
          </div>
        </div>
      </button>

      {/* Модальное окно с увеличенным изображением */}
      {isZoomed && (
        <div
          className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4"
          onClick={() => setIsZoomed(false)}
        >
          <button
            onClick={() => setIsZoomed(false)}
            className="absolute top-4 right-4 p-2 bg-card rounded-full hover:bg-secondary transition-colors"
            aria-label="Закрыть"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="relative max-w-5xl max-h-[90vh] w-full h-full">
            <Image
              src={src}
              alt={alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}
