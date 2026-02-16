"use client";

import { useRef, useState, useEffect } from "react";
import { useMotionValueEvent, useScroll, motion } from "motion/react";
import { useStickyScrollLock } from "@/hooks/useStickyScrollLock";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/ui/Typography";

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
  const sectionsWrapperRef = useRef<HTMLDivElement | null>(null);

  const mobileScroll = useScroll({
    target: pageRef,
    offset: ["start start", "end end"],
  });

  const desktopScroll = useScroll({
    container: desktopRef,
    offset: ["start start", "end end"],
  });

  const cardLength = content.length;

  // Active = section that CONTAINS the viewport center. Prevents first image showing between others.
  const updateActiveFromViewport = () => {
    if (window.innerWidth < 1024 || !sectionsWrapperRef.current) return;
    const wrapper = sectionsWrapperRef.current;
    const children = Array.from(wrapper.children) as HTMLElement[];
    if (children.length !== cardLength) return;
    const viewportCenterY = window.innerHeight / 2;
    let active = 0;
    for (let i = 0; i < children.length; i++) {
      const rect = children[i].getBoundingClientRect();
      if (viewportCenterY >= rect.top && viewportCenterY < rect.bottom) {
        active = i;
        break;
      }
      if (viewportCenterY < rect.top) break;
      active = i;
    }
    setActiveCard(active);
  };

  const updateActiveFromProgress = (latest: number) => {
    if (cardLength <= 1) {
      setActiveCard(0);
      return;
    }
    setActiveCard(Math.min(Math.floor(latest * cardLength), cardLength - 1));
  };

  useMotionValueEvent(mobileScroll.scrollYProgress, "change", (v) => {
    if (window.innerWidth < 1024) updateActiveFromProgress(v);
  });

  useMotionValueEvent(desktopScroll.scrollYProgress, "change", () => {
    if (window.innerWidth >= 1024) updateActiveFromViewport();
  });

  useEffect(() => {
    if (window.innerWidth < 1024 || cardLength === 0) return;
    updateActiveFromViewport();
    const scrollContainer = desktopRef.current;
    const onScroll = () => updateActiveFromViewport();
    scrollContainer?.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    const t = setInterval(updateActiveFromViewport, 150);
    return () => {
      scrollContainer?.removeEventListener("scroll", onScroll);
      window.removeEventListener("scroll", onScroll);
      clearInterval(t);
    };
  }, [cardLength]);

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
          overflowY: "hidden", // default locked
        }}
      >
        {/* ✅ CONTENT */}
        <div className="w-full lg:w-[60%]">
          <div ref={sectionsWrapperRef} className="space-y-8 md:pb-0">
            {content.map((item, index) => (
              <div key={item.title + index}>
                <motion.div
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                >
                  <Typography
                    as="h1"
                    variant="2xl"
                    className="text-[#FFFFFF] font-bold"
                  >
                    {item.title}
                  </Typography>
                </motion.div>

                  {/* Mobile: image inline, always at full brightness (outside opacity animation) */}
                  {item.image && (
                    <div
                      className={cn(
                        "relative w-full aspect-video min-h-[200px] overflow-hidden rounded-xl my-6",
                        "lg:hidden"
                      )}
                    >
                      {item.image}
                    </div>
                  )}

                <motion.div
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                >
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

        {/* ✅ DESKTOP STICKY IMAGE */}
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
