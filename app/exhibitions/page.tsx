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

const statusClasses: Record<ExhibitionStatus, string> = {
  confirmed: "border-gold/70 bg-gold/10 text-heading",
  needs_details: "border-ocher/60 bg-ocher/10 text-primary",
  contextual: "border-primary/35 bg-primary/5 text-primary",
};

export default function ExhibitionsPage() {
  const confirmedCount = exhibitions.filter((item) => item.status === "confirmed").length;

  return (
    <>
      <Header />
      <main className="bg-background pt-20">
        <section className="border-b border-soft bg-card py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <p className="mb-5 text-[10px] uppercase tracking-[0.18em] text-primary">{exhibitionsPageContent.label}</p>
            <h1 className="font-serif text-[42px] leading-[1.08] text-heading md:text-[64px]">{exhibitionsPageContent.title}</h1>
            <div className="mt-6 max-w-4xl space-y-4 text-[16px] leading-[1.75] text-foreground md:text-[18px]">
              {exhibitionsPageContent.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="border border-soft bg-background/60 p-5"><span className="block font-serif text-[34px] text-heading">{exhibitions.length}</span><span className="text-[11px] uppercase tracking-[0.1em] text-muted-foreground">записей</span></div>
              <div className="border border-soft bg-background/60 p-5"><span className="block font-serif text-[34px] text-heading">{confirmedCount}</span><span className="text-[11px] uppercase tracking-[0.1em] text-muted-foreground">подтверждено</span></div>
              <div className="border border-soft bg-background/60 p-5 text-[13px] leading-[1.7] text-muted-foreground">{exhibitionsPageContent.archiveNote}</div>
            </div>
          </div>
        </section>

        <section className="py-10 md:py-14">
          <div className="container mx-auto grid gap-4 px-4 md:grid-cols-3 md:px-6">
            {exhibitionHighlights.map((item) => (
              <article key={item.title} className="border border-soft bg-card p-5 md:p-6">
                <h2 className="font-serif text-[22px] leading-[1.2] text-heading">{item.title}</h2>
                <p className="mt-4 text-[14px] leading-[1.75] text-muted-foreground">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="pb-12 md:pb-18">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="mb-6 border-b border-soft pb-5 font-serif text-[30px] leading-tight text-heading md:text-[38px]">Хронология выставок</h2>
            <div className="overflow-x-auto border border-soft bg-card">
              <table className="min-w-[980px] border-collapse text-left text-[13px] leading-[1.55]">
                <thead className="bg-background/70 text-[10px] uppercase tracking-[0.12em] text-primary">
                  <tr><th className="border-b border-r border-soft px-4 py-3 font-normal">Год</th><th className="border-b border-r border-soft px-4 py-3 font-normal">Выставка</th><th className="border-b border-r border-soft px-4 py-3 font-normal">Работы</th><th className="border-b border-r border-soft px-4 py-3 font-normal">Каталог / источник</th><th className="border-b border-soft px-4 py-3 font-normal">Статус</th></tr>
                </thead>
                <tbody>
                  {exhibitions.map((item, index) => (
                    <tr key={`${item.year}-${item.title}`} className={index % 2 === 0 ? "bg-card" : "bg-background/35"}>
                      <td className="align-top border-r border-t border-soft px-4 py-4 font-serif text-[20px] text-heading">{item.year}</td>
                      <td className="align-top border-r border-t border-soft px-4 py-4"><p className="text-[15px] leading-[1.45] text-heading">{item.title}</p>{item.place && <p className="mt-2 text-[12px] text-muted-foreground">{item.place}</p>}{item.note && <p className="mt-3 border-l border-gold/60 pl-3 text-[12px] italic text-primary">{item.note}</p>}</td>
                      <td className="align-top border-r border-t border-soft px-4 py-4">{item.works.length ? item.works.join("; ") : "состав работ уточняется"}</td>
                      <td className="align-top border-r border-t border-soft px-4 py-4 text-muted-foreground">{item.source}</td>
                      <td className="align-top border-t border-soft px-4 py-4"><span className={`inline-flex border px-2 py-1 text-[10px] uppercase tracking-[0.08em] ${statusClasses[item.status]}`}>{statusLabels[item.status]}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="border-y border-soft bg-card py-12 md:py-16">
          <div className="container mx-auto grid gap-10 px-4 md:px-6 lg:grid-cols-[0.9fr_1.6fr]">
            <div><p className="mb-4 text-[10px] uppercase tracking-[0.16em] text-primary">библиография</p><h2 className="font-serif text-[30px] text-heading md:text-[38px]">Каталоги выставок</h2></div>
            <ol className="grid gap-3 text-[13px] leading-[1.7] text-foreground">{catalogSources.map((source, index) => <li key={`${source}-${index}`} className="grid grid-cols-[34px_1fr] gap-3 border-b border-soft pb-3"><span className="text-[12px] italic text-gold">{String(index + 1).padStart(2, "0")}</span><span>{source}</span></li>)}</ol>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto grid gap-8 px-4 md:px-6 lg:grid-cols-2">
            <div><p className="mb-4 text-[10px] uppercase tracking-[0.16em] text-primary">публикации</p><h2 className="font-serif text-[30px] text-heading md:text-[38px]">Издания, справочники, исследования</h2></div>
            <div className="space-y-6">{publicationGroups.map((group) => <section key={group.title} className="border border-soft bg-card p-5"><h3 className="mb-4 text-[14px] uppercase tracking-[0.12em] text-primary">{group.title}</h3><ul className="space-y-3 text-[13px] leading-[1.7] text-foreground">{group.items.map((item) => <li key={item} className="border-l border-gold/60 pl-4">{item}</li>)}</ul></section>)}</div>
          </div>
        </section>

        <section className="border-t border-soft bg-background py-12 md:py-16">
          <div className="container mx-auto grid gap-10 px-4 md:px-6 lg:grid-cols-[1fr_1.2fr]">
            <div><p className="mb-4 text-[10px] uppercase tracking-[0.16em] text-primary">собрания</p><h2 className="font-serif text-[30px] text-heading md:text-[38px]">Местонахождение произведений</h2><p className="mt-5 text-[14px] leading-[1.75] text-muted-foreground">Конкретный состав музейных собраний требует инвентарной проверки.</p></div>
            <div className="grid gap-3">{collectionLocations.map((item) => <article key={item.name} className="grid gap-2 border border-soft bg-card p-4 md:grid-cols-[1fr_180px]"><h3 className="text-[15px] text-heading">{item.name}</h3><p className="text-[12px] italic text-muted-foreground">{item.note}</p></article>)}</div>
          </div>
        </section>

        <section className="bg-deep-violet py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6"><p className="mb-4 text-[10px] uppercase tracking-[0.16em] text-gold">редакционные пометки</p><h2 className="mb-6 font-serif text-[30px] text-background md:text-[38px]">Что требует дальнейшей проверки</h2><ul className="grid gap-3 text-[14px] leading-[1.75] text-dark-text">{editorialNotes.map((note) => <li key={note} className="border-l border-gold/70 pl-4">{note}</li>)}</ul></div>
        </section>
      </main>
      <Footer />
    </>
  );
}
