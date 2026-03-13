/**
 * Generates lib/blog/slugToFilePath.json by scanning blog data files and extracting slug.
 * Run before build (prebuild) so server can resolve slug → file path for mtime.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataDir = path.join(__dirname, "..", "lib", "blog", "data");
const outPath = path.join(__dirname, "..", "lib", "blog", "slugToFilePath.json");

const slugRe = /slug:\s*["']([^"']+)["']/;

const out: Record<string, string> = {};
const files = fs.readdirSync(dataDir).filter((f) => f.endsWith(".ts"));

for (const file of files) {
  const fullPath = path.join(dataDir, file);
  const content = fs.readFileSync(fullPath, "utf-8");
  const m = content.match(slugRe);
  if (m) {
    const slug = m[1];
    out[slug] = path.join("lib", "blog", "data", file).replace(/\\/g, "/");
  }
}

fs.writeFileSync(outPath, JSON.stringify(out, null, 2));
