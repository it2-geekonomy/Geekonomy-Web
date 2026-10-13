import { ArrowRight } from "lucide-react";
import { Typography } from "@/components/ui/Typography";
import { handleScrollToContact } from "@/components/Scrolltosection/Scrolltocontact";
import { Boldtext } from "./Boldtext";
import Link from "next/link";
import { CTAProps } from "@/lib/constants/Landingpagetypes";


export default function CTA({ content }: Readonly<CTAProps>) {
  const { heading, paragraphs, buttonText } = content;

  return (
    <section id="cta" className="flex w-full justify-center bg-black my-6 sm:my-8 lg:my-10">
      <div className="relative flex w-full overflow-hidden border border-white/10 bg-[#69AE44]/20 px-4 py-10 sm:px-8 sm:py-12 md:px-12 md:py-14 lg:px-16 lg:py-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 flex flex-col justify-between"
        >
          <div className="size-52 self-start bg-gradient-to-br from-[#69AE44] via-[#69AE44]/20 to-transparent blur-[6.25rem] " />
          <div className="size-52 self-end bg-gradient-to-tl from-[#69AE44] via-[#69AE44]/20 to-transparent blur-[6.25rem]" />
        </div>

        <div className="relative flex w-full flex-col items-center gap-6 text-center sm:px-7">
          <div className="flex w-full flex-col items-center gap-4 sm:gap-5 lg:max-w-5xl">
            <Typography variant="display-2xl" as="h2" className="text-white leading-tight">
              {heading}
            </Typography>

            <div className="flex w-full flex-col gap-3 sm:gap-4 ">
              {paragraphs.map((paragraph, i) => (
                <Typography key={i} variant="body-xl" className="leading-relaxed text-white/90">
                  {Boldtext(paragraph)}
                </Typography>
              ))}
            </div>
          </div>

            <div className="flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center">
            <Link
              href="#contact"
              onClick={handleScrollToContact}
              className="group inline-flex w-auto items-center justify-center gap-2 bg-[#69AE44] text-white border-2 border-transparent px-10 py-3 rounded-full text-sm font-semibold transition-all duration-200 hover:bg-transparent hover:border-[#69AE44] hover:scale-105"
            >
              <Typography as="span" variant="body-lg" className=" text-white group-hover:text-[#69AE44] transition-colors duration-200">
                {buttonText}
              </Typography>
              <ArrowRight className="h-4 w-4 group-hover:text-[#69AE44] transition-colors duration-200" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}