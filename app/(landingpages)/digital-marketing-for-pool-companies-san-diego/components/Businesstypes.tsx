import { Typography } from "@/components/ui/Typography";

const types = [
  {
    label: "Pool Cleaning",
    image: "https://pub-67a4c50822e240c78b2f040321a1da26.r2.dev/landing-pages/poolcleaning.png",
    title: "Pool Cleaning Companies",
    desc: "Create a consistent pipeline of homeowners looking for trustworthy pool cleaning and maintenance services. Focus on Local SEO, Google Business Profile optimization, paid search, review collection, and conversion-optimized service pages to bring in customers needing regular pool maintenance.",
  },
  {
    label: "Maintenance",
    image: "https://pub-67a4c50822e240c78b2f040321a1da26.r2.dev/landing-pages/poolmaintainance.png",
    title: "Pool Maintenance Companies",
    desc: "Present a solution to meet homeowners’ needs for reliable recurring maintenance, equipment checks, water treatment, and seasonal pool services. Use marketing campaigns with local search engine optimization, landing pages for specific services, reviews, and lead generation campaigns.",
  },
  {
    label: "Repair",
    image: "https://pub-67a4c50822e240c78b2f040321a1da26.r2.dev/landing-pages/poolrepair.png",
    title: "Pool Repair Companies",
    desc: "Target high- intent searches from all customers with leaks, pumps, filters, heaters, plumbing issues, and any other pool-related problem. A carefully targeted SEO and PPC campaign will put your business in front of customers looking for your product or service now.",
  },
  {
    label: "Remodeling",
    image: "https://pub-67a4c50822e240c78b2f040321a1da26.r2.dev/landing-pages/poolremodeling.png",
    title: "Pool Remodeling Companies",
    desc: "Remodeling your pools is a large expense, so most customers will do their homework on contractors, designs, materials, costs, and previous project references before choosing. Content marketing, project-specific landing pages, image galleries, local SEO, and advertising can drive qualified remodeling leads.",
  },
  {
    label: "Pool Builders",
    image: "https://pub-67a4c50822e240c78b2f040321a1da26.r2.dev/landing-pages/poolbuilders.png",
    title: "Pool Builders",
    desc: "New pool construction necessitates an extended customer journey and an extremely high-value lead. This can fund campaigns based on pool installation inquiries, design pointers, financing queries, project costing, and location-based inquiries, complemented by conversion-based landing pages to convert that fresh interest into consultations.",
  },
  {
    label: "Resurfacing",
    image: "https://pub-67a4c50822e240c78b2f040321a1da26.r2.dev/landing-pages/poolresurfacing.png",
    title: "Pool Resurfacing Companies",
    desc: "Reach homeowners searching for replastering, resurfacing, tile replacement, finishes, and pool renovation areas. Services pages targeted on high-intent search campaigns can get your company in front of searchers ready to undertake a resurfacing project.",
  },
  {
    label: "Commercial",
    image: "https://pub-67a4c50822e240c78b2f040321a1da26.r2.dev/landing-pages/commercialservices.png",
    title: "Commercial Pool Services",
    desc: "Commercial clients have different needs than residential clients. You can use marketing efforts toward managers of properties, hotels, rental communities, gyms, schools, or other businesses with pools that need professional care and regulatory compliance.",
  },
  {
    label: "Equipment",
    image: "https://pub-67a4c50822e240c78b2f040321a1da26.r2.dev/landing-pages/equipment.png",
    title: "Pool Equipment & Installation Companies",
    desc: "Target customers in need of pool pumps, filters, heaters, automation systems, saltwater systems, lighting, or replacement equipment. Targeted service-specific SEO and paid campaigns can help capture demand from customers who are looking to upgrade or repair equipment.",
  },
];

export default function BusinessTypes() {
  return (
    <section id="types" className="bg-white/[0.02] py-6 lg:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-4xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
            <Typography variant="overline" className="text-white/80">
              TAILORED BY BUSINESS TYPE
            </Typography>
          </div>
          <Typography
            variant="display-xl"
            as="h2"
            className="text-white text-2xl sm:text-4xl lg:text-5xl leading-[1.1]"
          >
            Marketing Strategies for Different Types of Pool Businesses
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
            Not all pool companies have the same marketing needs. Some may be targeting different types of pool customers. For instance, a pool cleaning business might target one-time, recurring maintenance clients, but a pool builder or remodeler needs to build a strong, consistent flow of large, high-dollar project leads.
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
            Geekonomy can develop targeted campaigns based on the services you provide, your target customers, your area of operation, and your growth goals.          </Typography>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {types.map(({ label, image, title, desc }) => (
            <div
              key={title}
              className="w-[380px] max-w-full mx-auto md:w-auto md:mx-0 rounded-[20px] border border-white/10 bg-white/[0.03] p-6 transition-all hover:-translate-y-1.5 hover:border-[#69AE44]/40"
            >
              <div className="mb-4 overflow-hidden rounded-[14px] border border-white/10 bg-white/[0.03]">
                <img
                  src={image}
                  alt={title}
                  className="aspect-[16/10] w-full object-cover object-top"
                />
              </div>
              <Typography variant="h3" as="h3" className="mb-2 text-white font-semibold">
                {title}
              </Typography>
              <Typography variant="body-lg" className="leading-relaxed text-white/90">
                {desc}
              </Typography>
            </div>
          ))}
        </div>
        <Typography variant="body-xl" className="mt-10 max-w-7xl leading-relaxed text-white font-semibold">
        Regardless of whether it’s residential work that keeps coming back or high-dollar-value pool builds that you want to emphasize in your marketing efforts, they should be centered on the customers and services that matter the most.
      </Typography>
      </div>
    </section>
  );
}