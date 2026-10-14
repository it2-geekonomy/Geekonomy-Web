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
                  Grow Your Search Visibility in Bee Cave
                </Typography>

                <Typography variant="body-xl" className="mx-auto mt-5 max-w-4xl leading-relaxed text-white/90">
                  The key market your potential customers are actually searching for local service and product relevant searches through search engines. With targeted SEO effort your business can improve visibility, get relevant visitors, and generate more leads to increase conversion rates.
                </Typography>
                <Typography variant="body-xl" className="mx-auto mt-4 max-w-4xl leading-relaxed text-white/90">
                 Geekonomy provides assistance in the following aspects of developing your SEO.Capture opportunities for SEO through your site, local presence, content and search strategy.
                </Typography>
                <Typography variant="body-xl" className="mx-auto mt-4 max-w-4xl leading-relaxed text-white/90 font-semibold">
                 Ready to improve your organic visibility?
                </Typography>
                <div className="mt-7 flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center">
                    <a href="#contact" onClick={handleScrollToContact} className="inline-flex w-auto items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#69AE44] to-[#8FCB63] px-7 py-4 text-sm font-semibold text-black transition-transform hover:scale-[1.03] sm:w-auto">
                        <Typography variant="body-lg" className="font-semibold text-black">
                          Get a Free SEO Consultation
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