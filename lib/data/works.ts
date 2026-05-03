import type { Work } from "@/lib/types";

// Тестовые данные работ (placeholder)
// Названия явно указывают на временный характер записей
export const works: Work[] = [
  {
    id: "LO-001",
    slug: "peizazh-1-nazvanie-utochnyaetsya",
    artist: "Лев Авксентьевич Овчинников",
    title: "Пейзаж. Название уточняется",
    period: "mature",
    technique: "oil",
    material: "Холст",
    dimensions: "Размер уточняется",
    genre: "landscape",
    descriptionShort:
      "Работа из корпуса произведений художника. Название, датировка и технические сведения уточняются на основе архивных материалов.",
    attributionStatus: "needs_review",
    isPublic: true,
  },
  {
    id: "LO-002",
    slug: "portret-1-nazvanie-utochnyaetsya",
    artist: "Лев Авксентьевич Овчинников",
    title: "Портрет. Название уточняется",
    period: "mature",
    technique: "oil",
    material: "Холст",
    dimensions: "Размер уточняется",
    genre: "portrait",
    descriptionShort:
      "Портретная работа. Сведения о модели и датировке уточняются.",
    attributionStatus: "needs_review",
    isPublic: true,
  },
  {
    id: "LO-003",
    slug: "interer-1-nazvanie-utochnyaetsya",
    artist: "Лев Авксентьевич Овчинников",
    title: "Интерьер. Название уточняется",
    period: "late",
    technique: "oil",
    material: "Холст",
    dimensions: "Размер уточняется",
    genre: "interior",
    descriptionShort:
      "Интерьерная композиция. Место и датировка уточняются на основе архивных материалов.",
    attributionStatus: "needs_review",
    isPublic: true,
  },
  {
    id: "LO-004",
    slug: "natyurmort-1-nazvanie-utochnyaetsya",
    artist: "Лев Авксентьевич Овчинников",
    title: "Натюрморт. Название уточняется",
    period: "mature",
    technique: "oil",
    material: "Холст",
    dimensions: "Размер уточняется",
    genre: "still_life",
    descriptionShort:
      "Натюрморт из корпуса произведений художника. Датировка и технические сведения уточняются.",
    attributionStatus: "needs_review",
    isPublic: true,
  },
  {
    id: "LO-005",
    slug: "grafika-1-nazvanie-utochnyaetsya",
    artist: "Лев Авксентьевич Овчинников",
    title: "Графика. Название уточняется",
    period: "early",
    technique: "graphics",
    material: "Бумага",
    dimensions: "Размер уточняется",
    genre: "graphics",
    descriptionShort:
      "Графическая работа. Техника и датировка уточняются.",
    attributionStatus: "needs_review",
    isPublic: true,
  },
  {
    id: "LO-006",
    slug: "peizazh-2-gorodskoi-motiv",
    artist: "Лев Авксентьевич Овчинников",
    title: "Городской мотив. Название уточняется",
    period: "mature",
    technique: "oil",
    material: "Холст",
    dimensions: "Размер уточняется",
    genre: "landscape",
    place: "Ленинград",
    descriptionShort:
      "Городской пейзаж. Предположительно связан с видами Ленинграда. Точная датировка и место уточняются.",
    attributionStatus: "likely",
    isPublic: true,
  },
  {
    id: "LO-007",
    slug: "kompozitsiya-1-nazvanie-utochnyaetsya",
    artist: "Лев Авксентьевич Овчинников",
    title: "Композиция. Название уточняется",
    period: "unknown",
    technique: "mixed",
    material: "Уточняется",
    dimensions: "Размер уточняется",
    genre: "genre_composition",
    descriptionShort:
      "Жанровая композиция. Период и технические сведения требуют архивной проверки.",
    attributionStatus: "needs_review",
    isPublic: true,
  },
  {
    id: "LO-008",
    slug: "akvarel-1-nazvanie-utochnyaetsya",
    artist: "Лев Авксентьевич Овчинников",
    title: "Акварель. Название уточняется",
    period: "late",
    technique: "watercolor",
    material: "Бумага",
    dimensions: "Размер уточняется",
    genre: "landscape",
    descriptionShort:
      "Акварельная работа. Сведения о сюжете и датировке уточняются.",
    attributionStatus: "needs_review",
    isPublic: true,
  },
  {
    id: "LO-009",
    slug: "portret-2-nazvanie-utochnyaetsya",
    artist: "Лев Авксентьевич Овчинников",
    title: "Портрет. Название уточняется",
    period: "early",
    technique: "oil",
    material: "Холст",
    dimensions: "Размер уточняется",
    genre: "portrait",
    descriptionShort:
      "Ранняя портретная работа. Модель и датировка требуют уточнения.",
    attributionStatus: "needs_review",
    isPublic: true,
  },
  {
    id: "LO-010",
    slug: "etyud-1-nazvanie-utochnyaetsya",
    artist: "Лев Авксентьевич Овчинников",
    title: "Этюд. Название уточняется",
    period: "mature",
    technique: "oil",
    material: "Картон",
    dimensions: "Размер уточняется",
    genre: "other",
    descriptionShort:
      "Этюд с натуры. Место и датировка уточняются на основе архивных материалов.",
    attributionStatus: "needs_review",
    isPublic: true,
  },
];

// Получить публичные работы
export function getPublicWorks(): Work[] {
  return works.filter((work) => work.isPublic);
}

// Получить работу по slug
export function getWorkBySlug(slug: string): Work | undefined {
  return works.find((work) => work.slug === slug);
}

// Получить избранные работы для главной (первые 6)
export function getFeaturedWorks(): Work[] {
  return getPublicWorks().slice(0, 6);
}

// Фильтрация работ
export function filterWorks(filters: {
  period?: string;
  genre?: string;
  technique?: string;
  search?: string;
}): Work[] {
  let filtered = getPublicWorks();

  if (filters.period && filters.period !== "all") {
    filtered = filtered.filter((work) => work.period === filters.period);
  }

  if (filters.genre && filters.genre !== "all") {
    filtered = filtered.filter((work) => work.genre === filters.genre);
  }

  if (filters.technique && filters.technique !== "all") {
    filtered = filtered.filter((work) => work.technique === filters.technique);
  }

  if (filters.search) {
    const searchLower = filters.search.toLowerCase();
    filtered = filtered.filter(
      (work) =>
        work.title.toLowerCase().includes(searchLower) ||
        work.descriptionShort?.toLowerCase().includes(searchLower)
    );
  }

  return filtered;
}
