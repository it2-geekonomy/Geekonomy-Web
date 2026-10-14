import { ArrowRight } from "lucide-react";
import { Typography } from "@/components/ui/Typography";
import { handleScrollToContact } from "@/components/Scrolltosection/Scrolltocontact";
import { Boldtext } from "./Boldtext";
<<<<<<< HEAD

export interface CTAContent {
  heading: string;
  paragraphs: string[];
  buttonText: string;
}

interface CTAProps {
  content: CTAContent;
}

export default function CTA({ content }: CTAProps) {
  const { heading, paragraphs, buttonText } = content;

  return (
    <section id="cta" className="bg-black py-8 lg:py-10">
      <div className="mx-auto max-w-full">
        <div className="relative overflow-hidden border border-white/10 bg-[#69AE44]/20 px-8 py-16 text-center sm:px-16">
          <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-[#69AE44]/25 blur-[6.25rem]" />
          <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-[#69AE44]/15 blur-[6.25rem]" />

          <div className="relative mx-auto max-w-5xl">
            <Typography variant="display-2xl" as="p" className="text-white leading-tight">
              {heading}
            </Typography>

            <div className="mx-auto mt-5 max-w-4xl space-y-4">
=======
import Link from "next/link";
import { CTAProps } from "@/lib/constants/Landingpagetypes";


export default function CTA({ content }: Readonly<CTAProps>) {
  const { heading, paragraphs, buttonText } = content;

  return (
    <section id="cta" className="flex w-full justify-center bg-black my-6 sm:my-8 lg:my-10">
      <div className="relative flex w-full overflow-hidden border border-white/10 bg-[#69AE44]/20 px-4 py-10 sm:px-8 sm:py-12 md:px-12 md:py-14 lg:px-16 lg:py-16">
        <div
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
>>>>>>> 90330df232d63e4529553dd5d67ba34e58ee68f8
              {paragraphs.map((paragraph, i) => (
                <Typography key={i} variant="body-xl" className="leading-relaxed text-white/90">
                  {Boldtext(paragraph)}
                </Typography>
              ))}
            </div>
<<<<<<< HEAD

            <div className="mt-7 flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center">
              <a
                href="#contact"
                onClick={handleScrollToContact}
                className="inline-flex w-auto items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#69AE44] to-[#8FCB63] px-7 py-4 text-sm font-semibold text-black transition-transform hover:scale-[1.03]"
              >
                <Typography variant="body-lg" className="font-semibold text-black">
                  {buttonText}
                </Typography>
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
=======
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
>>>>>>> 90330df232d63e4529553dd5d67ba34e58ee68f8
          </div>
        </div>
      </div>
    </section>
  );
}