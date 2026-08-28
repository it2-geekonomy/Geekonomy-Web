import {
  TrendingUp,
  DollarSign,
  SquareChartGantt,
} from "lucide-react";
import { Typography } from "@/components/ui/Typography";

const metrics = [
  {
    icon: DollarSign,
    title: "Ad Spend:",
    desc: "The money paid to advertising platforms (such as Google AdWords) that feature the ads.",
  },
  {
    icon: TrendingUp,
    title: "PPC Management",
    desc: "Cost for strategy, campaign management, optimization, reporting, and maintenance. account.",
  },
  {
    icon: SquareChartGantt,
    title: "Landing Pages & Tracking",
    desc: "Cost inclusion is subject to landing page creation, conversion tracking, or conversion rate optimization.",
  },

];



export default function PPCManagment() {
  return (
    <section id="results" className="bg-black py-8 lg:py-10 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-5xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
            <Typography variant="overline" className="text-white/80">
              PPC MANAGMENT COST
            </Typography>
          </div>
          <Typography
            variant="display-xl"
            as="h2"
            className="text-white text-2xl sm:text-4xl lg:text-5xl leading-[1.1]"
          >
            How Much Does PPC Management Cost in Charlotte?
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90 mb-5">
            PPC management price for Charlotte is based on how complicated the campaign is and the ad budget you are running. Also, it is based on how many campaigns are needed, who the target market is, how intense the competition is, and how much optimization is needed over time. 

          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90 mb-5">
            Your total PPC investment typically includes:
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


         <div className="mx-auto mb-1 mt-15 max-w-5xl text-center">
            <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90 mb-5">
                Every Charlotte business has to figure out the right PPC budget that fits their own needs. It really depends on your goals, customer acquisition cost, deal size, level of competition, and expected conversion rate.
            </Typography>

            <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90 mb-5">
                Receive a customized PPC Strategy to have an application plan made for your business and manage it.
            </Typography>
        </div>
      </div>
    </section>
  );
}