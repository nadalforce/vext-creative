import fs from "fs";
import path from "path";

const ROOT = path.resolve(import.meta.dirname, "..");
const DIRS = ["components", "app", "lib"];

function walk(dir, acc = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      if (!["node_modules", ".git", ".next"].includes(ent.name)) walk(p, acc);
    } else if (/\.(tsx?|jsx?|md|json|css)$/.test(ent.name)) acc.push(p);
  }
  return acc;
}

const suspects = [];
const patterns = [
  /\uFFFD/,
  /Ã§|Ã‡|ÄŸ|Äž|Ä±|Ä°|Ã¶|Ã–|ÅŸ|Åž|Ã¼|Ãœ/,
  /ï¿½/,
  /\bG.rsel\b/,
  /bulunamad[^ı]/,
  /—|–/,
];

for (const d of DIRS) {
  for (const file of walk(path.join(ROOT, d))) {
    const s = fs.readFileSync(file, "utf8");
    for (const re of patterns) {
      if (re.test(s)) {
        const m = s.match(re);
        suspects.push({ file: path.relative(ROOT, file), match: m[0] });
        break;
      }
    }
    // lone high bytes in string when read as latin1 mis-decode
    if (/[\x80-\x9f]/.test(s)) {
      suspects.push({ file: path.relative(ROOT, file), match: "control/high ascii" });
    }
  }
}

console.log(JSON.stringify(suspects, null, 2));
