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
          "Learn about Geekonomy's mission and approach to building growth systems.",
        publisher: { "@type": "Organization", "@id": orgId(base) },
      },
      {
        "@type": "Organization",
        "@id": `${base}/about#organization-details`,
        name: "Geekonomy",
        description:
          "Geekonomy is a growth systems company that partners with businesses to create structure, clarity and momentum in how they grow. We believe growth is not achieved through isolated efforts, but through well-built systems that work together over time.",
        foundingDate: "2015",
        foundingLocation: {
          "@type": "Place",
          name: "Bengaluru, India",
        },
        url: base,
        logo: `${base}/Logo.png`,
        knowsAbout: [
          "Branding Strategy",
          "Digital Marketing",
          "Web Development",
          "Growth Systems",
          "Business Strategy",
        ],
        image: {
          "@type": "ImageObject",
          url: `${base}/assets/og-about.jpg`,
        },
      },
    ],
  };
}
