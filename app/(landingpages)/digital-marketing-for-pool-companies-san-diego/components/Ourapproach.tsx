"use client";
import { Typography } from "@/components/ui/Typography";

const steps = [
  {
    n: "1",
    title: "Attract Local Customers",
    desc: "We will first determine which services, locations, and search terms are the most valuable opportunities for your business. Local SEO, content marketing, Google Maps optimization, and paid search all work to position your business in front of consumers actively looking for pool services.",
  },
  {
    n: "2",
    title: "Capture High-Intent Traffic",
    desc: "Once they find you, your website should compel them to take the next step. We create and optimize dedicated service pages and landing pages personalized to your customers. Using copy, testimonials, sample project photos, and compelling calls to action, we get results.",
  },
  {
    n: "3",
    title: "Build Trust Before the First Call",
    desc: "Since a pool project can cost a fortune, clients want to make sure they are choosing the right pool company. Ratings and reviews, references, portfolio, credentials, services, FAQ pages, and helpful content pages all work in the direction of easing the minds of potential clients.",
  },
  {
    n: "4",
    title: "Convert Visitors Into Leads",
    desc: "We are improving your website so that all of the visitors’ entry points allow you to be easily accessible and approachable. This could include designing quote request or consultation request forms, Click-to-call buttons, booking buttons, or calls to action, etc.",
  },
  {
    n: "5",
    title: "Nurture Potential Customers",
    desc: "While not every prospect will be prepared to select a pool company when they visit your website, it is important to keep your company top of mind through retargeting and follow-up campaigns. Email marketing, good content, and additional visits can help you stay in front of your prospects as they begin comparing features and shopping for companies, or they get serious about planning their project.",
  },
  {
    n: "6",
    title: "Measure What Produces Results",
    desc: "We know that marketing decisions are grounded in business results, not vanity metrics. We track leads, calls, forms submitted, conversions, cost per lead, search visibility, and other metrics to find out what works and where we can identify opportunity.",
  },
  {
    n: "7",
    title: "Scale What Works",
    desc: "When we know which services, keywords, locations, and campaigns are providing us the best potential, we can focus our budget on what provides the best potential. This allows us to develop a scalable marketing system on top of it to get continuous growth.",
  },
];

const flow = [
  "Local Visibility",
  "Qualified Traffic",
  "Engagement",
  "Leads",
  "Appointments",
  "Customers",
  "Revenue",
];

export default function Strategy() {
  return (
    <section id="strategy" className="bg-white/[0.02] py-6 lg:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
            <Typography variant="overline" className="text-white/80">
              OUR APPROACH
            </Typography>
          </div>
          <Typography
            variant="display-xl"
            as="h2"
            className="text-white text-2xl sm:text-4xl lg:text-5xl leading-tight"
          >
            Our Pool Marketing Strategy for San Diego Companies
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
            Effective pool marketing isn’t about just one channel. The best campaigns integrate search visibility, advertising, content, website conversion, and follow-up into one measurable customer journey.
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
            Geekonomy has created a marketing funnel aiming to flow potential customers from initial search to final inquiry to paying customers.
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

        <Typography variant="body-xl" className="mt-7 leading-relaxed text-white/90">
          <span className="font-semibold text-white">The Goal: More Than Traffic</span>
          <br />
          A successful pool marketing campaign should create a measurable path from visibility to revenue:
        </Typography>

        <div className="mt-11 overflow-x-auto lg:overflow-visible rounded-[20px] border border-[#69AE44] bg-[#69AE44]/10 p-7">
          <div className="flex w-max items-center gap-3 lg:w-full lg:flex-wrap lg:justify-center">
            {flow.map((s, i) => (
              <div key={s} className="flex items-center gap-3">
                <span
                  className={`whitespace-nowrap rounded-full px-4 py-2.5 text-sm font-semibold ${i === flow.length - 1
                      ? "bg-[#69AE44] text-black"
                      : "border border-white/10 bg-white/10 text-white/80"
                    }`}
                >
                  {s}
                </span>
                {i < flow.length - 1 && <span className="text-[#69AE44]">→</span>}
              </div>
            ))}
          </div>
        </div>

        <Typography variant="body-xl" className="mt-7 leading-relaxed text-white/90">
          That’s the structure for a performance-driven marketing plan for San Diego pool companies.
        </Typography>
      </div>
    </section>
  );
}