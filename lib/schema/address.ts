import { getSchemaBaseUrl } from "./constants";

/** Structured address aligned with site footer / contact. */
export function getPostalAddress() {
  return {
    "@type": "PostalAddress",
    streetAddress:
      "No. 1357, Ground Floor, 9th Cross, ITI Layout, JP Nagar 1st Phase",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    postalCode: "560078",
    addressCountry: "IN",
  };
}

export function logoImageObject() {
  const base = getSchemaBaseUrl();
  return {
    "@type": "ImageObject",
    url: `${base}/Logo.png`,
    width: 300,
    height: 100,
  };
}

export const SAME_AS = [
  "https://www.facebook.com/thegeekonomy",
  "https://www.instagram.com/thegeekonomy",
  "https://x.com/TheGeekonomy",
  "https://www.linkedin.com/company/thegeekonomy/",
] as const;
