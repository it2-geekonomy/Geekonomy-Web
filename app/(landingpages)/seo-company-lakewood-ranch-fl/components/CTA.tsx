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
                  Your customers are searching for products and services online. A well-planned SEO strategy can help your business build stronger search visibility, attract relevant visitors, and create more opportunities for growth.
                </Typography>
                <Typography variant="body-xl" className="mx-auto mt-4 max-w-4xl leading-relaxed text-white/90">
                  Geekonomy combines local SEO, technical optimization, content strategy, on-page SEO, and conversion-focused improvements to create a search strategy tailored to your business. Whether you need to improve your local presence, optimize an existing website, or build a stronger organic search foundation, our team can help identify opportunities based on your current online presence.
                </Typography>
                <Typography variant="body-xl" className="mx-auto mt-4 max-w-4xl leading-relaxed text-white/90">
                  If you're looking for a <span className="text-[#FFFFFF] font-semibold">Lakewood ranch seo company</span> that takes a comprehensive approach to search marketing, start with an SEO assessment of your website and current search presence.
                </Typography>
                <Typography variant="body-xl" className="mx-auto mt-4 max-w-4xl leading-relaxed text-white/90">
                  Looking for an <span className="text-[#FFFFFF] font-semibold">seo company lakewood ranch fl</span> businesses can turn to for a customized strategy? Contact Geekonomy today to discuss your goals and discover opportunities to improve your online visibility.
                </Typography>
                <div className="mt-7 flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center">
                    <a href="#contact" onClick={handleScrollToContact} className="inline-flex w-auto items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#69AE44] to-[#8FCB63] px-7 py-4 text-sm font-semibold text-black transition-transform hover:scale-[1.03] sm:w-auto">
                        <Typography variant="body-lg" className="font-semibold text-black">
                          Get Your Free SEO Audit
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