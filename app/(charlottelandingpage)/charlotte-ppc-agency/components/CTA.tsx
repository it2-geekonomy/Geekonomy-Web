import { ArrowRight } from "lucide-react";
import { Typography } from "@/components/ui/Typography";
import { handleScrollToContact } from "@/components/Scrolltosection/Scrolltocontact";

export default function CTA() {
  return (
    <section className="bg-black py-8 lg:py-10">
      <div className="mx-auto max-w-full">
        <div className="relative overflow-hidden border border-white/10 bg-[#69AE44]/20 px-8 py-16 text-center sm:px-16">
          <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-[#69AE44]/25 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-[#69AE44]/15 blur-[100px]" />

          <div className="relative">
            <Typography
              variant="display-xl"
              as="p"
              className="mx-auto max-w-4xl text-white text-2xl sm:text-4xl lg:text-5xl leading-[1.1]"
            >
              Ready to turn your ad spend into qualified leads?        
            </Typography>

            <Typography variant="body-xl" className="mx-auto mt-5 max-w-4xl leading-relaxed text-white/90">
            Get a free PPC strategy built around your market, customers, and goals — with a clear plan for improving cost per lead and return on ad spend.
            </Typography>

            <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center">
  <a href="#contact" onClick={handleScrollToContact} className="inline-flex w-auto items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#69AE44] to-[#8FCB63] px-7 py-4 text-sm font-semibold text-black transition-transform hover:scale-[1.03] sm:w-auto">
    <Typography variant="body-lg" className="font-semibold text-black">
      Get a Free PPC Strategy
    </Typography>
  </a>
  <a href="#contact" onClick={handleScrollToContact} className="inline-flex w-64 items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10 sm:w-auto">
    <Typography variant="body-lg" className="font-semibold text-white">
      Request an Ad Account Audit
    </Typography>
  </a>
</div>
          </div>
        </div>
      </div>
    </section>
  );
}