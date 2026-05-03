import type { BiographyEvent } from "@/lib/types";
import { biographyEventTypeLabels } from "@/lib/types";
import { cn } from "@/lib/utils";

interface TimelineProps {
  events: BiographyEvent[];
  title?: string;
}

export function Timeline({ events, title }: TimelineProps) {
  return (
    <div className="mb-12">
      {title && (
        <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-8">
          {title}
        </h2>
      )}

      <div className="relative">
        {/* Вертикальная линия */}
        <div className="absolute left-3 md:left-4 top-0 bottom-0 w-px bg-soft/90" />

        {/* События */}
        <div className="space-y-8">
          {events.map((event) => (
            <TimelineItem key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
}

interface TimelineItemProps {
  event: BiographyEvent;
}

function TimelineItem({ event }: TimelineItemProps) {
  return (
    <div className="relative flex gap-6 md:gap-8">
      {/* Маркер */}
      <div className="relative z-10 flex-shrink-0">
        <div
          className={cn(
            "w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-soft bg-card flex items-center justify-center",
            event.year && "bg-brick border-brick"
          )}
        >
          {event.year && (
            <div className="w-2 h-2 rounded-full bg-card" />
          )}
        </div>
      </div>

      {/* Контент */}
      <div className="flex-1 pb-2">
        {/* Год */}
        {event.year && (
          <span className="inline-block text-sm font-medium text-ocher mb-1">
            {event.year}
          </span>
        )}

        {/* Заголовок */}
        <h3 className="font-serif text-lg md:text-xl text-foreground mb-2">
          {event.title}
        </h3>

        {/* Текст */}
        {event.text && (
          <p className="text-muted-foreground leading-relaxed text-pretty">
            {event.text}
          </p>
        )}

        {/* Тип события */}
        <span className="inline-block mt-3 text-xs text-muted-foreground bg-section px-2 py-1 rounded">
          {biographyEventTypeLabels[event.type]}
        </span>
      </div>
    </div>
  );
}
