
import { Typography } from "@/components/ui/Typography";
import { SeoStrategyItems } from "../const/Seostrategy";
import { ArrowRight } from "lucide-react";
import { handleScrollToContact } from "@/components/Scrolltosection/Scrolltocontact";

export default function SeoStrategy() {
  return (
    <section id="why" className="bg-black py-6 lg:py-10 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-5xl text-center">
           <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
             <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
             <Typography variant="overline" className="text-white/80">
               SEO Strategy
             </Typography>
           </div>

          <Typography variant="display-2xl" as="h2" className="text-white  leading-tight">
            SEO Strategy for Logistics Companies
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
          A logistics SEO strategy must not be focused just on enhancing visibility for generic, industry terms, but also on specialized services that meet buyer personas. Instead, it should enable your business to be found by the exact services, locations, industries, and solutions your customers are searching for.         
          </Typography>

          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
          Geekonomy develops SEO plans based on search intent, topical relevance, and monetization to bring more high-value organic traffic, enhancing visibility and engagement.
          </Typography>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SeoStrategyItems.map(({ icon: Icon, title, desc }) => (
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

<div className="flex flex-col justify-center w-full max-w-[380px] mx-auto md:max-w-none md:mx-0 rounded-[20px] bg-gradient-to-br from-[#69AE44] to-[#4d8a2f] p-7 ">
            <Typography variant="h3" as="p" className="mb-2 text-black font-bold">
                Every logistics business is different
            </Typography>
            <Typography variant="body-lg" className="mb-5 text-black/70">
              We build the channel mix around your services, markets, and sales cycle.
            </Typography>
            <a
              href="#contact"
              onClick={handleScrollToContact}
              className="inline-flex w-fit items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
            >
              Get a Free Strategy
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>


        </div>
        <Typography variant="body-xl" className="mt-7 leading-relaxed text-white/90">
        The outcome is an SEO strategy aimed not just at ranking for more keywords, but at being found by the right customers, those most likely to become leads.
        </Typography>
      </div>
    </section>
  );
}

// 
