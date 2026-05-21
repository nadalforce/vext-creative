/**
 * Generates favicon set from public/logo/vext-hero-watermark.png
 * Run: npm run favicons
 */
import { unlink } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const publicDir = join(root, "public");
const source = join(publicDir, "logo", "vext-hero-watermark.png");

const BLACK = { r: 0, g: 0, b: 0 };

/** Logo centered on solid black — matches site premium tab look */
function resizeIcon(size) {
  return sharp(source).resize(size, size, {
    fit: "contain",
    position: "centre",
    background: { ...BLACK, alpha: 1 },
  }).flatten({ background: BLACK });
}

const outputs = [
  { name: "favicon-32x32.png", size: 32 },
  { name: "apple-touch-icon.png", size: 180 },
  { name: "icon-192.png", size: 192 },
  { name: "icon-512.png", size: 512 },
];

for (const { name, size } of outputs) {
  await resizeIcon(size).png().toFile(join(publicDir, name));
  console.log(`Wrote ${name}`);
}

await resizeIcon(32).png().toFile(join(publicDir, "favicon.ico"));
console.log("Wrote favicon.ico");

const legacy = [
  "favicon-16x16.png",
  "android-chrome-192x192.png",
  "android-chrome-512x512.png",
];

for (const file of legacy) {
  try {
    await unlink(join(publicDir, file));
    console.log(`Removed legacy ${file}`);
  } catch {
    /* already absent */
  }
}
