
import { Typography } from "@/components/ui/Typography";
import { RightStrategyItems } from "../const/Rightstrategy";
import { ArrowRight } from "lucide-react";
import { handleScrollToContact } from "@/components/Scrolltosection/Scrolltocontact";

export default function RightStrategy() {
  return (
    <section id="service" className="bg-black py-6 lg:py-10 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-5xl text-center">
           <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
             <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
             <Typography variant="overline" className="text-white/80">
               Right Strategy
             </Typography>
           </div>

          <Typography variant="display-2xl" as="h2" className="text-white  leading-tight">
            Choose the Right Digital Marketing Strategy for Your Goals
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
            It is not about having lots of channels, but about a digital marketing strategy that works. The most effective digital marketing strategy is driven by results and what works for your business.        
          </Typography>
          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
            The right channel mix: fits your business goals, target market, competitors and buying cycle can help to transform your online presence.      
          </Typography>
          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
            For some, reliable digital marketing will be vital to long-term success. Search Engine Optimization (SEO) and local SEO can create an essential part of an online marketing company in Tamil Nadu in any organics can help to establish long-term visibility. Some may require PPC through Google Ads along with conversion-suitable landing pages in order to obtain enquiries more quickly. Businesses concentrating on awareness should consider social media along with video and content in order to strengthen their position in the competitive market when seeking the most suitable digital strategies.      
          </Typography>
          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
            If you want further increasing organic visibility then you can buy our reliable digital marketing solutions.      
          </Typography>
          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
            SEO is a long run activity. A mix of technical SEO, valuable content, on-page optimizations, internal linking and local search optimization will help a brand build a strong online presence and stronger natural visibility in the long run.      
          </Typography>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {RightStrategyItems.map(({ icon: Icon, title, desc }) => (
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
              Every business in Madurai has unique goals and customers. We build customized digital marketing strategies that fit your business and connect you with the right local audience.
            </Typography>
            <Typography variant="body-lg" className="mb-4 text-black/70">
              From SEO and Google Ads to social media and lead generation, we help your business get noticed, attract more leads, and grow locally.
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
          This is the reason ‘our customized digital marketing’ services are designed considering your specific business requirements. Digital marketing services in Madurai begins with the goal of your business and not with a pre decided package. We observe what the greatest opportunity is and then focus on the channels that will aid in tangible growth.
        </Typography>
      </div>
    </section>
  );
}

