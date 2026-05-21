/**
 * Generates favicon set from public/logo/vext-symbol.png
 * White symbol on solid black — optimized for 16×16 tab clarity.
 * Run: npm run favicons
 */
import { writeFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import toIco from "to-ico";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const publicDir = join(root, "public");
const source = join(publicDir, "logo", "vext-symbol.png");

const BLACK = { r: 0, g: 0, b: 0 };

/** Inner logo scale — balanced padding so the mark stays sharp in 16px tabs */
const LOGO_SCALE = {
  16: 0.72,
  32: 0.76,
  180: 0.78,
  192: 0.78,
  512: 0.8,
};

function scaleFor(size) {
  return LOGO_SCALE[size] ?? 0.78;
}

/**
 * Renders the white VEXT symbol centered on #000 with controlled padding.
 */
async function renderIcon(size) {
  const inner = Math.max(8, Math.round(size * scaleFor(size)));
  const sharpen =
    size <= 16
      ? { sigma: 1.1, m1: 1.2, m2: 0.35 }
      : size <= 32
        ? { sigma: 0.65, m1: 0.9, m2: 0.25 }
        : { sigma: 0.35, m1: 0.5, m2: 0.15 };

  const logo = await sharp(source)
    .ensureAlpha()
    .resize(inner, inner, {
      fit: "contain",
      position: "centre",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
      kernel: size <= 32 ? sharp.kernel.lanczos3 : sharp.kernel.lanczos3,
    })
    .flatten({ background: BLACK })
    .sharpen(sharpen)
    .png()
    .toBuffer();

  return sharp({
    create: {
      width: size,
      height: size,
      channels: 3,
      background: BLACK,
    },
  })
    .composite([{ input: logo, gravity: "centre" }])
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toBuffer();
}

const outputs = [
  { name: "favicon-16x16.png", size: 16 },
  { name: "favicon-32x32.png", size: 32 },
  { name: "apple-touch-icon.png", size: 180 },
  { name: "icon-192.png", size: 192 },
  { name: "icon-512.png", size: 512 },
];

const icoLayers = [];

for (const { name, size } of outputs) {
  const buffer = await renderIcon(size);
  await writeFile(join(publicDir, name), buffer);
  console.log(`Wrote ${name}`);
  if (size === 16 || size === 32) {
    icoLayers.push(buffer);
  }
}

const faviconIco = await toIco(icoLayers);
await writeFile(join(publicDir, "favicon.ico"), faviconIco);
console.log("Wrote favicon.ico (16×16 + 32×32)");
