import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { chapters } from "@/content/chapters";
import {
  PROGRESS_KEY,
  USERNAME_KEY,
  getProgress,
  getResumeIndex,
  getUsername,
  markCompleted,
  percent,
  saveScreen,
  setUsername,
} from "@/storage/progress";

function installStorage(initial: Record<string, string> = {}) {
  const data = new Map(Object.entries(initial));
  const storage = {
    getItem: (k: string) => (data.has(k) ? data.get(k)! : null),
    setItem: (k: string, v: string) => void data.set(k, String(v)),
  };
  vi.stubGlobal("window", { localStorage: storage });
  return data;
}

beforeEach(() => installStorage());
afterEach(() => vi.unstubAllGlobals());

describe("username", () => {
  it("defaults to empty and round-trips", () => {
    expect(getUsername()).toBe("");
    setUsername("Ana");
    expect(getUsername()).toBe("Ana");
  });
});

describe("progress", () => {
  const total = chapters.arg1810.screens.length;

  it("defaults when nothing is stored", () => {
    expect(getProgress("arg1810")).toEqual({ screen: 0, completed: false });
    expect(getResumeIndex("arg1810")).toBe(0);
    expect(percent("arg1810")).toBe(0);
  });

  it("saves the screen and resumes from it", () => {
    saveScreen("arg1810", 10);
    expect(getProgress("arg1810")).toEqual({ screen: 10, completed: false });
    expect(getResumeIndex("arg1810")).toBe(10);
    expect(percent("arg1810")).toBe(Math.round((10 / total) * 100));
  });

  it("keeps chapters independent", () => {
    saveScreen("arg1810", 5);
    saveScreen("intro", 2);
    expect(getProgress("arg1810").screen).toBe(5);
    expect(getProgress("intro").screen).toBe(2);
  });

  it("completed => 100% and resume from 0", () => {
    saveScreen("arg1810", 40);
    markCompleted("arg1810");
    expect(percent("arg1810")).toBe(100);
    expect(getResumeIndex("arg1810")).toBe(0);
    expect(getProgress("arg1810").completed).toBe(true);
  });

  it("saving a screen after completion starts a new run (completed=false)", () => {
    markCompleted("intro");
    saveScreen("intro", 1);
    expect(getProgress("intro")).toEqual({ screen: 1, completed: false });
  });

  it("clamps the resume index to the valid range", () => {
    saveScreen("intro", 9999);
    expect(getResumeIndex("intro")).toBe(chapters.intro.screens.length - 1);
  });

  it("falls back to defaults on corrupt JSON or wrong shapes", () => {
    for (const raw of ["{not json", "[]", "null", '"x"', '{"intro":{"screen":"a"}}', '{"intro":null}']) {
      installStorage({ [PROGRESS_KEY]: raw });
      expect(getProgress("intro")).toEqual({ screen: 0, completed: false });
      expect(percent("intro")).toBe(0);
    }
  });

  it("recovers by overwriting corrupt data on the next save", () => {
    installStorage({ [PROGRESS_KEY]: "{oops" });
    saveScreen("intro", 3);
    expect(getProgress("intro").screen).toBe(3);
  });

  it("writes to the documented keys", () => {
    const data = installStorage();
    setUsername("Ana");
    saveScreen("intro", 1);
    expect(data.get(USERNAME_KEY)).toBe("Ana");
    expect(JSON.parse(data.get(PROGRESS_KEY)!)).toEqual({ intro: { screen: 1, completed: false } });
  });
});

describe("unavailable storage", () => {
  it("does not throw when storage throws", () => {
    const boom = () => {
      throw new Error("denied");
    };
    vi.stubGlobal("window", { localStorage: { getItem: boom, setItem: boom } });
    expect(getUsername()).toBe("");
    expect(() => setUsername("x")).not.toThrow();
    expect(() => saveScreen("intro", 1)).not.toThrow();
    expect(() => markCompleted("intro")).not.toThrow();
    expect(getProgress("intro")).toEqual({ screen: 0, completed: false });
    expect(percent("intro")).toBe(0);
  });

  it("does not throw when accessing localStorage itself throws", () => {
    vi.stubGlobal("window", {
      get localStorage() {
        throw new Error("blocked");
      },
    });
    expect(getUsername()).toBe("");
    expect(() => saveScreen("intro", 1)).not.toThrow();
  });

  it("is SSR-safe (no window)", () => {
    vi.unstubAllGlobals();
    expect(typeof window).toBe("undefined");
    expect(getUsername()).toBe("");
    expect(() => setUsername("x")).not.toThrow();
    expect(getResumeIndex("intro")).toBe(0);
  });
});
