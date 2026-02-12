"use client";

import Image from "next/image";
import { Typography } from "@/components/ui/Typography";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

export default function FoundersNote() {
  return (
    <section className="w-full bg-black text-white py-2 pb-10 md:pb-0 px-6 sm:px-8 md:px-12 xl:px-[clamp(100px,100px+2vw,20px)] 2xl:px-[clamp(180px,180px+2vw,20px)]">
      {/* Heading - Mobile Only */}
      <div className="text-left mb-5 lg:hidden">
        <Typography
          as="h2"
          variant="3xl"
          className="font-semi-bold"
        >
          Founder's Note
        </Typography>
      </div>

      {/* Content Container - Text Left, Image Right on Desktop */}
      <div className="flex flex-col items-center lg:flex-row lg:items-start gap-10 xl:gap-[clamp(100px,100px+2vw,20px)] -mt-2 lg:mt-0">
        {/* Left Side Container */}
        <div className="w-full  order-2 lg:order-1 flex flex-col max-w-7xl">
          {/* Heading - Desktop Only, at top aligned with image top */}
          <div className="hidden lg:block text-left lg:ml-2 xl:ml-0 mb-6">
            <Typography
              as="h2"
              variant="3xl"
              className="font-semi-bold"
            >
              Founder's Note
            </Typography>
          </div>
          
          {/* Text Box */}
          <div className="2xl:translate-y-[clamp(50px,50px+2vw,15px)]">
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
                    When strategy, tech, branding and marketing work together as a system, businesses move forward with clarity, confidence and consistency.
                  </Typography>

                  <Typography
                    as="p"
                    variant="base"
                    className="text-[#FFFFFF] leading-relaxed"
                  >
                    That belief shapes everything we do at Geekonomy. Our focus is on building growth systems that are connected structures that evolve with the business and support long-term progress. Building with intent, clarity and purpose guides every decision we make.&rdquo;
                  </Typography>
                </div>
              </div>
            </HoverBorderGradient>
          </div>
        </div>

        {/* Image - Right on Desktop, First on Mobile */}
        <div className="w-4/5 lg:w-[clamp(350px,350px+2vw,250px)] xl:w-[clamp(250px,250px+2vw,400px)] shrink-0 order-1 lg:order-2">
          <div className="relative w-full">
            <Image
              src="/Arjun Self-Potrait.webp"
              alt="Arjun"
              width={600}
              height={600}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
