
import { Typography } from "@/components/ui/Typography";
import { Items } from "../const/Localseo";
import { handleScrollToContact } from "@/components/Scrolltosection/Scrolltocontact";
import { ArrowRight } from "lucide-react";

export default function LocalSeo() {
  return (
    <section id="service" className="bg-black py-6 lg:py-10 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-5xl text-center">
           <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
             <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
             <Typography variant="overline" className="text-white/80">
                Local SEO Services
             </Typography>
           </div>

          <Typography variant="display-2xl" as="h2" className="text-white  leading-tight">
            Why Local SEO Matters for Businesses in Kyle, TX
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
            When consumers are searching for a product/service within their local area, they turn to Google to find local listings for that service/product. To ensure your company is seen to the maximum extent, Local SEO optimizes your presence when consumers in Kyle search for the services you offer, they compare local providers or seek businesses they can visit or phone.
          </Typography>
          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
            Can local search results be a part of an effective strategy to continually draw relevant visitors and inquiries to your website? If your business operates with a local scope, getting listed in appropriate local search results can be part of an effective marketing plan. A solid local SEO campaign links your business details, website, Google Business Profile and other local signals to the areas and services you wish to emphasize.
          </Typography>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 ">
          {Items.map(({  image, title, desc }) => (
            <div
              key={title}
              className="w-95 max-w-full mx-auto md:w-auto md:mx-0 rounded-[1.2rem] border border-white/10 bg-white/[0.03] p-6 transition-all hover:-translate-y-1.5 hover:border-[#69AE44]/40 hover:bg-white/[0.05]"
            >

              <div className="mb-4 overflow-hidden rounded-[0.8125rem] border border-white/10 bg-white/[0.03]">
                <img
                  src={image}
                  alt={title}
                  className="aspect-[16/10] w-full object-cover object-top"
                />
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

