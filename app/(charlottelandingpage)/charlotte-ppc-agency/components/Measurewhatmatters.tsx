import {
  Phone,
  DollarSign,
  Funnel,
  Target,
  ChartColumnIncreasing,
  ChartLine,
} from "lucide-react";
import { Typography } from "@/components/ui/Typography";

const metrics = [
  {
    icon: Phone,
    title: "Qualified Leads",
    desc: "How many of the prospective customers have performed a defined action?",
  },
  {
    icon: DollarSign,
    title: "Cost Per Lead",
    desc: "How effectively is your advertising budget converting into leads?",
  },
  {
    icon: Funnel,
    title: "Conversion Rate",
    desc: "How many of the paid visitors to the site turn into leads or customers?",
  },
  {
    icon: ChartLine,
    title: "Return on Ad Spend",
    desc: "What revenue do you make from your advertising investment?",
  },
  {
    icon: Target,
    title: "Click-Through Rate",
    desc: "Do your ads get a very high proportion of relevant searchers?",
  },
  {
    icon: ChartColumnIncreasing,
    title: "Conversion Value",
    desc: "Which campaigns, keywords, and ads generate the most business value?",
  },

];


export default function Measures() {
  return (
    <section id="results" className="bg-black py-8 lg:py-10 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-5xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
            <Typography variant="overline" className="text-white/80">
              MEASURE WHAT MATTERS
            </Typography>
          </div>
          <Typography
            variant="display-xl"
            as="h2"
            className="text-white text-2xl sm:text-4xl lg:text-5xl leading-[1.1]"
          >
            Charlotte PPC Results That Matter to Your Business
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90 mb-5">
            Depending on your business and campaign goals, PPC performance can be evaluated through:
          </Typography>

        </div>

        <div className="mb-11 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {metrics.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="w-[380px] max-w-full mx-auto sm:w-auto sm:mx-0 rounded-[20px] border border-white/10 bg-white/[0.03] p-7 transition-all hover:-translate-y-1 hover:border-[#69AE44]/40"
            >
              <div className="mb-3.5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#69AE44]/10 text-[#69AE44]">
                <Icon className="h-[22px] w-[22px]" strokeWidth={1.8} />
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


        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-[20px] border border-white/10 bg-white/[0.03] p-8">
                <Typography variant="h3" as="h3" className="mb-2.5 text-white font-semibold">
                    Turn PPC Data Into Better Campaign Decisions
                </Typography>
                <Typography variant="body-lg" className="leading-relaxed text-white/90">
                    The campaign data serves to point to where the campaign will be optimized on an ongoing basis. If we look at the data for keyword performance, search terms, landing page engagement, conversion paths, and spend patterns, we can determine the effectiveness of the campaign.
                </Typography>
            </div>
            <div className="rounded-[20px] border border-white/10 bg-white/[0.03] p-8">
                <Typography variant="h3" as="h3" className="mb-2.5 text-white font-semibold">
                    See How Geekonomy Can Improve Your PPC Performance
                </Typography>
                <Typography variant="body-lg" className="leading-relaxed text-white/90">
                    Feel free to include confirmed results of Geekonomy case studies, campaign goals & results, or client testimonials here when they are available. Do not publish unsupported percentages and performance claims.            
                </Typography>
            </div>
        </div>

      </div>
    </section>
  );
}