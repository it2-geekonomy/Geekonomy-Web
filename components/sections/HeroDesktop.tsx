"use client";

import { useState } from "react";
import Link from "next/link";
import { Typography } from "@/components/ui/Typography";
import ChaosLetters from "./ChaosLetters";
import ClarityHeading from "./ClarityHeading";

export default function HeroDesktop() {
  const [isHovered, setIsHovered] = useState(false);
  const [isClarityHovered, setIsClarityHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  return (
    <div className="hidden lg:block relative z-10 w-full px-4 sm:px-6 lg:px-10 py-8 lg:py-30">
      {/* Green gradient background from bottom-left to top-right */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_top_right,transparent,transparent,rgba(34,197,94,0.1))]" />
      
      <div className="xl:pl-[clamp(1rem,1rem+12vw,4rem)]">
        {/* Introductory text with green line */}
        <div className="flex flex-col lg:flex-row items-center lg:items-center gap-4 mb-6 xl:mb-10">
          <div className="h-8 w-1 lg:h-1 lg:w-12 bg-[#6FAF4E]" />
          <Typography as="p" variant="2xl" className="text-white font-normal text-center lg:text-left">
            We help businesses grow with
          </Typography>
        </div>

        {/* Main Heading */}
        <div className="mb-5">
          <div className="text-center lg:text-left relative">
            <ClarityHeading
              isClarityHovered={isClarityHovered}
              mousePosition={mousePosition}
              onMouseEnter={() => setIsClarityHovered(true)}
              onMouseLeave={() => {
                setIsClarityHovered(false);
                setMousePosition({ x: 0, y: 0 });
              }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                setMousePosition({
                  x: e.clientX - rect.left,
                  y: e.clientY - rect.top,
                });
              }}
            />
          </div>
          {/* Gray horizontal line */}
          <div className="h-px w-84 sm:w-95 md:w-120 lg:w-130 xl:w-140 bg-[#414340] mb-3 mx-auto lg:mx-0" />
          <div className="flex items-baseline gap-18 justify-center lg:justify-start">
            <Typography
              as="h2"
              variant="5xl"
              className="font-bold text-white leading-[1.1]"
              letterSpacing="-0.125em"
            >
              OVER
            </Typography>
            <ChaosLetters
              isHovered={isHovered}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
          </div>
        </div>

        {/* Descriptive Text */}
        <div className="mb-10 space-y-5 text-center lg:text-left">
          <Typography as="p" variant="base" className="text-white font-light leading-relaxed lg:max-w-xl xl:max-w-3xl mx-auto lg:mx-0 text-justify">
            Geekonomy partners with founders and leadership teams to build brands, digital systems and marketing that are designed to last, not just launch.
          </Typography>
          <Typography as="p" variant="base" className="text-white font-light">
            Strategy-led. Thoughtfully built. Carefully executed.
          </Typography>
        </div>

        {/* Call-to-Action Button - Centered on mobile, absolute on desktop */}
        <div className="relative lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 w-full lg:w-auto text-center lg:text-left">
          <Link
            href="/contact-us#form"
            className="inline-block bg-[#6eaf4c] text-white px-10 py-3 rounded-full font-semibold uppercase transition-all duration-200 hover:bg-[#6eaf4c]/90 hover:scale-105"
          >
            <Typography as="span" variant="sm" className="font-normal">
              START A CONVERSATION
            </Typography>
          </Link>
        </div>
      </div>
    </div>
  );
}
