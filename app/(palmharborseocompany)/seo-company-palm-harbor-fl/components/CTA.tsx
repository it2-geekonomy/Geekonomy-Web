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
                  Grow Your Business With SEO in Palm Harbor
                </Typography>

                <Typography variant="body-xl" className="mx-auto mt-5 max-w-4xl leading-relaxed text-white/90">
                  Your next prospect may be looking for your services right now. With a targeted SEO campaign, your business can be found during the moment of highest intent, when prospects are ready to move forward.
                </Typography>
                <Typography variant="body-xl" className="mx-auto mt-4 max-w-4xl leading-relaxed text-white/90">
                  Within Geekonomy we bring together local seo, technical seo, content planning and authority building to craft a search existence that makes sense for your business objectives. Whether you are seeking increased local visibility, relevant website visitors, phone calls or enquiries then your plan can be formulated on tangible results.
                </Typography>
                <Typography variant="body-xl" className="mx-auto mt-4 max-w-4xl leading-relaxed text-white/90">
                  Partner with a Palm Harbor SEO company that considers rankings only half of the story by building a high-value opportunity for your business.
                </Typography>
                <Typography variant="body-xl" className="mx-auto mt-4 max-w-4xl leading-relaxed text-white/90 font-semibold">
                  Are you ready to enhance your search presence?
                </Typography>

                <div className="mt-7 flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center">
                    <a href="#contact" onClick={handleScrollToContact} className="inline-flex w-auto items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#69AE44] to-[#8FCB63] px-7 py-4 text-sm font-semibold text-black transition-transform hover:scale-[1.03] sm:w-auto">
                        <Typography variant="body-lg" className="font-semibold text-black">
                          Get Your Free SEO Consultation
                        </Typography>
                        <ArrowRight/>
                    </a>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}