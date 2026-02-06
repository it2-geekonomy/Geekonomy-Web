"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Typography } from "@/components/ui/Typography";
import ChaosLetters from "./ChaosLetters";

export default function HeroMobile() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="lg:hidden relative w-full min-h-screen flex flex-col items-center justify-start py-8"
      initial={{ x: "-100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        duration: 3,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {/* Dark olive green rounded rectangle container - positioned slightly to the right */}
      <div className="relative mr-4 min-h-[85vh] bg-[#6FAF4E66] rounded-tr-4xl rounded-br-4xl p-6 sm:p-8 flex flex-col space-y-5 sm:space-y-8 md:space-y-10">
        {/* Top section with green line and intro text */}
        <div className="flex items-center gap-3 mb-4 pt-6">
          <div className="h-1 w-12 bg-[#6FAF4E]" />
          <Typography as="p" variant="base" className="text-white font-normal">
            We help business grow with
          </Typography>
        </div>

        {/* CLARITY text - spaced letters */}
        <div className="">
          <div className="flex gap-7 items-center justify-center sm:gap-3">
            {["C", "L", "A", "R", "I", "T", "Y"].map((letter, index) => (
              <Typography
                key={index}
                as="span"
                variant="4xl"
                className="text-[#6FAF4E] leading-[1.1]"
                fontWeight={275}
              >
                {letter}
              </Typography>
            ))}
          </div>
        </div>

        {/* Gray horizontal line */}
        <div className="h-px w-70 sm:w-95 md:w-120 bg-[#A0A0A08C] mx-auto" />

        {/* OVER CHAOS text - same as desktop */}
        <div className="">
          <div className="flex items-baseline gap-4 justify-center">
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
        <div className="space-y-4 mb-4">
          <Typography as="p" variant="base" className="text-white font-light leading-relaxed">
            Geekonomy partners with founders and leadership teams to build brands, digital systems and marketing that are designed to last, not just launch.
          </Typography>
          <Typography as="p" variant="base" className="text-white font-light">
            Strategy-led. Thoughtfully built. Carefully executed.
          </Typography>
        </div>
      </div>

      {/* Call-to-Action Button */}
      <div className="w-full max-w-[280px] mx-auto text-center mt-8">
        <Link
          href="/contact"
          className="inline-block bg-[#3a4a3a] border border-[#6FAF4E] text-white px-8 py-3 rounded-full font-semibold uppercase transition-all duration-200 hover:bg-[#3a4a3a]/90 hover:scale-105"
        >
          <Typography as="span" variant="sm" className="font-normal">
            START A CONVERSATION
          </Typography>
        </Link>
      </div>
    </motion.div>
  );
}
