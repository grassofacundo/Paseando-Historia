"use client";

import { useSyncExternalStore } from "react";
import { getUsername, setUsername } from "./progress";

const listeners = new Set<() => void>();

function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  window.addEventListener("storage", listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", listener);
  };
}

/** Saves the name and notifies every component using `useUsername`. */
export function saveUsername(name: string): void {
  setUsername(name);
  listeners.forEach((l) => l());
}

/** Username from localStorage; `null` on the server and during hydration. */
export function useUsername(): string | null {
  return useSyncExternalStore(subscribe, getUsername, () => null);
}
