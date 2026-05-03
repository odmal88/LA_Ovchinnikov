import Link from "next/link";
import { navigation, siteConfig } from "@/lib/data/site-config";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-section border-t border-soft">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Информация об архиве */}
          <div className="md:col-span-2">
            <h3 className="font-serif text-xl md:text-2xl text-foreground mb-2">
              {siteConfig.artistName}
            </h3>
            <p className="text-sm text-muted-foreground mb-1">
              {siteConfig.artistYears}
            </p>
            <p className="text-sm text-muted-foreground">
              {siteConfig.archiveStatus}
            </p>
          </div>

          {/* Навигация */}
          <div>
            <h4 className="font-medium text-foreground mb-4">Разделы</h4>
            <nav className="flex flex-col gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Призыв к действию */}
        <div className="mt-10 pt-8 border-t border-soft">
          <p className="text-sm text-muted-foreground max-w-2xl">
            Если у вас есть сведения о произведениях художника, архивные
            фотографии или документы, вы можете{" "}
            <Link
              href="/contacts"
              className="text-ash-blue hover:text-foreground underline underline-offset-2 transition-colors"
            >
              передать их в архив
            </Link>
            .
          </p>
        </div>

        {/* Копирайт */}
        <div className="mt-8 pt-6 border-t border-soft flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-xs text-muted-foreground">
            {currentYear} Цифровой архив Л.А. Овчинникова
          </p>
          <p className="text-xs text-muted-foreground">
            Версия сайта: {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
}
