import {
  MapPin,
  Funnel,
  ChartColumnIncreasing,
  Eye,
  Settings,
  Rocket,
} from "lucide-react";
import { Typography } from "@/components/ui/Typography";

const items = [
  {
    icon: Funnel,
    title: "Conversion-Focused PPC",
    desc: "We go further than the click and impression to see if your advertising is driving action. The campaigns are mapped to the conversions that matter to your business.",
  },
  {
    icon: ChartColumnIncreasing,
    title: "Data-Driven Optimization",
    desc: "PPC campaigns are monitored on an ongoing basis using campaign performance and conversion reports. This enables us to respond quickly to maximize targeting and ad performance and to improve budgets and efficiency.",
  },
  {
    icon: Eye,
    title: "Transparent Reporting",
    desc: "Understand how your ad spend is being allocated and how your campaign is performing. Reporting can be based on metrics like leads, conversions, cost per lead, conversion rate, and return on ad spend.",
  },
  {
    icon: Settings,
    title: "Customized Campaign Strategy",
    desc: "It is market, customer, service, competition and goal driven not campaign driven.",
  },
  {
    icon: MapPin,
    title: "Local Market Understanding",
    desc: "In a given Charlotte location, the local businesses are competing for a share of the local market. Strategic geo-targeting and location-based PPC campaigns can position your advertisements in front of the right customers in the areas you serve.",
  },
  {
    icon: Rocket,
    title: "Focus on ROI, Not Vanity Metrics",
    desc: "Traffic alone does not qualify you for having a successful PPC campaign. Our goal is to tie advertising spend to relevant qualified leads, sales, revenue, and measurable business growth.",
  },
];

export default function WhyGeekonomy() {
  return (
    <section id="why" className="bg-black py-6 lg:py-10 ">
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
            Why Charlotte Businesses Choose Geekonomy for PPC
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
          Selecting a PPC agency is putting your money in the hands of someone who has to deliver measurable business results. Geekonomy blends campaign strategy, search intent, conversion data, and continuous optimization into paid advertising campaigns that deliver results.          
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