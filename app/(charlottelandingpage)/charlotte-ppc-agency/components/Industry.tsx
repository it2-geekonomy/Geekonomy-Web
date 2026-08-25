import { Typography } from "@/components/ui/Typography";

const types = [
  {
    label: "Home Services",
    image: "https://pub-67a4c50822e240c78b2f040321a1da26.r2.dev/landing-pages/home-service.png",
    title: "Home Services",
    desc: "Target the reach education segment: homes of interest to advertisers (New homeowners, looking to improve their home, or more. Show target reach homeowners searching for contractors such as plumbers, HVAC, Roofing, Landscaping, remodeling, and many other home improvement providers.",
  },
  {
    label: "Healthcare",
    image: "https://pub-67a4c50822e240c78b2f040321a1da26.r2.dev/landing-pages/helthcare.png",
    title: "Healthcare",
    desc: "Engage healthcare professionals and consumers by matching them to appropriate treatments, providers, and services and by directing campaigns towards qualified inquiries and appointments.",
  },
  {
    label: "Legal Services",
    image: "https://pub-67a4c50822e240c78b2f040321a1da26.r2.dev/landing-pages/legalservice.png",
    title: "Legal Services",
    desc: "Connect users conducting high-intent searches to the appropriate practice area, location, and conversion-optimized landing page. Target search terms associated with legal services.",
  },
  {
    label: "Real Estate",
    image: "https://pub-67a4c50822e240c78b2f040321a1da26.r2.dev/landing-pages/realstate.png",
    title: "Real Estate",
    desc: "Target paid search campaigns to reach local buyers, sellers, investors, and property-related inquiries by property type, by property purpose, and by real estate transaction type.",
  },
  {
    label: "Professional Services",
    image: "https://pub-67a4c50822e240c78b2f040321a1da26.r2.dev/landing-pages/professionalservice.png",
    title: "Professional Services",
    desc: "Generate qualified leads by making searches that are highly commercialized for consultants, financial services, agencies, business services, and other similar professional companies.",
  },
  {
    label: "Ecommerce",
    image: "https://pub-67a4c50822e240c78b2f040321a1da26.r2.dev/landing-pages/ecommerce.png",
    title: "Ecommerce",
    desc: "Advertisements should be targeted at the shoppers who are actively searching (planning to buy). Advertising campaigns can be optimized based on the product's “impressions”, “transaction”, “revenue”, or “ad spend return”.",
  },
  {
    label: "B2B",
    image: "https://pub-67a4c50822e240c78b2f040321a1da26.r2.dev/landing-pages/B2B.png",
    title: "B2B",
    desc: "B2B targets these businesses and decision-makers who are looking for a specific product or service. B2B PPC campaigns can target valuable commercial keywords and track specific lead-generation conversions.",
  },
  {
    label: "Local Businesses",
    image: "https://pub-67a4c50822e240c78b2f040321a1da26.r2.dev/landing-pages/localbussiness.png",
    title: "Local Businesses",
    desc: "Target customers in Charlotte and the local service area who are searching for relevant products and services. Location targeting and local search intent help to keep your ads relevant to the right audiences.",
  },
];

export default function Industry() {
  return (
    <section id="types" className="bg-white/[0.02] py-6 lg:py-10 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-4xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
            <Typography variant="overline" className="text-white/80">
              BY INDUSTRY
            </Typography>
          </div>
          <Typography
            variant="display-xl"
            as="h2"
            className="text-white text-2xl sm:text-4xl lg:text-5xl leading-[1.1]"
          >
            PPC for Charlotte Businesses
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
            Various sectors possess different buyers, purchasing behaviors, search patterns, and other criteria. Geekonomy focuses on how your customers search and the factors that are significant to your business.
          </Typography>

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
                //   src={typeof image === "string" ? image : image.src}
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
      </div>
    </section>
  );
}