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
                  Ready to Build a Brand That Stands Out?
                </Typography>

                <Typography variant="body-xl" className="mx-auto mt-5 max-w-4xl leading-relaxed text-white/90">
                  How To Build A Strong Brand Your brand should clearly identify to the customers who you are and what you do and why you do it. This is a mission that can be supported well by an expert marketing agency. If you are starting a new venture or taking your start-up to the next level or just rebranding an established identity then the detailed branding strategy of a good design agency in Bangalore could help you pave the way for your business success.
                </Typography>
                <Typography variant="body-xl" className="mx-auto mt-4 max-w-4xl leading-relaxed text-white/90">
                  Discuss your goals, target market and branding needs with Geekonomy. We will advise you on the best path of action and create a brand for you that is unique, unified and expandable.
                </Typography>

                <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center">
                    <a href="#contact" onClick={handleScrollToContact} className="inline-flex w-auto items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#69AE44] to-[#8FCB63] px-7 py-4 text-sm font-semibold text-black transition-transform hover:scale-[1.03] sm:w-auto">
                        <Typography variant="body-lg" className="font-semibold text-black">
                          Start Building Your Brand
                        </Typography>
                        <ArrowRight/>
                    </a>
                    <a href="#contact" onClick={handleScrollToContact} className="inline-flex w-64 items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10 sm:w-auto">
                        <Typography variant="body-lg" className="font-semibold text-white">
                        Talk to Our Branding Team
                        </Typography>
                    </a>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}