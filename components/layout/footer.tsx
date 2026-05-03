import Link from "next/link";
import { navigation, siteConfig } from "@/lib/data/site-config";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-soft/35 bg-deep-violet text-dark-text">
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-14">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
          <div className="md:col-span-2">
            <h3 className="mb-2 font-serif text-[24px] font-normal text-background">{siteConfig.artistName}</h3>
            <p className="mb-1 text-[15px] italic text-dark-text">{siteConfig.artistYears}</p>
            <p className="text-[11px] uppercase tracking-[0.14em] text-gold">{siteConfig.archiveStatus}</p>
          </div>

          <div>
            <h4 className="mb-4 font-serif text-[16px] font-normal text-background">Разделы</h4>
            <nav className="flex flex-col gap-2">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href} className="text-[13px] text-dark-text transition-colors hover:text-gold">
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-10 border-t border-soft/35 pt-7">
          <p className="max-w-2xl text-[13px] leading-relaxed text-dark-text">
            Если у вас есть сведения о произведениях художника, архивные фотографии или документы, вы можете{" "}
            <Link href="/contacts" className="text-gold underline underline-offset-2 transition-colors hover:text-background">
              передать их в архив
            </Link>
            .
          </p>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-soft/35 pt-6 sm:flex-row sm:items-center">
          <p className="text-[12px] text-dark-text">{currentYear} Цифровой архив Л.А. Овчинникова</p>
          <p className="text-[12px] text-dark-text">Версия сайта: {currentYear}</p>
        </div>
      </div>
    </footer>
  );
}
