import { homeContent } from "@/lib/data/site-config";

export function QuoteBlock() {
  const hasQuote = homeContent.quoteText !== null;

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center border-y border-soft py-10 md:py-12">
          {hasQuote ? (
            <>
              <blockquote className="text-[14px] text-primary italic leading-relaxed mb-6">
                &laquo;{homeContent.quoteText}&raquo;
              </blockquote>
              <cite className="text-[13px] text-primary not-italic">
                Лев Авксентьевич Овчинников
              </cite>
            </>
          ) : (
            <div className="border border-dashed border-soft rounded-md p-8 md:p-12 bg-background">
              <p className="text-[13px] text-primary italic leading-[1.65]">
                {homeContent.quoteNote}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
