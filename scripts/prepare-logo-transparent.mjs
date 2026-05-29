/**
 * Builds transparent trimmed wordmark for header/footer.
 * White/near-white → alpha 0; keeps black square, symbol, and text.
 */
import sharp from "sharp";
import path from "path";
import fs from "fs";

const ROOT = path.resolve(import.meta.dirname, "..");
const OUT = path.join(ROOT, "public/logo/vext-transparent.png");
const ASSETS =
  "C:/Users/PC/.cursor/projects/c-Users-PC-Desktop-web-sitelerim-vext-creative/assets";

const sources = [
  `${ASSETS}/c__Users_PC_AppData_Roaming_Cursor_User_workspaceStorage_5d12ed429913c72d779bdff4b4a57882_images_ChatGPT_Image_27_May_2026_02_50_56-ac696204-9373-478f-9ca3-0d35bc26d8c4.png`,
  `${ASSETS}/c__Users_PC_AppData_Roaming_Cursor_User_workspaceStorage_5d12ed429913c72d779bdff4b4a57882_images_logo-yeni-82ddd89c-a8b5-4d76-9d79-b8a7fe2d6759.png`,
];

const src = sources.find((p) => fs.existsSync(p));
if (!src) {
  console.error("No source logo found");
  process.exit(1);
}

const WHITE_THRESH = 248;

const { data, info } = await sharp(src)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height, channels } = info;
const out = Buffer.from(data);

for (let i = 0; i < out.length; i += channels) {
  const r = out[i];
  const g = out[i + 1];
  const b = out[i + 2];
  if (r >= WHITE_THRESH && g >= WHITE_THRESH && b >= WHITE_THRESH) {
    out[i + 3] = 0;
  } else {
    out[i + 3] = 255;
  }
}

const tmp = path.join(ROOT, "public/logo/vext-transparent-tmp.png");
await sharp(out, { raw: { width, height, channels } }).png().toFile(tmp);

const trimmed = await sharp(tmp).trim({ threshold: 1 }).png().toBuffer();
fs.unlinkSync(tmp);

await sharp(trimmed).png({ compressionLevel: 9 }).toFile(OUT);

const meta = await sharp(OUT).metadata();
console.log("Source:", path.basename(src));
console.log("Output:", OUT, `${meta.width}x${meta.height}`);
