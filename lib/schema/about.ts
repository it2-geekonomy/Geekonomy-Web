import { getSchemaBaseUrl, orgId } from "./constants";

export function buildAboutJsonLd() {
  const base = getSchemaBaseUrl();

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${base}/about#webpage`,
        url: `${base}/about`,
        name: "About Geekonomy - Our Story",
        description:
          "Learn about Geekonomy's mission and approach to building growth systems",
        publisher: { "@type": "Organization", "@id": orgId(base) },
      },
      {
        "@type": "Organization",
        "@id": `${base}/about#organization-details`,
        name: "Geekonomy",
        description:
          "Geekonomy is a growth systems company that partners with businesses to create structure, clarity and momentum in how they grow.",
        foundingDate: "2020",
        founder: {
          "@type": "Person",
          name: "Arjun Sindhia",
        },
        foundingLocation: {
          "@type": "Place",
          name: "Bengaluru, India",
        },
        url: base,
        logo: `${base}/assets/geekonomy-logo.png`,
        sameAs: [
          "https://www.facebook.com/thegeekonomy",
          "https://www.instagram.com/thegeekonomy",
          "https://x.com/TheGeekonomy",
          "https://www.linkedin.com/company/thegeekonomy/",
        ],
        knowsAbout: [
          "Branding Strategy",
          "Digital Marketing",
          "Web Development",
          "Growth Systems",
          "Business Strategy",
        ],
      },
    ],
  };
}
