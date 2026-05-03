"use client";

import { useMemo, useState } from "react";
import type { Work } from "@/lib/types";
import { WorkFilters, type WorkCatalogFilters } from "./work-filters";
import { WorkGrid } from "./work-grid";
import { worksPageContent } from "@/lib/data/site-config";

interface WorksCatalogProps {
  works: Work[];
}

export function WorksCatalog({ works }: WorksCatalogProps) {
  const [filters, setFilters] = useState<WorkCatalogFilters>({
    period: "all",
    genre: "all",
    technique: "all",
    search: "",
  });

  const filteredWorks = useMemo(() => {
    const searchLower = filters.search.toLowerCase().trim();

    return works.filter((work) => {
      if (filters.period !== "all" && work.period !== filters.period) {
        return false;
      }
      if (filters.genre !== "all" && work.genre !== filters.genre) {
        return false;
      }
      if (filters.technique !== "all" && work.technique !== filters.technique) {
        return false;
      }
      if (searchLower) {
        return (
          work.title.toLowerCase().includes(searchLower) ||
          work.descriptionShort?.toLowerCase().includes(searchLower)
        );
      }
      return true;
    });
  }, [works, filters]);

  return (
    <>
      <div className="mb-8">
        <WorkFilters filters={filters} onFiltersChange={setFilters} />
      </div>

      <p className="text-sm text-muted-foreground mb-6">
        {worksPageContent.foundCountLabel}: {filteredWorks.length}
      </p>

      <WorkGrid works={filteredWorks} />
    </>
  );
}
