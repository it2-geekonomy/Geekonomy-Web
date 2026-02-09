"use client";

import { Typography } from "@/components/ui/Typography";

export default function FoundersNote() {
  return (
    <section className="w-full bg-black text-white py-2 px-6 sm:px-8 md:px-12 lg:px-16">
      {/* Heading */}
      <div className="text-left mb-12 lg:ml-2 xl:ml-16 2xl:ml-32">
        <Typography
          as="h2"
          variant="3xl"
          className="font-semi-bold"
        >
          Founder’s Note
        </Typography>
      </div>

      {/* Cards Container */}
      <div className="flex flex-col gap-8 lg:flex-row lg:gap-10 xl:gap-12 2xl:gap-28 lg:ml-0 xl:ml-16 2xl:ml-32">
        {/* Card 1 */}
        <div className="relative bg-[#111111] p-6 lg:p-8 flex-1 w-full">
          {/* Top Left */}
          <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-[#6eaf4c]/50" />
          {/* Bottom Right */}
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-[#6eaf4c]/50" />

          <Typography
            as="p"
            variant="base"
            className="text-[#FFFFFF]"
          >
            Geekonomy was founded with a clear belief, growth is most effective when it is intentional and well structured.
            When strategy, tech, branding and marketing work together as a system, businesses move forward with clarity, confidence and consistency.
          </Typography>
        </div>

        {/* Card 2 */}
        <div className="relative bg-[#111111] p-6 lg:p-12 flex-1 w-full">
          {/* Top Left */}
          <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-[#6eaf4c]/50" />
          {/* Bottom Right */}
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-[#6eaf4c]/50" />

          <Typography
            as="p"
            variant="base"
            className="text-[#FFFFFF]"
          >
            That belief shapes everything we do at Geekonomy. Our focus is on building growth systems that are connected structures that evolve with the business and support long-term progress. Building with intent, clarity and purpose guides every decision we make.
          </Typography>
        </div>
      </div>
    </section>
  );
}
