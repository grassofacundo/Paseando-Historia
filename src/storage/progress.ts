/**
 * Typed, SSR-safe localStorage layer. Every read/write is guarded; missing or
 * corrupt data falls back to defaults.
 *
 * Design choice: `saveScreen` always stores `completed: false`. Progress is
 * saved on every screen advance, so advancing in a previously completed chapter
 * starts a new run and "Completado %" tracks that run, while merely opening a
 * completed chapter (without advancing) leaves it completed.
 */
import { getChapter } from "@/content/chapters";

export const USERNAME_KEY = "ph.username";
export const PROGRESS_KEY = "ph.progress";

export type ChapterProgress = { screen: number; completed: boolean };
type ProgressMap = Record<string, ChapterProgress>;

function readItem(key: string): string | null {
  try {
    if (typeof window === "undefined") return null;
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeItem(key: string, value: string): void {
  try {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(key, value);
  } catch {
    // ignore (quota, private mode, ...)
  }
}

export function getUsername(): string {
  return readItem(USERNAME_KEY) ?? "";
}

export function setUsername(name: string): void {
  writeItem(USERNAME_KEY, name);
}

function readAll(): ProgressMap {
  const raw = readItem(PROGRESS_KEY);
  if (!raw) return {};
  try {
    const parsed: unknown = JSON.parse(raw);
    if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) return {};
    const out: ProgressMap = {};
    for (const [id, value] of Object.entries(parsed)) {
      const v = value as Partial<ChapterProgress> | null;
      if (v && typeof v.screen === "number" && Number.isFinite(v.screen) && v.screen >= 0) {
        out[id] = { screen: Math.floor(v.screen), completed: v.completed === true };
      }
    }
    return out;
  } catch {
    return {};
  }
}

function writeAll(map: ProgressMap): void {
  writeItem(PROGRESS_KEY, JSON.stringify(map));
}

export function getProgress(chapterId: string): ChapterProgress {
  return readAll()[chapterId] ?? { screen: 0, completed: false };
}

export function saveScreen(chapterId: string, screenIndex: number): void {
  const map = readAll();
  map[chapterId] = { screen: Math.max(0, Math.floor(screenIndex)), completed: false };
  writeAll(map);
}

export function markCompleted(chapterId: string): void {
  const map = readAll();
  map[chapterId] = { screen: map[chapterId]?.screen ?? 0, completed: true };
  writeAll(map);
}

/** Screen index to start from: 0 if completed, else the saved one clamped to range. */
export function getResumeIndex(chapterId: string): number {
  const { screen, completed } = getProgress(chapterId);
  if (completed) return 0;
  const total = getChapter(chapterId)?.screens.length ?? 0;
  return Math.min(Math.max(screen, 0), Math.max(total - 1, 0));
}

export function percent(chapterId: string): number {
  const { screen, completed } = getProgress(chapterId);
  if (completed) return 100;
  const total = getChapter(chapterId)?.screens.length ?? 0;
  if (total === 0) return 0;
  return Math.min(100, Math.max(0, Math.round((screen / total) * 100)));
}
