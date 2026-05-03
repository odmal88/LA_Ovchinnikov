"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { navigation } from "@/lib/data/site-config";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50">
      <div className="h-1 w-full bg-gold" />
      <div className="bg-card border-b-[1.5px] border-soft shadow-[0_6px_18px_rgba(30,16,48,0.08)]">
        <div className="container mx-auto px-4 md:px-6">
          <nav className="flex items-center justify-between py-4">
            <Link href="/" className="flex flex-col leading-tight">
              <span className="hidden sm:block text-[15px] text-heading">Архив Л.А. Овчинникова</span>
              <span className="sm:hidden text-[15px] text-heading">Архив Л.А.О.</span>
              <span className="hidden sm:block mt-1 text-[11px] text-primary">официальный цифровой арт-архив</span>
              <span className="sm:hidden mt-1 text-[11px] text-primary">арт-архив</span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href} className={cn("border-b border-transparent pb-1 text-[12px] uppercase tracking-[0.08em] text-primary", pathname === item.href ? "border-gold text-heading" : "hover:text-heading hover:border-gold/70")}>
                  {item.name}
                </Link>
              ))}
            </div>

            <Button variant="ghost" size="icon" className="md:hidden text-primary hover:text-heading" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Меню">
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </nav>
          <div className={cn("md:hidden overflow-hidden transition-all", isMobileMenuOpen ? "max-h-96 pb-4" : "max-h-0")}>
            <div className="flex flex-col gap-1 border-t border-soft pt-3">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href} className={cn("px-1 py-2 text-[12px] uppercase tracking-[0.08em] text-primary", pathname === item.href ? "text-heading" : "hover:text-heading")}>
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
