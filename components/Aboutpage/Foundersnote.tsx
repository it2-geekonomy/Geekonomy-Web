"use client";

import Image from "next/image";
import { Typography } from "@/components/ui/Typography";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

export default function FoundersNote() {
  return (
    <section className="w-full bg-black text-white py-2 pb-10 md:pb-0 px-6 sm:px-8 md:px-12 lg:px-16">
      {/* Heading */}
      <div className="text-left mb-5 lg:mb-0 lg:ml-2 xl:ml-16 2xl:ml-32">
        <Typography
          as="h2"
          variant="3xl"
          className="font-semi-bold"
        >
          Founder's Note
        </Typography>
      </div>

      {/* Content Container - Text Left, Image Right on Desktop */}
      <div className="flex flex-col items-center lg:flex-row lg:items-center gap-0 lg:gap-10 xl:gap-12 2xl:gap-16 lg:ml-0 xl:ml-16 2xl:ml-32 -mt-2 lg:mt-0">
        {/* Text Box - Left on Desktop, Second on Mobile */}
        <div className="w-full lg:w-1/2 xl:w-3/5 order-2 lg:order-1">
          <HoverBorderGradient
            containerClassName="w-full rounded-none"
            className="w-full"
          >
            <div className="relative bg-[#111111] p-6 lg:p-8 w-full">
              {/* Top Left - Hidden on hover */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-[#6eaf4c]/50 group-hover:opacity-0 transition-opacity duration-300" />
              {/* Bottom Right - Hidden on hover */}
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-[#6eaf4c]/50 group-hover:opacity-0 transition-opacity duration-300" />

              <div className="space-y-6">
                <Typography
                  as="p"
                  variant="base"
                  className="text-[#FFFFFF] leading-relaxed"
                >
                  &ldquo;Geekonomy was founded with a clear belief, growth is most effective when it is intentional and well structured.
                  When strategy, tech, branding and marketing work together as a system, businesses move forward with clarity, confidence and consistency.&rdquo;
                </Typography>

                <Typography
                  as="p"
                  variant="base"
                  className="text-[#FFFFFF] leading-relaxed"
                >
                  &ldquo;That belief shapes everything we do at Geekonomy. Our focus is on building growth systems that are connected structures that evolve with the business and support long-term progress. Building with intent, clarity and purpose guides every decision we make.&rdquo;
                </Typography>
              </div>
            </div>
          </HoverBorderGradient>
        </div>

        {/* Image - Right on Desktop, First on Mobile */}
        <div className="w-4/5 lg:w-[clamp(400px,400px+2vw,400px)] shrink-0 order-1 lg:order-2">
          <div className="relative w-full">
            <Image
              src="/Arjun Self-Potrait.webp"
              alt="Arjun"
              width={600}
              height={600}
              className="w-full h-full object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
