import { existsSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import * as assets from "@/assets/assets";

const groups: Record<string, Record<string, string>> = {
  backgrounds: assets.backgrounds,
  characters: assets.characters,
  objects: assets.objects,
  icons: assets.icons,
  eras: assets.eras,
  choices: assets.choices,
};

describe("asset map", () => {
  for (const [group, map] of Object.entries(groups)) {
    describe(group, () => {
      for (const [id, publicPath] of Object.entries(map)) {
        it(`${id} -> ${publicPath} exists under public/`, () => {
          expect(publicPath.startsWith("/")).toBe(true);
          const file = path.join(process.cwd(), "public", publicPath);
          expect(existsSync(file)).toBe(true);
        });
      }
    });
  }
});
