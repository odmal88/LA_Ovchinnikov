import Link from "next/link";
import { navigation, siteConfig } from "@/lib/data/site-config";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-deep-violet text-dark-text border-t border-soft/30">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="md:col-span-2">
            <h3 className="font-serif text-[22px] font-normal text-background mb-2">
              {siteConfig.artistName}
            </h3>
            <p className="text-[14px] italic text-dark-text mb-1">
              {siteConfig.artistYears}
            </p>
            <p className="text-[12px] uppercase tracking-[0.14em] text-gold">
              {siteConfig.archiveStatus}
            </p>
          </div>

          <div>
            <h4 className="font-serif font-normal text-[16px] text-background mb-4">Разделы</h4>
            <nav className="flex flex-col gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[13px] text-dark-text hover:text-gold transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-soft/30">
          <p className="text-[13px] leading-relaxed text-dark-text max-w-2xl">
            Если у вас есть сведения о произведениях художника, архивные фотографии или документы, вы можете{" "}
            <Link href="/contacts" className="text-gold hover:text-background underline underline-offset-2 transition-colors">
              передать их в архив
            </Link>
            .
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-soft/30 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-[12px] text-dark-text">
            {currentYear} Цифровой архив Л.А. Овчинникова
          </p>
          <p className="text-[12px] text-dark-text">
            Версия сайта: {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
}
