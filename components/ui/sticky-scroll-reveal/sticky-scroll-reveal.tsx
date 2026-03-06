"use client";

import { useRef, useState, useEffect, useMemo } from "react";
import { useStickyScrollLock } from "@/hooks/useStickyScrollLock";
import { StickyScrollProps } from "./types";
import { useScreenWidth, useActiveCard, useMobileImageHeight } from "./hooks";
import { MobileView } from "./components/MobileView";
import { DesktopView } from "./components/DesktopView";
import { BREAKPOINTS } from "./constants";
import { replaceHeadingsWithDivs } from "./utils";

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

  const [isDesktop, setIsDesktop] = useState(true);
  useEffect(() => {
    setIsDesktop(window.innerWidth >= BREAKPOINTS.LG);
    const onResize = () => setIsDesktop(window.innerWidth >= BREAKPOINTS.LG);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Content with headings replaced by divs for the hidden view (avoids duplicate H1/H2/H3 in document outline).
  const contentNoHeadings = useMemo(
    () =>
      content.map((item) => ({
        ...item,
        description: replaceHeadingsWithDivs(item.description),
      })),
    [content]
  );

  return (
    <section ref={pageRef} className="relative w-full">
      <MobileView
        content={isDesktop ? contentNoHeadings : content}
        activeCard={activeCard}
        imageHeight={imageHeight}
        screenWidth={screenWidth}
        imageRef={mobileImgRef}
        contentRef={mobileContentRef}
        semanticHeadings={!isDesktop}
      />
      <DesktopView
        content={isDesktop ? content : contentNoHeadings}
        activeCard={activeCard}
        sectionsWrapperRef={sectionsWrapperRef}
        desktopRef={desktopRef}
        contentClassName={contentClassName}
        semanticHeadings={isDesktop}
      />
    </section>
  );
};
