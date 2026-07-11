import { Translation } from './types';

export const translations: Record<'ru' | 'ky' | 'en', Translation> = {
  ru: {
    title: "Nurzada",
    subtitle: "Qyz Uzatuu",
    hostsInvitation: "Дорогие гости! Приглашаем вас разделить с нами радость этого знаменательного события — праздника нашей любимой дочери Нурзады, благословить её на новый жизненный путь и стать свидетелями этого счастливого дня.",
    saveTheDateTitle: "Сохраните дату",
    saveTheDateDesc: "Пожалуйста, сохраните эту дату и разделите с нами этот особенный день.",
    calendarMonth: "СЕНТЯБРЬ 2026",
    calendarDays: {
      mon: "ПН",
      tue: "ВТ",
      wed: "СР",
      thu: "ЧТ",
      fri: "ПТ",
      sat: "СБ",
      sun: "ВС"
    },
    countdownTitle: "До торжества осталось:",
    days: "дней",
    hours: "часов",
    minutes: "минут",
    seconds: "секунд",
    countdownCompleted: "Торжество началось!",
    locationTitle: "Локация",
    locationVenue: "Ресторан «Ак Булут»",
    locationAddress: "г. Бишкек, ул. 7 апреля, 120/1",
    openMapButton: "Открыть маршрут в 2GIS",
    gatheringLabel: "Сбор гостей:",
    gatheringTime: "16:00",
    officialStartLabel: "Официальное начало:",
    officialStartTime: "17:30",
    eveningEndLabel: "Окончание вечера:",
    eveningEndTime: "22:00",
    programTitle: "Программа вечера",
    programItems: [
      {
        time: "16:00",
        title: "Сбор гостей",
        desc: "Встреча дорогих родственников и друзей в праздничной атмосфере."
      },
      {
        time: "16:00 – 17:30",
        title: "Фуршет & Фотосессия",
        desc: "Приветственные напитки, изысканные угощения и памятные фотографии с невестой."
      },
      {
        time: "17:30",
        title: "Начало торжества",
        desc: "Официальная часть вечера, обряды благословения и праздничная программа."
      },
      {
        time: "22:00",
        title: "Завершение вечера",
        desc: "Финальные аккорды праздника и тёплые слова прощания перед новой главой жизни."
      }
    ],
    dressCodeTitle: "Dress Code",
    dressCodeDesc: "Будем рады, если вы поддержите атмосферу нашего вечера, выбрав наряды в теплых природных оттенках.",
    dressCodePalette: "Палитра вечера:",
    colors: {
      burgundy: "Бордовый",
      beige: "Бежевый",
      milky: "Молочный",
      creamy: "Кремовый",
      lightBrown: "Светло-коричневый",
      olive: "Оливковый",
      sage: "Шалфейный",
      darkGreen: "Темно-зеленый"
    },
    rsvpTitle: "Подтверждение",
    rsvpSubtitle: "Пожалуйста, подтвердите свое присутствие",
    rsvpDeadline: "до 15 августа 2026 года",
    rsvpNameLabel: "Имя и фамилия",
    rsvpNamePlaceholder: "Введите ваше имя",
    rsvpWillAttendLabel: "Планируете ли вы присутствовать?",
    rsvpYes: "Да, с радостью приду",
    rsvpNo: "К сожалению, не смогу",
    rsvpPlusOneLabel: "Будете ли вы с сопровождающим (+1)?",
    rsvpPlusOnePlaceholder: "Имя сопровождающего",
    rsvpSubmitButton: "Отправить ответ",
    rsvpSuccessTitle: "Благодарим вас!",
    rsvpSuccessDesc: "Ваш ответ успешно сохранен. Мы с нетерпением ждем встречи с вами!",
    rsvpSubmitAnother: "Отправить еще один ответ",
    finalMessage: "Будем счастливы разделить этот особенный день вместе с вами.",
    loveLabel: "С любовью,",
    hostsNames: "Акыл и Гулнур"
  },
  ky: {
    title: "Нурзада",
    subtitle: "Кыз узатуу",
    hostsInvitation: "Урматтуу коногубуз, сизди сүйүктүү кызыбыз Нурзаданын салтанаттуу тоюна келип, ак дасторкондун үстүндө батаңызды берип, бул кубанычтуу күндүн күбөсү болууга чакырабыз!",
    saveTheDateTitle: "Календарга белгилеңиз",
    saveTheDateDesc: "Бул күндү календарыңызда ❤️ менен белгилеп, биздин өзгөчө күнүбүздү биз менен бирге өткөрүүгө убакыт бөлүңүз.",
    calendarMonth: "СЕНТЯБРЬ 2026",
    calendarDays: {
      mon: "ДШ",
      tue: "ШШ",
      wed: "ШР",
      thu: "БШ",
      fri: "ЖМ",
      sat: "ИШ",
      sun: "ЖШ"
    },
    countdownTitle: "Той башталгыча убакыт калды:",
    days: "күн",
    hours: "саат",
    minutes: "мүнөт",
    seconds: "секунд",
    countdownCompleted: "Той башталды!",
    locationTitle: "Дарегибиз",
    locationVenue: "«Ак Булут» рестораны",
    locationAddress: "Бишкек шаары, 7-Апрель көчөсү, 120/1",
    openMapButton: "Картаны ачуу (2GIS)",
    gatheringLabel: "Коноктордун жыйыны:",
    gatheringTime: "16:00",
    officialStartLabel: "Тойдун башталышы:",
    officialStartTime: "17:30",
    eveningEndLabel: "Тойдун аякташы:",
    eveningEndTime: "22:00",
    programTitle: "Той программасы",
    programItems: [
      {
        time: "16:00",
        title: "Коноктордун жыйыны",
        desc: "Кадырлуу конокторубузду салтанаттуу тосуп алуу жана ак тилектердин башталышы."
      },
      {
        time: "16:00 – 17:30",
        title: "Фуршет & Сүрөткө түшүү",
        desc: "Фуршет, шириндиктер жана колукту Нурзада менен эстеликке кооз сүрөттөр."
      },
      {
        time: "17:30",
        title: "Тойдун башталышы",
        desc: "Салтанаттын расмий ачылышы, бата берүү аземдери жана шаңдуу кече."
      },
      {
        time: "22:00",
        title: "Тойдун аякташы",
        desc: "Жакшы маанайдагы каалоо-тилектер менен кеченин салтанаттуу жыйынтыкталышы."
      }
    ],
    dressCodeTitle: "Dress Code",
    dressCodeDesc: "Биздин кеченин жылуу жана назик маанайын толуктап, табигый жылуу түстөгү кийимдерди тандасаңыз, абдан кубанычта болобуз.",
    dressCodePalette: "Түстөр палитрасы:",
    colors: {
      burgundy: "Бордо",
      beige: "Беж",
      milky: "Сүт түстүү",
      creamy: "Крем түстүү",
      lightBrown: "Ачык күрөң",
      olive: "Зайтун жашыл",
      sage: "Шалфей жашыл",
      darkGreen: "Кочкул жашыл"
    },
    rsvpTitle: "Катышууну ырастоо",
    rsvpSubtitle: "Катышууңуз тууралуу алдын ала кабарлап коюңузду суранабыз",
    rsvpDeadline: "2026-жылдын 15-августуна чейин",
    rsvpNameLabel: "Аты-жөнүңүз",
    rsvpNamePlaceholder: "Атыңызды жазыңыз",
    rsvpWillAttendLabel: "Катыша аласызбы?",
    rsvpYes: "Ооба, бара алам",
    rsvpNo: "Тилекке каршы, бара албайм",
    rsvpPlusOneLabel: "Коштоочуңуз келеби (+1)?",
    rsvpPlusOnePlaceholder: "Коштоочунун аты-жөнү",
    rsvpSubmitButton: "Жоопту жөнөтүү",
    rsvpSuccessTitle: "Рахмат!",
    rsvpSuccessDesc: "Сиздин жообуңуз ийгиликтүү катталды. Сизди кубануу менен күтөбүз!",
    rsvpSubmitAnother: "Жаңы жооп жөнөтүү",
    finalMessage: "Бул өзгөть күнүбүздү сиздер менен бирге өткөрүү биз үчүн чоң бакыт.",
    loveLabel: "Терең урматтоо менен,",
    hostsNames: "Гулнур жана Акыл"
  },
  en: {
    title: "Nurzada",
    subtitle: "Qyz Uzatuu",
    hostsInvitation: "Dear honored guests! We cordially invite you to share the joy of this special milestone — the celebration of our beloved daughter Nurzada. Join us to bestow your blessings and witness this beautiful, happy day!",
    saveTheDateTitle: "Save the Date",
    saveTheDateDesc: "Please save this special date and share this beautiful day of celebration with us.",
    calendarMonth: "SEPTEMBER 2026",
    calendarDays: {
      mon: "MO",
      tue: "TU",
      wed: "WE",
      thu: "TH",
      fri: "FR",
      sat: "SA",
      sun: "SU"
    },
    countdownTitle: "Countdown to the Celebration:",
    days: "days",
    hours: "hours",
    minutes: "minutes",
    seconds: "seconds",
    countdownCompleted: "The event has begun!",
    locationTitle: "Location",
    locationVenue: "Restaurant 'Ak Bulut'",
    locationAddress: "Bishkek, 120/1 7 April Street",
    openMapButton: "Open Route in 2GIS",
    gatheringLabel: "Guest arrival:",
    gatheringTime: "16:00",
    officialStartLabel: "Official beginning:",
    officialStartTime: "17:30",
    eveningEndLabel: "Celebration ends:",
    eveningEndTime: "22:00",
    programTitle: "Evening Program",
    programItems: [
      {
        time: "16:00",
        title: "Guest Arrival",
        desc: "Welcoming our dear relatives and friends in a celebratory atmosphere."
      },
      {
        time: "16:00 – 17:30",
        title: "Buffet & Photo Session",
        desc: "Welcome drinks, exquisite refreshments, and memorable photographs with the beautiful bride."
      },
      {
        time: "17:30",
        title: "The Ceremony Begins",
        desc: "Official commencement of the celebration, blessing ceremonies, and traditional program."
      },
      {
        time: "22:00",
        title: "Closing of the Evening",
        desc: "Concluding words, beautiful farewell wishes, and the start of an exciting new chapter."
      }
    ],
    dressCodeTitle: "Dress Code",
    dressCodeDesc: "We would be absolutely delighted if you support the warm atmosphere of our evening by choosing attire in natural warm shades.",
    dressCodePalette: "Color Palette:",
    colors: {
      burgundy: "Burgundy",
      beige: "Beige",
      milky: "Milky White",
      creamy: "Creamy",
      lightBrown: "Light Brown",
      olive: "Olive",
      sage: "Sage",
      darkGreen: "Dark Green"
    },
    rsvpTitle: "RSVP",
    rsvpSubtitle: "Please confirm your presence",
    rsvpDeadline: "by August 15, 2026",
    rsvpNameLabel: "First and last name",
    rsvpNamePlaceholder: "Your full name",
    rsvpWillAttendLabel: "Will you attend?",
    rsvpYes: "Yes, with pleasure",
    rsvpNo: "Unfortunately, cannot make it",
    rsvpPlusOneLabel: "Will you bring a guest (+1)?",
    rsvpPlusOnePlaceholder: "Guest's full name",
    rsvpSubmitButton: "Submit RSVP",
    rsvpSuccessTitle: "Thank you!",
    rsvpSuccessDesc: "Your response has been successfully saved. We look forward to seeing you!",
    rsvpSubmitAnother: "Submit another response",
    finalMessage: "We will be truly happy to share this incredibly special day with you.",
    loveLabel: "With love,",
    hostsNames: "Akyl and Gulnur"
  }
};

export const COLOR_PALETTE_HEX = [
  { nameKey: 'burgundy', hex: '#800020', label: 'burgundy' },
  { nameKey: 'beige', hex: '#D4BE9F', label: 'beige' },
  { nameKey: 'milky', hex: '#FFFDF9', label: 'milky' },
  { nameKey: 'creamy', hex: '#F3E5D8', label: 'creamy' },
  { nameKey: 'lightBrown', hex: '#B38F71', label: 'lightBrown' },
  { nameKey: 'olive', hex: '#808000', label: 'olive' },
  { nameKey: 'sage', hex: '#87A96B', label: 'sage' },
  { nameKey: 'darkGreen', hex: '#2E5A44', label: 'darkGreen' }
];
