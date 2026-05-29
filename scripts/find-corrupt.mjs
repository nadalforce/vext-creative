import fs from "fs";
import path from "path";

const ROOT = path.resolve(import.meta.dirname, "..");
const DIRS = ["components", "app", "lib"];

function walk(dir, acc = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      if (!["node_modules", ".git", ".next"].includes(ent.name)) walk(p, acc);
    } else if (/\.(tsx?|jsx?)$/.test(ent.name)) acc.push(p);
  }
  return acc;
}

const bad = [];
for (const d of DIRS) {
  for (const file of walk(path.join(ROOT, d))) {
    const s = fs.readFileSync(file, "utf8");
    if (s.includes("\uFFFD") || /[^\x00-\x7F][\u0080-\u009F]/.test(s)) {
      bad.push(path.relative(ROOT, file));
      continue;
    }
    // Windows-1252 misread: common broken patterns
    if (/[ÃÄÅâ€™]/.test(s) && !/utf-8/i.test(s)) bad.push(path.relative(ROOT, file));
    if (/\u00fd|\u00fe/.test(s) && file.includes("About")) bad.push(path.relative(ROOT, file));
    // literal replacement in display - check for isolated 0xFFFD
    const buf = fs.readFileSync(file);
    if (buf.includes(0xef) && buf.includes(0xbf) && buf.includes(0xbd)) {
      const idx = buf.indexOf(0xef);
      if (buf[idx] === 0xef && buf[idx + 1] === 0xbf && buf[idx + 2] === 0xbd)
        bad.push(path.relative(ROOT, file) + " (U+FFFD)");
    }
  }
}

// Also find files with 0xFD 0xF6 as lone bytes (invalid utf8) - already valid check
const latin1 = [];
for (const d of DIRS) {
  for (const file of walk(path.join(ROOT, d))) {
    const buf = fs.readFileSync(file);
    let i = 0;
    while (i < buf.length) {
      const b = buf[i];
      if (b < 0x80) {
        i++;
        continue;
      }
      if ((b & 0xe0) === 0xc0 && i + 1 < buf.length && (buf[i + 1] & 0xc0) === 0x80) {
        i += 2;
        continue;
      }
      if ((b & 0xf0) === 0xe0 && i + 2 < buf.length) {
        i += 3;
        continue;
      }
      if ((b & 0xf8) === 0xf0 && i + 3 < buf.length) {
        i += 4;
        continue;
      }
      if (b >= 0x80 && b <= 0xff) {
        latin1.push({ file: path.relative(ROOT, file), byte: b, i });
        break;
      }
      i++;
    }
  }
}

console.log("U+FFFD:", [...new Set(bad)]);
console.log("invalid lone bytes:", latin1);
