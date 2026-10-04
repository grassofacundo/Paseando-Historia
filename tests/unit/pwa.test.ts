import { readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import * as assets from "@/assets/assets";
import manifest from "@/app/manifest";

const root = process.cwd();
const sw = readFileSync(path.join(root, "public", "sw.js"), "utf8");
const precache = new Set(
  [...sw.matchAll(/^\s*"(\/[^"]*)",?\s*$/gm)].map((m) => m[1]),
);

function walk(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const full = path.join(dir, name);
    return statSync(full).isDirectory() ? walk(full) : [full];
  });
}

describe("service worker precache list", () => {
  it("covers every asset-map path", () => {
    const all = [
      assets.backgrounds,
      assets.characters,
      assets.objects,
      assets.icons,
      assets.eras,
      assets.choices,
    ].flatMap((m) => Object.values(m) as string[]);
    for (const p of all) expect(precache, p).toContain(p);
  });

  it("covers every file under public/images and public/icons", () => {
    for (const sub of ["images", "icons"]) {
      const base = path.join(root, "public");
      for (const file of walk(path.join(base, sub))) {
        const url = "/" + path.relative(base, file).split(path.sep).join("/");
        expect(precache, url).toContain(url);
      }
    }
  });

  it("covers the app pages and manifest", () => {
    for (const p of [
      "/", "/eras", "/about", "/play/intro", "/play/arg1810",
      "/play/pueblo", "/play/realista",
      "/finish/intro", "/finish/arg1810", "/finish/pueblo", "/finish/realista", "/404", "/manifest.webmanifest",
    ]) {
      expect(precache, p).toContain(p);
    }
  });

  it("covers every manifest icon", () => {
    for (const icon of manifest().icons ?? []) expect(precache).toContain(icon.src);
  });
});

describe("web app manifest", () => {
  const m = manifest();
  const icons = m.icons ?? [];

  it("has basic fields", () => {
    expect(m.name).toBe("Pasea historias");
    expect(m.lang).toBe("es");
    expect(m.display).toBe("standalone");
    expect(m.start_url).toBe("/");
  });

  it("has 192 and 512 icons plus a maskable one", () => {
    expect(icons.some((i) => i.sizes === "192x192")).toBe(true);
    expect(icons.some((i) => i.sizes === "512x512" && i.purpose !== "maskable")).toBe(true);
    expect(icons.some((i) => i.purpose === "maskable")).toBe(true);
  });
});

describe("service worker install", () => {
  it("uses a v2+ cache and precaches referenced Next assets", () => {
    expect(sw).toMatch(/CACHE_VERSION = "ph-v[2-9]/);
    expect(sw).toContain("precacheNextAssets");
  });
});
