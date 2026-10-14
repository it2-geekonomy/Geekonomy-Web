
import { Typography } from "@/components/ui/Typography";
import { CollaborateItems } from "../const/Collaborate";

export default function Collaborate() {
  return (
    <section id="why" className="bg-black py-6 lg:py-10 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-5xl text-center">
           <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
             <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
             <Typography variant="overline" className="text-white/80">
               Who can collaborate
             </Typography>
           </div>

          <Typography variant="display-2xl" as="h2" className="text-white  leading-tight">
            Who We Work With
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
         The digital marketing needs evolve as a business develops, especially in the context of Jaipur's growing economy. The needs of a new company that is trying to identify its initial acquisition channels are very different from the needs of a mature business looking to optimize its marketing performance or to explore new markets.        
          </Typography>
          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
         Geekonomy engages with companies at various levels of development, tailoring the approach to the business model, target market, sales cycle, competitors, market, and commercial goals.      
          </Typography>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {CollaborateItems.map(({ icon: Icon, title, desc }) => (
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
         <Typography variant="body-xl" className="mt-7 leading-relaxed text-white/90">
         That gives us what we need to build a digital marketing strategy designed specifically for your business, incorporating proven SEO strategies instead of making your business fit into someone else’s one-size-fits-all delivery plan.
        </Typography>
      </div>
    </section>
  );
}

