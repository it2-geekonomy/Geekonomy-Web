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
            <div className="relative ">
                <Typography variant="display-2xl" as="p" className="text-white  leading-tight">
                  Ready to Grow Your Yorba Linda Search Visibility?
                </Typography>

                <Typography variant="body-xl" className="mx-auto mt-5 max-w-4xl leading-relaxed text-white/90">
                  Your customers are looking for your services right now. A good SEO can boost your business by making it more visible, attracting high quality local traffic and increasing the conversion of searches into real business potential.
                </Typography>
                <Typography variant="body-xl" className="mx-auto mt-4 max-w-4xl leading-relaxed text-white/90">
                  The way I see this is a mixture of local SEO, technical on-site optimization, content plan and conversion related enhancements to develop persistent, organic growth for clients relevant to Yorba Linda.
                </Typography>
                <Typography variant="body-xl" className="mx-auto mt-4 max-w-4xl leading-relaxed text-white/90">
                  Discover gaps in your search visibility, new opportunities to rank, and a simple plan to grow your organic search presence.
                </Typography>
                <div className="mt-7 flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center">
                    <a href="#contact" onClick={handleScrollToContact} className="inline-flex w-auto items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#69AE44] to-[#8FCB63] px-7 py-4 text-sm font-semibold text-black transition-transform hover:scale-[1.03] sm:w-auto">
                        <Typography variant="body-lg" className="font-semibold text-black">
                          Get Your Free SEO Analysis
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