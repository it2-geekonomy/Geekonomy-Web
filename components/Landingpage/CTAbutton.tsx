import { Typography } from "@/components/ui/Typography";
import { ArrowRight } from "lucide-react";
import { handleScrollToContact } from "@/components/Scrolltosection/Scrolltocontact";
<<<<<<< HEAD

interface CTAButtonProps {
  text: string;
  href?: string;
}
=======
import Link from "next/link";
import { CTAButtonProps } from "@/lib/constants/Landingpagetypes";
>>>>>>> 90330df232d63e4529553dd5d67ba34e58ee68f8

export default function CTAButton({ text, href = "#contact" }: CTAButtonProps) {
  return (
    <section id="cta" className="bg-black pt-0 pb-7 lg:pb-10">
<<<<<<< HEAD
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
=======
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
>>>>>>> 90330df232d63e4529553dd5d67ba34e58ee68f8
      </div>
    </section>
  );
}