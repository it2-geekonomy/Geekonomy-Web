import {
  Clock,
  MapPin,
  TrendingUp,
  Share2,
  LineChart,
  Eye,
  Target,
  Rocket,
} from "lucide-react";
import { Typography } from "@/components/ui/Typography";

const items = [
  {
    icon: Clock,
    title: "A Strategy Built Around Your Pool Business",
    desc: "Your marketing should tie in with your products and services, ideal customers, service area, competitors, and future growth plans. We don’t use cookie-cutter campaigns. We determine where your business has the best opportunities.",
  },
  {
    icon: MapPin,
    title: "Local Search Expertise",
    desc: "When in the beginning stage of looking for a pool contractor, repair company, maintenance contractor, or a remodeler, customers from San Diego will go online looking. Our emphasis is on increasing your presence for the pertinent local results, local Google Maps, and also service and location searches.",
  },
  {
    icon: TrendingUp,
    title: "Lead-Focused Marketing",
    desc: "Traffic and rankings are not useful in and of themselves. They are only useful when they increase your business. Every campaign we develop is built on actions that matter: calls, quote requests, consultations, quality leads.",
  },
  {
    icon: Share2,
    title: "Multiple Marketing Channels Working Together",
    desc: "Search engine optimization, Google Ads, content marketing, website optimization, social media, and reputation management should be more powerful working together than in separate campaigns. We link the channels instead of linking separate campaigns.",
  },
  {
    icon: LineChart,
    title: "Conversion Optimization",
    desc: "Driving traffic is just the beginning. We study how your visitors experience your pages and uncover opportunities to improve messaging, calls to action, forms, trust signals, and steps toward conversion.",
  },
  {
    icon: Eye,
    title: "Transparent Performance Reporting",
    desc: "You should be able to track where your marketing spend is going and the results it is generating. We measure results against significant KPIs and use real-time information to improve campaigns as they are running.",
  },
   {
    icon: Target,
    title: "Focus on Sustainable Growth",
    desc: "Ultimately, we want to contribute toward establishing a marketing base that will have the ability to generate new ventures over the long haul. Our approach is to blend organic presence with paid buy-in and conversion enhanced by repetition.",
  },
    {
    icon: Rocket,
    title: "A Marketing Partner Focused on Your Business Goals",
    desc: "No matter if you’d like to grow your pool cleaning customers, create remodeling appointments, add to the backlog of pool builds, or grow your service area, Geekonomy can create a marketing plan geared toward the results that are important to you.",
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
            Why Choose Geekonomy for Pool Marketing in San
            Diego?
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
            When selecting a marketing agency, it is not just about selecting one who can get you to number 1 in the search engines or create a campaign for you. You want someone who understands how local customers search, how pool services are sold, and how to make the marketing activity generate real business opportunities.
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
            Geekonomy follows a performance-oriented digital marketing model that connects search marketing, paid marketing, the website, conversion, and other strategies into a single connected growth strategy.
          </Typography>
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
      </div>
    </section>
  );
}