import { useEffect, useRef } from "react";

export function useStickyScrollLock(
  desktopRef: React.RefObject<HTMLDivElement>,
  pageRef: React.RefObject<HTMLElement>
) {
  useEffect(() => {
    if (!desktopRef.current || !pageRef.current) return;

    const container = desktopRef.current;
    const section = pageRef.current;
    const footer = document.querySelector("footer");

    const lock = () => {
      container.style.overflowY = "hidden";
      container.style.pointerEvents = "none";
    };

    const unlock = () => {
      container.style.overflowY = "auto";
      container.style.pointerEvents = "auto";
    };

    lock();

    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.6) {
          unlock();
        } else {
          lock();
        }
      },
      { threshold: [0, 0.6] }
    );

    sectionObserver.observe(section);

    let footerObserver: IntersectionObserver | null = null;

    if (footer) {
      footerObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            lock();
          }
        },
        { threshold: 0.01 }
      );

      footerObserver.observe(footer);
    }

    return () => {
      sectionObserver.disconnect();
      footerObserver?.disconnect();
      unlock();
    };
  }, [desktopRef, pageRef]);
}
