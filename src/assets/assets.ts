/**
 * THE single asset map: every image the app shows is referenced by id here.
 * All images are currently generated placeholders. Swapping in real art means
 * editing this file only (change the path for an id); nothing else in the code
 * base hardcodes an image path.
 */

export const backgrounds = {
  biblioteca: "/images/backgrounds/biblioteca.svg",
  "libro-magico": "/images/backgrounds/libro-magico.svg",
  "casa-pena-afuera": "/images/backgrounds/casa-pena-afuera.svg",
  "casa-pena-adentro": "/images/backgrounds/casa-pena-adentro.svg",
  "oficina-lezica": "/images/backgrounds/oficina-lezica.svg",
  "cabildo-vacio": "/images/backgrounds/cabildo-vacio.svg",
  "cabildo-lleno": "/images/backgrounds/cabildo-lleno.svg",
  "cabildo-abierto": "/images/backgrounds/cabildo-abierto.svg",
  "viernes-18": "/images/backgrounds/viernes-18.svg",
  "sabado-19": "/images/backgrounds/sabado-19.svg",
  "domingo-20": "/images/backgrounds/domingo-20.svg",
  "lunes-21": "/images/backgrounds/lunes-21.svg",
  "martes-22": "/images/backgrounds/martes-22.svg",
  "miercoles-23": "/images/backgrounds/miercoles-23.svg",
  "jueves-24": "/images/backgrounds/jueves-24.svg",
  "viernes-25": "/images/backgrounds/viernes-25.svg",
  "plaza-victoria": "/images/backgrounds/plaza-victoria.svg",
  pulperia: "/images/backgrounds/pulperia.svg",
  fuerte: "/images/backgrounds/fuerte.svg",
  error404: "/images/backgrounds/error404.svg",
} as const;

export const characters = {
  pena: "/images/characters/pena.svg",
  belgrano: "/images/characters/belgrano.svg",
  castelli: "/images/characters/castelli.svg",
  donado: "/images/characters/donado.svg",
  lezica: "/images/characters/lezica.svg",
  "obispo-lue": "/images/characters/obispo-lue.svg",
  paso: "/images/characters/paso.svg",
  saavedra: "/images/characters/saavedra.svg",
  profe: "/images/characters/profe.svg",
  "profe-ayuda": "/images/characters/profe-ayuda.svg",
  cisneros: "/images/characters/cisneros.svg",
  villota: "/images/characters/villota.svg",
  french: "/images/characters/french.svg",
  beruti: "/images/characters/beruti.svg",
  vecino: "/images/characters/vecino.svg",
  "raul-404": "/images/characters/raul-404.svg",
} as const;

export const objects = {
  escarapela: "/images/objects/escarapela.svg",
  book: "/images/objects/book.svg",
} as const;

export const icons = {
  "back-arrow": "/images/icons/back-arrow.svg",
  logo: "/images/icons/logo.svg",
} as const;

/** Era selection cards. */
export const eras = {
  "era-arg1810": "/images/eras/era-arg1810.svg",
  "era-revolucion-industrial": "/images/eras/era-revolucion-industrial.svg",
  "era-segunda-guerra": "/images/eras/era-segunda-guerra.svg",
} as const;

/** Pictures of the character choices shown in the era modal. */
export const choices = {
  "eleccion-politico": "/images/choices/eleccion-politico.svg",
  "eleccion-pueblo": "/images/choices/eleccion-pueblo.svg",
  "eleccion-realista": "/images/choices/eleccion-realista.svg",
} as const;

export type BackgroundId = keyof typeof backgrounds;
export type CharacterId = keyof typeof characters;
export type ObjectId = keyof typeof objects;
export type IconId = keyof typeof icons;
export type EraImageId = keyof typeof eras;
export type ChoiceImageId = keyof typeof choices;
