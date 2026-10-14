import { Typography } from "@/components/ui/Typography";
import { handleScrollToContact } from "@/components/Scrolltosection/Scrolltocontact";
import { ArrowRight } from "lucide-react";

export default function WhyNeedSeo() {
  return (
    <section id="strategy" className="bg-black py-6 lg:py-10 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
           <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
             <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
             <Typography variant="overline" className="text-white/80">
               Why Need SEO Services
             </Typography>
           </div>

          <Typography variant="display-2xl" as="h2" className="text-white  leading-tight">
            Why Casselberry Businesses Need a Strong SEO Strategy
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
            Customers increasingly use search engines to compare businesses, research services, read reviews, and decide where to spend their money. If your website is difficult to find for relevant searches, potential customers may discover competitors before they ever encounter your business.
          </Typography>
          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
            A seo company casselberry strategy should focus on connecting your business with the searches that matter most. This means understanding customer intent, identifying valuable local keywords, optimizing important website pages, improving technical performance, and creating content that answers the questions your potential customers are asking.
          </Typography>
          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
            Geekonomy takes a comprehensive approach to local search visibility. We look beyond individual keywords to understand how your services, location, website, content, and online presence work together. This helps create a search strategy that can attract more relevant visitors and provide a stronger path from Google search to customer action.
          </Typography>
        </div>
        <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center">
          <a href="#contact" onClick={handleScrollToContact} className="inline-flex w-auto items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#69AE44] to-[#8FCB63] px-7 py-4 transition-transform hover:scale-[1.03] sm:w-auto">
              <Typography variant="body-lg" className="font-semibold text-black">
                Get Your Free SEO Strategy
              </Typography>
              <ArrowRight className="h-4 w-4"/>
          </a>
        </div>
      </div>
    </section>
  );
}