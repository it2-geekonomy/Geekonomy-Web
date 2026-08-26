
import { Typography } from "@/components/ui/Typography";
import { WhyGeekonomyItems } from "../const/Whygeekonomy";

export default function WhyGeekonomy() {
  return (
    <section id="why" className="bg-black py-6 lg:py-10 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-5xl text-center">
           <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
             <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
             <Typography variant="overline" className="text-white/80">
               Why Geekonomy
             </Typography>
           </div>

          <Typography variant="display-2xl" as="h2" className="text-white  leading-tight">
            Why Choose Geekonomy for Logistics Marketing?
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
         Finding the right digital marketing partner is finding a team that knows how to tie marketing activity to business growth for logistics companies and their relationships with 3PLs. Geekonomy’s approach is strategy-driven, guiding logistics companies to gain more visibility, more relevant prospects, and more qualified opportunities.         
          </Typography>

        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {WhyGeekonomyItems.map(({ icon: Icon, title, desc }) => (
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
              <Typography variant="body-lg" className="leading-relaxed text-white/90">
                {desc}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

