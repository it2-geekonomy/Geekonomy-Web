import { getSchemaBaseUrl, orgId, websiteId } from "./constants";
import { getPostalAddress } from "./address";

const BRANDFOUNDRY_IMG =
  "https://pub-67a4c50822e240c78b2f040321a1da26.r2.dev/7f8f4a5d-faee-4b4a-8ee7-cde842a8ddeb-Geekonomy%20Pillar%20Logos%20white-03.png";
const CODECRAFT_IMG =
  "https://pub-67a4c50822e240c78b2f040321a1da26.r2.dev/bbef6d8e-166b-4ba9-aaaa-abbdb8131a74-Geekonomy%20Pillar%20Logos%20white-04.png";
const DIGI360_IMG =
  "https://pub-67a4c50822e240c78b2f040321a1da26.r2.dev/55571d7d-238d-4fe1-ba5d-0ae6b99042fa-Geekonomy%20Pillar%20Logos%20white-05.png";

function serviceBlock(
  idHash: string,
  name: string,
  description: string,
  serviceType: string,
  image: string
) {
  const base = getSchemaBaseUrl();
  return {
    "@type": "Service",
    "@id": `${base}/what-we-do${idHash}`,
    name,
    description,
    provider: { "@type": "Organization", "@id": orgId(base) },
    areaServed: [
      { "@type": "City", name: "Bengaluru" },
      { "@type": "Country", name: "India" },
    ],
    serviceType,
    image,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/OnDemand",
      priceCurrency: "INR",
    },
  };
}

export function buildWhatWeDoJsonLd() {
  const base = getSchemaBaseUrl();
  const web = websiteId(base);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${base}/what-we-do#webpage`,
        url: `${base}/what-we-do`,
        name: "What We Do - Geekonomy",
        description:
          "Explore our three core service pillars: BrandFoundry, CodeCraft, and Digi360.",
        publisher: { "@type": "Organization", "@id": orgId(base) },
        isPartOf: { "@id": web },
      },
      serviceBlock(
        "#brandfoundry",
        "BrandFoundry",
        "We help businesses define how they should be seen, understood and remembered before a single design decision is made.",
        "Brand Strategy",
        BRANDFOUNDRY_IMG
      ),
      serviceBlock(
        "#codecraft",
        "CodeCraft",
        "We design and build websites, applications and custom systems engineered for performance, scalability and longevity.",
        "Web Development",
        CODECRAFT_IMG
      ),
      serviceBlock(
        "#digi360",
        "Digi360",
        "We create focused growth strategies that prioritise meaningful outcomes over vanity metrics.",
        "Digital Marketing",
        DIGI360_IMG
      ),
    ],
  };
}
