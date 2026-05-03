import Link from "next/link";

const archiveSections = [
  { number: "01", title: "Живопись и графика", subtitle: "Каталог произведений и основные корпусные разделы.", href: "/works" },
  { number: "02", title: "Биография", subtitle: "Хронология жизни и творческого пути художника.", href: "/biography" },
  { number: "03", title: "Мастерская и среда", subtitle: "Профессиональный контекст, художественная дисциплина, круг общения.", href: "/about" },
  { number: "04", title: "Тексты и документы", subtitle: "Архивные материалы, описания, свидетельства и источники.", href: "/contacts" },
  { number: "05", title: "Память", subtitle: "Собираемые воспоминания, фотографии и семейные свидетельства.", href: "/contacts" },
  { number: "06", title: "Выставки", subtitle: "Сведения о показах, каталогах и публикациях по мере уточнения.", href: "/contacts" },
];

export function ArchiveStructure() {
  return (
    <section className="bg-deep-violet py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.6fr] lg:gap-12">
          <div>
            <p className="mb-3 text-[10px] uppercase tracking-[0.14em] text-gold">редакционная навигация</p>
            <h2 className="font-serif text-[30px] text-background">Структура архива</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-soft/35">
            {archiveSections.map((section) => (
              <article key={section.number} className="flex min-h-44 flex-col justify-between border-b border-r border-soft/35 p-5 sm:p-6">
                <div>
                  <p className="mb-3 text-[20px] italic text-gold">{section.number}</p>
                  <h3 className="mb-3 text-[18px] text-background">{section.title}</h3>
                  <p className="text-[12px] leading-[1.6] text-dark-text">{section.subtitle}</p>
                </div>
                <Link href={section.href} className="mt-5 text-[11px] uppercase tracking-[0.08em] text-gold hover:text-background">
                  Перейти →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
