import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { homeContent } from "@/lib/data/site-config";

export function CollectMaterials() {
  return (
    <section className="py-16 md:py-24 bg-section">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
            {homeContent.collectMaterials.title}
          </h2>

          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 text-pretty">
            {homeContent.collectMaterials.text}
          </p>

          <Button asChild size="lg" variant="outline">
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
