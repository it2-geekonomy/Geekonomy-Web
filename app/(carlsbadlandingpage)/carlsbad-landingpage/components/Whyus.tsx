import {
  MapPin,
  Target,
  Network,
  Wrench,
  MousePointerClick,
  Sparkles,
} from "lucide-react";
import { Typography } from "@/components/ui/Typography";

const items = [
  {
    icon: Target,
    title: "Strategy Built Around Search Intent",
    desc: "We discover what users truly want to achieve with their search; then we help your pages meet information, commerce, and transactional needs, increasing the chance your site turns visitors into buyers.",
  },
  {
    icon: MapPin,
    title: "Local SEO Expertise",
    desc: "Carlsbad searches. Customers in your area are likely to be looking for local businesses. We enhance your signals for local search across your website, Google Places, and other business listings, making you more visible for relevant Carlsbad and neighboring service searches.",
  },
  {
    icon: Network,
    title: "Semantic SEO Approach",
    desc: "We create linkages between topics, entities, services, locations, and search intent rather than optimizing pages around keywords by themselves. This provides a bigger thematic relevance and guides the search engines to understand what exactly your business does.",
  },
  {
    icon: Wrench,
    title: "Technical & Content Expertise",
    desc: "Top rankings demand a healthy website and valuable content. Geekonomy provides a more comprehensive foundation by integrating technical SEO, on-page optimization, content, and link-building strategies.",
  },
  {
    icon: MousePointerClick,
    title: "Built for Conversions",
    desc: "Traffic is just one aspect of SEO. We concentrate on drawing users who are relevant to your business to your site and then prepare the site in such a way as to bring some value back from the visitor, whether that be a phone call, a form fill, a consultation, a purchase, or some other goal.",
  },
  {
    icon: Sparkles,
    title: "Prepared for AI-Powered Search",
    desc: "The way people search is changing via AI Overviews and other AI-led discovery experiences. We organize content and amplify brand and entity signals so modern search systems better understand your business.",
  },
];

export default function WhyUs() {
  return (
    <section id="why" className="bg-black py-6 lg:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-5xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
            <Typography variant="overline" className="text-white/80">
              WHY GEEKONOMY
            </Typography>
          </div>
          <Typography
            variant="display-xl"
            as="h2"
            className="text-white text-2xl sm:text-4xl lg:text-5xl leading-tight"
          >
            Why Choose Geekonomy as Your Carlsbad SEO Company?
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
          SEO isn’t just about ranking at the top of the search results and getting more impressions and rankings. Geekonomy develops search strategies aligned with your business objectives, customers, competitive environment, and revenue opportunities so that organic visibility has a purpose          </Typography>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="w-[380px] max-w-full mx-auto md:w-auto md:mx-0 rounded-[20px] border border-white/10 bg-white/[0.03] p-7 transition-all hover:-translate-y-1 hover:border-[#69AE44]/40 hover:bg-white/[0.05]"
            >
              <div className="mb-4 flex h-9 w-9 sm:h-12 sm:w-12 items-center justify-center rounded-[13px] bg-[#69AE44]/10 text-[#69AE44]">
                <Icon className="h-4.5 w-4.5 sm:h-6 sm:w-6" strokeWidth={1.8} />
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
        <Typography variant="body-xl" className="mt-7 leading-relaxed text-white/90">
        Eager to enhance your search visibility in Carlsbad? Receive a tailor-made SEO plan from Geekonomy.
        </Typography>
      </div>
    </section>
  );
}