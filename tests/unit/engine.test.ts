import { describe, expect, it } from "vitest";
import { chapters } from "@/content/chapters";
import type { Chapter, QuestionScreen } from "@/content/types";
import {
  createInitialState,
  isCorrect,
  pickOptionIds,
  reduce,
  resolveOption,
  shuffle,
  type GameAction,
  type GameState,
  type Rng,
} from "@/game/engine";

function seeded(seed: number): Rng {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const opt = (id: string) => ({ id, text: `text ${id}`, help: `help ${id}` });

const question: QuestionScreen = {
  type: "question",
  character: "profe",
  speaker: "Profe",
  text: "Q?",
  background: "biblioteca",
  correct: opt("c"),
  distractors: [opt("d1"), opt("d2"), opt("d3"), opt("d4")],
};

const chapter: Chapter = {
  id: "intro",
  title: "t",
  accentColor: "red",
  reward: { name: "r", image: "book", text: "r" },
  screens: [
    { type: "dialogue", character: "profe", speaker: "P", text: "a", background: "biblioteca" },
    question,
    { type: "dialogue", character: null, speaker: " ", text: "...", background: "biblioteca" },
  ],
};

function run(state: GameState, rng: Rng, ...actions: GameAction[]) {
  return actions.reduce((s, a) => reduce(chapter, s, a, rng), state);
}

const started = (rng: Rng, index = 0) =>
  run(createInitialState(chapter, index), rng, { type: "start" });

describe("shuffle", () => {
  it("is a permutation and does not mutate the input", () => {
    const input = [1, 2, 3, 4, 5, 6];
    const out = shuffle(input, seeded(1));
    expect(input).toEqual([1, 2, 3, 4, 5, 6]);
    expect([...out].sort()).toEqual(input);
  });
});

describe("question options", () => {
  it("always has the correct option plus 2 distinct distractors (3 unique ids)", () => {
    for (let seed = 0; seed < 200; seed++) {
      const ids = pickOptionIds(question, seeded(seed));
      expect(ids).toHaveLength(3);
      expect(new Set(ids).size).toBe(3);
      expect(ids).toContain("c");
      for (const id of ids) expect(["c", "d1", "d2", "d3", "d4"]).toContain(id);
    }
  });

  it("resolves options and correctness by id", () => {
    expect(resolveOption(question, "d3")?.help).toBe("help d3");
    expect(resolveOption(question, "nope")).toBeUndefined();
    expect(isCorrect(question, "c")).toBe(true);
    expect(isCorrect(question, "d1")).toBe(false);
  });
});

describe("reducer", () => {
  it("starts in the start phase and reveals the first screen on start", () => {
    const init = createInitialState(chapter);
    expect(init).toMatchObject({ phase: "start", screenIndex: 0, optionIds: [], finished: false });
    expect(started(seeded(1))).toMatchObject({ phase: "screen", screenIndex: 0, optionIds: [] });
  });

  it("ignores advance before start", () => {
    const init = createInitialState(chapter);
    expect(reduce(chapter, init, { type: "advance" }, seeded(1))).toBe(init);
  });

  it("advances dialogue and picks options when arriving on a question", () => {
    const s = run(createInitialState(chapter), seeded(2), { type: "start" }, { type: "advance" });
    expect(s.screenIndex).toBe(1);
    expect(s.optionIds).toHaveLength(3);
    expect(s.optionIds).toContain("c");
  });

  it("cannot advance a question screen", () => {
    const s = started(seeded(3), 1);
    expect(s.optionIds).toHaveLength(3);
    expect(reduce(chapter, s, { type: "advance" }, seeded(3))).toBe(s);
  });

  it("wrong answer -> help -> same question again, re-picked", () => {
    const rng = seeded(4);
    const s = started(rng, 1);
    const wrong = s.optionIds.find((id) => id !== "c")!;
    const help = reduce(chapter, s, { type: "choose", optionId: wrong }, rng);
    expect(help).toMatchObject({ phase: "help", selectedId: wrong, screenIndex: 1 });
    // help phase is dismissed only via dismissHelp
    expect(reduce(chapter, help, { type: "advance" }, rng)).toBe(help);
    const again = reduce(chapter, help, { type: "dismissHelp" }, rng);
    expect(again).toMatchObject({ phase: "screen", screenIndex: 1, selectedId: null });
    expect(again.optionIds).toHaveLength(3);
    expect(again.optionIds).toContain("c");
    // re-shuffled with a fresh draw: over many tries the order must vary
    const orders = new Set<string>();
    let cur = again;
    for (let i = 0; i < 30; i++) {
      const w = cur.optionIds.find((id) => id !== "c")!;
      cur = run(cur, rng, { type: "choose", optionId: w }, { type: "dismissHelp" });
      orders.add(cur.optionIds.join());
    }
    expect(orders.size).toBeGreaterThan(1);
  });

  it("correct answer -> help -> next screen", () => {
    const rng = seeded(5);
    const s = started(rng, 1);
    const help = reduce(chapter, s, { type: "choose", optionId: "c" }, rng);
    expect(help.phase).toBe("help");
    const next = reduce(chapter, help, { type: "dismissHelp" }, rng);
    expect(next).toMatchObject({ phase: "screen", screenIndex: 2, optionIds: [], finished: false });
  });

  it("rejects choosing an option that is not displayed", () => {
    const rng = seeded(6);
    const s = started(rng, 1);
    const hidden = ["c", "d1", "d2", "d3", "d4"].find((id) => !s.optionIds.includes(id))!;
    expect(reduce(chapter, s, { type: "choose", optionId: hidden }, rng)).toBe(s);
  });

  it("finishes after advancing past the last screen", () => {
    const rng = seeded(7);
    const s = run(started(rng, 2), rng, { type: "advance" });
    expect(s.finished).toBe(true);
    // terminal
    expect(reduce(chapter, s, { type: "advance" }, rng)).toBe(s);
  });

  it("finishes when the last screen is a correct question", () => {
    const qChapter: Chapter = { ...chapter, screens: [question] };
    const rng = seeded(8);
    let s = reduce(qChapter, createInitialState(qChapter), { type: "start" }, rng);
    s = reduce(qChapter, s, { type: "choose", optionId: "c" }, rng);
    s = reduce(qChapter, s, { type: "dismissHelp" }, rng);
    expect(s.finished).toBe(true);
  });

  it("resumes from a given index and clamps out-of-range ones", () => {
    expect(createInitialState(chapter, 1).screenIndex).toBe(1);
    expect(createInitialState(chapter, 99).screenIndex).toBe(2);
    expect(createInitialState(chapter, -4).screenIndex).toBe(0);
    expect(createInitialState(chapter, Number.NaN).screenIndex).toBe(0);
    expect(started(seeded(9), 1).optionIds).toHaveLength(3);
  });
});

describe("real chapters", () => {
  it("can be played to the end by always answering correctly", () => {
    for (const ch of Object.values(chapters)) {
      const rng = seeded(11);
      let s = reduce(ch, createInitialState(ch), { type: "start" }, rng);
      let steps = 0;
      while (!s.finished && steps++ < 1000) {
        const screen = ch.screens[s.screenIndex];
        if (screen.type === "dialogue") {
          s = reduce(ch, s, { type: "advance" }, rng);
        } else {
          s = reduce(ch, s, { type: "choose", optionId: screen.correct.id }, rng);
          s = reduce(ch, s, { type: "dismissHelp" }, rng);
        }
      }
      expect(s.finished).toBe(true);
    }
  });
});
