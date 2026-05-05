import type { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import {
  catalogSources,
  collectionLocations,
  editorialNotes,
  exhibitionHighlights,
  exhibitions,
  exhibitionsPageContent,
  publicationGroups,
  type ExhibitionRecord,
  type ExhibitionStatus,
} from "@/lib/data/exhibitions";

export const metadata: Metadata = {
  title: exhibitionsPageContent.title,
  description: exhibitionsPageContent.metadataDescription,
};

const statusLabels: Record<ExhibitionStatus, string> = {
  confirmed: "подтверждено",
  needs_details: "уточняется",
  contextual: "контекст",
};

const badgeClasses: Record<ExhibitionStatus, string> = {
  confirmed: "border-gold bg-gold/15 text-heading",
  needs_details: "border-soft bg-background text-muted-foreground",
  contextual: "border-gold bg-background text-gold",
};

const dotClasses: Record<ExhibitionStatus, string> = {
  confirmed: "border-gold bg-gold",
  needs_details: "border-soft bg-background",
  contextual: "border-gold bg-background",
};

function getTimelineGroup(item: ExhibitionRecord) {
  const year = Number.parseInt(item.year, 10);
  if (year >= 1984 && year <= 1990) return "Графика и ксилография";
  if (year > 1990) return "Память и возвращение наследия";
  return "Ленинградские годы";
}

function worksText(item: ExhibitionRecord) {
  return item.works.length > 0 ? item.works.join("; ") : "Состав работ уточняется";
}

export default function ExhibitionsPage() {
  const confirmedCount = exhibitions.filter((item) => item.status === "confirmed").length;
  const firstYear = exhibitions[0]?.year ?? "1958";
  const lastYear = exhibitions[exhibitions.length - 1]?.year ?? "2016";

  return (
    <>
      <Header />
      <main className="bg-background pt-20">
        <section className="border-b border-soft bg-card py-12 md:py-18">
          <div className="container mx-auto grid gap-10 px-4 md:px-6 lg:grid-cols-[1.4fr_0.8fr] lg:items-end">
            <div>
              <p className="mb-5 text-xs uppercase tracking-widest text-primary">{exhibitionsPageContent.label}</p>
              <h1 className="font-serif text-5xl leading-tight text-heading md:text-7xl">{exhibitionsPageContent.title}</h1>
              <div className="mt-7 max-w-4xl space-y-4 text-base leading-8 text-foreground md:text-lg">
                {exhibitionsPageContent.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </div>

            <aside className="border-l border-gold bg-background/70 p-5 md:p-6">
              <p className="text-xs uppercase tracking-widest text-gold">выставочный реестр</p>
              <div className="mt-6 grid grid-cols-2 gap-5">
                <div>
                  <span className="block font-serif text-4xl leading-none text-heading">{exhibitions.length}</span>
                  <span className="mt-2 block text-xs text-muted-foreground">записей</span>
                </div>
                <div>
                  <span className="block font-serif text-4xl leading-none text-heading">{confirmedCount}</span>
                  <span className="mt-2 block text-xs text-muted-foreground">подтверждено</span>
                </div>
              </div>
              <p className="mt-6 text-sm leading-7 text-muted-foreground">{exhibitionsPageContent.archiveNote}</p>
              <p className="mt-5 border-t border-soft pt-4 text-xs uppercase tracking-widest text-muted-foreground">
                {firstYear}—{lastYear}
              </p>
            </aside>
          </div>
        </section>

        <section className="py-10 md:py-14">
          <div className="container mx-auto grid gap-4 px-4 md:grid-cols-3 md:px-6">
            {exhibitionHighlights.map((item, index) => (
              <article key={item.title} className="rounded-xl border border-soft bg-card p-5 shadow-sm">
                <p className="mb-3 text-xs uppercase tracking-widest text-gold">{String(index + 1).padStart(2, "0")}</p>
                <h2 className="text-base leading-6 text-heading">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="pb-12 md:pb-18">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-8 border-b border-soft pb-5">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Хронология выставок</p>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
                В хронологии разведены подтверждённые записи, контекстные сведения и позиции, где требуется сверка состава работ по каталогам.
              </p>
            </div>

            <div className="relative border-l border-soft pl-6 md:pl-10">
              {exhibitions.map((item, index) => {
                const group = getTimelineGroup(item);
                const previousGroup = index > 0 ? getTimelineGroup(exhibitions[index - 1]) : "";
                const showGroup = group !== previousGroup;

                return (
                  <div key={`${item.year}-${item.title}`}>
                    {showGroup && <p className="mb-5 mt-8 text-xs uppercase tracking-widest text-primary first:mt-0">{group}</p>}
                    <article className="relative mb-5 rounded-xl border border-soft bg-card p-5 shadow-sm md:p-6">
                      <span className={`absolute -left-8 top-6 h-3 w-3 rounded-full border-2 md:-left-12 ${dotClasses[item.status]}`} aria-hidden="true" />
                      <div className="grid gap-4 md:grid-cols-[96px_1fr]">
                        <div>
                          <span className="font-serif text-3xl leading-none text-gold">{item.year}</span>
                          <span className="mt-3 hidden h-px w-12 bg-soft md:block" />
                        </div>
                        <div>
                          <div className="flex flex-wrap items-start justify-between gap-3">
                            <h3 className="max-w-3xl text-base leading-6 text-heading md:text-lg">{item.title}</h3>
                            <span className={`rounded-full border px-3 py-1 text-xs uppercase tracking-wider ${badgeClasses[item.status]}`}>{statusLabels[item.status]}</span>
                          </div>
                          {item.place && <p className="mt-2 text-xs text-muted-foreground">{item.place}</p>}
                          <p className="mt-3 text-sm italic leading-7 text-foreground">{worksText(item)}</p>
                          {item.note && <p className="mt-3 border-l border-gold pl-3 text-xs italic leading-6 text-primary">{item.note}</p>}
                          <p className="mt-4 border-t border-soft pt-3 text-xs leading-6 text-muted-foreground">{item.source}</p>
                        </div>
                      </div>
                    </article>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-y border-soft bg-card py-12 md:py-16">
          <div className="container mx-auto grid gap-8 px-4 md:px-6 lg:grid-cols-[0.8fr_1.7fr]">
            <div>
              <p className="mb-4 text-xs uppercase tracking-widest text-primary">библиография</p>
              <h2 className="font-serif text-3xl leading-tight text-heading md:text-4xl">Каталоги и источники</h2>
              <p className="mt-5 text-sm leading-7 text-muted-foreground">
                Полный список каталогов сохранён как справочный аппарат. Он поддерживает проверку дат, названий работ и выставочной истории.
              </p>
            </div>
            <div className="space-y-4">
              <details className="rounded-xl border border-soft bg-background p-5" open>
                <summary className="cursor-pointer text-xs uppercase tracking-widest text-gold">Каталоги выставок</summary>
                <ol className="mt-5 grid gap-3 text-sm leading-7 text-foreground md:grid-cols-2">
                  {catalogSources.map((source, index) => (
                    <li key={`${source}-${index}`} className="border-b border-soft pb-3 last:border-b-0">
                      <span className="mr-3 text-xs italic text-gold">{String(index + 1).padStart(2, "0")}</span>{source}
                    </li>
                  ))}
                </ol>
              </details>

              {publicationGroups.map((group) => (
                <details key={group.title} className="rounded-xl border border-soft bg-background p-5">
                  <summary className="cursor-pointer text-xs uppercase tracking-widest text-gold">{group.title}</summary>
                  <ul className="mt-5 space-y-3 text-sm leading-7 text-foreground">
                    {group.items.map((item) => <li key={item} className="border-b border-soft pb-3 last:border-b-0">{item}</li>)}
                  </ul>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto grid gap-8 px-4 md:px-6 lg:grid-cols-[0.8fr_1.7fr]">
            <div>
              <p className="mb-4 text-xs uppercase tracking-widest text-primary">собрания</p>
              <h2 className="font-serif text-3xl leading-tight text-heading md:text-4xl">Произведения в собраниях</h2>
              <p className="mt-5 text-sm leading-7 text-muted-foreground">
                Музейное присутствие фиксируется осторожно: конкретные произведения должны подтверждаться инвентарными данными и архивными источниками.
              </p>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {collectionLocations.map((item) => (
                <article key={item.name} className="rounded-xl border border-soft bg-card p-4 shadow-sm">
                  <h3 className="text-sm leading-6 text-heading">{item.name}</h3>
                  <p className="mt-3 text-xs italic text-muted-foreground">{item.note}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-soft bg-card py-12 md:py-16">
          <div className="container mx-auto grid gap-8 px-4 md:px-6 lg:grid-cols-[0.8fr_1.7fr]">
            <div>
              <p className="mb-4 text-xs uppercase tracking-widest text-muted-foreground">редакционная проверка</p>
              <h2 className="font-serif text-3xl leading-tight text-heading md:text-4xl">Что уточняется дальше</h2>
            </div>
            <div className="rounded-xl bg-background p-5 md:p-6">
              <ul className="space-y-2 text-sm leading-7 text-muted-foreground">
                {editorialNotes.map((note) => <li key={note}>— {note}</li>)}
              </ul>
              <p className="mt-6 border-t border-soft pt-5 text-sm leading-7 text-foreground">
                По мере проверки каталогов, афиш, приглашений и музейных сведений этот раздел будет связывать выставочные события с конкретными произведениями, публикациями и историей бытования работ Льва Авксентьевича Овчинникова.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
