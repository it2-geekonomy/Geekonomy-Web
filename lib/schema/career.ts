import { getSchemaBaseUrl, orgId } from "./constants";

/** Careers page: WebPage only (no fabricated JobPosting listings). */
export function buildCareerJsonLd() {
  const base = getSchemaBaseUrl();

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${base}/careers#webpage`,
        url: `${base}/careers`,
        name: "Careers at Geekonomy",
        description:
          "Join our team and help us build amazing brands and digital systems.",
        publisher: { "@type": "Organization", "@id": orgId(base) },
      },
    ],
  };
}
