// One-off generator for the placeholder PWA icons.
// Usage: node scripts/generate-icons.mjs
import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const logo = path.join(root, "public/images/icons/logo.svg");
const out = path.join(root, "public/icons");
fs.mkdirSync(out, { recursive: true });

const BG = "#8d4a1b"; // matches the logo background

async function plain(size, file) {
  await sharp(logo, { density: 384 }).resize(size, size).png().toFile(path.join(out, file));
}

// Maskable: full-bleed background, logo inside the central 60% (safe zone is 80%).
async function maskable(size, file) {
  const inner = Math.round(size * 0.6);
  const icon = await sharp(logo, { density: 384 }).resize(inner, inner).png().toBuffer();
  await sharp({ create: { width: size, height: size, channels: 4, background: BG } })
    .composite([{ input: icon, gravity: "centre" }])
    .png()
    .toFile(path.join(out, file));
}

await plain(192, "icon-192.png");
await plain(512, "icon-512.png");
await maskable(512, "icon-maskable-512.png");
await plain(180, "apple-touch-icon.png");
// Next.js picks up src/app/icon.png as the favicon automatically.
await plain(512, path.relative(out, path.join(root, "src/app/icon.png")));
console.log("icons generated");
