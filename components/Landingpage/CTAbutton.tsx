import { Typography } from "@/components/ui/Typography";
import { ArrowRight } from "lucide-react";
import { handleScrollToContact } from "@/components/Scrolltosection/Scrolltocontact";

interface CTAButtonProps {
  text: string;
  href?: string;
}

export default function CTAButton({ text, href = "#contact" }: CTAButtonProps) {
  return (
    <section id="cta" className="bg-black pt-0 pb-7 lg:pb-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mt-0 flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center">
          <a
            href={href}
            onClick={handleScrollToContact}
            className="inline-flex w-auto items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#69AE44] to-[#8FCB63] px-7 py-4 transition-transform hover:scale-[1.03]"
          >
            <Typography variant="body-lg" className="font-semibold text-black">
              {text}
            </Typography>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}