
import { Typography } from "@/components/ui/Typography";
import { Items } from "../const/Localseo";
import { handleScrollToContact } from "@/components/Scrolltosection/Scrolltocontact";
import { ArrowRight } from "lucide-react";

export default function LocalSeoService() {
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
            Build a Stronger Presence in Yorba Linda Search Results
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
            Local Search rankings are not achieved by merely placing a city name into your website. Geekonomy develops a Yorba Linda SEO plan aimed at how local clients search, compare competing companies, and contact who they find.
          </Typography>
          {/* <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
            Local SEO targets these high intent searches. We make sure your business gets found for the keywords, services, and locations that matter for your customers, rather than just general broad keyword based searches.
          </Typography> */}
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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

        {/* <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
          Geekonomy is the most qualified SEO Waco TX has available to them, simply because they take a strategic approach rather than just increasing the points, keywords, and traffic to a web site.
          </Typography> */}

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

