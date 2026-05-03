// Статусы атрибуции работы
export type AttributionStatus = "confirmed" | "likely" | "needs_review" | "unknown";

// Периоды творчества
export type Period = "early" | "mature" | "late" | "unknown";

// Жанры
export type Genre = 
  | "portrait" 
  | "landscape" 
  | "interior" 
  | "still_life" 
  | "genre_composition" 
  | "graphics" 
  | "other";

// Техники
export type Technique = 
  | "oil" 
  | "watercolor" 
  | "graphics" 
  | "mixed" 
  | "unknown";

// Локализованные названия периодов
export const periodLabels: Record<Period, string> = {
  early: "Ранний период",
  mature: "Зрелый период",
  late: "Поздний период",
  unknown: "Период уточняется",
};

// Локализованные названия жанров
export const genreLabels: Record<Genre, string> = {
  portrait: "Портрет",
  landscape: "Пейзаж",
  interior: "Интерьер",
  still_life: "Натюрморт",
  genre_composition: "Жанровая композиция",
  graphics: "Графика",
  other: "Другое",
};

// Локализованные названия техник
export const techniqueLabels: Record<Technique, string> = {
  oil: "Масло",
  watercolor: "Акварель",
  graphics: "Графика",
  mixed: "Смешанная техника",
  unknown: "Техника уточняется",
};

// Локализованные названия статусов атрибуции
export const attributionStatusLabels: Record<AttributionStatus, string> = {
  confirmed: "Сведения подтверждены",
  likely: "Вероятно, требует уточнения",
  needs_review: "Сведения уточняются",
  unknown: "Сведений недостаточно",
};

// Интерфейс работы
export interface Work {
  id: string;
  slug: string;
  artist: string;
  title: string;
  titleOriginal?: string;
  date?: string;
  period: Period;
  technique: Technique;
  material?: string;
  dimensions?: string;
  genre: Genre;
  themes?: string[];
  place?: string;
  descriptionShort?: string;
  descriptionFull?: string;
  imageFull?: string;
  imageThumb?: string;
  imageDetails?: string[];
  signature?: string;
  inscriptions?: string[];
  attributionStatus: AttributionStatus;
  provenance?: string;
  exhibitions?: string[];
  publications?: string[];
  condition?: string;
  rightsStatus?: string;
  isPublic: boolean;
  internalNotes?: string;
}

// Типы событий биографии
export type BiographyEventType = 
  | "life" 
  | "education" 
  | "exhibition" 
  | "work" 
  | "family" 
  | "document" 
  | "publication" 
  | "memory";

// Локализованные названия типов событий
export const biographyEventTypeLabels: Record<BiographyEventType, string> = {
  life: "Жизнь",
  education: "Образование",
  exhibition: "Выставка",
  work: "Работа",
  family: "Семья",
  document: "Документ",
  publication: "Публикация",
  memory: "Память",
};

// Интерфейс события биографии
export interface BiographyEvent {
  id: string;
  year?: number;
  date?: string;
  type: BiographyEventType;
  title: string;
  text?: string;
  sources?: string[];
  relatedWorks?: string[];
  isPublic: boolean;
}

// Конфигурация сайта
export interface SiteConfig {
  artistName: string;
  artistNameShort: string;
  artistYears: string;
  siteTitle: string;
  siteDescription: string;
  archiveStatus: string;
}
