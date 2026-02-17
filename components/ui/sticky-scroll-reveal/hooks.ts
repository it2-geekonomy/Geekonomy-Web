import { useState, useEffect, useCallback } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { BREAKPOINTS, MEASUREMENT_DELAYS, SCROLL_UPDATE_INTERVAL } from "./constants";

export const useScreenWidth = () => {
  const [w, setW] = useState(0);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const update = () => setW(window.innerWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return w;
};

export const useMobileImageHeight = (
  ref: React.RefObject<HTMLDivElement | null>,
  activeCard: number,
  screenW: number
) => {
  const [h, setH] = useState(0);
  useEffect(() => {
    const measure = () => {
      if (window.innerWidth >= BREAKPOINTS.LG || !ref.current) {
        setH(0);
        return;
      }
      setH(ref.current.getBoundingClientRect().height);
    };
    const timeouts = MEASUREMENT_DELAYS.map((d) => setTimeout(measure, d));
    window.addEventListener("resize", measure);
    const ro = new ResizeObserver(() => requestAnimationFrame(measure));
    if (ref.current) ro.observe(ref.current);
    return () => {
      timeouts.forEach(clearTimeout);
      window.removeEventListener("resize", measure);
      ro.disconnect();
    };
  }, [activeCard, screenW, ref]);
  return h;
};

export const useActiveCard = (
  len: number,
  sectionsRef: React.RefObject<HTMLDivElement | null>,
  desktopRef: React.RefObject<HTMLDivElement | null>,
  mobileRef: React.RefObject<HTMLDivElement | null>
) => {
  const [active, setActive] = useState(0);
  const updateViewport = useCallback(() => {
    if (window.innerWidth < BREAKPOINTS.LG || !sectionsRef.current) return;
    const children = Array.from(sectionsRef.current.children) as HTMLElement[];
    if (children.length !== len) return;
    const cy = window.innerHeight / 2;
    let idx = 0;
    for (let i = 0; i < children.length; i++) {
      const r = children[i].getBoundingClientRect();
      if (cy >= r.top && cy < r.bottom) {
        idx = i;
        break;
      }
      if (cy < r.top) break;
      idx = i;
    }
    setActive(idx);
  }, [len, sectionsRef]);
  const mobileScroll = useScroll({ target: mobileRef, offset: ["start start", "end end"] });
  const desktopScroll = useScroll({ container: desktopRef, offset: ["start start", "end end"] });
  useMotionValueEvent(mobileScroll.scrollYProgress, "change", (p) => {
    if (window.innerWidth >= BREAKPOINTS.LG) return;
    if (len <= 1) {
      setActive(0);
      return;
    }
    setActive(Math.min(Math.floor(p * len), len - 1));
  });
  useMotionValueEvent(desktopScroll.scrollYProgress, "change", () => {
    if (window.innerWidth >= BREAKPOINTS.LG) updateViewport();
  });
  useEffect(() => {
    if (window.innerWidth < BREAKPOINTS.LG || len === 0) return;
    updateViewport();
    const el = desktopRef.current;
    if (!el) return;
    el.style.scrollBehavior = "smooth";
    const onScroll = () => requestAnimationFrame(updateViewport);
    el.addEventListener("scroll", onScroll, { passive: true });
    const t = setInterval(updateViewport, SCROLL_UPDATE_INTERVAL);
    return () => {
      el.removeEventListener("scroll", onScroll);
      el.style.scrollBehavior = "";
      clearInterval(t);
    };
  }, [len, updateViewport, desktopRef]);
  return active;
};

export const useSectionVisibility = (
  contentRef: React.RefObject<HTMLDivElement | null>
) => {
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    if (!contentRef.current || window.innerWidth >= BREAKPOINTS.LG) return;
    let rafId: number | null = null;
    let lastValue = true;
    const checkVisibility = () => {
      if (!contentRef.current) return;
      const rect = contentRef.current.getBoundingClientRect();
      const contentBottom = rect.bottom;
      const threshold = window.innerHeight * 0.1;
      const newValue = contentBottom > threshold;
      if (newValue !== lastValue) {
        lastValue = newValue;
        setIsVisible(newValue);
      }
    };
    const handleScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(checkVisibility);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    checkVisibility();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [contentRef]);
  return isVisible;
};
