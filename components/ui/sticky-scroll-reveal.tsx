"use client";

import { useRef } from "react";
import { useStickyScrollLock } from "@/hooks/useStickyScrollLock";
import { StickyScrollProps } from "./sticky-scroll-reveal/types";
import { useScreenWidth, useActiveCard, useMobileImageHeight } from "./sticky-scroll-reveal/hooks";
import { MobileView } from "./sticky-scroll-reveal/components/MobileView";
import { DesktopView } from "./sticky-scroll-reveal/components/DesktopView";
import { BREAKPOINTS } from "./sticky-scroll-reveal/constants";

export const StickyScroll = ({ content, contentClassName }: StickyScrollProps) => {
  const pageRef = useRef<HTMLDivElement | null>(null);
  const desktopRef = useRef<HTMLDivElement | null>(null);
  const sectionsWrapperRef = useRef<HTMLDivElement | null>(null);
  const mobileImgRef = useRef<HTMLDivElement | null>(null);
  const mobileContentRef = useRef<HTMLDivElement | null>(null);

  const screenWidth = useScreenWidth();
  const activeCard = useActiveCard(
    content.length,
    sectionsWrapperRef,
    desktopRef,
    mobileContentRef
  );
  const imageHeight = useMobileImageHeight(mobileImgRef, activeCard, screenWidth);

  useStickyScrollLock(desktopRef, pageRef);

  const isDesktop = screenWidth >= BREAKPOINTS.LG;

  return (
    <section ref={pageRef} className="relative w-full">
      {isDesktop ? (
        <>
          <DesktopView
            content={content}
            activeCard={activeCard}
            sectionsWrapperRef={sectionsWrapperRef}
            desktopRef={desktopRef}
            contentClassName={contentClassName}
            useSemanticHeadings={true}
          />
          {/* Placeholder so mobileContentRef is always hydrated for useScroll when desktop is active */}
          <div ref={mobileContentRef} aria-hidden style={{ position: "absolute", left: -9999, width: 1, height: 1, overflow: "auto" }} />
        </>
      ) : (
        <>
          <MobileView
            content={content}
            activeCard={activeCard}
            imageHeight={imageHeight}
            screenWidth={screenWidth}
            imageRef={mobileImgRef}
            contentRef={mobileContentRef}
            useSemanticHeadings={true}
          />
          {/* Placeholder so desktopRef is always hydrated for useScroll when mobile is active */}
          <div ref={desktopRef} aria-hidden style={{ position: "absolute", left: -9999, width: 1, height: 1, overflow: "auto" }} />
        </>
      )}
    </section>
  );
};
