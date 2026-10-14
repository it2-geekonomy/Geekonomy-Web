
import { Typography } from "@/components/ui/Typography";
import { WhyJaipurItems } from "../const/Whyjaipur";
import { ArrowRight } from "lucide-react";

export default function WhyJaipur() {
  return (
    <section id="why" className="bg-black py-6 lg:py-10 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-5xl text-center">
           <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
             <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
             <Typography variant="overline" className="text-white/80">
               why digital marketing
             </Typography>
           </div>

          <Typography variant="display-2xl" as="h2" className="text-white  leading-tight">
            Why Jaipur Businesses Need More Than Just Digital Marketing
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
         Getting customers online does not simply involve having a presence on one channel; it requires a comprehensive approach to website design and development and social media marketing services. Those searching for a company in Jaipur may come via Google, browse a number of websites, read some reviews, engage with social media, and come back through a paid campaign, highlighting the importance of digital marketing in Jaipur.        
          </Typography>
          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
         Which means it’s not about deciding to invest in SEO, Google Ads, social media, or content as they’re not isolated pieces; it’s about understanding how each channel works together along the customer path.      
          </Typography>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {WhyJaipurItems.map(({ icon: Icon, title, desc }) => (
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
      </div>
    </section>
  );
}

