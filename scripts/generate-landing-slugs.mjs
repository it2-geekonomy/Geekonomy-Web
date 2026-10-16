import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.join(__dirname, "..");
const LANDING_DIR = path.join(ROOT_DIR, "app", "(landingpages)");
const OUT_FILE = path.join(ROOT_DIR, "lib", "landingpage", "landingpageslug.json");

/**
 * Recursively scans app/(landingpages) to find all folders containing page.tsx.
 * The folder name is the URL slug.
 */
function getLandingSlugs(dir) {
  const slugs = [];
  if (!fs.existsSync(dir)) return slugs;

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      // Skip route params like [slug] and sub-pages like thank-you
      if (entry.name.startsWith("[") || entry.name === "thank-you") {
        continue;
      }

      // If this directory contains a page.tsx, its name is a landing page slug
      const hasPage = fs.existsSync(path.join(fullPath, "page.tsx"));
      if (hasPage) {
        slugs.push(entry.name);
      }

      // Continue searching subdirectories (e.g. route groups like (USA), (texas), etc.)
      slugs.push(...getLandingSlugs(fullPath));
    }
  }

  return slugs;
}

export function generateLandingSlugs() {
  const slugs = Array.from(new Set(getLandingSlugs(LANDING_DIR))).sort();
  fs.writeFileSync(OUT_FILE, JSON.stringify(slugs, null, 2) + "\n", "utf-8");
  return slugs;
}

// Execute when run directly
generateLandingSlugs();
