import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Work } from "@/lib/types";
import {
  periodLabels,
  genreLabels,
  techniqueLabels,
  attributionStatusLabels,
} from "@/lib/types";
import { ImageZoom } from "./image-zoom";
import { Button } from "@/components/ui/button";

interface WorkDetailProps {
  work: Work;
}

export function WorkDetail({ work }: WorkDetailProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
      {/* Изображение */}
      <div>
        <ImageZoom
          src={work.imageFull}
          alt={work.title}
          className="w-full"
        />
      </div>

      {/* Информация о работе */}
      <div>
        {/* Навигация назад */}
        <Button
          asChild
          variant="ghost"
          size="sm"
          className="mb-6 -ml-2 text-muted-foreground hover:text-foreground"
        >
          <Link href="/works">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Назад к каталогу
          </Link>
        </Button>

        {/* Название */}
        <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-4 text-balance">
          {work.title}
        </h1>

        {/* Автор */}
        <p className="text-lg text-muted-foreground mb-6">{work.artist}</p>

        {/* Метаданные */}
        <div className="space-y-4 mb-8">
          <MetaRow label="Дата" value={work.date || periodLabels[work.period]} />
          <MetaRow label="Техника" value={techniqueLabels[work.technique]} />
          {work.material && <MetaRow label="Материал" value={work.material} />}
          {work.dimensions && <MetaRow label="Размер" value={work.dimensions} />}
          <MetaRow label="Жанр" value={genreLabels[work.genre]} />
          {work.place && <MetaRow label="Место" value={work.place} />}
        </div>

        {/* Описание */}
        {work.descriptionShort && (
          <div className="mb-8">
            <h2 className="font-medium text-foreground mb-2">Описание</h2>
            <p className="text-muted-foreground leading-relaxed">
              {work.descriptionShort}
            </p>
          </div>
        )}

        {/* Статус атрибуции */}
        <div className="pt-6 border-t border-soft">
          <p className="text-sm text-muted-foreground">
            <span className="font-medium">Статус сведений:</span>{" "}
            {attributionStatusLabels[work.attributionStatus]}
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            ID: {work.id}
          </p>
        </div>
      </div>
    </div>
  );
}

function MetaRow({ label, value }: { label: string; value?: string }) {
  if (!value) return null;

  return (
    <div className="flex flex-col sm:flex-row sm:gap-4">
      <span className="text-sm font-medium text-foreground min-w-[100px]">
        {label}
      </span>
      <span className="text-sm text-muted-foreground">{value}</span>
    </div>
  );
}
