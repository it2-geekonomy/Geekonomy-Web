
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
            Why Choose Geekonomy as Your Carmel SEO Company?
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
            But selecting an SEO partner is not just about finding someone who can help your business rank higher. It‘s about selecting a partner who has a clear understanding of how and has a proven track record of using technical SEO, content, local SEO, the overall experience of your website, and conversions to help achieve your business objectives.     
          </Typography>
          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
            Geekonomy adopts a strategy-first approach to SEO, beginning with where you already rank in search results and moving forward to target the areas most meaningful to your business.
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
            When you are shopping for the Carmel SEO agency that is right for you, find one that will be able to articulate the plan behind the work, not just give you a list of tasks they will do each month. Geekonomy‘s method of operation is aimed at tying your SEO activity in with your larger goal to grow your business.
          </Typography>
      </div>
    </section>
  );
}

