import fs from "fs";
import path from "path";
import { pathToFileURL, fileURLToPath } from "url";
import { execFileSync } from "node:child_process";

/**
 * Finds landing-page folders, including pages nested in route groups.
 */
function getLandingPageFiles(dir, rootDir) {
  const pages = [];
  if (!fs.existsSync(dir)) return pages;

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      // Skip route params like [slug] and sub-pages like thank-you
      if (entry.name.startsWith("[") || entry.name === "thank-you") {
        continue;
      }

      const pageFile = path.join(fullPath, "page.tsx");
      if (fs.existsSync(pageFile)) {
        const relativePath = path.relative(rootDir, fullPath).split(path.sep).join("/");
        pages.push([entry.name, relativePath]);
      }

      // Continue searching subdirectories (e.g. route groups like (USA), (texas), etc.)
      pages.push(...getLandingPageFiles(fullPath, rootDir));
    }
  }

  return pages;
}

function git(rootDir, args) {
  try {
    return execFileSync("git", ["--no-optional-locks", ...args], {
      cwd: rootDir, encoding: "utf8", stdio: ["ignore", "pipe", "ignore"],
    });
  } catch {
    return "";
  }
}

// A deleted file's parent directory records the removal time.
function changeTime(rootDir, file) {
  let current = path.join(rootDir, file);
  while (current !== rootDir) {
    const stat = fs.lstatSync(current, { throwIfNoEntry: false });
    if (stat) return stat.mtime.getTime();
    current = path.dirname(current);
  }
  return fs.statSync(rootDir).mtime.getTime();
}

export function generateLandingPageIndex(rootDir) {
  const outFile = path.join(rootDir, "lib", "landingpage", "landingpageslug.json");
  const pages = getLandingPageFiles(path.join(rootDir, "app", "(landingpages)"), rootDir);
  pages.sort(([firstSlug], [secondSlug]) => firstSlug.localeCompare(secondSlug));
  const existing = fs.existsSync(outFile) ? fs.readFileSync(outFile, "utf8") : "{}";
  const previous = JSON.parse(existing);
  const status = git(rootDir, ["status", "--porcelain=v1", "-z", "--no-renames", "--untracked-files=all", "--", "app/(landingpages)"]);
  const changedFiles = status.split("\0").filter(Boolean).map(entry => entry.slice(3));
  const shallow = git(rootDir, ["rev-parse", "--is-shallow-repository"]).trim() === "true";
  // A shallow boundary has no available parent to establish which files changed.
  const historyArgs = ["log", "-1", "--no-show-signature", "--format=%cI"];
  if (shallow) historyArgs.push("--min-parents=1");
  const pagesBySlug = Object.create(null);
  for (const [slug, directory] of pages) {
    const edits = changedFiles.filter(file => file.startsWith(directory + "/"));
    let lastModified;
    if (edits.length) {
      lastModified = new Date(Math.max(...edits.map(file => changeTime(rootDir, file)))).toISOString();
    } else {
      const date = git(rootDir, [...historyArgs, "--", directory]).trim();
      lastModified = date ? new Date(date).toISOString() : previous[slug]?.lastModified;
    }
    lastModified ??= fs.statSync(path.join(rootDir, directory, "page.tsx")).mtime.toISOString();
    pagesBySlug[slug] = { directory, lastModified };
  }
  const json = JSON.stringify(pagesBySlug, null, 2) + "\n";
  if (json !== existing) fs.writeFileSync(outFile, json);
  return pagesBySlug;
}

export function generateLandingSlugs() {
  const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
  return Object.keys(generateLandingPageIndex(rootDir));
}

if (process.argv[1] && pathToFileURL(process.argv[1]).href === import.meta.url) generateLandingSlugs();
