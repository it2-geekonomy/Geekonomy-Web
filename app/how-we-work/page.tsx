"use client";

import { Typography } from "@/components/ui/Typography";
import ScrollRevealSection from "@/components/animations/ScrollRevealSection";
import HowWeWorkCards from "@/components/sections/HowWeWorkCards";
import HowWeWorkProcess from "@/components/sections/HowWeWorkProcess";

export default function HowWeWorkPage() {
  return (
    <main className="min-h-screen bg-black relative overflow-hidden">
      <ScrollRevealSection index={0}>
        <section className="relative w-full flex flex-col justify-center lg:py-[clamp(2.5rem,2.5rem+2vw,8rem)]">
          <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-24">
            <div className="">
              {/* Main Title - Centered */}
              <div className="text-center mb-12 lg:mb-16">
                <Typography
                  as="h1"
                  variant="4xl"
                  className="text-white font-semibold uppercase tracking-tight"
                >
                  HOW WE WORK?
                </Typography>
              </div>

              {/* Content - Left Aligned */}
              <div className="space-y-12 lg:space-y-16 lg:pl-[clamp(3rem,3rem+3vw,8rem)]">
                {/* First Section */}
                <div className="space-y-6">
                  <Typography
                    as="h2"
                    variant="2xl"
                    className="text-white font-normal leading-tight"
                  >
                    Strong work doesn't begin with execution.
                  </Typography>

                  <Typography
                    as="p"
                    variant="lg"
                    className="text-[#A0A0A0] font-normal leading-relaxed max-w-7xl"
                  >
                    Every engagement at{" "}
                    <span className="text-[#6FAF4E]">Geekonomy</span>
                    {" "}begins with understanding, not assumptions. Before anything is designed, developed or marketed we take the time to learn:
                  </Typography>

                  <ul className="space-y-3 max-w-3xl">
                    <li className="flex items-start gap-3">
                      <span className="text-[#6FAF4E] mt-1.5 shrink-0">•</span>
                      <Typography as="span" variant="lg" className="text-[#A0A0A0] font-normal">
                        where your business stands today
                      </Typography>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#6FAF4E] mt-1.5 shrink-0">•</span>
                      <Typography as="span" variant="lg" className="text-[#A0A0A0] font-normal">
                        what it's truly trying to achieve
                      </Typography>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#6FAF4E] mt-1.5 shrink-0">•</span>
                      <Typography as="span" variant="lg" className="text-[#A0A0A0] font-normal">
                        what constraints exist
                      </Typography>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#6FAF4E] mt-1.5 shrink-0">•</span>
                      <Typography as="span" variant="lg" className="text-[#A0A0A0] font-normal">
                        what success to you actually looks like
                      </Typography>
                    </li>
                  </ul>

                  <Typography
                    as="p"
                    variant="lg"
                    className="text-[#6FAF4E] font-normal leading-relaxed max-w-3xl"
                  >
                    This ensures that what gets built has purpose, not just momentum.
                  </Typography>
                </div>

                {/* Second Section */}
                <div className="space-y-6">
                  <Typography
                    as="h2"
                    variant="2xl"
                    className="text-white font-normal leading-tight"
                  >
                    We believe direction should come before activity.
                  </Typography>

                  <Typography
                    as="p"
                    variant="lg"
                    className="text-[#A0A0A0] font-normal leading-relaxed max-w-3xl"
                  >
                    That's why early conversations focus on defining:
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollRevealSection>

      <ScrollRevealSection index={1}>
        <HowWeWorkCards />
      </ScrollRevealSection>

      <ScrollRevealSection index={2}>
        <section className="relative w-full flex flex-col justify-center pt-[clamp(2.5rem,2.5rem+2vw,8rem)]">
          <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-24">
            <div className="space-y-6 lg:pl-[clamp(3rem,3rem+3vw,8rem)] ">
              <Typography
                as="h2"
                variant="xl"
                className="text-white font-normal leading-tight"
              >
                This clarity allows both sides to move forward confidently and prevents unnecessary course correction later.
              </Typography>

              <Typography
                as="p"
                variant="xl"
                className="text-white font-normal leading-relaxed"
              >
                Once alignment is established,{" "}
                <span className="text-[#6FAF4E]">execution follows a structured path</span>
                . Projects move through clearly defined stages: planning, creation, refinement and delivery. All these steps are done with visibility at each step. Decisions are documented, feedback is integrated and progress is steady.
              </Typography>
            </div>
          </div>
        </section>
      </ScrollRevealSection>

      <ScrollRevealSection index={3}>
        <HowWeWorkProcess />
      </ScrollRevealSection>

      <ScrollRevealSection index={4}>
        <section className="relative w-full flex flex-col justify-center pb-[clamp(2.5rem,2.5rem+2vw,8rem)]">
          <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-24">
            <div className="space-y-6 text-center mx-auto">
              <Typography
                as="p"
                variant="lg"
                className="text-white font-normal leading-relaxed"
              >
                Strong outcomes come from shared clarity, steady execution and mutual trust.
              </Typography>
              <Typography
                as="p"
                variant="2xl"
                className="text-[#6FAF4E] font-normal leading-relaxed"
              >
                That is how Geekonomy works.
              </Typography>
            </div>
          </div>
        </section>
      </ScrollRevealSection>
    </main>
  );
}
