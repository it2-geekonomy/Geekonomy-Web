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

const SERVICES_SECTION_LOGOS: string[] = [
  "https://pub-67a4c50822e240c78b2f040321a1da26.r2.dev/7f8f4a5d-faee-4b4a-8ee7-cde842a8ddeb-Geekonomy%20Pillar%20Logos%20white-03.png",
  "https://pub-67a4c50822e240c78b2f040321a1da26.r2.dev/bbef6d8e-166b-4ba9-aaaa-abbdb8131a74-Geekonomy%20Pillar%20Logos%20white-04.png",
  "https://pub-67a4c50822e240c78b2f040321a1da26.r2.dev/55571d7d-238d-4fe1-ba5d-0ae6b99042fa-Geekonomy%20Pillar%20Logos%20white-05.png",
];
 
export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [tappedIndex, setTappedIndex] = useState<number | null>(null);

  const isFlipped = (index: number) =>
    hoveredIndex === index || tappedIndex === index;

  const handleCardClick = (index: number) => {
    setTappedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="relative w-full bg-black pb-[clamp(2.5rem,2.5rem+2vw,8rem)]">
      <div className="w-full px-4 sm:px-6 lg:px-10">
        <div className="mx-4 sm:mx-6 lg:mx-12 xl:mx-[clamp(0.5rem,0.5rem+8vw,10rem)] 2xl:mx-[clamp(1rem,1rem+12vw,22rem)]">
          {/* Header Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-16 lg:mb-20">
            {/* Left - Main Heading */}
            <div>
              <Typography
                as="h2"
                variant="display-xl"
                className="text-white font-normal leading-tight"
              >
                We don&apos;t just sell services. We engineer{" "}
                <span className="text-[#69AE44]">growth systems.</span>
              </Typography>
            </div>

            {/* Right - Description */}
            <div className="flex items-center">
              <Typography
                as="p"
                variant="body-xl"
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
                role="button"
                tabIndex={0}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => {
                  setHoveredIndex(null);
                  setTappedIndex(null);
                }}
                onClick={() => handleCardClick(index)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleCardClick(index);
                  }
                }}
                className={`relative bg-black p-6 lg:p-6 xl:p-8 flex flex-col transition-all duration-300 cursor-pointer touch-manipulation ${
                  isFlipped(index)
                    ? "scale-105 z-10"
                    : hoveredIndex !== null || tappedIndex !== null
                    ? "opacity-70"
                    : ""
                }`}
                style={{
                  transform: isFlipped(index) ? "scale(1.05)" : "scale(1)",
                }}
              >
                <div
                  className="relative w-full min-h-[280px] md:min-h-[320px]"
                  style={{
                    transformStyle: "preserve-3d",
                    perspective: "1000px",
                  }}
                >
                  {/* Flip inner: right-to-left = rotateY(-180deg) on hover */}
                  <div
                    className="relative w-full h-full transition-transform duration-500 ease-in-out"
                    style={{
                      transformStyle: "preserve-3d",
                      transform: isFlipped(index)
                        ? "rotateY(-180deg)"
                        : "rotateY(0deg)",
                    }}
                  >
                    {/* Front – logo only; hide when flipped (iOS Safari ignores backfaceVisibility) */}
                    <div
                      className="absolute inset-0 flex items-center justify-center bg-black"
                      style={{
                        backfaceVisibility: "hidden",
                        WebkitBackfaceVisibility: "hidden",
                        visibility: isFlipped(index) ? "hidden" : "visible",
                        opacity: isFlipped(index) ? 0 : 1,
                      }}
                    >
                      <div className="w-40 h-40 sm:w-44 sm:h-44 md:w-60 flex items-center justify-center shrink-0">
                        <img
                          src={SERVICES_SECTION_LOGOS[index] ?? SERVICES_SECTION_LOGOS[0]}
                          alt={service.name}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>

                    {/* Back – same existing card content; ensure on top on iOS */}
                    <div
                      className="absolute inset-0 flex flex-col"
                      style={{
                        backfaceVisibility: "hidden",
                        WebkitBackfaceVisibility: "hidden",
                        transform: "rotateY(180deg) translateZ(1px)",
                        visibility: isFlipped(index) ? "visible" : "hidden",
                        opacity: isFlipped(index) ? 1 : 0,
                        zIndex: isFlipped(index) ? 1 : 0,
                      }}
                    >
                      <div className="flex items-start justify-between mb-6">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center">
                          <Typography
                            as="span"
                            variant="body-lg"
                            className="text-white border border-[#69AE44] rounded-full w-8 h-8 font-normal flex items-center justify-center"
                          >
                            {service.number}
                          </Typography>
                        </div>
                        <div
                          className={`transition-colors duration-300 ${
                            isFlipped(index)
                              ? "text-white"
                              : "text-white/20"
                          }`}
                        >
                          <ArrowIcon />
                        </div>
                      </div>

                      <Typography
                        as="h3"
                        variant="h1"
                        className="text-[#69AE44] font-bold mb-4"
                      >
                        {service.name.split(" ").map((word, wordIndex) => (
                          <span
                            key={wordIndex}
                            className="block leading-[1.1]"
                          >
                            {word}
                          </span>
                        ))}
                      </Typography>

                      <Typography
                        as="p"
                        variant="body-xl"
                        className="text-white/90 font-normal"
                      >
                        {service.description}
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
