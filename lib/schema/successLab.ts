import { caseStudies } from "@/lib/case-studies/data";
import { getSchemaBaseUrl, orgId } from "./constants";

function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const INCLUDED = new Set([
  "divyasree-builders",
  "musashi-delta",
  "hindustan-power",
  "vst-group",
]);

export function buildSuccessLabJsonLd() {
  const base = getSchemaBaseUrl();
  const org = orgId(base);

  const articles = caseStudies
    .filter((cs) => INCLUDED.has(cs.slug))
    .map((cs) => {
      const categorySlug = slugify(cs.category[0] || "case-study");
      const url = `${base}/case-studies/${categorySlug}/${cs.slug}`;
      return {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: `${cs.title} - Case Study`,
        name: cs.title,
        description: cs.subtitle,
        image: cs.image,
        author: { "@type": "Organization", name: "Geekonomy" },
        publisher: { "@type": "Organization", "@id": org },
        articleBody: cs.subtitle,
      };
    });

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${base}/success-lab#webpage`,
        url: `${base}/success-lab`,
        name: "Success Lab - Case Studies",
        description:
          "Explore our case studies and success stories across multiple industries.",
        publisher: { "@type": "Organization", "@id": org },
      },
      {
        "@type": "CollectionPage",
        "@id": `${base}/success-lab#collection`,
        name: "Success Lab - Case Studies",
        description: "Collection of successful brand and development projects.",
        isPartOf: { "@type": "WebPage", "@id": `${base}/success-lab#webpage` },
      },
      ...articles,
    ],
  };
}
