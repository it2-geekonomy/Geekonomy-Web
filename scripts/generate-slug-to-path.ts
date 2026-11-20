/**
 * Records each blog's source path and the last commit that changed it (in UTC).
 */
import { execFileSync } from "node:child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dataDir = path.join(rootDir, "lib", "blog", "data");
const outPath = path.join(rootDir, "lib", "blog", "slugToFilePath.json");

function git(...args: string[]): string {
  return execFileSync("git", ["--literal-pathspecs", ...args], { cwd: rootDir, encoding: "utf8" });
}

const committedFiles = new Set(git("ls-tree", "-rz", "--name-only", "HEAD", "--", "lib/blog/data").split("\0"));
const logArgs = ["log", "-1", "--no-show-signature", "--format=%cI"];
if (git("rev-parse", "--is-shallow-repository").trim() === "true") {
  // Git treats the oldest available commit as if it created every file in its tree.
  logArgs.push("--min-parents=1");
}

function lastCommittedDate(filePath: string): string | null {
  if (!committedFiles.has(filePath)) return null;
  const date = git(...logArgs, "--", filePath).trim();
  if (!date) {
    throw new Error(`Missing Git history for ${filePath}. Fetch the full history and rerun the generator.`);
  }
  return new Date(date).toISOString();
}

const slugRe = /slug:\s*["']([^"']+)["']/;
const out: Record<string, { filePath: string; lastModified: string | null }> = {};
const files = fs.readdirSync(dataDir).filter((f) => f.endsWith(".ts")).sort();

for (const file of files) {
  const fullPath = path.join(dataDir, file);
  const content = fs.readFileSync(fullPath, "utf-8");
  const m = content.match(slugRe);
  if (m) {
    const slug = m[1];
    const filePath = `lib/blog/data/${file}`;
    out[slug] = {
      filePath,
      lastModified: lastCommittedDate(filePath),
    };
  }
}

fs.writeFileSync(outPath, JSON.stringify(out, null, 2));
