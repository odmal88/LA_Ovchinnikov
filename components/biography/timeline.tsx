import type { BiographyEvent } from "@/lib/types";
import { biographyEventTypeLabels } from "@/lib/types";
import { cn } from "@/lib/utils";

interface TimelineProps {
  events: BiographyEvent[];
  title?: string;
}

const eventTone: Record<BiographyEvent["type"], string> = {
  life: "border-l-gold bg-card",
  education: "border-l-primary bg-card",
  exhibition: "border-l-ocher bg-card",
  work: "border-l-heading bg-card",
  family: "border-l-gold bg-card",
  document: "border-l-primary bg-card",
  publication: "border-l-ocher bg-card",
  memory: "border-l-heading bg-card",
};

const badgeTone: Record<BiographyEvent["type"], string> = {
  life: "border-gold/40 text-gold",
  education: "border-primary/40 text-primary",
  exhibition: "border-ocher/40 text-ocher",
  work: "border-heading/30 text-heading",
  family: "border-gold/40 text-gold",
  document: "border-primary/40 text-primary",
  publication: "border-ocher/40 text-ocher",
  memory: "border-heading/30 text-heading",
};

export function Timeline({ events, title }: TimelineProps) {
  return (
    <section className="border border-soft bg-background">
      {title && (
        <div className="border-b border-soft px-5 py-5 md:px-8">
          <h2 className="font-serif text-[26px] leading-tight text-heading md:text-[34px]">
            {title}
          </h2>
        </div>
      )}

      <div className="grid grid-cols-[54px_1fr] px-4 py-6 md:grid-cols-[78px_1fr] md:px-6 md:py-8">
        <div className="relative flex justify-center pt-2">
          <div className="absolute bottom-0 top-4 w-px bg-soft" />
        </div>
        <div className="space-y-5 md:space-y-6">
          {events.map((event, index) => (
            <TimelineItem key={event.id} event={event} isFirst={index === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface TimelineItemProps {
  event: BiographyEvent;
  isFirst?: boolean;
}

function TimelineItem({ event, isFirst = false }: TimelineItemProps) {
  const yearLabel = event.date || event.year || "дата уточняется";

  return (
    <article className="relative">
      <span
        className={cn(
          "absolute -left-[43px] top-5 z-10 h-3 w-3 rounded-full border-2 border-heading bg-background md:-left-[61px]",
          isFirst && "bg-heading",
          event.type === "life" && "border-gold",
          event.type === "education" && "border-primary",
          event.type === "work" && "border-heading",
          event.type === "family" && "border-gold",
          event.type === "publication" && "border-ocher",
          event.type === "memory" && "border-heading"
        )}
        aria-hidden="true"
      />

      <div
        className={cn(
          "border border-soft border-l-4 p-5 transition-colors hover:border-heading/40 md:p-6",
          eventTone[event.type]
        )}
      >
        <div className="mb-3 flex flex-wrap items-baseline gap-2">
          <span className="text-[13px] italic leading-none text-gold md:text-[15px]">
            {yearLabel}
          </span>
          <span className={cn("border px-2 py-0.5 text-[10px] uppercase tracking-[0.12em]", badgeTone[event.type])}>
            {biographyEventTypeLabels[event.type]}
          </span>
        </div>

        <h3 className="mb-3 font-serif text-[20px] leading-tight text-heading md:text-[24px]">
          {event.title}
        </h3>

        {event.text && (
          <p className="text-[15px] leading-[1.75] text-foreground md:text-[16px]">
            {event.text}
          </p>
        )}

        {event.relatedWorks && event.relatedWorks.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {event.relatedWorks.map((work) => (
              <span key={work} className="border border-soft px-2 py-1 text-[11px] italic text-muted-foreground">
                «{work}»
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
