"use client";

import React, { useRef, useState } from "react";
import { useMotionValueEvent, useScroll, motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/ui/Typography";
import { useStickyScrollLock } from "@/hooks/useStickyScrollLock";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    image?: React.ReactNode;
    table?: React.ReactNode;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);

  const pageRef = useRef<HTMLDivElement | null>(null);
  const desktopRef = useRef<HTMLDivElement | null>(null);

  const mobileScroll = useScroll({
    target: pageRef,
    offset: ["start start", "end end"],
  });

  const desktopScroll = useScroll({
    container: desktopRef,
    offset: ["start start", "end end"],
  });

  const cardLength = content.length;

  const updateActive = (latest: number) => {
    const points = content.map((_, i) =>
      cardLength === 1 ? 0 : i / (cardLength - 1)
    );

    let closest = 0;
    let min = Infinity;

    points.forEach((p, i) => {
      const d = Math.abs(latest - p);
      if (d < min) {
        min = d;
        closest = i;
      }
    });

    setActiveCard(closest);
  };

  useMotionValueEvent(mobileScroll.scrollYProgress, "change", (v) => {
    if (window.innerWidth < 1024) updateActive(v);
  });

  useMotionValueEvent(desktopScroll.scrollYProgress, "change", (v) => {
    if (window.innerWidth >= 1024) updateActive(v);
  });

  useStickyScrollLock(desktopRef, pageRef);

  return (
    <section ref={pageRef} className="relative w-full">
      <div
        ref={desktopRef}
        className="
          relative flex w-full gap-6 lg:gap-8
          px-4 sm:px-8 md:px-14
          flex-col lg:flex-row   
          lg:h-[calc(100vh-4rem)] lg:no-scrollbar
        "
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          paddingRight: "12px",
          marginRight: "-12px",
          overflowY: "hidden",
        }}
      >
        <div
          className={cn(
            `
            sticky top-0 z-30
            flex lg:hidden        
            w-full
            items-center justify-center
            mb-4
            overflow-visible
            `,
            contentClassName
          )}
        >
          <div className="relative w-full aspect-video min-h-[300px] max-h-[500px]">
            <div className="relative w-full h-full *:object-contain! *:w-full! *:h-full!">
              {content[activeCard]?.image}
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[60%]">
          <div className="space-y-8 md:pb-0">
            {content.map((item, index) => (
              <div key={item.title + index}>
                <motion.div
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                >
                  <Typography
                    as="h2"
                    variant="2xl"
                    className="text-[#FFFFFF] font-bold"
                  >
                    {item.title}
                  </Typography>

                  <div
                    className="mt-6 text-[#FFFFFF] text-lg leading-relaxed space-y-4
                      [&>p]:mb-4
                      [&>ul]:list-disc [&>ul]:ml-6 [&>ul]:space-y-2
                      [&>ol]:list-decimal [&>ol]:ml-6 [&>ol]:space-y-2
                      [&>li]:ml-2"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />

                  {item.table && (
                    <div className="mt-8">
                      {item.table}
                    </div>
                  )}
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        <div
          className={cn(
            `
            hidden lg:flex       
            sticky
            w-[40%] h-[50vh]
            lg:h-[50vh]
            items-center justify-center
            overflow-hidden rounded-xl
            `,
            contentClassName
          )}
          style={{
            top: '30%',
            transform: 'translateY(-50%)',
            alignSelf: 'flex-start',
          }}
        >
          {content[activeCard]?.image}
        </div>
      </div>
    </section>
  );
};
