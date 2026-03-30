/**
 * Server-only: uses fs to get blog file mtime. Import only from server components.
 * Shows "Updated On : " when file was modified after published date; otherwise "Published On : ".
 */
import fs from "fs";
import path from "path";
import { BLOG_PUBLISHED_DATES, type BlogDateDisplayLabel } from "./authorMapping";

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

function parseDisplayDate(s: string): Date {
  const parsed = new Date(s);
  if (!isNaN(parsed.getTime())) return parsed;
  const parts = s.match(/(\w+)\s+(\d+),\s+(\d+)/);
  if (parts) {
    const [, month, day, year] = parts;
    const d = new Date(`${month} ${day}, ${year}`);
    if (!isNaN(d.getTime())) return d;
  }
  return new Date(0);
}

/** End of the given date (23:59:59.999) so we only show "Updated" when file was modified on a *later* day. */
function endOfDay(dateStr: string): Date {
  const d = parseDisplayDate(dateStr);
  const end = new Date(d);
  end.setHours(23, 59, 59, 999);
  return end;
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
 * Returns date info using file mtime. Call from server only.
 * - Show "Updated On : " only when you set a publish date in BLOG_PUBLISHED_DATES and the file was edited after that.
 * - Otherwise show "Published On : " (file mtime or manual publish date).
 */
export function getDateInfoServer(slug: string): DateInfo {
  const map = getSlugToFilePath();
  const relativePath = map[slug];
  const publishedOverride = BLOG_PUBLISHED_DATES[slug];

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

  // Only show "Updated" when file was modified on a *later day* than the publish date (not same day)
  const showUpdated =
    publishedOverride != null &&
    fileMtime != null &&
    fileMtime.getTime() > endOfDay(publishedOverride).getTime();

  if (showUpdated && formattedMtime) {
    return {
      date: formattedMtime,
      label: "Updated On : ",
      publishedDate: publishedOverride!,
      updatedDate: formattedMtime,
    };
  }

  return {
    date: publishedDate,
    label: "Published On : ",
    publishedDate,
    updatedDate: null,
  };
}
