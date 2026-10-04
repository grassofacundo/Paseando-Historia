/**
 * Pure game engine (no React, no DOM). Randomness is injected as an `rng`
 * function returning a number in [0, 1), so tests can be deterministic.
 */
import type { Chapter, ChapterId, Option, QuestionScreen, Screen } from "@/content/types";

export type Rng = () => number;
export type Phase = "start" | "screen" | "help";

export type GameState = {
  chapterId: ChapterId;
  screenIndex: number;
  phase: Phase;
  /** Option ids in display order: 3 on a question screen, empty otherwise. */
  optionIds: string[];
  /** Option the player chose (only during `help`). */
  selectedId: string | null;
  /** True once the player advanced past the last screen. */
  finished: boolean;
};

export type GameAction =
  | { type: "start" }
  | { type: "advance" }
  | { type: "choose"; optionId: string }
  | { type: "dismissHelp" };

/** Fisher-Yates shuffle; returns a new array. */
export function shuffle<T>(items: readonly T[], rng: Rng): T[] {
  const out = [...items];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/** The correct option plus 2 distinct random distractors, shuffled. Returns ids. */
export function pickOptionIds(screen: QuestionScreen, rng: Rng): string[] {
  const distractors = shuffle(screen.distractors, rng).slice(0, 2);
  return shuffle([screen.correct, ...distractors], rng).map((o) => o.id);
}

export function allOptions(screen: QuestionScreen): Option[] {
  return [screen.correct, ...screen.distractors];
}

export function resolveOption(screen: QuestionScreen, optionId: string): Option | undefined {
  return allOptions(screen).find((o) => o.id === optionId);
}

/** Correctness is decided by id, never by text. */
export function isCorrect(screen: QuestionScreen, optionId: string): boolean {
  return screen.correct.id === optionId;
}

function optionsFor(screen: Screen | undefined, rng: Rng): string[] {
  return screen?.type === "question" ? pickOptionIds(screen, rng) : [];
}

/** Initial state (phase "start"); `screenIndex` is clamped to the valid range (resume). */
export function createInitialState(chapter: Chapter, screenIndex = 0): GameState {
  const max = Math.max(chapter.screens.length - 1, 0);
  const index = Number.isInteger(screenIndex) ? Math.min(Math.max(screenIndex, 0), max) : 0;
  return {
    chapterId: chapter.id,
    screenIndex: index,
    phase: "start",
    optionIds: [],
    selectedId: null,
    finished: false,
  };
}

/** Moves to the screen at `index` (or finishes) and re-picks the options. */
function goTo(chapter: Chapter, state: GameState, index: number, rng: Rng): GameState {
  if (index >= chapter.screens.length) {
    return { ...state, phase: "screen", optionIds: [], selectedId: null, finished: true };
  }
  return {
    ...state,
    screenIndex: index,
    phase: "screen",
    optionIds: optionsFor(chapter.screens[index], rng),
    selectedId: null,
  };
}

export function reduce(
  chapter: Chapter,
  state: GameState,
  action: GameAction,
  rng: Rng,
): GameState {
  if (state.finished) return state;
  const screen = chapter.screens[state.screenIndex];
  switch (action.type) {
    case "start":
      if (state.phase !== "start") return state;
      return goTo(chapter, state, state.screenIndex, rng);
    case "advance":
      // Question boxes are not clickable: only dialogue/narration advance.
      if (state.phase !== "screen" || screen.type !== "dialogue") return state;
      return goTo(chapter, state, state.screenIndex + 1, rng);
    case "choose":
      if (state.phase !== "screen" || screen.type !== "question") return state;
      if (!state.optionIds.includes(action.optionId)) return state;
      return { ...state, phase: "help", selectedId: action.optionId };
    case "dismissHelp":
      if (state.phase !== "help" || screen.type !== "question" || state.selectedId === null) {
        return state;
      }
      return isCorrect(screen, state.selectedId)
        ? goTo(chapter, state, state.screenIndex + 1, rng)
        : goTo(chapter, state, state.screenIndex, rng); // same question, re-picked and re-shuffled
  }
}
