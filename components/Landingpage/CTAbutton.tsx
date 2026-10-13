import { Typography } from "@/components/ui/Typography";
import { ArrowRight } from "lucide-react";
import { handleScrollToContact } from "@/components/Scrolltosection/Scrolltocontact";
import Link from "next/link";
import { CTAButtonProps } from "@/lib/constants/Landingpagetypes";

export default function CTAButton({ text, href = "#contact" }: CTAButtonProps) {
  return (
    <section id="cta" className="bg-black pt-0 pb-7 lg:pb-10">
      <div className=" px-6 lg:px-78">
         <div className="flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center">

            <Link
              href={href}
              onClick={handleScrollToContact}
              className="group inline-flex w-auto items-center justify-center gap-2 bg-[#69AE44] text-white border-2 border-transparent px-10 py-3 rounded-full text-sm font-semibold transition-all duration-200 hover:bg-transparent hover:border-[#69AE44] hover:scale-105"
            >
              <Typography as="span" variant="body-lg" className=" text-white group-hover:text-[#69AE44] transition-colors duration-200">
                {text}
              </Typography>
              <ArrowRight className="h-4 w-4 group-hover:text-[#69AE44] transition-colors" />
            </Link>
          </div>
      </div>
    </section>
  );
}