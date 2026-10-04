import { describe, expect, it } from "vitest";
import { backgrounds, characters, objects } from "@/assets/assets";
import { chapterIds, chapters, getChapter, isChapterId } from "@/content/chapters";
import { eraChoices, eras } from "@/content/eras";
import type { Option, QuestionScreen } from "@/content/types";

const expected = {
  intro: { screens: 17, questions: 2 },
  arg1810: { screens: 76, questions: 14 },
  pueblo: { screens: 53, questions: 14 },
  realista: { screens: 47, questions: 14 },
  industrial: { screens: 45, questions: 13 },
  guerra: { screens: 50, questions: 14 },
} as const;

const questionsOf = (id: keyof typeof expected) =>
  chapters[id].screens.filter((s): s is QuestionScreen => s.type === "question");

const optionsOf = (q: QuestionScreen): Option[] => [q.correct, ...q.distractors];

describe("registry", () => {
  it("lists all chapters", () => {
    expect([...chapterIds].sort()).toEqual(["arg1810", "guerra", "industrial", "intro", "pueblo", "realista"]);
    expect(isChapterId("intro")).toBe(true);
    expect(isChapterId("nope")).toBe(false);
    expect(isChapterId("toString")).toBe(false);
    expect(getChapter("arg1810")).toBe(chapters.arg1810);
    expect(getChapter("nope")).toBeUndefined();
  });

  it("uses the accent colours from the plan", () => {
    expect(chapters.intro.accentColor).toBe("rgba(40, 167, 69, 0.6)");
    expect(chapters.arg1810.accentColor).toBe("rgba(184, 73, 15, 0.6)");
    expect(chapters.pueblo.accentColor).toBe("rgba(46, 158, 147, 0.6)");
    expect(chapters.realista.accentColor).toBe("rgba(61, 158, 46, 0.6)");
    expect(chapters.industrial.accentColor).toBe("rgba(96, 110, 128, 0.6)");
    expect(chapters.guerra.accentColor).toBe("rgba(139, 40, 40, 0.6)");
    expect(chapters.industrial.accentColor).toBe("rgba(96, 110, 128, 0.6)");
    expect(chapters.guerra.accentColor).toBe("rgba(139, 40, 40, 0.6)");
  });
});

describe.each(chapterIds)("chapter %s", (id) => {
  const chapter = chapters[id];

  it("has the expected screen and question counts", () => {
    expect(chapter.id).toBe(id);
    expect(chapter.screens).toHaveLength(expected[id].screens);
    expect(questionsOf(id)).toHaveLength(expected[id].questions);
  });

  it("has 4 distractors and unique option ids per question and globally", () => {
    const all: string[] = [];
    for (const q of questionsOf(id)) {
      expect(q.distractors).toHaveLength(4);
      const ids = optionsOf(q).map((o) => o.id);
      expect(new Set(ids).size).toBe(5);
      all.push(...ids);
    }
    expect(new Set(all).size).toBe(all.length);
  });

  it("uses option ids of the form <chapter>-q<screenNo>-correct/-dN", () => {
    chapter.screens.forEach((s, i) => {
      if (s.type !== "question") return;
      const prefix = `${id}-q${i + 1}-`;
      expect(s.correct.id).toBe(`${prefix}correct`);
      s.distractors.forEach((d, k) => expect(d.id).toBe(`${prefix}d${k + 1}`));
    });
  });

  it("references existing backgrounds and characters", () => {
    for (const s of chapter.screens) {
      expect(Object.keys(backgrounds)).toContain(s.background);
      if (s.character !== null) expect(Object.keys(characters)).toContain(s.character);
    }
  });

  it("has no empty text, speaker, option text or help (except narration speaker)", () => {
    for (const s of chapter.screens) {
      expect(s.text.trim()).not.toBe("");
      if (s.character === null) {
        expect(s.speaker).toBe(" ");
      } else {
        expect(s.speaker.trim()).not.toBe("");
      }
      if (s.type === "question") {
        for (const o of optionsOf(s)) {
          expect(o.text.trim()).not.toBe("");
          expect(o.help.trim()).not.toBe("");
        }
      }
    }
  });

  it("has no stray outer whitespace in texts", () => {
    for (const s of chapter.screens) {
      expect(s.text).toBe(s.text.trim());
      if (s.type === "question") {
        for (const o of optionsOf(s)) {
          expect(o.text).toBe(o.text.trim());
          expect(o.help).toBe(o.help.trim());
        }
      }
    }
  });

  it("has a reward whose image exists in objects", () => {
    expect(chapter.reward.name.trim()).not.toBe("");
    expect(chapter.reward.text.trim()).not.toBe("");
    expect(Object.keys(objects)).toContain(chapter.reward.image);
  });
});

describe("verbatim spot-checks", () => {
  it("intro screen 1", () => {
    const s = chapters.intro.screens[0];
    expect(s.type).toBe("dialogue");
    expect(s.character).toBe("profe");
    expect(s.speaker).toBe("Profe historia");
    expect(s.text).toBe(
      "Bienvenides a nuestra biblioteca escolar! Se van a dar cuenta rápido que esta no es una biblioteca común y corriente.",
    );
    expect(s.background).toBe("biblioteca");
  });

  it("intro screen 8 is narration", () => {
    const s = chapters.intro.screens[7];
    expect(s.character).toBeNull();
    expect(s.speaker).toBe(" ");
    expect(s.text).toBe("...");
    expect(s.background).toBe("libro-magico");
  });

  it("arg1810 screen 5 (question)", () => {
    const s = chapters.arg1810.screens[4];
    expect(s.type).toBe("question");
    expect(s.speaker).toBe("Nicolás Rodriguez Peña");
    expect(s.text).toBe("¿Sabe qué hecho importante sucedió en España?");
    expect(s.background).toBe("casa-pena-afuera");
    if (s.type !== "question") return;
    expect(s.correct.id).toBe("arg1810-q5-correct");
    expect(s.correct.text).toBe(
      "Sí, la toma de Sevilla a manos de los franceses y la caída de la junta",
    );
    expect(s.correct.help).toBe(
      "Exacto! Sevilla es una ciudad clave y esa junta era la que le daba poder al virrey de aquí",
    );
    expect(s.distractors[0].text).toBe("Una gran crisis financiera");
  });

  it("intro screen 5 correct option and trimmed help", () => {
    const s = chapters.intro.screens[4];
    if (s.type !== "question") throw new Error("expected question");
    expect(s.correct.text).toBe("Sí, vamos a viajar en el tiempo");
    expect(s.distractors[2].help).toBe(
      "Dejenló un segundo! Repito, vamos a viajar en el tiempo a conocer la historia",
    );
  });

  it("rewards", () => {
    expect(chapters.intro.reward).toEqual({
      name: "Libro de historia",
      image: "book",
      text: "Completaste el tutorial. Selecciona cualquier otra época para empezar a jugar",
    });
    expect(chapters.arg1810.reward.name).toBe("Escarapela de 1810");
    expect(chapters.arg1810.reward.image).toBe("escarapela");
  });
});

describe("eras", () => {
  it("has 3 era cards, all playable", () => {
    expect(eras.map((e) => e.title)).toEqual([
      "Revolución de Mayo",
      "Revolución industrial",
      "Segunda Guerra Mundial",
    ]);
    expect(eras.map((e) => e.playable)).toEqual([true, true, true]);
  });

  it("has 5 modal choices, all playable", () => {
    expect(eraChoices).toHaveLength(5);
    expect(eraChoices.every((c) => c.playable && c.buttonLabel === "Comenzar")).toBe(true);
    expect(eraChoices.map((c) => c.chapterId)).toEqual([
      "arg1810",
      "pueblo",
      "realista",
      "industrial",
      "guerra",
    ]);
    expect(eraChoices[1].text).toContain('el "populacho" también');
    expect(eraChoices[0].chapterId).toBe("arg1810");
  });
});
