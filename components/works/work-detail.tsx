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
  const hasArchiveInfo =
    Boolean(work.signature) ||
    Boolean(work.provenance) ||
    Boolean(work.condition) ||
    Boolean(work.inscriptions?.length);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
      <div>
        <ImageZoom src={work.imageFull} alt={work.title} className="w-full" />
      </div>

      <div>
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

        <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-4 text-balance">
          {work.title}
        </h1>

        <p className="text-lg text-muted-foreground mb-6">{work.artist}</p>

        <div className="space-y-4 mb-8">
          <MetaRow label="Дата" value={work.date || periodLabels[work.period]} />
          <MetaRow label="Техника" value={techniqueLabels[work.technique]} />
          {work.material && <MetaRow label="Материал" value={work.material} />}
          {work.dimensions && <MetaRow label="Размер" value={work.dimensions} />}
          <MetaRow label="Жанр" value={genreLabels[work.genre]} />
          {work.place && <MetaRow label="Место" value={work.place} />}
        </div>

        {(work.descriptionShort || work.descriptionFull) && (
          <div className="mb-8 space-y-4">
            <h2 className="font-medium text-foreground mb-2">Описание</h2>
            {work.descriptionShort && (
              <p className="text-muted-foreground leading-relaxed">
                {work.descriptionShort}
              </p>
            )}
            {work.descriptionFull && (
              <p className="text-muted-foreground leading-relaxed">
                {work.descriptionFull}
              </p>
            )}
          </div>
        )}

        {hasArchiveInfo && (
          <div className="mb-8 border-t border-soft pt-6">
            <h2 className="font-medium text-foreground mb-3">Архивные сведения</h2>
            <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              {work.signature && <p>{work.signature}</p>}
              {work.provenance && <p>Собрание: {work.provenance}</p>}
              {work.condition && <p>Состояние: {work.condition}</p>}
              {work.inscriptions?.length ? (
                <ul className="list-disc pl-5 space-y-2">
                  {work.inscriptions.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        )}

        <div className="pt-6 border-t border-soft">
          <p className="text-sm text-muted-foreground">
            <span className="font-medium">Статус сведений:</span>{" "}
            {attributionStatusLabels[work.attributionStatus]}
          </p>
          <p className="text-xs text-muted-foreground mt-2">ID: {work.id}</p>
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
