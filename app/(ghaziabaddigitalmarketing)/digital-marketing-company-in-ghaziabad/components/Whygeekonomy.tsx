
import { Typography } from "@/components/ui/Typography";
import { WhyGeekonomyItems } from "../const/Whygeekonomy";
import { ArrowRight } from "lucide-react";
import { handleScrollToContact } from "@/components/Scrolltosection/Scrolltocontact";

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
            Why Businesses Choose Geekonomy for Digital Marketing
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
            Selecting a digital marketing agency is more than simply locating a firm providing seo,ppc, or social media solutions - it requires locating an agency that can make sense of the digital realm. It requires a plan to link such tasks to your clear business objectives in the premier digital marketing field.        
          </Typography>
          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
            Our goal is to create marketing systems that are simple, profitable and usable, as well as consistent with the way your prospective customers look and decide.       
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

        <div className="flex flex-col justify-center w-full max-w-95 mx-auto md:max-w-none md:mx-0 rounded-[1.25rem] bg-gradient-to-br from-[#69AE44] to-[#4d8a2f] p-7 ">
            <Typography variant="h3" as="p" className="mb-2 text-black font-bold">
              Not sure where to start?
            </Typography>
            <Typography variant="body-lg" className="mb-2 text-black/70">
              Every business in Ghaziabad is different. We create tailored digital marketing strategies focused on your goals, target audience, and local market.
            </Typography>
            <Typography variant="body-lg" className="mb-4 text-black/70">
            From SEO and Google Ads to social media and lead generation, we help turn local searches into quality leads and customers.
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

         <Typography variant="body-xl" className="mt-6 max-w-7xl leading-relaxed text-white ">
          The aim is not to just get your company more online exposure, it's to actually help it thrive in the very competitive online world. It‘s to develop a digital footprint that helps your business grow steadily by ways of performance marketing strategies.
        </Typography>
      </div>
    </section>
  );
}