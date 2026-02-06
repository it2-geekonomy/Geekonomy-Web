import { useEffect, useState, RefObject } from "react";

/**
 * Custom hook to calculate scroll progress for a section
 * Starts filling when section reaches middle of viewport (from top or bottom)
 * @param sectionRef - Reference to the section element
 * @returns Progress value between 0 and 1
 */
export function useScrollProgress(sectionRef: RefObject<HTMLElement | null>): number {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = rect.height;
      
      // Middle of the viewport
      const viewportMiddle = windowHeight / 2;
      
      // Section's top and bottom positions relative to viewport
      const sectionTop = rect.top;
      const sectionBottom = rect.bottom;
      
      // Start filling when section top reaches middle of viewport
      // Complete filling when section bottom reaches middle of viewport
      let progress = 0;
      
      // When section top is above middle and section bottom is below middle
      if (sectionTop <= viewportMiddle && sectionBottom >= viewportMiddle) {
        // Calculate progress: 0 when top reaches middle, 1 when bottom reaches middle
        const distanceFromMiddle = viewportMiddle - sectionTop;
        const totalDistance = sectionHeight;
        progress = Math.min(1, Math.max(0, distanceFromMiddle / totalDistance));
      } else if (sectionTop < viewportMiddle && sectionBottom < viewportMiddle) {
        // Section has fully passed the middle point (scrolled past)
        progress = 1;
      } else if (sectionTop > viewportMiddle && sectionBottom > viewportMiddle) {
        // Section hasn't reached the middle point yet
        progress = 0;
      }

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionRef]);

  return scrollProgress;
}
