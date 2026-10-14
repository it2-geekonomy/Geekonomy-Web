import { ArrowRight } from "lucide-react";
import { Typography } from "@/components/ui/Typography";
import { handleScrollToContact } from "@/components/Scrolltosection/Scrolltocontact";

export default function CTA() {
  return (
    <section id="cta" className="bg-black py-8 lg:py-10">
      <div className="mx-auto max-w-full">
        <div className="relative overflow-hidden border border-white/10 bg-[#69AE44]/20 px-8 py-16 text-center sm:px-16">
          <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-[#69AE44]/25 blur-[6.25rem]" />
            <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-[#69AE44]/15 blur-[6.25rem]" />
            <div className="relative mx-auto max-w-5xl">
                <Typography variant="display-2xl" as="p" className="text-white  leading-tight">
                  Ready to Grow Your Brentwood Business With SEO?
                </Typography>

                <Typography variant="body-xl" className="mx-auto mt-5 max-w-4xl leading-relaxed text-white/90">
                  Potential customers are currently searching for your company‘s products and services. Effective SEO can help your business increase your search visibility, attract relevant visitors and generate more opportunities to convert searchers into leads and customers.
                </Typography>
                <Typography variant="body-xl" className="mx-auto mt-4 max-w-4xl leading-relaxed text-white/90">
                  Geekonomy offers tailor-made SEO packages, blending the best mix of technical optimization, local SEO, keyword analysis, content creation, and conversion improvement. If you’re looking to refine an established website or lay a stronger foundation for your organic search visibility, we will develop a strategy fit for your business and growth plan.
                </Typography>
                <Typography variant="body-xl" className="mx-auto mt-4 max-w-4xl leading-relaxed text-white/90">
                  If you want a Brentwood seo company who is in for the long haul with your organic search, Geekonomy can help you spot opportunities and know where to focus the more important seo changes for your business.
                </Typography>
                <Typography variant="body-xl" className="mx-auto mt-4 max-w-4xl leading-relaxed text-white/90">
                  Are you searching for a seo company building Brentwood business can trust to implement an organised SEO campaign? First, let‘s review your existence online and then, look to explore realistic ways for improving your company.
                </Typography>
                <Typography variant="body-xl" className="mx-auto mt-4 max-w-4xl leading-relaxed text-white/90 font-semibold">
                  Looking for a seo company brentwood CA? Contact Geekonomy and let’s chat about your goals for a personalized SEO road map.
                </Typography>
                <div className="mt-7 flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center">
                    <a href="#contact" onClick={handleScrollToContact} className="inline-flex w-auto items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#69AE44] to-[#8FCB63] px-7 py-4 text-sm font-semibold text-black transition-transform hover:scale-[1.03] sm:w-auto">
                        <Typography variant="body-lg" className="font-semibold text-black">
                          Get Your Free SEO Strategy
                        </Typography>
                        <ArrowRight className="h-5 w-5"/>
                    </a>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}