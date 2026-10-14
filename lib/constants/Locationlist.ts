export type Region = "florida" | "california" | "texas" ;

export type Location = {
  name: string;
  slug: string;
  region: Region;
};

export const LOCATION_BASE_URL = "https://thegeekonomy.com";
export const getLocationUrl = (slug: string) => `${LOCATION_BASE_URL}/${slug}`;

export const REGION_TITLES: Record<Region, string> = {
  florida: "Explore Our SEO Services Across Florida",
  california: "Explore Our SEO Services Across California",
  texas: "Explore Our SEO Services Texas",
};

export const LOCATIONS: Location[] = [
  // Display Florida Landing Pages
  { region: "florida", name: "Fort Walton Beach", slug: "seo-company-fort-walton-beach-fl" },
  { region: "florida", name: "Palm Harbor", slug: "seo-company-palm-harbor-fl" },
  { region: "florida", name: "Coral Springs", slug: "seo-company-in-coral-springs-fl" },
  { region: "florida", name: "Lakewood Ranch", slug: "seo-company-lakewood-ranch-fl" },
  { region: "florida", name: "Pompano Beach", slug: "seo-company-in-pompano-beach-fl" },
  { region: "florida", name: "Apopka", slug: "seo-company-in-apopka-fl" },
  { region: "florida", name: "Boynton Beach", slug: "seo-company-boynton-beach-fl" },
  { region: "florida", name: "Casselberry", slug: "seo-company-casselberry-florida" },
  { region: "florida", name: "Stuart", slug: "seo-company-stuart-florida" },
  { region: "florida", name: "Stuart", slug: "seo-company-miramar-florida" },


  // Display Califonia Landing Pages
  { region: "california", name: "Calabasas", slug: "seo-company-calabasas-ca" },




];