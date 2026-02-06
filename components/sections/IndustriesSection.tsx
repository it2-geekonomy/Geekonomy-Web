"use client";

import { useState } from "react";
import Image from "next/image";
import { Typography } from "@/components/ui/Typography";
import { HEADING_TEXT, CLIENTS } from "@/lib/constants";

export default function IndustriesSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="bg-black relative overflow-x-hidden w-full">
      {/* Heading */}
      <div className="px-[2px] lg:px-24 mb-10 sm:mb-12 lg:mb-16 flex justify-center w-full overflow-x-hidden">
        <Typography
          as="p"
          variant="lg"
          className="
            text-white 
            font-light 
            leading-relaxed 
            text-center
            lg:[text-wrap:balance]
          "
        >
          {/* Desktop-only line break */}
          <span className="hidden lg:inline">
            {HEADING_TEXT.split(" ").slice(0, Math.ceil(HEADING_TEXT.split(" ").length / 2)).join(" ")}
            <br />
            {HEADING_TEXT.split(" ").slice(Math.ceil(HEADING_TEXT.split(" ").length / 2)).join(" ")}
          </span>

          {/* Mobile / Tablet */}
          <span className="inline lg:hidden">
            {HEADING_TEXT}
          </span>
        </Typography>
      </div>

      {/* Grid */}
      <div className="px-6 sm:px-10 md:px-14 lg:px-20 w-full overflow-x-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-3 lg:gap-1 w-full">
          {CLIENTS.map((item, i) => {
            const isActive = activeIndex === i;

            const logoSizeClass =
              i === 0
                ? "w-30 sm:w-34 lg:w-auto"
                : i === 2 || i === 3
                  ? "w-40 sm:w-44 lg:w-auto"
                  : "w-26 sm:w-30 lg:w-auto";

            return (
              <div
                key={i}
                onClick={() => setActiveIndex(isActive ? null : i)}
                className="
                  relative 
                  overflow-hidden 
                  group 
                  bg-black
                  h-[360px] 
                  sm:h-[440px] 
                  lg:h-[520px]
                  cursor-pointer
                  w-full
                "
              >
                {/* Main Image */}
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover block transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div
                  className={`
                    absolute inset-0 bg-black/50 transition-opacity duration-300
                    ${isActive ? "opacity-100" : "opacity-0"}
                    group-hover:opacity-100
                  `}
                />

                {/* Logo */}
                <div
                  className={`
                    absolute bottom-4 left-4 lg:bottom-4 lg:left-6 z-10 transition-all duration-300
                    ${isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"}
                    group-hover:opacity-100 group-hover:translate-x-0
                  `}
                >
                  <Image
                    src={item.logo}
                    alt={item.name}
                    width={item.width}
                    height={item.height}
                    className={`object-contain ${logoSizeClass}`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Arrows */}
      <div className="hidden lg:flex absolute right-32 top-22 gap-6">
        <button className="text-white text-xl hover:opacity-70 transition">←</button>
        <button className="text-white text-xl hover:opacity-70 transition">→</button>
      </div>
    </section>
  );
}