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
                  Get Started With Geekonomy Today
                </Typography>

                <Typography variant="body-xl" className="mx-auto mt-5 max-w-4xl leading-relaxed text-white/90">
                  Your customers are already looking for what you do. The trick is to ensure they can find you, believe in you, and come to you when they’re ready to make a purchase. Geekonomy is about tying local SEO, technical performance, content strategy, and conversion improvements together to grow your traffic and build up your opportunities for new, qualified leads.
                </Typography>
                <Typography variant="body-xl" className="mx-auto mt-4 max-w-4xl leading-relaxed text-white/90">
                  Build your search traffic We can implement SEO to help you rank better, whether you‘re starting a new website, seeking a boost for your existing pages, or looking to attract more local customers. We strategise around your desired outcomes and focus our efforts on those that make a real impact to your organic presence, tracking it closely and adjusting accordingly.
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