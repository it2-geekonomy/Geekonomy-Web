import { Typography } from "@/components/ui/Typography";
import { Items } from "../const/Seomatters";
import { handleScrollToContact } from "@/components/Scrolltosection/Scrolltocontact";
import { ArrowRight } from "lucide-react";

export default function SeoMatters () {
  return (
    <section id="strategy" className="bg-black py-6 lg:py-10 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-5xl text-center">
           <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
             <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
             <Typography variant="overline" className="text-white/80">
               SEO Matters
             </Typography>
           </div>

          <Typography variant="display-2xl" as="h2" className="text-white  leading-tight">
            Why SEO Matters for Lakewood Ranch Businesses
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
            When people need a product or service, search engines are often one of the first places they turn to. A strong online presence can help your business appear when potential customers are actively searching for the services you offer. For businesses serving Lakewood Ranch, investing in SEO can create opportunities to reach customers at different stages of the buying journey.
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
            A professional <span className="text-[#FFFFFF] font-semibold">lakewood ranch seo company</span> can help your business identify valuable local search terms, improve website visibility, and optimize important pages around customer intent. Instead of relying only on paid advertising or referrals, SEO can help build a sustainable source of organic traffic over time.
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
            Local competition also makes it important to have a website that clearly communicates what your business offers and where you serve. A targeted <span className="text-[#FFFFFF] font-semibold">seo company lakewood ranch fl</span> strategy can optimize your website, local search presence, content, and technical foundation so search engines can better understand your business.
          </Typography>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {Items.map(({ icon: Icon, title, desc }) => (
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
          <div className="flex flex-col justify-center w-full max-w-95 mx-auto md:max-w-none md:mx-0 rounded-[1.25rem] bg-gradient-to-br from-[#69AE44] to-[#4d8a2f] p-7 ">
            <Typography variant="h3" as="p" className="mb-2 text-black font-bold">
              Not sure where to start?
            </Typography>
            <Typography variant="body-lg" className="mb-2 text-black/70">
              We help Lakewood Ranch businesses improve search visibility, attract the right customers, and grow with a tailored SEO strategy.
            </Typography>
            <a
              href="#contact"
              onClick={handleScrollToContact}
              className="inline-flex w-fit items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
            >
              Get a Free Plan
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}