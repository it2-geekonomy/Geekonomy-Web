"use client";

import Link from "next/link";
import { Typography } from "@/components/ui/Typography";

export default function HeroSection() {
  return (
    <section className="relative w-full flex items-center bg-black overflow-hidden">
      {/* Green gradient background from bottom-left to top-right */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_top_right,transparent,transparent,rgba(34,197,94,0.1))]" />
      
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-10 py-20 lg:py-32">
        <div className="lg:pl-[clamp(1rem,1rem+8vw,10rem)] xl:pl-[clamp(1rem,1rem+12vw,16rem)]">
          {/* Introductory text with green line */}
          <div className="flex items-center gap-4 mb-10">
            <div className="h-1 w-12 bg-[#6FAF4E]" />
            <Typography as="p" variant="2xl" className="text-white font-normal">
              We help businesses grow with
            </Typography>
          </div>

          {/* Main Heading */}
          <div className="mb-5">
            <Typography
              as="h1"
              variant="3xl"
              className="text-[#6FAF4E] mb-6 leading-[1.1]"
              letterSpacing="1em"
              fontWeight={275}
            >
              CLARITY
            </Typography>
            {/* Gray horizontal line */}
            <div className="h-px w-90 sm:w-120 lg:w-130 xl:w-140 bg-[#414340] mb-3" />
            <div className="flex items-baseline gap-18">
              <Typography
                as="h2"
                variant="5xl"
                className="font-bold text-white leading-[1.1]"
                letterSpacing="-0.125em"
              >
                NOT
              </Typography>
              <Typography
                as="h2"
                variant="5xl"
                className="font-bold text-white leading-[1.1]"
                letterSpacing="-0.125em"
              >
                CHAOS
              </Typography>
            </div>
          </div>

          {/* Descriptive Text */}
          <div className="mb-10 space-y-5">
            <Typography as="p" variant="base" className="text-white font-light leading-relaxed max-w-3xl">
              Geekonomy partners with founders and leadership teams to build brands, digital systems and marketing that are designed to last, not just launch.
            </Typography>
            <Typography as="p" variant="base" className="text-white font-light">
              Strategy-led. Thoughtfully built. Carefully executed.
            </Typography>
          </div>

          {/* Call-to-Action Button - Centered on screen */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-full max-w-fit">
            <Link
              href="/contact"
              className="inline-block bg-[#6eaf4c] text-white px-10 py-3 rounded-full font-semibold uppercase transition-all duration-200 hover:bg-[#6eaf4c]/90 hover:scale-105 text-center"
            >
              <Typography as="span" variant="sm" className="font-normal">
                START A CONVERSATION
              </Typography>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
