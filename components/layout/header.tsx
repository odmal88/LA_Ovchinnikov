"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { navigation } from "@/lib/data/site-config";
import { Button } from "@/components/ui/button";

const normalizePath = (path: string) => {
  if (path === "/") return "/";
  return path.replace(/\/$/, "");
};

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const currentPath = normalizePath(pathname || "/");

  return (
    <header className="sticky top-0 z-50">
      <div className="h-1 w-full bg-gold" />
      <div className="border-b-[1.5px] border-soft bg-card shadow-[0_6px_18px_rgba(30,16,48,0.08)]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between py-4">
            <Link
              href="/"
              className="flex flex-col leading-tight"
              aria-label="На главную страницу архива Льва Авксентьевича Овчинникова"
              title="Архив Л.А. Овчинникова"
            >
              <span className="text-[14px] text-heading sm:text-[15px]">
                Архив Л.А. Овчинникова
              </span>
              <span className="mt-1 text-[10px] text-primary sm:text-[11px]">
                официальный цифровой архив
              </span>
            </Link>

            <nav aria-label="Основная навигация" className="hidden items-center gap-8 md:flex">
              {navigation.map((item) => {
                const isActive = currentPath === normalizePath(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "border-b border-transparent pb-1 text-[12px] uppercase tracking-[0.08em] text-primary",
                      isActive
                        ? "border-gold text-heading"
                        : "hover:border-gold/70 hover:text-heading",
                    )}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            <Button
              variant="ghost"
              size="icon"
              className="text-primary hover:text-heading md:hidden"
              onClick={() => setIsMobileMenuOpen((value) => !value)}
              aria-label={isMobileMenuOpen ? "Закрыть меню" : "Открыть меню"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>

          {isMobileMenuOpen && (
            <nav
              id="mobile-navigation"
              aria-label="Мобильная навигация"
              className="border-t border-soft pb-4 pt-3 md:hidden"
            >
              <div className="flex flex-col gap-1">
                {navigation.map((item) => {
                  const isActive = currentPath === normalizePath(item.href);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "px-1 py-2 text-[12px] uppercase tracking-[0.08em] text-primary",
                        isActive ? "text-heading" : "hover:text-heading",
                      )}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
