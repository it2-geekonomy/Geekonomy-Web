import { getPostalAddress, logoImageObject, SAME_AS } from "./address";
import { getSchemaBaseUrl, orgId, websiteId } from "./constants";

const HOME_DESC =
  "From branding and digital marketing to full-stack development, Geekonomy builds unforgettable brand legacies powered by research, design, and code.";

/** Homepage @graph per site guide (WebSite has no SearchAction / potentialAction). */
export function buildHomePageJsonLd() {
  const base = getSchemaBaseUrl();
  const org = orgId(base);
  const web = websiteId(base);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": org,
        name: "Geekonomy",
        alternateName: "The Geekonomy",
        url: base,
        logo: logoImageObject(),
        description: HOME_DESC,
        foundingDate: "2020",
        sameAs: [...SAME_AS],
        address: getPostalAddress(),
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "Sales",
          telephone: "+91-99000 05968",
          url: `${base}/contact-us`,
        },
        areaServed: [
          { "@type": "City", name: "Bengaluru" },
          { "@type": "Country", name: "India" },
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": `${base}/#local-business`,
        name: "Geekonomy",
        image: `${base}/assets/geekonomy-logo.png`,
        description:
          "Digital agency offering branding, web development, and marketing services",
        url: base,
        address: getPostalAddress(),
        priceRange: "$$",
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "18:00",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "12.910929",
          longitude: "77.577966",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          reviewCount: "25",
          bestRating: "5",
          worstRating: "1",
        },
      },
      {
        "@type": "WebSite",
        "@id": web,
        url: base,
        name: "Geekonomy",
        description: "Branding, Marketing & Development Services",
        publisher: { "@id": org },
      },
      {
        "@type": "WebPage",
        "@id": `${base}/#webpage`,
        url: base,
        name: "Geekonomy | Branding, Marketing & Development",
        description: HOME_DESC,
        isPartOf: { "@id": web },
        publisher: { "@id": org },
        mainEntity: { "@id": org },
        image: {
          "@type": "ImageObject",
          url: `${base}/assets/og-home.jpg`,
          width: 1200,
          height: 630,
        },
      },
    ],
  };
}
