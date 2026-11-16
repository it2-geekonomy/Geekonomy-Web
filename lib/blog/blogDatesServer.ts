/**
 * Server-only: reads blog file modification times for the sitemap and as a published-date fallback.
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

export function getBlogFileLastModified(slug: string): Date | undefined {
  const relativePath = getSlugToFilePath()[slug];
  if (!relativePath) return undefined;

  try {
    return fs.statSync(path.join(process.cwd(), relativePath)).mtime;
  } catch {
    return undefined;
  }
}

/**
 * Returns date info. Call from server only.
 * - "Updated On : " only if BLOG_UPDATED_DATES[slug] is set.
 * - Otherwise "Published On : " using BLOG_PUBLISHED_DATES, else file mtime, else today.
 */
export function getDateInfoServer(slug: string): DateInfo {
  const publishedOverride = BLOG_PUBLISHED_DATES[slug];
  const updatedOverride = BLOG_UPDATED_DATES[slug];
  const publishedDate = publishedOverride ?? formatDate(getBlogFileLastModified(slug) ?? new Date());

  if (updatedOverride) {
    return {
      date: updatedOverride.replace(" UTC", ""),
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
