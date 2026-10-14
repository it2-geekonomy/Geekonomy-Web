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
                  Get Started With a Georgetown SEO Strategy
                </Typography>

                <Typography variant="body-xl" className="mx-auto mt-5 max-w-4xl leading-relaxed text-white/90">
                  Your customers search for the products and services you provide through search engines. They compare and choose providers to visit and buy from. Implementing an effective SEO approach will allow your business to increase the target rankings and draw more relevant users.
                </Typography>
                <Typography variant="body-xl" className="mx-auto mt-4 max-w-4xl leading-relaxed text-white/90">
                  This is where Geekonomy starts out – getting to know your website, service pages, target audience, competitors, and geographic location. We then look for SEO potential and start creating a practical strategy with input on technical SEO, content, local SEO, authority and conversion.
                </Typography>
                <Typography variant="body-xl" className="mx-auto mt-4 max-w-4xl leading-relaxed text-white/90">
                  Your website may require a solid technical SEO base, local authority, improved service pages, or an overall content plan. Whatever your requirements, we scale and adapt our approach to your unique business goals.
                </Typography>
                <Typography variant="body-xl" className="mx-auto mt-4 max-w-4xl leading-relaxed text-white/90">
                  Now is the time for your activity to get a seo company georgetown texas if you‘re searching for some new seo company georgetown texas.
                </Typography>
                <Typography variant="body-xl" className="mx-auto mt-4 max-w-4xl leading-relaxed text-white/90 font-semibold">
                  FIND OUT WHERE YOU CAN GROW Contact Geekonomy to learn more about your SEO objectives and how you can increase your website’s presence in organic listings, attract more targeted traffic, and generate high-quality search traffic.
                </Typography>
                <div className="mt-7 flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center">
                    <a href="#contact" onClick={handleScrollToContact} className="inline-flex w-auto items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#69AE44] to-[#8FCB63] px-7 py-4 text-sm font-semibold text-black transition-transform hover:scale-[1.03] sm:w-auto">
                        <Typography variant="body-lg" className="font-semibold text-black">
                          Ready to Grow Your Search Visibility?
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