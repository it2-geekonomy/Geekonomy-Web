"use client";

import Link from "next/link";
import { Typography } from "@/components/ui/Typography";

export default function HeroSection() {
  return (
    <section className="relative w-full flex items-center bg-black overflow-hidden">
      {/* Green gradient background from bottom-left to top-right */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to top right, transparent, transparent, rgba(34, 197, 94, 0.1))'
        }}
      />
      
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-10 py-20 lg:py-32">
        <div className="pl-[clamp(1rem,1rem+10vw,16rem)]">
          {/* Introductory text with green line */}
          <div className="flex items-center gap-4 mb-8">
            <div className="h-1 w-12 bg-[#6eaf4c]" />
            <Typography as="p" variant="lg" className="text-white font-normal">
              We help businesses grow with
            </Typography>
          </div>

          {/* Main Heading */}
          <div className="mb-10">
            <Typography
              as="h1"
              variant="5xl"
              className="font-medium text-[#6eaf4c] mb-3 leading-[1.1]"
            >
              CLARITY
            </Typography>
            <Typography
              as="h2"
              variant="5xl"
              className="font-medium  text-white leading-[1.1]"
            >
              NOT CHAOS
            </Typography>
          </div>

          {/* Descriptive Text */}
          <div className="mb-10 space-y-5">
            <Typography as="p" variant="base" className="text-white leading-relaxed">
              Geekonomy partners with founders and leadership teams to build brands, digital systems and marketing that are designed to last, not just launch.
            </Typography>
            <Typography as="p" variant="base" className="text-white">
              Strategy-led. Thoughtfully built. Carefully executed.
            </Typography>
          </div>

          {/* Call-to-Action Button - Centered on screen */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-full max-w-fit">
            <Link
              href="/contact"
              className="inline-block bg-[#6eaf4c] text-white px-8 py-4 rounded-full font-semibold uppercase transition-all duration-200 hover:bg-[#6eaf4c]/90 hover:scale-105 text-center"
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
