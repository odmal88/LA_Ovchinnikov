import type { Work } from "@/lib/types";

const artist = "Лев Авксентьевич Овчинников";

// Каталог первичного размещения на сайте Льва Авксентьевича Овчинникова.
// Данные внесены по лицевым сторонам, оборотным надписям и рабочим фото архива.
// Если основа, датировка или атрибуция требуют сверки, это указано явно.
export const works: Work[] = [
  {
    id: "LO-001",
    slug: "portret-yunoshi-v-fioletovom-svitere",
    artist,
    title: "Портрет юноши в фиолетовом свитере",
    date: "1964",
    period: "mature",
    technique: "oil",
    material: "Картон, масло",
    dimensions: "67 × 52,5 см",
    genre: "portrait",
    themes: ["портрет", "человек", "мастерская"],
    descriptionShort:
      "Погрудный портрет юноши в фиолетово-малиновом свитере на сдержанном серо-голубом фоне. Композиция построена фронтально и сосредоточенно: фигура почти полностью занимает плоскость, а нейтральный фон не отвлекает от лица.",
    descriptionFull:
      "В живописи заметна конструктивная лепка формы: скулы, переносица, лоб и губы собраны короткими, плотными мазками. Работа важна как пример портретной линии Льва Авксентьевича, где внешний образ соединён с внутренней собранностью модели.",
    imageFull: "/works/lev/full/lo-001-portret-yunoshi-v-fioletovom-svitere.webp",
    imageThumb: "/works/lev/thumbs/lo-001-portret-yunoshi-v-fioletovom-svitere.webp",
    imageDetails: ["/works/lev/details/lo-001-oborot.webp"],
    inscriptions: [
      "Оборот: «П-т юноши / в фиолетовом / свитере».",
      "Оборот: «Овчинников Лев / к.м. / 67 × 52,5 / 64»."
    ],
    attributionStatus: "confirmed",
    provenance: "Собрание семьи художника",
    isPublic: true,
  },
  {
    id: "LO-002",
    slug: "berezy-zimoy",
    artist,
    title: "Берёзы зимой",
    date: "1974",
    period: "mature",
    technique: "oil",
    material: "Основа уточняется; вероятно картон / оргалит",
    dimensions: "69 × 49 см",
    genre: "landscape",
    themes: ["зима", "берёзы", "пейзаж"],
    descriptionShort:
      "Зимний пейзаж с берёзами, решённый в холодной серо-лиловой гамме. Главный мотив работы — ритм берёзовых стволов и тонких ветвей, пересекающих снежное пространство.",
    descriptionFull:
      "Художник строит образ не через подробное описание места, а через состояние зимнего света. Белизна снега приглушена серыми, голубыми и лиловыми тонами, а фактурные светлые пробелы коры мерцают на фоне лесной глубины.",
    imageFull: "/works/lev/full/lo-002-berezy-zimoy.webp",
    imageThumb: "/works/lev/thumbs/lo-002-berezy-zimoy.webp",
    imageDetails: ["/works/lev/details/lo-002-oborot.webp"],
    inscriptions: ["Оборот: «Березы зимой / Овчинников Лев / 69 × 49 / 1974»."],
    attributionStatus: "confirmed",
    provenance: "Собрание семьи художника",
    isPublic: true,
  },
  {
    id: "LO-003",
    slug: "na-dache",
    artist,
    title: "На даче",
    date: "1964",
    period: "mature",
    technique: "oil",
    material: "Основа уточняется",
    dimensions: "80 × 59 см",
    genre: "interior",
    themes: ["фигура в интерьере", "дача", "интерьер"],
    descriptionShort:
      "Фигура в интерьере: лежащая женская фигура в дачном пространстве. Для публичного каталога работа описывается спокойно — как фигура в интерьере, без бытового или сенсационного акцента.",
    descriptionFull:
      "Композиция сочетает фигуру, интерьер и изображения на стене, благодаря чему работа воспринимается не только как бытовой мотив, но и как размышление о внутреннем пространстве художника.",
    imageFull: "/works/lev/full/lo-003-na-dache.webp",
    imageThumb: "/works/lev/thumbs/lo-003-na-dache.webp",
    imageDetails: ["/works/lev/details/lo-003-oborot.webp"],
    inscriptions: ["Оборот: «На даче / 80 × 59 / Овчинников / 1964 / Лев»."],
    attributionStatus: "confirmed",
    provenance: "Собрание семьи художника",
    isPublic: true,
  },
  {
    id: "LO-004",
    slug: "rybackie-shhuny-u-mayaka",
    artist,
    title: "Рыбацкие шхуны у маяка",
    date: "1961",
    period: "mature",
    technique: "oil",
    material: "Основа уточняется",
    dimensions: "70 × 59 см",
    genre: "landscape",
    themes: ["порт", "море", "маяк", "шхуны"],
    descriptionShort:
      "Портовый мотив с рыбацкими судами, мачтами, причалом и полосатым маяком. Работа раскрывает морскую и портовую линию в наследии Льва Авксентьевича.",
    descriptionFull:
      "Пространство собрано из вертикалей мачт, парусов, причальных конструкций и маяка, который становится главным ориентиром композиции. Наличие архивного номера на обороте делает работу особенно важной для восстановления прежнего учёта.",
    imageFull: "/works/lev/full/lo-004-rybackie-shhuny-u-mayaka.webp",
    imageThumb: "/works/lev/thumbs/lo-004-rybackie-shhuny-u-mayaka.webp",
    imageDetails: ["/works/lev/details/lo-004-oborot.webp"],
    inscriptions: ["Оборот: «№ 605 / 70 × 59 / Рыбацкие шхуны (у маяка) / 1961 г.»; ниже — подпись художника."],
    attributionStatus: "confirmed",
    provenance: "Собрание семьи художника",
    isPublic: true,
  },
  {
    id: "LO-005",
    slug: "peizazhny-etud-bez-nazvaniya",
    artist,
    title: "Без названия. Пейзажный этюд",
    period: "unknown",
    technique: "oil",
    material: "Основа уточняется",
    dimensions: "Размер уточняется",
    genre: "landscape",
    themes: ["этюд", "пейзаж", "природа"],
    descriptionShort:
      "Небольшой камерный пейзажный этюд в деревянной раме, построенный на зелёно-голубой гамме и мягких переходах света.",
    descriptionFull:
      "Точный мотив требует уточнения: возможно, это фрагмент природной среды с водой, отражениями, листвой или береговой линией. До съёмки оборота и подписи работу следует вести в каталоге осторожно, без окончательного закрепления даты.",
    imageFull: "/works/lev/full/lo-005-peizazhny-etud-bez-nazvaniya.webp",
    imageThumb: "/works/lev/thumbs/lo-005-peizazhny-etud-bez-nazvaniya.webp",
    attributionStatus: "needs_review",
    provenance: "Собрание семьи художника",
    isPublic: true,
  },
  {
    id: "LO-006",
    slug: "osen-v-gorah",
    artist,
    title: "Осень в горах",
    date: "1960",
    period: "mature",
    technique: "oil",
    material: "Основа уточняется; вероятно картон / оргалит",
    dimensions: "70 × 49 см",
    genre: "landscape",
    themes: ["горы", "осень", "пейзаж"],
    descriptionShort:
      "Горный осенний пейзаж с ярким пятном жёлтой листвы на фоне тёмного лесного склона.",
    descriptionFull:
      "Пейзаж построен на контрасте тёплого жёлтого пятна деревьев и приглушённой коричнево-серой массы горного леса. Центральная группа листвы воспринимается как источник света внутри затемнённого пространства; работа сохраняет этюдную живость и одновременно ясно выстроена по крупным цветовым массам.",
    imageFull: "/works/lev/full/lo-006-osen-v-gorah.webp",
    imageThumb: "/works/lev/thumbs/lo-006-osen-v-gorah.webp",
    imageDetails: ["/works/lev/details/lo-006-oborot.webp"],
    inscriptions: ["Оборот: «Осень в горах / Овчинников Лев / 1960 г. / 49 × 70»."],
    attributionStatus: "confirmed",
    provenance: "Собрание семьи художника",
    isPublic: true,
  },
  {
    id: "LO-007",
    slug: "snezhnye-gory",
    artist,
    title: "Снежные горы",
    date: "1962",
    period: "mature",
    technique: "oil",
    material: "Картон, масло",
    dimensions: "69,5 × 49,5 см",
    genre: "landscape",
    place: "Азия; точное место уточняется",
    themes: ["горы", "снег", "зимний пейзаж"],
    descriptionShort:
      "Горный зимний пейзаж со снежной равниной, голубовато-серыми хребтами и широкими дугами земли на переднем плане.",
    descriptionFull:
      "Композиция строится на широком движении снежного пространства: дуги тёмной земли на переднем плане ведут взгляд к светлой равнине и холодным голубовато-серым горам. На обороте присутствует помета «Азия», поэтому работу можно предварительно связывать с азиатским горным маршрутом, но географическое уточнение требует проверки.",
    imageFull: "/works/lev/full/lo-007-snezhnye-gory.webp",
    imageThumb: "/works/lev/thumbs/lo-007-snezhnye-gory.webp",
    imageDetails: ["/works/lev/details/lo-007-oborot.webp"],
    inscriptions: ["Оборот: «Снежные горы / к.м. 49,5 × 69,5 / 1962 / Овчинников Лев. А. 1926 / Азия»."],
    attributionStatus: "confirmed",
    provenance: "Собрание семьи художника",
    isPublic: true,
  },
  {
    id: "LO-008",
    slug: "vid-na-prichal-iz-vorot-petropavlovskoi-kreposti",
    artist,
    title: "Вид на причал из ворот Петропавловской крепости",
    date: "1960",
    period: "mature",
    technique: "oil",
    material: "Основа уточняется; в рабочей карточке указано Oil on canvas",
    dimensions: "51 × 70 см",
    genre: "landscape",
    place: "Ленинград, Петропавловская крепость",
    themes: ["Ленинград", "Петропавловская крепость", "городской пейзаж"],
    descriptionShort:
      "Городской мотив: вид из арочного проёма ворот на причал, набережную и водную даль.",
    descriptionFull:
      "Работа построена как взгляд из внутреннего пространства наружу: тёмный арочный проём, створки ворот и мощёный проход образуют архитектурную раму, через которую открывается светлый речной горизонт. Чёрно-белый причальный столб и уходящая дорожка усиливают глубину композиции.",
    imageFull: "/works/lev/full/lo-008-vid-na-prichal-iz-vorot-petropavlovskoi-kreposti.webp",
    imageThumb: "/works/lev/thumbs/lo-008-vid-na-prichal-iz-vorot-petropavlovskoi-kreposti.webp",
    attributionStatus: "likely",
    provenance: "Собрание семьи художника",
    isPublic: true,
  },
  {
    id: "LO-009",
    slug: "na-zalive-zelenogorsk",
    artist,
    title: "На заливе. Зеленогорск",
    date: "1961",
    period: "mature",
    technique: "mixed",
    material: "К.Т. по оборотной надписи; расшифровка уточняется",
    dimensions: "81 × 29,5 см",
    genre: "landscape",
    place: "Зеленогорск",
    themes: ["залив", "Зеленогорск", "прибрежный пейзаж"],
    descriptionShort:
      "Панорамный пейзаж Финского залива в районе Зеленогорска: вода, низкий берег, тёмная полоса леса и вечернее небо.",
    descriptionFull:
      "Длинный горизонтальный формат подчёркивает протяжённость берега и спокойное состояние залива. Пейзаж решён крупными сдержанными плоскостями: серо-лиловая вода, тёмная масса леса, светлое небо и редкие цветовые акценты на переднем плане.",
    imageFull: "/works/lev/full/lo-009-na-zalive-zelenogorsk.webp",
    imageThumb: "/works/lev/thumbs/lo-009-na-zalive-zelenogorsk.webp",
    imageDetails: ["/works/lev/details/lo-009-oborot.webp"],
    inscriptions: ["Оборот: «На заливе. К.Т. / Зеленогорск / Овчинников Лев / 1961 г. / 29,5 × 81»."],
    attributionStatus: "confirmed",
    provenance: "Собрание семьи художника",
    isPublic: true,
  },
  {
    id: "LO-010",
    slug: "peizazh-s-prudom-i-dorozhkoy",
    artist,
    title: "Без названия. Пейзаж с прудом и дорожкой",
    period: "unknown",
    technique: "oil",
    material: "Основа уточняется",
    dimensions: "Размер уточняется",
    genre: "landscape",
    themes: ["пруд", "дорожка", "пейзаж"],
    descriptionShort:
      "Пейзаж с водой, дорожкой и группой деревьев на берегу. Работа построена на мягком движении розовато-охристой тропы и зелёных береговых плоскостей.",
    descriptionFull:
      "Композиция сохраняет характер живого этюда: вода, берег, дорожка и деревья написаны крупными, свободными мазками. Подпись на лицевой стороне позволяет вести работу как вероятно принадлежащую Льву Авксентьевичу; датировка и точное место требуют проверки.",
    imageFull: "/works/lev/full/lo-010-peizazh-s-prudom-i-dorozhkoy.webp",
    imageThumb: "/works/lev/thumbs/lo-010-peizazh-s-prudom-i-dorozhkoy.webp",
    signature: "Подпись на лицевой стороне; требует сверки по крупному фото.",
    attributionStatus: "likely",
    provenance: "Собрание семьи художника",
    isPublic: true,
  },
  {
    id: "LO-011",
    slug: "kavkaz-doroga-v-novoafonsk",
    artist,
    title: "Кавказ. Дорога в Новоафонск",
    date: "1961",
    period: "mature",
    technique: "oil",
    material: "Основа уточняется",
    dimensions: "70 × 43 см",
    genre: "landscape",
    place: "Кавказ; дорога в Новоафонск",
    themes: ["Кавказ", "дорога", "морской пейзаж"],
    descriptionShort:
      "Южный горно-морской пейзаж с дорогой, уходящей вдоль склона к светлой воде и тёмному силуэту горы на горизонте.",
    descriptionFull:
      "Работа соединяет дорожный мотив, осеннюю охристо-коричневую растительность и открытую голубую даль моря. По оборотной надписи работа связана с Кавказом и дорогой в Новоафонск.",
    imageFull: "/works/lev/full/lo-011-kavkaz-doroga-v-novoafonsk.webp",
    imageThumb: "/works/lev/thumbs/lo-011-kavkaz-doroga-v-novoafonsk.webp",
    imageDetails: ["/works/lev/details/lo-011-oborot.webp"],
    inscriptions: ["Оборот: «Кавказ. Дорога в Новоафонск / 1961 г. / Овчинников Лев / 43 × 70»."],
    attributionStatus: "confirmed",
    provenance: "Собрание семьи художника",
    isPublic: true,
  },
  {
    id: "LO-012",
    slug: "dyuny",
    artist,
    title: "Дюны",
    date: "1961",
    period: "mature",
    technique: "oil",
    material: "Основа уточняется",
    dimensions: "70 × 50 см",
    genre: "landscape",
    themes: ["дюны", "берег", "пейзаж"],
    descriptionShort:
      "Пейзаж с песчаным холмом, соснами и полосой воды внизу. Низкая земля и высокое небо создают сдержанный северный или прибрежный образ.",
    descriptionFull:
      "Композиция строится на мягком подъёме дюны, тонких вертикалях сосен и холодной водной полосе на переднем плане. Работа сохраняет этюдную свободу письма и ясность крупного цветового пятна.",
    imageFull: "/works/lev/full/lo-012-dyuny.webp",
    imageThumb: "/works/lev/thumbs/lo-012-dyuny.webp",
    imageDetails: ["/works/lev/details/lo-012-oborot.webp"],
    inscriptions: ["Оборот: «Дюны / 50 × 70 / 61 / Овчинников Л»."],
    attributionStatus: "confirmed",
    provenance: "Собрание семьи художника",
    isPublic: true,
  },
  {
    id: "LO-013",
    slug: "lodki-u-berega",
    artist,
    title: "Без названия. Лодки у берега",
    period: "unknown",
    technique: "oil",
    material: "Основа уточняется",
    dimensions: "Около 59 × 46 см по рабочей разметке",
    genre: "landscape",
    themes: ["лодки", "берег", "вода"],
    descriptionShort:
      "Прибрежный мотив с лодками у берега, водой и дальним противоположным берегом с домами.",
    descriptionFull:
      "Работа построена на контрасте яркой зелени берега, сиренево-серой воды и светлых корпусов лодок. Условное название и размер даны по рабочей съёмке; датировка, техника и атрибуция требуют дополнительной сверки.",
    imageFull: "/works/lev/full/lo-013-lodki-u-berega.webp",
    imageThumb: "/works/lev/thumbs/lo-013-lodki-u-berega.webp",
    attributionStatus: "needs_review",
    provenance: "Собрание семьи художника",
    isPublic: true,
  },
  {
    id: "LO-014",
    slug: "parom-podhodit-k-kanonerskomu-ostrovu",
    artist,
    title: "Паром подходит к Канонерскому острову",
    date: "1963",
    period: "mature",
    technique: "oil",
    material: "Основа уточняется",
    dimensions: "53 × 59 см",
    genre: "landscape",
    place: "Ленинград, Канонерский остров",
    themes: ["паром", "Канонерский остров", "Ленинград", "вода"],
    descriptionShort:
      "Портово-речной мотив: паром у воды, лодки на переднем плане и береговое пространство, связанное с Канонерским островом.",
    descriptionFull:
      "В работе соединяются речная среда, транспортный мотив и светлая открытая даль. По оборотной надписи работа датирована 1963 годом и связана с Канонерским островом.",
    imageFull: "/works/lev/full/lo-014-parom-podhodit-k-kanonerskomu-ostrovu.webp",
    imageThumb: "/works/lev/thumbs/lo-014-parom-podhodit-k-kanonerskomu-ostrovu.webp",
    imageDetails: ["/works/lev/details/lo-014-oborot.webp"],
    inscriptions: ["Оборот: «Паром подходит к Канонерскому острову, 1963 / Лев Овчинников / 53 × 59»."],
    attributionStatus: "confirmed",
    provenance: "Собрание семьи художника",
    isPublic: true,
  },
  {
    id: "LO-015",
    slug: "natyurmort-s-krasnymi-yagodami-i-chainikom",
    artist,
    title: "Натюрморт с красными ягодами и чайником",
    period: "unknown",
    technique: "oil",
    material: "Основа уточняется",
    dimensions: "Около 38 × 48 см по рабочей разметке",
    genre: "still_life",
    themes: ["натюрморт", "ягоды", "чайник", "предметный мир"],
    descriptionShort:
      "Натюрморт с красными ягодами на блюде и тёмным чайником на серо-голубой фактурной поверхности.",
    descriptionFull:
      "Композиция строится на резком цветовом акценте ягод и сдержанной холодной среде стола. Плотная фактура поверхности и предметов подчёркивает материальность натюрморта. Датировка и технические сведения требуют сверки.",
    imageFull: "/works/lev/full/lo-015-natyurmort-s-krasnymi-yagodami-i-chainikom.webp",
    imageThumb: "/works/lev/thumbs/lo-015-natyurmort-s-krasnymi-yagodami-i-chainikom.webp",
    attributionStatus: "likely",
    provenance: "Собрание семьи художника",
    isPublic: true,
  },
  {
    id: "LO-016",
    slug: "vid-s-balkona-na-gorodskuyu-ulitsu",
    artist,
    title: "Без названия. Вид с балкона на городскую улицу",
    period: "unknown",
    technique: "oil",
    material: "Основа уточняется",
    dimensions: "Около 41 × 68 см по рабочей разметке",
    genre: "landscape",
    themes: ["город", "улица", "балкон", "городской пейзаж"],
    descriptionShort:
      "Городской вид с балкона: улица, балюстрада на переднем плане, движение машин и пешеходов в глубине.",
    descriptionFull:
      "Работа построена как взгляд сверху и внутрь городской перспективы. Балюстрада задаёт ближний архитектурный план, а влажная улица и дальняя башня собирают пространство в мягком серо-охристом колорите. Название условное; место и дата уточняются.",
    imageFull: "/works/lev/full/lo-016-vid-s-balkona-na-gorodskuyu-ulitsu.webp",
    imageThumb: "/works/lev/thumbs/lo-016-vid-s-balkona-na-gorodskuyu-ulitsu.webp",
    attributionStatus: "likely",
    provenance: "Собрание семьи художника",
    isPublic: true,
  },
  {
    id: "LO-017",
    slug: "zima-bereznyak",
    artist,
    title: "Зима. Березняк",
    date: "1969",
    period: "mature",
    technique: "oil",
    material: "Картон, масло",
    dimensions: "71 × 50 см по оборотной надписи; рабочая разметка около 70 × 51 см",
    genre: "landscape",
    themes: ["зима", "березняк", "лес"],
    descriptionShort:
      "Зимний берёзовый лес с тонкими вертикалями стволов, снежной поверхностью и голубой полосой дальнего пространства.",
    descriptionFull:
      "Работа отличается более светлой, почти прозрачной зимней гаммой по сравнению с «Берёзами зимой». Вертикальный ритм стволов соединён с тонкой линейной разработкой ветвей и мягким цветовым дыханием снега.",
    imageFull: "/works/lev/full/lo-017-zima-bereznyak.webp",
    imageThumb: "/works/lev/thumbs/lo-017-zima-bereznyak.webp",
    imageDetails: ["/works/lev/details/lo-017-oborot.webp"],
    inscriptions: ["Оборот: «Зима. Березняк / Овчинников Лев / 1969 г. / к.м.»; также указано «71 × 50»."],
    attributionStatus: "confirmed",
    provenance: "Собрание семьи художника",
    isPublic: true,
  },
  {
    id: "LO-018",
    slug: "gorodskaya-naberezhnaya-s-grebnoi-lodkoi",
    artist,
    title: "Без названия. Городская набережная с гребной лодкой",
    date: "1961",
    period: "mature",
    technique: "oil",
    material: "Основа уточняется",
    dimensions: "Размер уточняется",
    genre: "landscape",
    themes: ["город", "набережная", "лодка", "вода"],
    descriptionShort:
      "Городская набережная с архитектурным силуэтом на берегу и гребной лодкой на воде.",
    descriptionFull:
      "Работа строится на ясном соотношении водной плоскости и плотного городского берега. Лодка с гребцами задаёт движение в переднем плане, а красно-охристые здания формируют декоративно собранный городской силуэт. На лицевой стороне видна подпись / помета «Л. Овчинников, 61». Название условное.",
    imageFull: "/works/lev/full/lo-018-gorodskaya-naberezhnaya-s-grebnoi-lodkoi.webp",
    imageThumb: "/works/lev/thumbs/lo-018-gorodskaya-naberezhnaya-s-grebnoi-lodkoi.webp",
    signature: "На лицевой стороне: «Л. Овчинников, 61».",
    attributionStatus: "likely",
    provenance: "Собрание семьи художника",
    isPublic: true,
  },
];

export function getPublicWorks(): Work[] {
  return works.filter((work) => work.isPublic);
}

export function getWorkBySlug(slug: string): Work | undefined {
  return works.find((work) => work.slug === slug);
}

export function getFeaturedWorks(): Work[] {
  return getPublicWorks().slice(0, 6);
}

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
    filtered = filtered.filter((work) => {
      const haystack = [
        work.title,
        work.descriptionShort,
        work.descriptionFull,
        work.place,
        work.date,
        work.dimensions,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      return haystack.includes(searchLower);
    });
  }

  return filtered;
}
