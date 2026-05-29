/**
 * Repairs source files corrupted by non-UTF-8 bulk replace (Latin-1 / CP1252 bytes).
 */
import fs from "fs";
import path from "path";

const ROOT = path.resolve(import.meta.dirname, "..");
const DIRS = ["components", "app", "lib"];

/** Windows-1252 bytes 0x80–0xFF → Unicode */
const CP1252 = {
  0x80: "\u20AC",
  0x82: "\u201A",
  0x83: "\u0192",
  0x84: "\u201E",
  0x85: "\u2026",
  0x86: "\u2020",
  0x87: "\u2021",
  0x88: "\u02C6",
  0x89: "\u2030",
  0x8a: "\u0160",
  0x8b: "\u2039",
  0x8c: "\u0152",
  0x8e: "\u017D",
  0x91: "\u2018",
  0x92: "\u2019",
  0x93: "\u201C",
  0x94: "\u201D",
  0x95: "\u2022",
  0x96: "\u2013",
  0x97: "\u2014",
  0x98: "\u02DC",
  0x99: "\u2122",
  0x9a: "\u0161",
  0x9b: "\u203A",
  0x9c: "\u0153",
  0x9e: "\u017E",
  0x9f: "\u0178",
  0xa0: "\u00A0",
  // Turkish (ISO-8859-9 style in corrupted files)
  0xd0: "\u011E", // Ğ
  0xdc: "\u00DC", // Ü
  0xde: "\u015E", // Ş
  0xf0: "\u011F", // ğ
  0xf6: "\u00F6", // ö
  0xfc: "\u00FC", // ü
  0xfd: "\u0131", // ı
  0xfe: "\u015F", // ş
};

function utf8Len(buf, i) {
  const b = buf[i];
  if (b < 0x80) return 1;
  if ((b & 0xe0) === 0xc0 && i + 1 < buf.length && (buf[i + 1] & 0xc0) === 0x80)
    return 2;
  if ((b & 0xf0) === 0xe0 && i + 2 < buf.length) {
    if ((buf[i + 1] & 0xc0) === 0x80 && (buf[i + 2] & 0xc0) === 0x80) return 3;
  }
  if ((b & 0xf8) === 0xf0 && i + 3 < buf.length) {
    if (
      (buf[i + 1] & 0xc0) === 0x80 &&
      (buf[i + 2] & 0xc0) === 0x80 &&
      (buf[i + 3] & 0xc0) === 0x80
    )
      return 4;
  }
  return 0;
}

function isValidUtf8(buf) {
  let i = 0;
  while (i < buf.length) {
    const len = utf8Len(buf, i);
    if (len === 0) return false;
    i += len;
  }
  return true;
}

function repairBuffer(buf) {
  let out = "";
  let i = 0;
  while (i < buf.length) {
    const len = utf8Len(buf, i);
    if (len > 0) {
      out += buf.subarray(i, i + len).toString("utf8");
      i += len;
      continue;
    }
    const b = buf[i];
    out += CP1252[b] ?? String.fromCharCode(b);
    i += 1;
  }
  return out;
}

function walk(dir, acc = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      if (!["node_modules", ".git", ".next"].includes(ent.name)) walk(p, acc);
    } else if (/\.(tsx?|jsx?|css|mjs)$/.test(ent.name)) {
      acc.push(p);
    }
  }
  return acc;
}

const files = DIRS.flatMap((d) => walk(path.join(ROOT, d)));
let fixed = 0;

for (const file of files) {
  const buf = fs.readFileSync(file);
  if (isValidUtf8(buf)) continue;

  const repaired = repairBuffer(buf);
  fs.writeFileSync(file, repaired, "utf8");
  console.log("fixed:", path.relative(ROOT, file));
  fixed += 1;
}

console.log(fixed ? `Done. ${fixed} file(s) repaired.` : "All files valid UTF-8.");
