"use client";
import { Typography } from "@/components/ui/Typography";
import { flow, steps } from "../const/Ourprocess";


export default function OurProcess() {
  return (
    <section id="strategy" className="bg-white/[0.02] py-6 lg:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-4xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
            <Typography variant="overline" className="text-white/80">
              Our Process
            </Typography>
          </div>

            <Typography variant="display-2xl" as="h2" className="text-white  leading-tight">
            Our Logistics Digital Marketing Process
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
          Effective logistics marketing starts when logistics marketers understand your business and finishes with measurable results through best practices for logistics companies, logistics engagement, and conversion strategies. Geekonomy has a proven process that is designed to link strategy, execution, measurement, and constant optimization.         
          </Typography>
        </div>

        <div className="grid gap-4">
          {steps.map((s) => (
            <div
              key={s.n}
              className="step-glow-card relative grid grid-cols-[auto_1fr] items-start gap-6 rounded-[1.25rem] border border-white/10 bg-white/[0.03] p-7 transition-transform hover:translate-x-1.5 sm:p-8"
            >
              <span className="flex h-14.5 w-14.5 flex-none items-center justify-center rounded-[0.8125rem] bg-[#69AE44] text-2xl font-extrabold text-black">
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

        <div className="mt-11 overflow-x-auto lg:overflow-visible rounded-[1.25rem] border border-[#69AE44] bg-[#69AE44]/10 p-7">
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
          This allows you to focus your digital marketing on ongoing iterations, rather than a single “throw it at the wall” effort.
        </Typography>
      </div>
    </section>
  );
}