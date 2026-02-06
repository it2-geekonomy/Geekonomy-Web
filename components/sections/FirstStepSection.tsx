"use client";

import Link from "next/link";
import { Typography } from "@/components/ui/Typography";

export default function FirstStepSection() {
  return (
    <section className="relative w-full flex items-center justify-center bg-black py-[clamp(2.5rem,2.5rem+2vw,8rem)]">
      <div className="w-full max-w-4xl px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col items-center text-center">
          {/* Vertical green line with gradient */}
          <div className="w-1 h-12 mb-4 bg-[linear-gradient(to_bottom,transparent,#6eaf4c)]" />
          <Typography
            as="p"
            variant="base"
            className="text-[#6eaf4c] uppercase font-normal tracking-wider"
          >
            THE FIRST STEP
          </Typography>

          {/* Main Heading - "No pressure." */}
          <Typography
            as="h2"
            variant="4xl"
            className="text-white font-normal leading-tight"
          >
            No pressure.
          </Typography>

          {/* Main Heading - "No assumptions." */}
          <Typography
            as="h2"
            variant="4xl"
            className="font-normal text-[#6eaf4c] mb-8 leading-tight"
          >
            No assumptions.
          </Typography>

          {/* Descriptive Paragraph */}
          <Typography
            as="p"
            variant="base"
            className="text-gray-400 max-w-xl mb-12 leading-relaxed"
          >
            Just a clear discussion on where you are, where you want to go, and what actually needs to be built to get there.
          </Typography>

          {/* Call-to-Action Button */}
          <Link
            href="/contact"
            className="inline-block bg-[#6eaf4c] text-white px-10 py-3 rounded-full font-semibold uppercase transition-all duration-200 hover:bg-[#6eaf4c]/90 hover:scale-105"
          >
            <Typography as="span" variant="sm" className="font-normal">
              START A CONVERSATION
            </Typography>
          </Link>
        </div>
      </div>
    </section>
  );
}
