"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Typography } from "@/components/ui/Typography";

export default function OurApproach() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);

  // 👇 Reset when clicking outside cards
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (cardsRef.current && !cardsRef.current.contains(e.target as Node)) {
        setActiveCard(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="w-full bg-black text-white py-20 px-6 sm:px-2 md:px-12 lg:px-18">
      {/* Heading */}
      <div className="mb-6 xl:ml-16 2xl:ml-32">
        <Typography as="h2" variant="3xl" className="text-[#6eaf4c] font-medium">
          Our Approach
        </Typography>
      </div>

      {/* Intro content */}
      <div className="mb-16 xl:ml-16 xl:flex xl:justify-center 2xl:ml-32">
        <div className="w-full xl:w-[68%] text-left">
          <Typography as="p" variant="lg" className="text-[#FFFFFF] leading-relaxed">
            We don’t start with deliverables. We start with understanding{" "}
            <span className="text-[#6eaf4c]">how a business operates</span>, where{" "}
            <span className="text-[#6eaf4c]">
              it wants to go and what’s holding it back
            </span>
            . From there, we build growth systems that are:
          </Typography>
        </div>
      </div>

      {/* Cards */}
      <div ref={cardsRef} className="flex justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 xl:gap-16 2xl:gap-20">
          {/* Structured */}
          <div
            onClick={() => setActiveCard(activeCard === 0 ? null : 0)}
            className="group relative bg-[#0f0f0f] w-full min-w-[280px] xl:min-w-[340px] px-6 py-12 flex flex-col items-center text-center cursor-pointer"
          >
            <div className="absolute top-0 left-0 w-5 h-5 border-t border-l border-[#6eaf4c]/60" />
            <div className="absolute bottom-0 right-0 w-5 h-5 border-b border-r border-[#6eaf4c]/60" />

            <Typography
              as="h3"
              variant="xl"
              className={`mb-6 transition-all duration-300 ${
                activeCard === 0 ? "font-bold" : "group-hover:font-bold"
              }`}
            >
              Structured
            </Typography>

            <Image
              src="/ourapproach/Structured.webp"
              alt="Structured"
              width={120}
              height={90}
              className={`mb-6 transition-all duration-300 ${
                activeCard === 0
                  ? "scale-[1.18] drop-shadow-[0_0_32px_rgba(110,175,76,0.95)]"
                  : "group-hover:scale-[1.18] group-hover:drop-shadow-[0_0_32px_rgba(110,175,76,0.95)]"
              }`}
            />

            <Typography
              as="p"
              variant="lg"
              className={`relative text-white overflow-hidden transition-colors duration-300 ${
                activeCard === 0 ? "text-white/70" : "group-hover:text-white/70"
              }`}
            >
              <span className="relative z-10">Not scattered</span>
              <span
                className={`absolute left-0 top-1/2 h-[4px] bg-[#6eaf4c] transition-all duration-300 ${
                  activeCard === 0 ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Typography>
          </div>

          {/* Practical */}
          <div
            onClick={() => setActiveCard(activeCard === 1 ? null : 1)}
            className="group relative bg-[#0f0f0f] w-full min-w-[280px] xl:min-w-[340px] px-8 py-12 flex flex-col items-center text-center cursor-pointer"
          >
            <div className="absolute top-0 left-0 w-5 h-5 border-t border-l border-[#6eaf4c]/60" />
            <div className="absolute bottom-0 right-0 w-5 h-5 border-b border-r border-[#6eaf4c]/60" />

            <Typography
              as="h3"
              variant="xl"
              className={`mb-6 transition-all duration-300 ${
                activeCard === 1 ? "font-bold" : "group-hover:font-bold"
              }`}
            >
              Practical
            </Typography>

            <Image
              src="/ourapproach/Practical.webp"
              alt="Practical"
              width={100}
              height={90}
              className={`mb-6 transition-all duration-300 ${
                activeCard === 1
                  ? "scale-[1.18] drop-shadow-[0_0_32px_rgba(110,175,76,0.95)]"
                  : "group-hover:scale-[1.18] group-hover:drop-shadow-[0_0_32px_rgba(110,175,76,0.95)]"
              }`}
            />

            <Typography
              as="p"
              variant="lg"
              className={`relative text-white overflow-hidden transition-colors duration-300 ${
                activeCard === 1 ? "text-white/70" : "group-hover:text-white/70"
              }`}
            >
              <span className="relative z-10">Not theoretical</span>
              <span
                className={`absolute left-0 top-1/2 h-[4px] bg-[#6eaf4c] transition-all duration-300 ${
                  activeCard === 1 ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Typography>
          </div>

          {/* Scalable */}
          <div
            onClick={() => setActiveCard(activeCard === 2 ? null : 2)}
            className="group relative bg-[#0f0f0f] w-full min-w-[280px] xl:min-w-[340px] px-8 py-12 flex flex-col items-center text-center cursor-pointer"
          >
            <div className="absolute top-0 left-0 w-5 h-5 border-t border-l border-[#6eaf4c]/60" />
            <div className="absolute bottom-0 right-0 w-5 h-5 border-b border-r border-[#6eaf4c]/60" />

            <Typography
              as="h3"
              variant="xl"
              className={`mb-6 transition-all duration-300 ${
                activeCard === 2 ? "font-bold" : "group-hover:font-bold"
              }`}
            >
              Scalable
            </Typography>

            <Image
              src="/ourapproach/Scalable.webp"
              alt="Scalable"
              width={100}
              height={90}
              className={`mb-6 transition-all duration-300 ${
                activeCard === 2
                  ? "scale-[1.18] drop-shadow-[0_0_32px_rgba(110,175,76,0.95)]"
                  : "group-hover:scale-[1.18] group-hover:drop-shadow-[0_0_32px_rgba(110,175,76,0.95)]"
              }`}
            />

            <Typography
              as="p"
              variant="lg"
              className={`relative text-white overflow-hidden transition-colors duration-300 ${
                activeCard === 2 ? "text-white/70" : "group-hover:text-white/70"
              }`}
            >
              <span className="relative z-10">Not short-term</span>
              <span
                className={`absolute left-0 top-1/2 h-[4px] bg-[#6eaf4c] transition-all duration-300 ${
                  activeCard === 2 ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Typography>
          </div>
        </div>
      </div>

      {/* Bottom copy */}
      <div className="mt-20 xl:flex xl:justify-center xl:px-24">
        <div className="w-full text-center flex flex-col items-center 2xl:w-[80%]">
          <Typography as="p" variant="base" className="text-white/80 leading-relaxed">
            Every system we build is tailored to the business it serves, whether
            it’s establishing a strong digital foundation, improving efficiency
            or enabling long-term expansion.
          </Typography>
        </div>
      </div>
    </section>
  );
}
