/**
 * Author mapping for blog posts
 * Maps blog slugs to their respective authors
 */

import { BLOG_AUTHOR_MAP } from "./blogAuthorMap";
import type { AuthorName } from "./blogAuthorMap";
import { BLOG_PUBLISHED_DATES } from "./blogPublishedDates";
import { BLOG_UPDATED_DATES } from "./blogUpdatedDates";

export { BLOG_AUTHOR_MAP, BLOG_PUBLISHED_DATES, BLOG_UPDATED_DATES };
export type { AuthorName };

export interface AuthorInfo {
  name: AuthorName;
  role: string;
  image: string;
  mainImage?: string;
  /**
   * Short SEO-friendly description (used for meta description)
   */
  metaDescription?: string;
  biography?: string;
}

export const AUTHOR_INFO: Record<AuthorName, AuthorInfo> = {
  "Rahul Dutta": {
    name: "Rahul Dutta",
    role: "SEO STRATEGIST",
    image: "/author/Rahul author.webp",
    mainImage: "/author/Rahul main.webp",
    metaDescription:
      "Rahul Dutta is an SEO Strategist at Geekonomy specializing in semantic SEO, technical audits, and strategies that grow organic traffic and qualified leads.",
    biography: "An SEO Strategist At Geekonomy Specializing In Semantic SEO, Technical Audits, And Search-Focused Content Strategy. He Helps Businesses Across The USA, UK, And India Improve Search Rankings, Grow Organic Traffic, And Generate Qualified Leads Through Structured, Data-Driven SEO Frameworks.<br/><br/>His Strategies Have Helped Brands Achieve Up To 3X Organic Traffic Growth And Secure Top-Page Rankings For Competitive Keywords. At Geekonomy, Rahul Shares Actionable Insights On SEO Trends, Search Algorithms, And Performance-Driven Digital Marketing Strategies Designed For Global Markets.",
  },
  "Aaron Roshan": {
    name: "Aaron Roshan",
    role: "CONTENT WRITER",
    image: "/author/Aaron author.webp",
    mainImage: "/author/Aaron main.webp",
    metaDescription:
      "Aaron Roshan is a content writer at Geekonomy who creates clear, research-driven articles on branding, digital marketing, web development, and growth.",
    biography: "A Content Writer At Geekonomy Who Focuses On Creating Clear, Practical, And Research-Driven Articles About Branding, Digital Marketing, Web Development, And Business Growth. His Work Helps Startups And Businesses Understand Complex Digital Concepts In Simple Terms And Apply Them To Improve Their Online Presence. Aaron Regularly Contributes To Geekonomy's Blog With Guides, Industry Insights, And Actionable Strategies For Modern Businesses.",
  },
};

/**
 * Get author info for a blog slug
 */
export function getAuthorForBlog(slug: string): AuthorInfo {
  const authorName = BLOG_AUTHOR_MAP[slug] || "Rahul Dutta"; // Default to Rahul Dutta
  return AUTHOR_INFO[authorName];
}

interface BlogDate {
  label: string;
  iso: string;
}

export interface BlogDates {
  published?: BlogDate;
  updated?: BlogDate;
}

const editorialDateFormat = new Intl.DateTimeFormat("en-US", {
  dateStyle: "long",
  timeZone: "UTC",
});

function toBlogDate(date: Date): BlogDate | undefined {
  if (Number.isNaN(date.getTime())) return undefined;
  return { label: editorialDateFormat.format(date), iso: date.toISOString().slice(0, 10) };
}

function parseEditorialDate(label?: string): BlogDate | undefined {
  if (!label) return undefined;
  const date = toBlogDate(new Date(`${label} UTC`));
  return date?.label === label ? date : undefined;
}

export function getBlogDates(slug: string): BlogDates {
  return {
    published: parseEditorialDate(BLOG_PUBLISHED_DATES[slug]),
    updated: parseEditorialDate(BLOG_UPDATED_DATES[slug]),
  };
}

export function getBlogBylineDates(
  { published, updated }: BlogDates,
  lastModified?: string | null,
): BlogDates {
  const updateDate = updated ?? (lastModified ? toBlogDate(new Date(lastModified)) : undefined);
  return { published, updated: updateDate?.iso === published?.iso ? undefined : updateDate };
}

/**
 * Convert author name to URL slug
 * Example: "Rahul Dutta" -> "rahul-dutta"
 */
export function getAuthorSlug(authorName: AuthorName): string {
  return authorName.toLowerCase().replace(/\s+/g, "-");
}

/**
 * Get author info by slug
 */
export function getAuthorBySlug(slug: string): AuthorInfo | null {
  const authorName = Object.keys(AUTHOR_INFO).find(
    (name) => getAuthorSlug(name as AuthorName) === slug
  ) as AuthorName | undefined;

  if (authorName) {
    return AUTHOR_INFO[authorName];
  }
  return null;
}

/**
 * Get all blog slugs for an author
 */
export function getBlogsByAuthor(authorName: AuthorName): string[] {
  return Object.entries(BLOG_AUTHOR_MAP)
    .filter(([_, author]) => author === authorName)
    .map(([slug]) => slug);
}
