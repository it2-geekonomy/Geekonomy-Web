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

/** Guide-aligned Article fields keyed by case study slug. */
const GUIDE_ARTICLE: Record<
  string,
  {
    name: string;
    description: string;
    imagePath: string;
    datePublished: string;
    articleBody: string;
    aboutName: string;
  }
> = {
  "divyasree-builders": {
    name: "DivyaSree Builders Case Study",
    description:
      "How we helped DivyaSree Builders establish digital presence and brand clarity",
    imagePath: "/assets/divyasree-case-study.png",
    datePublished: "2024-01-15",
    articleBody:
      "Case study describing how Geekonomy helped DivyaSree Builders enhance their brand strategy...",
    aboutName: "DivyaSree Builders",
  },
  "musashi-delta": {
    name: "Musashi Delta Case Study",
    description: "Branding and design project for Musashi",
    imagePath: "/assets/musashi-case-study.png",
    datePublished: "2024-02-20",
    articleBody: "Case study describing branding work for Musashi...",
    aboutName: "Musashi",
  },
  "hindustan-power": {
    name: "Hindustan Power Case Study",
    description: "Web development and digital systems for Hindustan Power",
    imagePath: "/assets/hindustan-power-case-study.png",
    datePublished: "2024-03-10",
    articleBody:
      "Case study describing development work for Hindustan Power...",
    aboutName: "Hindustan Power",
  },
  "vst-group": {
    name: "VST Group Case Study",
    description: "Complete digital transformation for VST Group",
    imagePath: "/assets/vst-group-case-study.png",
    datePublished: "2024-04-15",
    articleBody:
      "Case study describing transformation work for VST Group...",
    aboutName: "VST Group",
  },
};

export function buildSuccessLabJsonLd() {
  const base = getSchemaBaseUrl();
  const org = orgId(base);

  const articles = caseStudies
    .filter((cs) => INCLUDED.has(cs.slug))
    .map((cs) => {
      const categorySlug = slugify(cs.category[0] || "case-study");
      const url = `${base}/case-studies/${categorySlug}/${cs.slug}`;
      const g = GUIDE_ARTICLE[cs.slug];
      return {
        "@type": "Article",
        "@id": `${url}#article`,
        name: g.name,
        description: g.description,
        image: `${base}${g.imagePath}`,
        author: { "@type": "Organization", name: "Geekonomy" },
        publisher: { "@type": "Organization", "@id": org },
        datePublished: g.datePublished,
        articleBody: g.articleBody,
        about: { "@type": "Organization", name: g.aboutName },
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
          "Explore our case studies and success stories across multiple industries",
        publisher: { "@type": "Organization", "@id": org },
      },
      {
        "@type": "CollectionPage",
        "@id": `${base}/success-lab#collection`,
        name: "Success Lab - Case Studies",
        description: "Collection of successful brand and development projects",
      },
      ...articles,
    ],
  };
}
