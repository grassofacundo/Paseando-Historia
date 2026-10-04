"use client";

import { useCallback, useEffect, useReducer, useRef } from "react";
import { useRouter } from "next/navigation";
import type { Chapter } from "@/content/types";
import { markCompleted, saveScreen } from "@/storage/progress";
import { createInitialState, reduce, type GameAction, type GameState } from "./engine";

/**
 * Wraps the pure reducer. `startIndex` is the resume index (read on the client
 * by the caller, so this hook only ever runs after mount).
 */
export function useGame(chapter: Chapter, startIndex: number) {
  const router = useRouter();
  const [state, dispatch] = useReducer(
    (s: GameState, a: GameAction) => reduce(chapter, s, a, Math.random),
    undefined,
    () => createInitialState(chapter, startIndex),
  );

  // Save the screen index on every advance (not for the initial/resumed one).
  const lastSaved = useRef(state.screenIndex);
  useEffect(() => {
    if (state.phase === "start" || state.finished) return;
    if (state.screenIndex !== lastSaved.current) {
      lastSaved.current = state.screenIndex;
      saveScreen(chapter.id, state.screenIndex);
    }
  }, [chapter.id, state.phase, state.finished, state.screenIndex]);

  useEffect(() => {
    if (!state.finished) return;
    markCompleted(chapter.id);
    router.push(`/finish/${chapter.id}`);
  }, [state.finished, chapter.id, router]);

  const start = useCallback(() => dispatch({ type: "start" }), []);
  const advance = useCallback(() => dispatch({ type: "advance" }), []);
  const choose = useCallback((optionId: string) => dispatch({ type: "choose", optionId }), []);
  const dismissHelp = useCallback(() => dispatch({ type: "dismissHelp" }), []);

  return { state, start, advance, choose, dismissHelp };
}
