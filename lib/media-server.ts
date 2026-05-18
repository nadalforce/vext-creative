import fs from "fs";
import path from "path";

const MEDIA_ROOT = path.join(process.cwd(), "public", "media");
const IMAGE_EXT = /\.(jpe?g|png|webp|avif)$/i;

export type MediaCategory =
  | "video-prod"
  | "post-prod"
  | "grafik"
  | "marka"
  | "web"
  | "sosyal-medya"
  | "ofis"
  | "genel";

export function getMediaByCategory(category: MediaCategory): string[] {
  const dir = path.join(MEDIA_ROOT, category);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => IMAGE_EXT.test(file))
    .sort((a, b) => a.localeCompare(b, "tr"))
    .map((file) => `/media/${category}/${file}`);
}

export function getAllCollageMedia(): string[] {
  if (!fs.existsSync(MEDIA_ROOT)) return [];

  const paths: string[] = [];
  for (const entry of fs.readdirSync(MEDIA_ROOT)) {
    const full = path.join(MEDIA_ROOT, entry);
    if (!fs.statSync(full).isDirectory()) continue;
    paths.push(...getMediaByCategory(entry as MediaCategory));
  }

  return paths;
}
