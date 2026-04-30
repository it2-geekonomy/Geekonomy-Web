/**
 * Use this for every internal link to a blog post so hrefs never drift from real slugs.
 * Example: <a href={blogPostHref("seo-for-plumbers-proven-techniques-to-rank")}>
 */
export function blogPostHref(slug: string): `/blog/${string}` {
  return `/blog/${slug}`;
}
