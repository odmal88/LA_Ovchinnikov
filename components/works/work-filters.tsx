"use client";

import { useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { periodLabels, genreLabels, techniqueLabels } from "@/lib/types";
import type { Period, Genre, Technique } from "@/lib/types";

const periods: { value: Period | "all"; label: string }[] = [
  { value: "all", label: "Все периоды" },
  ...Object.entries(periodLabels).map(([value, label]) => ({
    value: value as Period,
    label,
  })),
];

const genres: { value: Genre | "all"; label: string }[] = [
  { value: "all", label: "Все жанры" },
  ...Object.entries(genreLabels).map(([value, label]) => ({
    value: value as Genre,
    label,
  })),
];

const techniques: { value: Technique | "all"; label: string }[] = [
  { value: "all", label: "Все техники" },
  ...Object.entries(techniqueLabels).map(([value, label]) => ({
    value: value as Technique,
    label,
  })),
];

interface WorkFiltersProps {
  currentFilters: {
    period?: string;
    genre?: string;
    technique?: string;
    search?: string;
  };
}

export function WorkFilters({ currentFilters }: WorkFiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const updateFilters = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());

      if (value && value !== "all") {
        params.set(key, value);
      } else {
        params.delete(key);
      }

      router.push(`/works?${params.toString()}`, { scroll: false });
    },
    [router, searchParams]
  );

  const clearFilters = useCallback(() => {
    router.push("/works", { scroll: false });
  }, [router]);

  const hasActiveFilters =
    currentFilters.period ||
    currentFilters.genre ||
    currentFilters.technique ||
    currentFilters.search;

  return (
    <div className="space-y-4">
      {/* Поиск */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Поиск по названию..."
          className="pl-10"
          defaultValue={currentFilters.search || ""}
          onChange={(e) => {
            // Debounce search
            const value = e.target.value;
            const timeoutId = setTimeout(() => {
              updateFilters("search", value);
            }, 300);
            return () => clearTimeout(timeoutId);
          }}
        />
      </div>

      {/* Фильтры */}
      <div className="flex flex-wrap gap-3">
        <Select
          value={currentFilters.period || "all"}
          onValueChange={(value) => updateFilters("period", value)}
        >
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Период" />
          </SelectTrigger>
          <SelectContent>
            {periods.map((period) => (
              <SelectItem key={period.value} value={period.value}>
                {period.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select
          value={currentFilters.genre || "all"}
          onValueChange={(value) => updateFilters("genre", value)}
        >
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Жанр" />
          </SelectTrigger>
          <SelectContent>
            {genres.map((genre) => (
              <SelectItem key={genre.value} value={genre.value}>
                {genre.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select
          value={currentFilters.technique || "all"}
          onValueChange={(value) => updateFilters("technique", value)}
        >
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Техника" />
          </SelectTrigger>
          <SelectContent>
            {techniques.map((technique) => (
              <SelectItem key={technique.value} value={technique.value}>
                {technique.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Сброс фильтров */}
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearFilters}
            className="text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4 mr-1" />
            Сбросить
          </Button>
        )}
      </div>
    </div>
  );
}
