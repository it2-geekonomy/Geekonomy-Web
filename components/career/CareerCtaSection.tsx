import Link from "next/link";
import { CareerPageSection } from "@/components/career/CareerPageSection";
import { Typography } from "@/components/ui/Typography";

export default function CareerCtaSection() {
  return (
    <CareerPageSection
      className="bg-black py-7 sm:py-20 lg:py-24"
      innerClassName="flex flex-col items-center py-4 text-center sm:py-8"
    >
      <Typography
        as="p"
        variant="overline"
        className="mb-6 font-normal tracking-widest text-[#69AE44] sm:mb-8"
      >
        // THE FIRST STEP
      </Typography>

      <Typography
        as="h2"
        variant="display-2xl"
        className="mb-5 text-[28px] font-bold leading-tight text-white sm:mb-6 sm:text-[36px] md:text-[42px]"
      >
        Don&apos;t see your role?
      </Typography>

      <Typography
        as="p"
        variant="body-xl"
        className="mb-10 max-w-lg font-normal leading-relaxed text-[#A1A1AA] sm:mb-12"
      >
        We&apos;re always open to exceptional people. Send us your work.
      </Typography>

      <Link
        href="/contact-us"
        className="inline-block rounded-full border-2 border-[#69AE44] bg-transparent px-10 py-3 text-sm font-semibold uppercase tracking-wide text-[#69AE44] transition-all duration-200 hover:bg-[#69AE44] hover:text-black sm:px-12 sm:py-3.5 sm:text-base"
      >
        START A CONVERSATION
      </Link>
    </CareerPageSection>
  );
}
