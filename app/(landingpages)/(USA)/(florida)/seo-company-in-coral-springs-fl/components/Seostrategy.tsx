
import { handleScrollToContact } from "@/components/Scrolltosection/Scrolltocontact";
import { Typography } from "@/components/ui/Typography";
import { ArrowRight } from "lucide-react";

export default function SeoServices() {
  return (
    <section id="strategy" className="bg-black py-6 lg:py-10 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
           <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
             <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
             <Typography variant="overline" className="text-white/80">
               Seo Strategy
             </Typography>
           </div>

          <Typography variant="display-2xl" as="h2" className="text-white leading-tight">
            What Makes Local SEO in Coral Springs Different?
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
            Local customers frequently have a particular service and location in mind. They might load up Google Maps, check reviews, see your website and call a provider all within a single buying journey. Your SEO initiatives need to support all of them.
          </Typography>
          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
            Instead of obsessing over individual keyword positions, we analyze how your business competes across the entire local search customer journey. That involves enhancing your website relevance, boosting local cues, optimizing your Google Business Profile, and developing pages that establish direct links between your services and the customers you wish to attract.
          </Typography>
          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
            Any reputable Coral Springs SEO service provider should also realize that local rivalry isn‘t only about one search result. Businesses are competing not just in organic results, but also in the local Map Pack, branded searches, service searches and more and more in AI-generated searches.
          </Typography>
          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
            Our strategy aims to establish uniform visibility throughout these channels while maintaining our focus on what we are working toward: aiding a greater number of individuals in finding your business and providing them with a compelling incentive to get in touch with you.
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