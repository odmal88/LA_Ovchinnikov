"use client";

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

export interface WorkCatalogFilters {
  period: string;
  genre: string;
  technique: string;
  search: string;
}

interface WorkFiltersProps {
  filters: WorkCatalogFilters;
  onFiltersChange: (filters: WorkCatalogFilters) => void;
}

export function WorkFilters({ filters, onFiltersChange }: WorkFiltersProps) {
  const hasActiveFilters =
    filters.period !== "all" ||
    filters.genre !== "all" ||
    filters.technique !== "all" ||
    filters.search.trim().length > 0;

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Поиск по названию..."
          className="pl-10"
          value={filters.search}
          onChange={(e) =>
            onFiltersChange({ ...filters, search: e.target.value })
          }
        />
      </div>

      <div className="flex flex-wrap gap-3">
        <Select
          value={filters.period}
          onValueChange={(value) =>
            onFiltersChange({ ...filters, period: value })
          }
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
          value={filters.genre}
          onValueChange={(value) => onFiltersChange({ ...filters, genre: value })}
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
          value={filters.technique}
          onValueChange={(value) =>
            onFiltersChange({ ...filters, technique: value })
          }
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

        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() =>
              onFiltersChange({
                period: "all",
                genre: "all",
                technique: "all",
                search: "",
              })
            }
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
