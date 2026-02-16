"use client";

import Link from "next/link";
import { Typography } from "@/components/ui/Typography";

export default function DisconnectSection() {
  return (
    <section className="relative w-full bg-black py-10 lg:py-[clamp(2.5rem,2.5rem+2vw,8rem)]">
      <div className="w-full px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 xl:gap-16 lg:mx-8 xl:mx-[clamp(0.5rem,0.5rem+6vw,10rem)] 2xl:mx-[clamp(1rem,1rem+10vw,20rem)]">
          {/* Left Section - Main Content */}
          <div>
            {/* Introductory Text */}
            <Typography
              as="p"
              variant="lg"
              className="text-[#69AE44] mb-6 font-normal"
            >
              // THE DISCONNECT
            </Typography>

            {/* Main Heading */}
            <div className="mb-10">
              <Typography
                as="h2"
                variant="3xl"
                className="text-white font-normal leading-tight mb-2 lg:max-w-lg"
              >
                Brand, technology and marketing are pulling in
              </Typography>
              <Typography
                as="span"
                variant="3xl"
                className="text-[#69AE44] font-normal leading-tight"
              >
                different directions.
              </Typography>
            </div>

            {/* Bullet Points */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="h-px w-8 bg-[#69AE44] shrink-0 mt-2" />
                <Typography as="p" variant="base" className="text-white flex-1">
                  That's where things slow down.
                </Typography>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-px w-8 bg-[#69AE44] shrink-0 mt-2" />
                <Typography as="p" variant="base" className="text-white flex-1">
                  That's where money leaks.
                </Typography>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-px w-8 bg-[#69AE44] shrink-0 mt-2" />
                <Typography as="p" variant="base" className="text-white flex-1">
                  That's where growth becomes unpredictable.
                </Typography>
              </div>
            </div>
          </div>

          {/* Right Section - The Geekonomy Approach Box */}
          <div className="sm:pt-[clamp(1rem,1rem+10vw,5rem)]">
            <div className="relative bg-black pt-8 px-8 pb-6 flex flex-col">
              {/* Top Left */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-[#69AE44]" />
              {/* Bottom Right */}
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-[#69AE44]" />
              
              {/* Heading */}
              <Typography
                as="p"
                variant="base"
                className="text-white font-semibold mb-6"
              >
                The Geekonomy Approach
              </Typography>

              {/* Descriptive Text */}
              <Typography
                as="p"
                variant="base"
                className="text-white mb-10 text-justify"
              >
                We exist to bring structure, alignment and direction to that chaos. We don't just patch holes; we rebuild the foundation so you can move forward with confidence.
              </Typography>

              {/* Call to Action */}
              <Link
                href="/how-we-work"
                className="font-semibold text-[#69AE44] transition-colors duration-200 inline-flex items-center gap-2"
              >
                <Typography as="span" variant="base" className="font-semibold">
                  SEE OUR PROCESS →
                </Typography>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
