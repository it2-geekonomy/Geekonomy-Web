export type Location = {
  name: string;
  slug: string;
};

export const LOCATION_BASE_URL = "https://thegeekonomy.com";

export const getLocationUrl = (slug: string) => `${LOCATION_BASE_URL}/${slug}`;

export const LOCATIONS: Location[] = [
  { name: "Fort Walton Beach", slug: "seo-company-fort-walton-beach-fl" },
  { name: "Palm Harbor", slug: "seo-company-palm-harbor-fl" },
  { name: "Coral Springs", slug: "seo-company-in-coral-springs-fl" },
  { name: "Lakewood Ranch", slug: "seo-company-lakewood-ranch-fl" },
  { name: "Pompano Beach", slug: "seo-company-in-pompano-beach-fl" },
  { name: "Apopka", slug: "seo-company-in-apopka-fl" },
  { name: "Boynton Beach", slug: "seo-company-boynton-beach-fl" },
  { name: "Casselberry", slug: "seo-company-casselberry-florida" },
  { name: "Stuart", slug: "seo-company-stuart-florida" },

];