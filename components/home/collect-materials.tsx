import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { homeContent } from "@/lib/data/site-config";

export function CollectMaterials() {
  return (
    <section className="py-16 md:py-24 bg-ocher">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-[22px] font-normal text-background mb-6">
            {homeContent.collectMaterials.title}
          </h2>

          <p className="text-[13px] text-background leading-[1.65] mb-8 text-pretty">
            {homeContent.collectMaterials.text}
          </p>

          <Button asChild size="lg" className="bg-gold text-heading hover:bg-gold/90">
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
