import Link from "next/link";

const archiveSections = [
  { number: "01", title: "Живопись и графика", subtitle: "Каталог произведений и основные корпусные разделы.", href: "/works" },
  { number: "02", title: "Биография", subtitle: "Хронология жизни и творческого пути художника.", href: "/biography" },
  { number: "03", title: "Мастерская и среда", subtitle: "Профессиональный контекст, художественная дисциплина, круг общения.", href: "/about" },
  { number: "04", title: "Тексты и документы", subtitle: "Архивные материалы, описания, свидетельства и источники.", href: "/contacts" },
  { number: "05", title: "Память", subtitle: "Собираемые воспоминания, фотографии и семейные свидетельства.", href: "/contacts" },
  { number: "06", title: "Выставки", subtitle: "Сведения о показах, каталогах и публикациях по мере уточнения.", href: "/exhibitions" },
];

export function ArchiveStructure() {
  return (
    <section className="bg-deep-violet py-18 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.7fr] lg:gap-16">
          <div className="border-l border-gold pl-5 md:pl-6">
            <p className="mb-4 text-[10px] uppercase tracking-[0.14em] text-gold">структура архива</p>
            <h2 className="font-serif text-[32px] leading-tight text-background md:text-[38px]">Направления</h2>
            <p className="mt-5 max-w-sm text-[13px] leading-[1.65] text-dark-text">
              Архив организован как система разделов: произведения, биография, мастерская, документы, память и выставочная история.
            </p>
          </div>

          <div className="grid grid-cols-1 border border-soft/35 sm:grid-cols-2 lg:grid-cols-3">
            {archiveSections.map((section) => (
              <article key={section.number} className="flex min-h-44 flex-col justify-between border-b border-r border-soft/35 p-5 sm:p-6">
                <div>
                  <div className="mb-4 flex items-baseline gap-3">
                    <p className="text-[18px] italic leading-none text-gold/80 md:text-[20px]">{section.number}</p>
                    <h3 className="text-[18px] text-background md:text-[19px]">{section.title}</h3>
                  </div>
                  <p className="text-[12px] leading-[1.6] text-dark-text">{section.subtitle}</p>
                </div>
                <Link href={section.href} className="mt-6 text-[11px] uppercase tracking-[0.08em] text-gold hover:text-background">
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
