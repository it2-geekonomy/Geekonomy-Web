"use client";

import { useState } from "react";
import { Typography } from "@/components/ui/Typography";
import { SERVICES } from "@/lib/constants";

// Arrow icon component
function ArrowIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 17L17 7M17 7H7M17 7V17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative w-full bg-black py-[clamp(2.5rem,2.5rem+2vw,8rem)]">
      <div className="w-full px-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[clamp(80%,1200px+5vw,1500px)]">
          {/* Header Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-16 lg:mb-20">
            {/* Left - Main Heading */}
            <div>
              <Typography
                as="h2"
                variant="3xl"
                className="text-white font-normal leading-tight"
              >
                We don't just sell services. We engineer{" "}
                <span className="text-[#6FAF4E]">growth systems</span>.
              </Typography>
            </div>

            {/* Right - Description */}
            <div className="flex items-center">
              <Typography
                as="p"
                variant="base"
                className="text-white/90 font-normal max-w-md xl:translate-x-[30%]"
              >
                Silos kill speed. We align your brand, technology and marketing
                into a single, cohesive engine.
              </Typography>
            </div>
          </div>

          {/* Services Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {SERVICES.map((service, index) => (
              <div
                key={service.number}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative bg-black p-6 lg:p-6 xl:p-8 flex flex-col transition-all duration-300 cursor-pointer ${
                  hoveredIndex === index
                    ? "scale-105 z-10"
                    : hoveredIndex !== null
                    ? "blur-sm opacity-60"
                    : ""
                }`}
                style={{
                  transform:
                    hoveredIndex === index
                      ? "perspective(1000px) translateZ(20px) scale(1.05)"
                      : "perspective(1000px) translateZ(0px)",
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Top Section - Number and Arrow */}
                <div className="flex items-start justify-between mb-6">
                  {/* Number Circle */}
                  <div className="w-10 h-10 rounded-full flex items-center justify-center">
                    <Typography
                      as="span"
                      variant="sm"
                      className="text-white border border-[#6FAF4E4D] rounded-full w-8 h-8 font-normal flex items-center justify-center"
                    >
                      {service.number}
                    </Typography>
                  </div>

                  {/* Arrow Icon */}
                  <div className={`transition-colors duration-300 ${
                    hoveredIndex === index ? "text-white" : "text-white/20"
                  }`}>
                    <ArrowIcon />
                  </div>
                </div>

                {/* Service Name */}
                <Typography
                  as="h3"
                  variant="2xl"
                  className="text-[#6FAF4E] font-bold mb-4"
                >
                  {service.name.split(" ").map((word, index) => (
                    <span key={index} className="block leading-[1.1]">
                      {word}
                    </span>
                  ))}
                </Typography>

                {/* Service Description */}
                <Typography
                  as="p"
                  variant="base"
                  className="text-white/90 font-normal"
                >
                  {service.description}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
