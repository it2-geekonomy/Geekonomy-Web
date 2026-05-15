import { getPostalAddress } from "./address";
import { getSchemaBaseUrl, orgId } from "./constants";

export function buildCareerJsonLd() {
  const base = getSchemaBaseUrl();
  const org = orgId(base);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${base}/career#webpage`,
        url: `${base}/career`,
        name: "Careers at Geekonomy",
        description:
          "Join our team and help us build amazing brands and digital systems",
        publisher: { "@type": "Organization", "@id": org },
      },
      {
        "@type": "JobPosting",
        "@id": `${base}/career#job-designer`,
        title: "UI/UX Designer",
        description:
          "We're looking for a talented UI/UX Designer to join our CodeCraft team",
        datePosted: "2026-03-01",
        validThrough: "2026-06-01",
        employmentType: "FULL_TIME",
        hiringOrganization: { "@type": "Organization", "@id": org },
        jobLocation: {
          "@type": "Place",
          address: getPostalAddress(),
        },
        baseSalary: {
          "@type": "PriceSpecification",
          priceCurrency: "INR",
          price: "50000-80000",
          priceComponentType: "https://schema.org/UnitPriceSpecification",
        },
      },
    ],
  };
}
