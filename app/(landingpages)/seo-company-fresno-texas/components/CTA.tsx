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
                  Ready to Grow Your Business With SEO?
                </Typography>

                <Typography variant="body-xl" className="mx-auto mt-5 max-w-4xl leading-relaxed text-white/90">
                  Your customers are out there looking for what you have to offer. A well-planned SEO strategy can enhance your company‘s visibility, draw your target audience to your site, and generate more opportunities for inquiries and sales.
                </Typography>
                <Typography variant="body-xl" className="mx-auto mt-4 max-w-4xl leading-relaxed text-white/90">
                  Shocks of Geekonomy mix the technical SEO, local page optimization, content construction, keyword research and performance enhancements focus on conversion and you will have a strategy that integrate around your business target, if you plan to strengthen the current status or looking for a long-term foundation of a good organic reproduction, our team is willing to find the best chance for you.
                </Typography>
                <Typography variant="h3" as="h3" className="mx-auto mt-4 max-w-4xl leading-relaxed text-white/90">
                  Get a Strategy Built for Your Business
                </Typography>
                <Typography variant="body-xl" className="mx-auto mt-4 max-w-4xl leading-relaxed text-white/90">
                  Begin with a thorough knowledge of your site, the market, competitors and opportunities. Using this thorough knowledge of your opportunity, we can work with Geekonomy to create a practical SEO road map targeted for steady growth toward an economic and performance driven end result.
                </Typography>
                <div className="mt-7 flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center">
                    <a href="#contact" onClick={handleScrollToContact} className="inline-flex w-auto items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#69AE44] to-[#8FCB63] px-7 py-4 text-sm font-semibold text-black transition-transform hover:scale-[1.03] sm:w-auto">
                        <Typography variant="body-lg" className="font-semibold text-black">
                          Get Free SEO Audit
                        </Typography>
                        <ArrowRight className="h-4 w-4"/>
                    </a>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}