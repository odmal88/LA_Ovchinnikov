import { homeContent } from "@/lib/data/site-config";

export function QuoteBlock() {
  const hasQuote = homeContent.quoteText !== null;

  return (
    <section className="bg-background py-14 md:py-18">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl border-y border-soft py-10 text-center md:py-12">
          {hasQuote ? (
            <>
              <blockquote className="mb-6 text-[15px] italic leading-relaxed text-primary">&laquo;{homeContent.quoteText}&raquo;</blockquote>
              <cite className="text-[13px] not-italic text-primary">Лев Авксентьевич Овчинников</cite>
            </>
          ) : (
            <p className="text-[13px] italic leading-[1.65] text-primary">{homeContent.quoteNote}</p>
          )}
        </div>
      </div>
    </section>
  );
}
