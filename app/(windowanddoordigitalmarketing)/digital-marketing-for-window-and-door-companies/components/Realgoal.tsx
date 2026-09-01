
import { Typography } from "@/components/ui/Typography";
import { RealGoalItems } from "../const/Realgoal";
import { ArrowRight } from "lucide-react";

export default function RealGoal() {
  return (
    <section id="realgoal" className="bg-black py-6 lg:py-10 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-5xl text-center">
           <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
             <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
             <Typography variant="overline" className="text-white/80">
               The Real Goal
             </Typography>
           </div>

          <Typography variant="display-2xl" as="h2" className="text-white  leading-tight">
            Turn More Window & Door Searches Into Leads
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
          What your goal isn’t necessarily to increase traffic to your site, but to optimize your marketing performance for better conversions. You need homeowners that are actively looking for a window or door project to get in touch with your business through targeted social media platforms.        
          </Typography>
          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
          Geekonomy sharpens your marketing by emphasizing high-intent searches, local appeal, targeted advertising, and conversion optimization, paving a smoother transition from search to lead. We analyze the entire customer journey that starts with the search engine query and ends with the homeowner requesting an estimate.    
          </Typography>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {RealGoalItems.map(({ icon: Icon, title, desc }) => (
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

        <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center">
        <a href="#contact" className="inline-flex w-auto items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#69AE44] to-[#8FCB63] px-7 py-4 text-sm font-semibold text-black transition-transform hover:scale-[1.03] sm:w-auto">
            <Typography variant="body-lg" className="font-semibold text-black">
            Get Your Free Digital Marketing Strategy
            </Typography>
            <ArrowRight/>
        </a>
        </div>

      </div>
    </section>
  );
}