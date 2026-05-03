import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { homeContent } from "@/lib/data/site-config";

export function CollectMaterials() {
  return (
    <section className="bg-ocher py-12 md:py-14">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl border border-soft/40 px-6 py-8 text-center md:px-10 md:py-9">
          <h2 className="mb-4 font-serif text-[28px] font-normal text-background">{homeContent.collectMaterials.title}</h2>

          <p className="mb-6 text-[14px] leading-[1.65] text-background text-pretty">{homeContent.collectMaterials.text}</p>

          <Button asChild size="lg" className="rounded-none bg-gold px-[18px] py-[9px] text-heading hover:bg-gold/90">
            <Link href="/contacts">
              Передать сведения
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
