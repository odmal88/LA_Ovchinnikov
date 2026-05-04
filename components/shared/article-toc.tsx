"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface ArticleTocSection {
  id: string;
  number: string;
  title: string;
}

interface ArticleTocProps {
  sections: ArticleTocSection[];
}

export function ArticleToc({ sections }: ArticleTocProps) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActiveId(visible.target.id);
        }
      },
      {
        root: null,
        rootMargin: "-18% 0px -62% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <div className="sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto border-l border-soft pl-5 pr-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <p className="mb-5 text-[10px] uppercase tracking-[0.16em] text-primary">Разделы статьи</p>
      <nav className="grid gap-2.5">
        {sections.map((section) => {
          const isActive = section.id === activeId;

          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={() => setActiveId(section.id)}
              className={cn(
                "group grid grid-cols-[28px_1fr] gap-3 border-l-2 border-transparent pl-2 text-[11px] leading-[1.35] transition-colors",
                isActive ? "border-gold text-heading" : "text-primary/70 hover:text-heading"
              )}
            >
              <span className={cn("italic transition-colors", isActive ? "text-gold" : "text-gold/65 group-hover:text-heading")}>
                {section.number}
              </span>
              <span>{section.title}</span>
            </a>
          );
        })}
      </nav>
    </div>
  );
}
