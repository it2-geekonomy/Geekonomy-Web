
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
            Why Businesses Choose Geekonomy for SEO Company Davis CA
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
            Going to the right SEO provider is more than getting someone who can make sure your rankings are where you want them to be. It is about finding a provider with a strategic approach that will help your organization find a path to generate business that aligns with your priorities, and change along with the search engines while pursuing opportunities.     
          </Typography>
          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
            Then there is Geekonomy, which is a pragmatic approach to SEO. This includes combining everything from technical SEO, to content, to local search to authority boosting into a single, integrated art:
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
            With Geekonomy, your Davis SEO Company is not someone who simply completes a task, but a strategic partner with a long-term vision for an ever-growing search presence.
          </Typography>
      </div>
    </section>
  );
}

