"use client";
import { Typography } from "@/components/ui/Typography";

const steps = [
  {
    n: "1",
    title: "Understand Your Business and Goals",
    desc: "To have a clear picture of your product/service, customer profile, competitors, regional markets, and the company's objectives helps us to know what the aims of the PPC campaign would be– leads, sales and/or ROI.",
  },
  {
    n: "2",
    title: "Research Keywords and Search Intent",
    desc: "We discover the precise keywords, keyword groups and terminology your prospects are using to locate your products and services. We consider the intent behind the search, level of competition, location and commercial value to develop highly targeted campaign and ad group themes.",
  },
  {
    n: "3",
    title: "Build and Launch Your PPC Campaigns",
    desc: "The campaigns utilize high relevance of keywords, audiences, locations, ad messages, budget and conversions. They are effectively targeted towards searchers' intent and send targeted visitors to targeted landing pages.",
  },
  {
    n: "4",
    title: "Track Conversions and Campaign Data",
    desc: "Conversion tracking is extremely powerful in evaluating effectiveness. The effectiveness of keywords, ad groups, landing pages, and campaigns can be determined through conversion tracking. By tracking conversion rate, cost per lead, click-through rate, or even return on ad spend, effectiveness can be measured.",
  },
  {
    n: "5",
    title: "Optimize for Better Performance",
    desc: "PPC campaigns are crazy dynamic. We peel through search terms, bidding, budgets, ad performance, audience analysis, and conversion tracking, looking for ways to trim spend without losing value.",
  },
];

const flow = [
  "Audit",
  "Strategy",
  "Optimization",
  "Qualified Traffic",
  "Growth",
];

export default function Howitworks() {
  return (
    <section id="strategy" className="bg-white/[0.02] py-6 lg:py-10 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-4xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
            <Typography variant="overline" className="text-white/80">
              HOW IT WORKS
            </Typography>
          </div>
          <Typography
            variant="display-xl"
            as="h2"
            className="text-white text-2xl sm:text-4xl lg:text-5xl leading-tight"
          >
            How Our Charlotte PPC Management Works
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
          PPC management is not just about helping you run your ads and increase your budgets. Geekonomy plans your campaigns according to your business objectives, how your target market is searching, and your conversion data so that we can help you optimize your advertising performance.      
          </Typography>
        </div>

        <div className="grid gap-4">
          {steps.map((s) => (
            <div
              key={s.n}
              className="step-glow-card relative grid grid-cols-[auto_1fr] items-start gap-6 rounded-[20px] border border-white/10 bg-white/[0.03] p-7 transition-transform hover:translate-x-1.5 sm:p-8"
            >
              <span className="flex h-[58px] w-[58px] flex-none items-center justify-center rounded-2xl bg-[#69AE44] text-2xl font-extrabold text-black">
                {s.n}
              </span>
              <div>
                <Typography variant="h3" as="h3" className="mb-2 text-white font-semibold">
                  {s.title}
                </Typography>
                <Typography variant="body-lg" className="leading-relaxed text-white/90">
                  {s.desc}
                </Typography>
              </div>
            </div>
          ))}
        </div>

        <style jsx>{`
          @property --step-glow-angle {
            syntax: "<angle>";
            initial-value: 0deg;
            inherits: false;
          }

          .step-glow-card::before {
            content: "";
            position: absolute;
            inset: 0;
            border-radius: inherit;
            padding: 1.5px;
            background: conic-gradient(
              from var(--step-glow-angle),
              transparent 0%,
              #69ae44 8%,
              #b6ffa1 14%,
              #69ae44 20%,
              transparent 32%,
              transparent 100%
            );
            -webkit-mask: linear-gradient(#fff 0 0) content-box,
              linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.35s ease;
            animation: step-glow-rotate 2.4s linear infinite;
            animation-play-state: paused;
          }

          .step-glow-card:hover::before {
            opacity: 1;
            animation-play-state: running;
          }

          .step-glow-card:hover {
            border-color: rgba(105, 174, 68, 0.4);
          }

          @keyframes step-glow-rotate {
            to {
              --step-glow-angle: 360deg;
            }
          }
        `}</style>

      </div>
    </section>
  );
}