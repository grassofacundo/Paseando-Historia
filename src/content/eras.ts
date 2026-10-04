import type { Era, EraChoice } from "./types";

export const eras: Era[] = [
  {
    id: "arg1810",
    title: "Revolución de Mayo",
    image: "era-arg1810",
    playable: true,
    chapterId: "arg1810",
  },
  {
    id: "revolucion-industrial",
    title: "Revolución industrial",
    image: "era-revolucion-industrial",
    playable: true,
    chapterId: "industrial",
  },
  {
    id: "segunda-guerra",
    title: "Segunda Guerra Mundial",
    image: "era-segunda-guerra",
    playable: true,
    chapterId: "guerra",
  },
];

/** Label shown on cards and buttons that are not available yet (legacy spelling). */
export const COMING_SOON = "Proximamente";

export const eraChoices: EraChoice[] = [
  {
    id: "politico",
    eraId: "arg1810",
    image: "eleccion-politico",
    text: "Encarná a un hombre clásico de la política argentina durante toda la semana de la revolución de 1810. Conocé próceres como Belgrano, Saavedra o Castelli ¡Viva la revolución!",
    buttonLabel: "Comenzar",
    playable: true,
    chapterId: "arg1810",
  },
  {
    id: "pueblo",
    eraId: "arg1810",
    image: "eleccion-pueblo",
    text: 'Vive la revolución de Mayo desde la mirada del pueblo, escribe la historia con el poder de las multitudes y conoce cómo el "populacho" también escribió la historia',
    buttonLabel: "Comenzar",
    playable: true,
    chapterId: "pueblo",
  },
  {
    id: "realista",
    eraId: "arg1810",
    image: "eleccion-realista",
    text: "Sos el asignado para luchar contra los intentos revolucionarios que se dan en América, revive la revolución desde la mirada europea.",
    buttonLabel: "Comenzar",
    playable: true,
    chapterId: "realista",
  },
  {
    id: "obrero",
    eraId: "revolucion-industrial",
    image: "eleccion-obrero",
    text: "Viaja por la Inglaterra de los siglos XVIII y XIX y conoce de cerca cómo las máquinas, las fábricas y el ferrocarril cambiaron el mundo para siempre.",
    buttonLabel: "Comenzar",
    playable: true,
    chapterId: "industrial",
  },
  {
    id: "corresponsal",
    eraId: "segunda-guerra",
    image: "eleccion-corresponsal",
    text: "Sé corresponsal de guerra y recorre los principales escenarios de la Segunda Guerra Mundial, desde la invasión de Polonia hasta la creación de las Naciones Unidas.",
    buttonLabel: "Comenzar",
    playable: true,
    chapterId: "guerra",
  },
];
