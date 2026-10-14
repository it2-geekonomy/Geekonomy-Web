
import { handleScrollToContact } from "@/components/Scrolltosection/Scrolltocontact";
import { Typography } from "@/components/ui/Typography";
import { ArrowRight } from "lucide-react";

export default function SeoServices() {
  return (
    <section id="strategy" className="bg-black py-6 lg:py-10 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
           <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
             <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
             <Typography variant="overline" className="text-white/80">
               Search Strategy
             </Typography>
           </div>

          <Typography variant="display-2xl" as="h2" className="text-white  leading-tight">
            A Search Strategy Built for the Palm Harbor Market
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
            This makes each local market unique. Customers are different. Competitors are different. Your customer‘s search habits are different. Your Search Engine Optimization campaign should cater to those differences, not a common generic campaign for every city, town and village.
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
            Geekonomy creates Palm Harbor-specific marketing plans by analyzing your industry, your best clients, your competitors, your current search rankings and the services you wish to market. We pinpoint the keyword phrases with maximum lifetime value and structure your web site and content resources accordingly. those differences, not a common generic campaign for every city, town and village.
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
            What you get is a targeted SEO approach that can boost your visibility for Palm Harbor relevant search phrases and create a solid basis for long-term growth through natural search.
          </Typography>
        </div>
        <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center">
          <a href="#contact" onClick={handleScrollToContact} className="inline-flex w-auto items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#69AE44] to-[#8FCB63] px-7 py-4 transition-transform hover:scale-[1.03] sm:w-auto">
              <Typography variant="body-lg" className="font-semibold text-black">
                Get Your Free SEO Strategy
              </Typography>
              <ArrowRight/>
          </a>
        </div>
      </div>
    </section>
  );
}

