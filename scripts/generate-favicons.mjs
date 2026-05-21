/**
 * Generates favicon set from public/logo/vext-symbol.png
 * Run: node scripts/generate-favicons.mjs
 */
import { readFile, writeFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const publicDir = join(root, "public");
const source = join(publicDir, "logo", "vext-symbol.png");

const sizes = [
  { name: "favicon-16x16.png", size: 16 },
  { name: "favicon-32x32.png", size: 32 },
  { name: "apple-touch-icon.png", size: 180 },
  { name: "android-chrome-192x192.png", size: 192 },
  { name: "android-chrome-512x512.png", size: 512 },
];

const input = await readFile(source);

for (const { name, size } of sizes) {
  const out = join(publicDir, name);
  await sharp(input)
    .resize(size, size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(out);
  console.log(`Wrote ${name}`);
}

const favicon32 = await sharp(input).resize(32, 32).png().toBuffer();
await writeFile(join(publicDir, "favicon.ico"), favicon32);
console.log("Wrote favicon.ico");
