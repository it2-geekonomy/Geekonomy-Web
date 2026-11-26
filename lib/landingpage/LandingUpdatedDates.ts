
export const LANDING_UPDATED_DATES: Record<string, string> = {
  "branding-company-in-bangalore": "November 5, 2026",
  "carlsbad-seo-company": "November 14, 2026",
  "charlotte-ppc-agency": "November 14, 2026",
  "digital-marketing-agency-guwahati": "November 5, 2026",
  "digital-marketing-agency-ocean-springs-ms": "November 14, 2026",
  "digital-marketing-company-in-ghaziabad": "November 5, 2026",
  "digital-marketing-company-in-jaipur": "November 20, 2026",
  "digital-marketing-company-in-madurai": "November 20, 2026",
  "digital-marketing-company-jp-nagar-bangalore": "November 14, 2026",
  "digital-marketing-for-logistics-companies": "November 25, 2026",
  "digital-marketing-for-paving-companies": "November 25, 2026",
  "digital-marketing-for-pool-companies-san-diego": "November 14, 2026",
  "digital-marketing-for-window-and-door-companies": "November 25, 2026",
  "seo-company-atascocita-texas": "November 22, 2026",
  "seo-company-auburn-alabama": "November 6, 2026",
  "seo-company-bee-cave-texas": "November 22, 2026",
  "seo-company-bexley-ohio": "November 20, 2026",
  "seo-company-boynton-beach-fl": "November 14, 2026",
  "seo-company-brentwood-california": "November 6, 2026",
  "seo-company-calabasas-ca": "November 6, 2026",
  "seo-company-camarillo-ca": "November 22, 2026",
  "seo-company-carmel-indiana": "November 14, 2026",
  "seo-company-casselberry-florida": "November 22, 2026",
  "seo-company-castle-rock-colorado": "November 25, 2026",
  "seo-company-chapel-hill-nc": "November 14, 2026",
  "seo-company-chesterfield-uk": "November 20, 2026",
  "seo-company-columbia-mo": "November 14, 2026",
  "seo-company-davis-ca": "November 6, 2026",
  "seo-company-downey-ca": "November 6, 2026",
  "seo-company-downingtown-pennsylvania": "November 25, 2026",
  "seo-company-el-granada-ca": "November 25, 2026",
  "seo-company-enfield-connecticut": "November 14, 2026",
  "seo-company-fort-walton-beach-fl": "November 14, 2026",
  "seo-company-frederick-maryland": "November 14, 2026",
  "seo-company-fresno-texas": "November 22, 2026",
  "seo-company-georgetown-texas": "November 22, 2026",
  "seo-company-gettysburg-pennsylvania": "November 20, 2026",
  "seo-company-hampton-roads-virginia": "November 26, 2026",
  "seo-company-henderson-nv": "November 14, 2026",
  "seo-company-hervey-bay-queensland-australia": "November 25, 2026",
  "seo-company-in-andover-minnesota": "November 14, 2026",
  "seo-company-in-apopka-fl": "November 14, 2026",
  "seo-company-in-coral-springs-fl": "November 14, 2026",
  "seo-company-in-fredericksburg-virginia": "November 26, 2026",
  "seo-company-in-jp-nagar-bangalore": "November 5, 2026",
  "seo-company-in-pompano-beach-fl": "November 14, 2026",
  "seo-company-kyle-texas": "November 22, 2026",
  "seo-company-lakewood-ranch-fl": "November 14, 2026",
  "seo-company-league-city-tx": "November 22, 2026",
  "seo-company-lichfield-uk": "November 26, 2026",
  "seo-company-lynchburg-virginia": "November 26, 2026",
  "seo-company-mentor-oh": "November 14, 2026",
  "seo-company-miramar-florida": "November 14, 2026",
  "seo-company-moreno-valley-ca": "November 23, 2026",
  "seo-company-murrieta-ca": "November 6, 2026",
  "seo-company-orange-beach-al": "November 6, 2026",
  "seo-company-palm-harbor-fl": "November 14, 2026",
  "seo-company-pooler-georgia": "November 26, 2026",
  "seo-company-redmond-washington": "November 26, 2026",
  "seo-company-rock-hill-sc": "November 14, 2026",
  "seo-company-rocky-river-ohio": "November 14, 2026",
  "seo-company-secane-pennsylvania": "November 26, 2026",
  "seo-company-st-ives-cornwall-uk": "November 5, 2026",
  "seo-company-st-joseph-mo": "November 14, 2026",
  "seo-company-stuart-florida": "November 14, 2026",
  "seo-company-tomball-texas": "November 22, 2026",
  "seo-company-waco-tx": "November 22, 2026",
  "seo-company-winchester-virginia": "November 26, 2026",
  "seo-company-winter-springs-fl": "November 14, 2026",
  "seo-company-woodstock-georgia": "November 25, 2026",
  "seo-company-yorba-linda-ca": "November 6, 2026"
};

export function getLandingUpdatedDate(slug: string): {
  label: string;
  iso: string;
} {
  const label = LANDING_UPDATED_DATES[slug];
  if (!label) {
    throw new Error(`Missing updated date for landing page /${slug}.`);
  }

  const date = new Date(`${label} UTC`);
  if (Number.isNaN(date.getTime())) {
    throw new Error(`Invalid updated date for landing page /${slug}: ${label}.`);
  }

  return { label, iso: date.toISOString() };
}
