
import { Typography } from "@/components/ui/Typography";
import { flow, steps } from "../const/Brandprocess";
import { ArrowRight } from "lucide-react";
import { handleScrollToContact } from "@/components/Scrolltosection/Scrolltocontact";

export default function BrandProcess() {
  return (
    <section id="strategy" className="bg-white/[0.02] py-6 lg:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-5xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
            <Typography variant="overline" className="text-white/80">
              Brand Process
            </Typography>
          </div>

            <Typography variant="display-2xl" as="h2" className="text-white  leading-tight">
            A Branding Process Designed for Bangalore Businesses
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
           Creating a great brand isn‘t just about great ideas but a process that follows the best principles in branding. Our process integrates business strategy, market-know-how and design to make sure your branding decisions serve a specific purpose.        
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

              {s.desc.map((sentence, i) => (
                          <Typography
                              key={i}
                              variant="body-lg"
                              className={`leading-relaxed text-white/90 ${i > 0 ? "mt-2" : ""}`}>
                              {sentence}
                          </Typography>
                      ))}
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
        <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
          The end result? A unified brand system that is ready for your team to deploy consistently as you expand. Starting a business or redefining an existing identity, our process maintains strategy in the heart of each branding effort.       
        </Typography>

        
        <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center">
          <a href="#contact" onClick={handleScrollToContact} className="inline-flex w-auto items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#69AE44] to-[#8FCB63] px-7 py-4 text-sm font-semibold text-black transition-transform hover:scale-[1.03] sm:w-auto">
              <Typography variant="body-lg" className="font-semibold text-black">
               Start Building Your Brand
              </Typography>
              <ArrowRight/>
          </a>
        </div>

      </div>
    </section>
  );
}