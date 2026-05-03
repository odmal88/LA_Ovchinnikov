import type { BiographyEvent } from "@/lib/types";

// Биографические события (placeholder)
// Факты без подтверждённых источников помечены соответствующим образом
export const biographyEvents: BiographyEvent[] = [
  {
    id: "bio-001",
    year: 1926,
    type: "life",
    title: "Рождение",
    text: "Лев Авксентьевич Овчинников родился в 1926 году. Точная дата и место рождения уточняются на основе архивных документов.",
    isPublic: true,
  },
  {
    id: "bio-002",
    year: undefined,
    type: "education",
    title: "Образование и становление",
    text: "Сведения о художественном образовании Льва Авксентьевича уточняются. Период требует архивной проверки и сверки документов.",
    isPublic: true,
  },
  {
    id: "bio-003",
    year: undefined,
    type: "work",
    title: "Профессиональная деятельность",
    text: "Творческий путь художника связан с Ленинградом. Конкретные сведения о профессиональной принадлежности и выставочной деятельности уточняются.",
    isPublic: true,
  },
  {
    id: "bio-004",
    year: undefined,
    type: "family",
    title: "Семья и мастерская",
    text: "Мастерская Льва Авксентьевича стала местом формирования художественной преемственности. Здесь сложились профессиональные навыки и взгляд на искусство, которые позднее унаследовал Александр Львович Овчинников.",
    isPublic: true,
  },
  {
    id: "bio-005",
    year: undefined,
    type: "work",
    title: "Основные темы и жанры",
    text: "В творчестве Льва Авксентьевича представлены пейзажи, портреты, интерьеры, натюрморты и графические работы. Полный корпус произведений находится в процессе каталогизации.",
    isPublic: true,
  },
  {
    id: "bio-006",
    year: 2001,
    type: "life",
    title: "Завершение жизненного пути",
    text: "Лев Авксентьевич Овчинников ушёл из жизни в 2001 году.",
    isPublic: true,
  },
  {
    id: "bio-007",
    year: undefined,
    type: "memory",
    title: "Сохранение памяти",
    text: "После 2001 года продолжается работа по сохранению наследия художника: каталогизация произведений, сбор архивных материалов, подготовка выставок и публикаций.",
    isPublic: true,
  },
];

// Получить публичные события
export function getPublicBiographyEvents(): BiographyEvent[] {
  return biographyEvents.filter((event) => event.isPublic);
}

// Получить события, сгруппированные по периодам
export function getBiographyByPeriods(): {
  title: string;
  events: BiographyEvent[];
}[] {
  const events = getPublicBiographyEvents();
  
  return [
    {
      title: "Ранние годы",
      events: events.filter((e) => e.year && e.year < 1950),
    },
    {
      title: "Становление и зрелость",
      events: events.filter(
        (e) => !e.year || (e.year >= 1950 && e.year < 2001)
      ),
    },
    {
      title: "Память и наследие",
      events: events.filter((e) => e.year && e.year >= 2001),
    },
  ].filter((period) => period.events.length > 0);
}
