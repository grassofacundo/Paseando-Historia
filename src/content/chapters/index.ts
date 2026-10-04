import type { Chapter, ChapterId } from "../types";
import { arg1810 } from "./arg1810";
import { intro } from "./intro";
import { pueblo } from "./pueblo";
import { realista } from "./realista";

export const chapters: Record<ChapterId, Chapter> = { intro, arg1810, pueblo, realista };

export const chapterIds = Object.keys(chapters) as ChapterId[];

export function isChapterId(id: string): id is ChapterId {
  return Object.prototype.hasOwnProperty.call(chapters, id);
}

export function getChapter(id: string): Chapter | undefined {
  return isChapterId(id) ? chapters[id] : undefined;
}
