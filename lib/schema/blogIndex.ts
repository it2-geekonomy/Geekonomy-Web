import { getSchemaBaseUrl, orgId } from "./constants";

export function buildBlogIndexJsonLd() {
  const base = getSchemaBaseUrl();

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${base}/blog#webpage`,
        url: `${base}/blog`,
        name: "Geekonomy Blog - Insights on Branding & Marketing",
        description:
          "Read our latest articles on branding, digital marketing, web development, and business growth.",
        publisher: { "@type": "Organization", "@id": orgId(base) },
      },
      {
        "@type": "Blog",
        "@id": `${base}/blog#blog`,
        name: "Geekonomy Insights",
        description:
          "Regular insights and guides on branding, marketing, and digital strategy.",
        publisher: { "@type": "Organization", "@id": orgId(base) },
      },
    ],
  };
}
