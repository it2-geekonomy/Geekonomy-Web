import { Typography } from "@/components/ui/Typography";
import { flow } from "../const/Searching";
import { handleScrollToContact } from "@/components/Scrolltosection/Scrolltocontact";
import { ArrowRight } from "lucide-react";

export default function Searching() {
  return (
    <section id="service" className="bg-black py-6 lg:py-10 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-5xl text-center">
           <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
             <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
             <Typography variant="overline" className="text-white/80">
               Customers Are Searching
             </Typography>
           </div>

          <Typography variant="display-2xl" as="h2" className="text-white  leading-tight">
            SEO That Matches What Your Customers Are Searching For
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
            Good SEO begins with the question <span className="text-[#FFFFFF] font-semibold">why are people searching</span>, not what keywords are they entering into Google? Our approach involves aligning your web site with the information, services and solutions your potential clients are actively seeking.
          </Typography>
          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
            As an <span className="text-[#FFFFFF] font-semibold">SEO Company</span> in St Ives, Cornwall UK, we look into what search terms are right for you, we understand what users want when they search for them and then match those opportunities to the correct areas within your website. This creates a targeted plan for SEO, instead of optimizing for keywords without a targeted purpose.
          </Typography>
          <Typography variant="display-xl" as="h3" className="mt-6 text-white font-semibold">
            Our Approach
          </Typography>
        </div>

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

        <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center">
        <a href="#contact" onClick={handleScrollToContact} className="inline-flex w-auto items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#69AE44] to-[#8FCB63] px-7 py-4 transition-transform hover:scale-[1.03] sm:w-auto">
            <Typography variant="body-lg" className="font-semibold text-black">
            Get Your Free SEO Strategy
            </Typography>
            <ArrowRight className="h-4 w-4 "/>
        </a>
        </div>

      </div>
    </section>
  );
}