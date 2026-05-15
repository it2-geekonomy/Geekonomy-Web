import type { CaseStudy } from "@/types";
import { getSchemaBaseUrl, orgId } from "./constants";

export function buildCaseStudyPageJsonLd(
  post: CaseStudy,
  categorySlug: string
) {
  const base = getSchemaBaseUrl();
  const org = orgId(base);
  const url = `${base}/case-studies/${categorySlug}/${post.slug}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: `${post.title} - Case Study | Geekonomy`,
        description: post.subtitle,
        publisher: { "@type": "Organization", "@id": org },
      },
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: post.title,
        name: post.title,
        description: post.subtitle,
        ...(post.image ? { image: [post.image] } : {}),
        author: { "@type": "Organization", name: "Geekonomy" },
        publisher: { "@type": "Organization", "@id": org },
        articleBody: post.subtitle,
      },
    ],
  };
}
