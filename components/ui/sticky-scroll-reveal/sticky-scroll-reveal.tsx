"use client";

import { useRef } from "react";
import { useStickyScrollLock } from "@/hooks/useStickyScrollLock";
import { StickyScrollProps } from "./types";
import { useScreenWidth, useActiveCard, useMobileImageHeight } from "./hooks";
import { MobileView } from "./components/MobileView";
import { DesktopView } from "./components/DesktopView";

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

  return (
    <section ref={pageRef} className="relative w-full">
      <MobileView
        content={content}
        activeCard={activeCard}
        imageHeight={imageHeight}
        screenWidth={screenWidth}
        imageRef={mobileImgRef}
        contentRef={mobileContentRef}
      />
      <DesktopView
        content={content}
        activeCard={activeCard}
        sectionsWrapperRef={sectionsWrapperRef}
        desktopRef={desktopRef}
        contentClassName={contentClassName}
      />
    </section>
  );
};
