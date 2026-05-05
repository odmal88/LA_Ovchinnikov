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
  confirmed: "bg-gold/15 text-heading",
  needs_details: "bg-card text-muted-foreground",
  contextual: "bg-card text-gold",
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

  return (
    <>
      <Header />
      <main className="bg-background pt-20">
        <section className="border-b border-soft bg-card py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <p className="mb-5 text-xs uppercase tracking-widest text-primary">{exhibitionsPageContent.label}</p>
            <h1 className="font-serif text-5xl leading-tight text-heading md:text-6xl">{exhibitionsPageContent.title}</h1>
            <div className="mt-6 max-w-4xl space-y-4 text-base leading-8 text-foreground md:text-lg">
              {exhibitionsPageContent.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-lg border border-soft bg-background p-5"><span className="block font-serif text-4xl text-heading">{exhibitions.length}</span><span className="text-xs text-muted-foreground">записей</span></div>
              <div className="rounded-lg border border-soft bg-background p-5"><span className="block font-serif text-4xl text-heading">{confirmedCount}</span><span className="text-xs text-muted-foreground">подтверждено</span></div>
              <div className="rounded-lg border border-soft bg-background p-5 text-sm leading-7 text-muted-foreground">{exhibitionsPageContent.archiveNote}</div>
            </div>
          </div>
        </section>

        <section className="py-10 md:py-14">
          <div className="container mx-auto grid gap-4 px-4 md:grid-cols-3 md:px-6">
            {exhibitionHighlights.map((item, index) => (
              <article key={item.title} className="rounded-xl border border-soft bg-card p-5">
                <p className="mb-3 text-xs uppercase tracking-widest text-gold">{String(index + 1).padStart(2, "0")}</p>
                <h2 className="text-base leading-6 text-heading">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="pb-12 md:pb-18">
          <div className="container mx-auto px-4 md:px-6">
            <p className="mb-6 border-b border-soft pb-4 text-xs uppercase tracking-widest text-muted-foreground">Хронология выставок</p>
            <div className="space-y-6 border-l border-soft pl-6 md:pl-8">
              {exhibitions.map((item, index) => {
                const group = getTimelineGroup(item);
                const previousGroup = index > 0 ? getTimelineGroup(exhibitions[index - 1]) : "";
                return (
                  <div key={`${item.year}-${item.title}`}>
                    {group !== previousGroup && <p className="pt-3 text-xs uppercase tracking-widest text-muted-foreground">{group}</p>}
                    <article className="relative rounded-xl border border-soft bg-card p-5 md:p-6">
                      <span className={`absolute -left-8 top-6 h-3 w-3 rounded-full border-2 md:-left-10 ${dotClasses[item.status]}`} aria-hidden="true" />
                      <div className="grid gap-4 md:grid-cols-[84px_1fr]">
                        <span className="font-serif text-2xl leading-none text-gold">{item.year}</span>
                        <div>
                          <h3 className="text-base leading-6 text-heading">{item.title}</h3>
                          {item.place && <p className="mt-2 text-xs text-muted-foreground">{item.place}</p>}
                          <p className="mt-3 text-sm italic leading-7 text-foreground">{worksText(item)}</p>
                          {item.note && <p className="mt-3 border-l border-gold pl-3 text-xs italic leading-6 text-primary">{item.note}</p>}
                          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                            <p className="text-xs leading-6 text-muted-foreground">{item.source}</p>
                            <span className={`rounded-full px-3 py-1 text-xs uppercase tracking-wider ${badgeClasses[item.status]}`}>{statusLabels[item.status]}</span>
                          </div>
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
          <div className="container mx-auto grid gap-8 px-4 md:px-6 lg:grid-cols-[1fr_2fr]">
            <div><p className="mb-4 text-xs uppercase tracking-widest text-primary">библиография</p><h2 className="font-serif text-3xl text-heading md:text-4xl">Каталоги выставок</h2></div>
            <ol className="grid gap-3 text-sm leading-7 text-foreground md:grid-cols-2">
              {catalogSources.map((source, index) => <li key={`${source}-${index}`} className="rounded-xl border border-soft bg-background p-4"><span className="mr-3 text-xs italic text-gold">{String(index + 1).padStart(2, "0")}</span>{source}</li>)}
            </ol>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto grid gap-8 px-4 md:px-6 lg:grid-cols-2">
            <div><p className="mb-4 text-xs uppercase tracking-widest text-primary">публикации</p><h2 className="font-serif text-3xl text-heading md:text-4xl">Издания, справочники, исследования</h2></div>
            <div className="space-y-4">
              {publicationGroups.map((group) => <section key={group.title} className="rounded-xl border border-soft bg-card p-5"><h3 className="mb-4 text-xs uppercase tracking-widest text-gold">{group.title}</h3><ul className="space-y-3 text-sm leading-7 text-foreground">{group.items.map((item) => <li key={item} className="border-b border-soft pb-3 last:border-b-0 last:pb-0">{item}</li>)}</ul></section>)}
            </div>
          </div>
        </section>

        <section className="border-t border-soft bg-background py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <p className="mb-4 text-xs uppercase tracking-widest text-primary">собрания</p>
            <h2 className="font-serif text-3xl text-heading md:text-4xl">Местонахождение произведений</h2>
            <div className="mt-8 grid gap-3 md:grid-cols-2">
              {collectionLocations.map((item) => <article key={item.name} className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-soft bg-card p-4"><h3 className="text-sm text-heading">{item.name}</h3><p className="text-xs italic text-muted-foreground">{item.note}</p></article>)}
            </div>
          </div>
        </section>

        <section className="bg-card py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="rounded-xl bg-background p-5 md:p-6">
              <p className="mb-4 text-xs uppercase tracking-widest text-muted-foreground">Что требует дальнейшей проверки</p>
              <ul className="space-y-2 text-sm leading-7 text-muted-foreground">
                {editorialNotes.map((note) => <li key={note}>— {note}</li>)}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
