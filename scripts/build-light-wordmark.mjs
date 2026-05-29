/**
 * Light-theme wordmark: preserves left symbol; right band → dark text on #FAFAF8.
 * Source must include the full wordmark (white text on dark band).
 */
import sharp from "sharp";
import path from "path";
import fs from "fs";

const ROOT = path.resolve(import.meta.dirname, "..");
const OUT = path.join(ROOT, "public/logo/vext-transparent.png");
const TMP = path.join(ROOT, "public/logo/vext-transparent-next.png");
const SPLIT_X_RATIO = 0.42;
const TEXT_LUM = 128;
const BG = { r: 250, g: 250, b: 248 };
const INK = { r: 17, g: 17, b: 17 };

const userAsset = path.join(
  ROOT,
  "assets/c__Users_PC_AppData_Roaming_Cursor_User_workspaceStorage_5d12ed429913c72d779bdff4b4a57882_images_logo-yeni-0ec04375-b3b4-4c8d-8132-62a31a9496a5.png"
);
const fullWordmark = path.join(ROOT, "public/logo/vext-transparent.png");

async function countRightBright(src) {
  const { data, info } = await sharp(src).raw().toBuffer({ resolveWithObject: true });
  const splitX = Math.floor(info.width * SPLIT_X_RATIO);
  let n = 0;
  for (let y = 0; y < info.height; y++) {
    for (let x = splitX; x < info.width; x++) {
      const i = (y * info.width + x) * info.channels;
      if ((data[i] + data[i + 1] + data[i + 2]) / 3 > TEXT_LUM) n++;
    }
  }
  return n;
}

let source = fs.existsSync(userAsset) ? userAsset : fullWordmark;
if (fs.existsSync(userAsset)) {
  const bright = await countRightBright(userAsset);
  if (bright < 500) {
    console.warn("User logo missing text band; using full wordmark source.");
    source = fs.existsSync(fullWordmark)
      ? fullWordmark
      : path.join(ROOT, "public/logo/vext-transparent.png");
  }
}

const { data, info } = await sharp(source)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height, channels } = info;
const splitX = Math.floor(width * SPLIT_X_RATIO);
const out = Buffer.from(data);

for (let y = 0; y < height; y++) {
  for (let x = splitX; x < width; x++) {
    const i = (y * width + x) * channels;
    const lum = (out[i] + out[i + 1] + out[i + 2]) / 3;
    if (lum > TEXT_LUM) {
      out[i] = INK.r;
      out[i + 1] = INK.g;
      out[i + 2] = INK.b;
    } else {
      out[i] = BG.r;
      out[i + 1] = BG.g;
      out[i + 2] = BG.b;
    }
    if (channels === 4) out[i + 3] = 255;
  }
}

await sharp(out, { raw: { width, height, channels } })
  .png({ compressionLevel: 9 })
  .toFile(TMP);

fs.renameSync(TMP, OUT);
console.log("Built light wordmark →", OUT);
