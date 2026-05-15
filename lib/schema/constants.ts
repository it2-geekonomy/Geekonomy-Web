/** Production origin for JSON-LD @id and absolute URLs. */
export function getSchemaBaseUrl(): string {
  return process.env.NEXT_PUBLIC_BASE_URL || "https://thegeekonomy.com";
}

export const ORG_ID_SUFFIX = "#organization";
export const WEBSITE_ID_SUFFIX = "#website";

export function orgId(base = getSchemaBaseUrl()) {
  return `${base}${ORG_ID_SUFFIX}`;
}

export function websiteId(base = getSchemaBaseUrl()) {
  return `${base}${WEBSITE_ID_SUFFIX}`;
}
