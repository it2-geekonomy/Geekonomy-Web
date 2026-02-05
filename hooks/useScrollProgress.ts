import { useEffect, useState, RefObject } from "react";

/**
 * Custom hook to calculate scroll progress for a section
 * @param sectionRef - Reference to the section element
 * @returns Progress value between 0 and 1
 */
export function useScrollProgress(sectionRef: RefObject<HTMLElement | null>): number {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;

      // Calculate when section enters viewport
      const sectionStart = sectionTop - windowHeight;
      const sectionEnd = sectionTop + sectionHeight;

      // Calculate progress: 0 when section enters, 1 when fully scrolled
      let progress = 0;
      if (scrollY >= sectionStart) {
        const scrolled = scrollY - sectionStart;
        const totalScroll = sectionEnd - sectionStart;
        progress = Math.min(1, scrolled / totalScroll);
      }

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionRef]);

  return scrollProgress;
}
