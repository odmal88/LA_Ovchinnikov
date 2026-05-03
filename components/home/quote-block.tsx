import { homeContent } from "@/lib/data/site-config";

export function QuoteBlock() {
  // Если есть подтверждённая цитата — показываем её
  // Если нет — показываем пометку об этом
  const hasQuote = homeContent.quoteText !== null;

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          {hasQuote ? (
            <>
              <blockquote className="font-serif text-2xl md:text-3xl text-foreground italic leading-relaxed mb-6">
                &laquo;{homeContent.quoteText}&raquo;
              </blockquote>
              <cite className="text-muted-foreground not-italic">
                Лев Авксентьевич Овчинников
              </cite>
            </>
          ) : (
            <div className="border border-dashed border-soft rounded-sm p-8 md:p-12">
              <p className="text-muted-foreground italic">
                {homeContent.quoteNote}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
