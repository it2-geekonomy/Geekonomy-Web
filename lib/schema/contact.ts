import { getPostalAddress } from "./address";
import { getSchemaBaseUrl, orgId } from "./constants";

export function buildContactJsonLd() {
  const base = getSchemaBaseUrl();

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${base}/contact-us#webpage`,
        url: `${base}/contact-us`,
        name: "Contact Us - Geekonomy",
        description:
          "Get in touch with Geekonomy to start a conversation about your growth",
        publisher: { "@type": "Organization", "@id": orgId(base) },
      },
      {
        "@type": "LocalBusiness",
        "@id": `${base}/contact-us#local-business`,
        name: "Geekonomy",
        description:
          "Digital agency offering branding, web development, and marketing services",
        url: base,
        telephone: "+91-9900005968",
        email: "hello@thegeekonomy.com",
        address: getPostalAddress(),
        geo: {
          "@type": "GeoCoordinates",
          latitude: "12.910929",
          longitude: "77.577966",
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "18:00",
        },
      },
    ],
  };
}
