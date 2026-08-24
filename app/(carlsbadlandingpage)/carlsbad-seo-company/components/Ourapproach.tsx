"use client";
import { Typography } from "@/components/ui/Typography";

const steps = [
  {
    n: "1",
    title: "Audit",
    desc: "Through audits, we identify your opportunities and issues. In our audits, we then examine your website, technical SEO, existing content, local presence, links, search results and competitors.",
  },
  {
    n: "2",
    title: "Strategy",
    desc: "According to the type of services you offer, your target customers, your competitors, intention when searching and your business objectives, we create a customized SEO strategy Roadmap. Our Roadmap results from investigating specific keywords, entity associations, opportunities of the discussed subject and signals of the area.",
  },
  {
    n: "3",
    title: "Optimization",
    desc: "We optimize the pages and SEO factors on your site most relevant to your business including technical SEO and on-page signals, site architecture, internal linking, local relevancy and topical authority.",
  },
  {
    n: "4",
    title: "Growth",
    desc: "SEO is a continuous process. We track organic visibility, rankings, qualified traffic, leads, and other key indicators of performance to discover new opportunities and help to grow your presence in search.",
  },
];

const flow = [
  "Audit",
  "Strategy",
  "Optimization",
  "Qualified Traffic",
  "Growth",
];

export default function Strategy() {
  return (
    <section id="strategy" className="bg-white/[0.02] py-6 lg:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-4xl text-center">
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
            Our Carlsbad SEO Process
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
          Great SEO starts with an intimate understanding of your business and ends with visible, measurable results. Geekonomy uses a laser-focused approach that connects the dots between the technical elements, the research of search intent, content development, positioning for authority and optimization for conversion.         
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
          Design a search strategy tailored to your business, NOT a standard SEO intensive checklist.
        </Typography>
      </div>
    </section>
  );
}