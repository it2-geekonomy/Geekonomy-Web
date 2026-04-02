/**
 * Server-only: may use fs for blog file mtime as a published-date fallback. Import only from server components.
 * "Updated On : " is shown only when the slug has an entry in BLOG_UPDATED_DATES (never from file mtime).
 */
import fs from "fs";
import path from "path";
import {
  BLOG_PUBLISHED_DATES,
  BLOG_UPDATED_DATES,
  type BlogDateDisplayLabel,
} from "./authorMapping";

export type DateInfo = {
  date: string;
  label: BlogDateDisplayLabel;
  publishedDate: string;
  updatedDate: string | null;
};

function formatDate(d: Date): string {
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

let slugToFilePath: Record<string, string> | null = null;

function getSlugToFilePath(): Record<string, string> {
  if (slugToFilePath) return slugToFilePath;
  const jsonPath = path.join(process.cwd(), "lib", "blog", "slugToFilePath.json");
  try {
    slugToFilePath = JSON.parse(fs.readFileSync(jsonPath, "utf-8")) as Record<string, string>;
  } catch {
    slugToFilePath = {};
  }
  return slugToFilePath;
}

/**
 * Returns date info. Call from server only.
 * - "Updated On : " only if BLOG_UPDATED_DATES[slug] is set.
 * - Otherwise "Published On : " using BLOG_PUBLISHED_DATES, else file mtime, else today.
 */
export function getDateInfoServer(slug: string): DateInfo {
  const map = getSlugToFilePath();
  const relativePath = map[slug];
  const publishedOverride = BLOG_PUBLISHED_DATES[slug];
  const updatedOverride = BLOG_UPDATED_DATES[slug];

  let fileMtime: Date | null = null;
  if (relativePath) {
    try {
      const fullPath = path.join(process.cwd(), relativePath);
      const stat = fs.statSync(fullPath);
      fileMtime = stat.mtime;
    } catch {
      // file missing or not readable
    }
  }

  const formattedMtime = fileMtime ? formatDate(fileMtime) : null;
  const publishedDate = publishedOverride ?? formattedMtime ?? formatDate(new Date());

  if (updatedOverride) {
    return {
      date: updatedOverride,
      label: "Updated On : ",
      publishedDate,
      updatedDate: updatedOverride,
    };
  }

  return {
    date: publishedDate,
    label: "Published On : ",
    publishedDate,
    updatedDate: null,
  };
}
