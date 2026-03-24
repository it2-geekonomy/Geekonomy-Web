"use client";

import { Typography } from "@/components/ui/Typography";
import CoreCapabilitiesSection from "@/components/sections/CoreCapabilitiesSection";
import ScrollRevealSection from "@/components/animations/ScrollRevealSection";

export default function WhatWeDoPage() {
  return (
    <main className="min-h-screen bg-black relative overflow-hidden">
      <ScrollRevealSection index={0}>
        <section className="relative w-full flex flex-col justify-center lg:pt-[clamp(2.5rem,2.5rem+2vw,8rem)]">
          <div className="mx-4 sm:mx-6 lg:mx-12 xl:mx-[clamp(0.5rem,0.5rem+8vw,10rem)] 2xl:mx-[clamp(1rem,1rem+12vw,22rem)]">
            <div className="w-full px-4 sm:px-6 lg:px-10">
              {/* Main Title - Centered */}
              <div className="text-center mb-12 lg:mb-16">
                <Typography
                  as="h1"
                  variant="display-xl"
                  className="text-white font-semibold uppercase tracking-tight"
                >
                  WHAT WE DO?
                </Typography>
              </div>

              {/* Content - Left Aligned */}
              <div className="space-y-6 lg:space-y-8">
                {/* Headline */}
                <Typography
                  as="h2"
                  variant="h2"
                  className="text-white font-normal leading-tight"
                >
                  We create structure where growth takes shape.
                </Typography>

                {/* Body Text */}
                <Typography
                  as="p"
                  variant="body-xl"
                  className="text-white font-normal leading-relaxed max-w-7xl"
                >
                  At{" "}
                  <span className="text-[#6eaf4c]">Geekonomy</span>
                  , our work focuses on bringing clarity and alignment to how businesses grow. We connect strategy, tech, branding and marketing into integrated frameworks that support scale, consistency and long-term progress. Rather than isolated efforts, we focus on building systems that work together allowing businesses to move forward with confidence and intent.
                </Typography>
              </div>
            </div>
          </div>
        </section>
      </ScrollRevealSection>

      {/* Core Capabilities Section */}
      <ScrollRevealSection index={1} mode="simple">
        <section className="relative w-full bg-black">
          <div className="w-full px-4 sm:px-6 lg:px-10">
            <div className="px-4 sm:px-6 lg:px-10 lg:mx-14 xl:mx-[clamp(0.5rem,0.5rem+10vw,10rem)] 2xl:mx-[clamp(1rem,1rem+15vw,22rem)]">
              <CoreCapabilitiesSection />
            </div>
          </div>
        </section>
      </ScrollRevealSection>

      {/* How It Comes Together & Our Role Section */}
      <ScrollRevealSection index={2}>
        <section className="relative bg-black pb-[clamp(2.5rem,2.5rem+2vw,8rem)] mx-4 sm:mx-6 lg:mx-12 xl:mx-[clamp(0.5rem,0.5rem+8vw,10rem)] 2xl:mx-[clamp(1rem,1rem+12vw,22rem)]">
        <div className="w-full px-4 lg:pl-[clamp(3rem,3rem+3vw,8rem)]">
          <div className="max-w-4xl space-y-16 lg:space-y-20">
            {/* How It Comes Together */}
            <div>
              <Typography
                as="h2"
                variant="h2"
                className="text-white font-normal leading-tight mb-6"
              >
                How It Comes Together
              </Typography>
              <Typography
                as="p"
                variant="body-xl"
                className="text-white font-normal leading-relaxed"
              >
                Our work is designed to function as a connected ecosystem. Each part supports the other creating alignment, reducing friction and enabling steady progress.
              </Typography>
            </div>

            {/* Our Role */}
            <div>
              <Typography
                as="h2"
                variant="h2"
                className="text-white font-normal leading-tight mb-6"
              >
                Our Role
              </Typography>
              <Typography
                as="p"
                variant="body-xl"
                className="text-white font-normal leading-relaxed"
              >
                We work closely with teams as long-term partners. Our focus is on thoughtful execution, continuous refinement, and building systems that remain effective as businesses evolve.
              </Typography>
            </div>
          </div>
        </div>
      </section>
      </ScrollRevealSection>
    </main>
  );
}
