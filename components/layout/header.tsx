"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { navigation, siteConfig } from "@/lib/data/site-config";
import { Button } from "@/components/ui/button";

const palettePatch = `
:root {
  --color-background: #eae4f4;
  --color-placeholder: #e8e2f4;
  --color-ocher: #9a7258;
}
`;

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: palettePatch }} />
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-soft transition-all duration-300",
          isScrolled ? "shadow-sm py-3" : "py-4"
        )}
      >
        <div className="container mx-auto px-4 md:px-6">
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex flex-col text-heading hover:text-primary transition-colors">
              <span className="font-serif text-[15px] md:text-[16px] font-normal leading-tight">
                {siteConfig.artistNameShort}
              </span>
              <span className="hidden sm:block text-[9px] font-normal uppercase tracking-[0.14em] text-primary mt-1">
                {siteConfig.archiveStatus}
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-[12px] font-normal transition-colors",
                    pathname === item.href ? "text-heading" : "text-primary hover:text-heading"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-primary hover:text-heading hover:bg-card"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Закрыть меню" : "Открыть меню"}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </nav>

          <div
            className={cn(
              "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
              isMobileMenuOpen ? "max-h-96 mt-4" : "max-h-0"
            )}
          >
            <div className="flex flex-col gap-2 py-4 border-t border-soft">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-2 py-2 text-[14px] font-normal transition-colors rounded-md",
                    pathname === item.href
                      ? "text-heading bg-card"
                      : "text-primary hover:text-heading hover:bg-card/70"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
