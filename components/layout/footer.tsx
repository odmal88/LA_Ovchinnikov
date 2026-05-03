import Link from "next/link";
import { navigation, siteConfig } from "@/lib/data/site-config";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white border-t border-soft/60">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Информация об архиве */}
          <div className="md:col-span-2">
            <h3 className="font-serif text-xl md:text-2xl text-white/95 mb-2">
              {siteConfig.artistName}
            </h3>
            <p className="text-sm text-white/70 mb-1">
              {siteConfig.artistYears}
            </p>
            <p className="text-sm text-white/70">
              {siteConfig.archiveStatus}
            </p>
          </div>

          {/* Навигация */}
          <div>
            <h4 className="font-medium text-white/90 mb-4">Разделы</h4>
            <nav className="flex flex-col gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-white/70 hover:text-ocher transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Призыв к действию */}
        <div className="mt-10 pt-8 border-t border-soft/50">
          <p className="text-sm text-white/70 max-w-2xl">
            Если у вас есть сведения о произведениях художника, архивные
            фотографии или документы, вы можете{" "}
            <Link
              href="/contacts"
              className="text-white/85 hover:text-ocher underline underline-offset-2 transition-colors"
            >
              передать их в архив
            </Link>
            .
          </p>
        </div>

        {/* Копирайт */}
        <div className="mt-8 pt-6 border-t border-soft/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-xs text-white/60">
            {currentYear} Цифровой архив Л.А. Овчинникова
          </p>
          <p className="text-xs text-white/60">
            Версия сайта: {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
}
