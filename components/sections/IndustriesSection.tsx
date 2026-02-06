"use client";

import Image from "next/image";
import { Typography } from "@/components/ui/Typography";
import { HEADING_TEXT } from "@/lib/constants";
import { CLIENTS } from "@/lib/constants";

export default function IndustriesSection() {
  return (
    <section className="bg-black hidden lg:block relative">
      {/* Heading */}
      <div className="px-6 mb-16 flex justify-center">
        <Typography
          as="p"
          variant="lg"
          className="text-white font-light leading-relaxed text-center max-w-[1100px]"
        >
          {HEADING_TEXT}
        </Typography>
      </div>

      {/* Grid - Desktop only */}
      <div className="px-20">
        <div className="grid grid-cols-4 gap-1">
          {CLIENTS.map((item, i) => (
            <div
              key={i}
              className="relative h-[520px] overflow-hidden group bg-black"
            >
              {/* Main Image */}
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover block transition-transform duration-700 group-hover:scale-110"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Logo - slides in on hover */}
              <div className="absolute bottom-6 left-6 z-10 opacity-0 translate-x-[-20px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={120}
                  height={60}
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute right-32 top-22 flex gap-6">
        <button
          className="text-white text-xl hover:opacity-70 transition"
          aria-label="Scroll left"
        >
          ←
        </button>

        <button
          className="text-white text-xl hover:opacity-70 transition"
          aria-label="Scroll right"
        >
          →
        </button>
      </div>
    </section>
  );
}