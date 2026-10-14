
import { Typography } from "@/components/ui/Typography";
import { flow, StrategyItems } from "../const/Strategybeforedesign";

export default function BrandStrategy() {
  return (
    <section id="strategy" className="bg-black py-6 lg:py-10 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-5xl text-center">
           <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
             <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
             <Typography variant="overline" className="text-white/80">
               Brand Strategy
             </Typography>
           </div>

          <Typography variant="display-2xl" as="h2" className="text-white  leading-tight">
            Strategy Before Design: How We Build Strong Brands
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
            Excellent branding begins with a solid knowledge of the business. It is way before we decide on colour schemes, designing a logo or creating brand assets that we determine what it is that you want your brand to say and how you want it to be perceived.      
          </Typography>
          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
            Our brand-building approach connects strategy and creativity through a structured process:  
          </Typography>

        <div className="mt-6 overflow-x-auto lg:overflow-visible rounded-[1.25rem] border border-[#69AE44] bg-[#69AE44]/10 p-7">
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

          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
            Is an essential technique that used by the marketing agencies to create branding strategies.   
          </Typography>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {StrategyItems.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="w-95 max-w-full mx-auto md:w-auto md:mx-0 rounded-[1.2rem] border border-white/10 bg-white/[0.03] p-7 transition-all hover:-translate-y-1 hover:border-[#69AE44]/40 hover:bg-white/[0.05]"
            >
              <div className="mb-4 flex h-9 w-9 sm:h-12 sm:w-12 items-center justify-center rounded-[0.8125rem] bg-[#69AE44]/10 text-[#69AE44]">
                <Icon className="h-4.5 w-4.5 sm:h-6 sm:w-6" strokeWidth={1.8} />
              </div>
              <Typography variant="h3" as="h3" className="mb-2 text-white font-semibold">
                {title}
              </Typography>

               {Array.isArray(desc) ? (
                <div className="space-y-2">
                  {desc.map((line, i) => (
                    <Typography
                      key={i}
                      variant="body-lg"
                      className="leading-relaxed text-white/90"
                    >
                      {line}
                    </Typography>
                  ))}
                </div>
              ) : (
              <Typography variant="body-lg" className="leading-relaxed text-white/90">
                {desc}
              </Typography>
              )}
            </div>
          ))}
        </div>
        <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
          This strategy-first approach means Geekonomy can also be more than a design partner. As the branding company Bangalore-based we can begin to create a brand platform for our clients that is capable of powering future marketing, acquisition and growth.
        </Typography>
      </div>
    </section>
  );
}

