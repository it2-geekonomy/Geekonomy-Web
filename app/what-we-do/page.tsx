"use client";

import { Typography } from "@/components/ui/Typography";
import CoreCapabilitiesSection from "@/components/sections/CoreCapabilitiesSection";

export default function WhatWeDoPage() {
  return (
    <main className="min-h-screen bg-black relative overflow-hidden">
      {/* Subtle green gradient/glow from top-right */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#6eaf4c]/10 blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#6eaf4c]/5 blur-[100px] -translate-y-1/3 translate-x-1/3 pointer-events-none" />

      <section className="relative w-full flex flex-col justify-center lg:py-[clamp(2.5rem,2.5rem+2vw,8rem)]">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-24">
          <div className="">
            {/* Main Title - Centered */}
            <div className="text-center mb-12 lg:mb-16">
              <Typography
                as="h1"
                variant="4xl"
                className="text-white font-semibold uppercase tracking-tight"
              >
                WHAT WE DO?
              </Typography>
            </div>

            {/* Content - Left Aligned */}
            <div className="space-y-6 lg:space-y-8 lg:pl-[clamp(3rem,3rem+3vw,8rem)]">
              {/* Headline */}
              <Typography
                as="h2"
                variant="2xl"
                className="text-white font-normal leading-tight"
              >
                We create structure where growth takes shape.
              </Typography>

              {/* Body Text */}
              <Typography
                as="p"
                variant="lg"
                className="text-[#A0A0A0] font-normal leading-relaxed max-w-3xl"
              >
                At{" "}
                <span className="text-[#6eaf4c]">Geekonomy</span>
                , our work focuses on bringing clarity and alignment to how businesses grow. We connect strategy, tech, branding and marketing into integrated frameworks that support scale, consistency and long-term progress. Rather than isolated efforts, we focus on building systems that work together allowing businesses to move forward with confidence and intent.
              </Typography>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities Section */}
      <CoreCapabilitiesSection />

      {/* How It Comes Together & Our Role Section */}
      <section className="relative w-full bg-black py-[clamp(2.5rem,2.5rem+2vw,8rem)] sm:px-6 lg:px-10 xl:px-16 2xl:px-24">
        <div className="w-full px-4 lg:pl-[clamp(3rem,3rem+3vw,8rem)]">
          <div className="max-w-4xl space-y-16 lg:space-y-20">
            {/* How It Comes Together */}
            <div>
              <Typography
                as="h2"
                variant="2xl"
                className="text-white font-normal leading-tight mb-6"
              >
                How It Comes Together
              </Typography>
              <Typography
                as="p"
                variant="base"
                className="text-[#A0A0A0] font-normal leading-relaxed"
              >
                Our work is designed to function as a connected ecosystem. Each part supports the other creating alignment, reducing friction and enabling steady progress.
              </Typography>
            </div>

            {/* Our Role */}
            <div>
              <Typography
                as="h2"
                variant="2xl"
                className="text-white font-normal leading-tight mb-6"
              >
                Our Role
              </Typography>
              <Typography
                as="p"
                variant="base"
                className="text-[#A0A0A0] font-normal leading-relaxed"
              >
                We work closely with teams as long-term partners. Our focus is on thoughtful execution, continuous refinement, and building systems that remain effective as businesses evolve.
              </Typography>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
