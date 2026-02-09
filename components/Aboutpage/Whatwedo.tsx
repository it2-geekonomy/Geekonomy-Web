"use client";

import Image from "next/image";
import { Typography } from "@/components/ui/Typography";

export default function HowWeWorkSection() {
  const bulletPoints = [
    "Fewer assumptions",
    "More intent",
    "Decisions backed by clarity, not trends",
  ];

  return (
    <section className="relative w-full bg-black py-[clamp(2.5rem,2.5rem+2vw,8rem)] sm:px-6 lg:px-4 xl:px-16 2xl:px-24">
      <div className="w-full px-4 lg:pl-[clamp(3rem,3rem+3vw,8rem)]">
        <div className="max-w-4xl space-y-16 lg:space-y-20">
          
          {/* How We Work */}
          <div>
            <Typography
              as="h2"
              variant="3xl"
              className="text-white font-normal leading-tight mb-6 xl:mb-12"
            >
              How We Work
            </Typography>

            {/* CONTENT SHIFTED RIGHT */}
            <div className="xl:pl-12 2xl:pl-16">
              <Typography
                as="p"
                variant="base"
                className="text-white font-normal leading-relaxed mb-6"
              >
                We work as long-term partners, not just service providers. Our role is to think with you, build with you and evolve systems as your business grows.
              </Typography>
              
              {/* Bulleted List with SVG Arrows */}
              <ul className="space-y-3 mb-6">
                {bulletPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-2 lg:gap-8">
                    <Image
                      src="/HowWeWork/Arrow 1.svg"
                      alt=""
                      width={28}
                      height={24}
                      className="shrink-0 mt-2 scale-x-[1] lg:scale-x-[1.5] scale-y-[1.5] origin-left"
                    />
                    <Typography as="span" variant="base" className="text-white">
                      {point}
                    </Typography>
                  </li>
                ))}
              </ul>

              <Typography
                as="p"
                variant="base"
                className="text-white font-normal leading-relaxed"
              >
                Our focus is always on building systems that continue to work long after they go live.
              </Typography>
            </div>
          </div>

          {/* Who We Work With */}
          <div>
            <Typography
              as="h2"
              variant="3xl"
              className="text-white font-normal leading-tight mb-6 xl:mb-12"
            >
              Who We Work With
            </Typography>

            {/* CONTENT SHIFTED RIGHT */}
            <div className="xl:pl-12 2xl:pl-16">
              <Typography
                as="p"
                variant="base"
                className="text-white font-normal leading-relaxed"
              >
                We work with founders, leadership teams and growing organisations that value structure and long-term thinking. From early-stage ventures to established businesses, our clients come to us when they're ready to move beyond fragmented efforts and build something that scales with confidence.
              </Typography>
            </div>
          </div>

          {/* Our Belief */}
          <div>
            <Typography
              as="h2"
              variant="3xl"
              className="text-white font-normal leading-tight mb-6 xl:mb-12"
            >
              Our Belief
            </Typography>

            {/* CONTENT SHIFTED RIGHT */}
            <div className="xl:pl-12 2xl:pl-16">
              <Typography
                as="p"
                variant="base"
                className="text-white font-normal leading-relaxed"
              >
                Growth should feel intentional, not chaotic. When the right systems are in place, progress becomes predictable. That's what we build.
              </Typography>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}