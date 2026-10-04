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
    playable: false,
  },
  {
    id: "segunda-guerra",
    title: "Segunda Guerra Mundial",
    image: "era-segunda-guerra",
    playable: false,
  },
];

/** Label shown on cards and buttons that are not available yet (legacy spelling). */
export const COMING_SOON = "Proximamente";

export const eraChoices: EraChoice[] = [
  {
    id: "politico",
    image: "eleccion-politico",
    text: "Encarná a un hombre clásico de la política argentina durante toda la semana de la revolución de 1810. Conocé próceres como Belgrano, Saavedra o Castelli ¡Viva la revolución!",
    buttonLabel: "Comenzar",
    playable: true,
    chapterId: "arg1810",
  },
  {
    id: "pueblo",
    image: "eleccion-pueblo",
    text: 'Vive la revolución de Mayo desde la mirada del pueblo, escribe la historia con el poder de las multitudes y conoce cómo el "populacho" también escribió la historia',
    buttonLabel: COMING_SOON,
    playable: false,
  },
  {
    id: "realista",
    image: "eleccion-realista",
    text: "Sos el asignado para luchar contra los intentos revolucionarios que se dan en América, revive la revolución desde la mirada europea.",
    buttonLabel: COMING_SOON,
    playable: false,
  },
];
