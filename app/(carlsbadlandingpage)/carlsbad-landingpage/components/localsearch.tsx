import {
  Building2,
  MapPinned,
  FileText,
  BadgeCheck,
  Star,
} from "lucide-react";
import { Typography } from "@/components/ui/Typography";

const items = [
  {
    icon: Building2,
    title: "Google Business Profile Optimization",
    desc: "Your google Business profile. Your GBP is an essential local search asset. We optimize your business information, categories, services, descriptions, and other signals to build local relevance so that users can find your business more easily.",
  },
  {
    icon: MapPinned,
    title: "Local Search & Google Maps Visibility",
    desc: "We optimize your website and local listings so that they rank for local searches with a service or product combined with a place. This involves implementing measures that enhance exposure for searches for Carlsbad and related “near me” terms.",
  },
  {
    icon: FileText,
    title: "Location-Relevant Content",
    desc: "Your location and product should be immediately evident on your site. We generate naturally occurring location-specific content that conveys your service offerings aligning to Carlsbad and nearby areas without keyword spamming.",
  },
  {
    icon: BadgeCheck,
    title: "Local Citations & Business Signals",
    desc: "Having consistent business information throughout the relevant directories, local sources, and other media will strengthen your business identity. We ensure your name, address, phone, website, and category details are accurate across all your citation sources.",
  },
  {
    icon: Star,
    title: "Reviews & Local Trust",
    desc: "Customer reviews can impact local ranking as well as purchasing decisions. We assist in integrating reputation and review factors into your general local SEO campaign and establish trust with potential clients.",
  },
];

export default function WhyUs() {
  return (
    <section id="why" className="bg-black py-6 lg:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-5xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
            <Typography variant="overline" className="text-white/80 uppercase">
              Local Search
            </Typography>
          </div>
          <Typography
            variant="display-xl"
            as="h2"
            className="text-white text-2xl sm:text-4xl lg:text-5xl leading-tight"
          >
            Get Found by Customers Searching in Carlsbad
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
          When potential customers search for a service in Carlsbad, they’ll tend to look for a business that’s local, related, and trustworthy. Geekonomy’s Carlsbad local SEO services help your business appear for these high-intent local searches on Google Search and Google Maps.          </Typography>
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
        The objective is not necessarily to rank for “Carlsbad SEO” or “SEO near me.” The objective is to get your business on the first page of search results when people in your area are searching for your product or service. 
        </Typography>
      </div>
    </section>
  );
}