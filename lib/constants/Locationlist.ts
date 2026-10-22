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
  { region: "florida", name: "Miramar", slug: "seo-company-miramar-florida" },
  { region: "florida", name: "Winter Springs", slug: "seo-company-winter-springs-fl" },


  // Display Califonia Landing Pages
  { region: "california", name: "Calabasas", slug: "seo-company-calabasas-ca" },
  { region: "california", name: "Brentwood", slug: "seo-company-brentwood-california" },
  { region: "california", name: "Davis", slug: "seo-company-davis-ca" },
  { region: "california", name: "Downey", slug: "seo-company-downey-ca" },
  { region: "california", name: "Murrieta", slug: "seo-company-murrieta-ca" },
  { region: "california", name: "Yorba Linda", slug: "seo-company-yorba-linda-ca" },


  // Display Texas Landing Pages
  { region: "texas", name: "Atascocita", slug: "seo-company-atascocita-texas" },
  { region: "texas", name: "Bee Cave", slug: "seo-company-bee-cave-texas" },
  { region: "texas", name: "Fresno", slug: "seo-company-fresno-texas" },
  { region: "texas", name: "Georgetown", slug: "seo-company-georgetown-texas" },
  { region: "texas", name: "Kyle", slug: "seo-company-kyle-texas" },
  { region: "texas", name: "League City", slug: "seo-company-league-city-tx" },
  { region: "texas", name: "Tomball", slug: "seo-company-tomball-texas" },
  { region: "texas", name: "Waco", slug: "seo-company-waco-tx" },


];