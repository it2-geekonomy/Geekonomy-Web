"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function MouseLight() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true); // Start visible by default
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Check if screen width is above 1024px (desktop)
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth > 1024);
    };

    checkDesktop();
    window.addEventListener("resize", checkDesktop);

    return () => {
      window.removeEventListener("resize", checkDesktop);
    };
  }, []);

  useEffect(() => {
    // Only add mouse event listeners on desktop
    if (!isDesktop) return;

    const isOverVisualElement = (x: number, y: number): boolean => {
      const element = document.elementFromPoint(x, y);
      if (!element) return false;

      // Check if directly over img, picture, map, or iframe (for maps)
      const tagName = element.tagName.toLowerCase();
      if (tagName === 'img' || tagName === 'picture' || tagName === 'map' || tagName === 'iframe') {
        return true;
      }

      // Check if element has object-cover/object-contain (Next.js Image with fill prop)
      const classList = element.classList;
      if (classList && (classList.contains('object-cover') || classList.contains('object-contain'))) {
        return true;
      }

      // Traverse up the DOM tree to find image/map containers
      let current: Element | null = element;
      let depth = 0;
      const maxDepth = 6; // Increased for Next.js Image nested structure
      
      while (current && depth < maxDepth) {
        const currentTag = current.tagName.toLowerCase();
        
        // Check for iframe, img, picture, map
        if (currentTag === 'iframe' || currentTag === 'img' || currentTag === 'picture' || currentTag === 'map') {
          return true;
        }

        // Check if current element has object-cover/object-contain (Next.js Image)
        const currentClasses = current.classList;
        if (currentClasses && (currentClasses.contains('object-cover') || currentClasses.contains('object-contain'))) {
          // If element has these classes, it's definitely an image
          return true;
        }

        // Check if we're inside an image container - verify the image actually contains our element
        const images = current.querySelectorAll('img, iframe, picture');
        for (const img of images) {
          // Check if the image element or its parent contains our current element
          if (img.contains(element) || img.parentElement?.contains(element)) {
            return true;
          }
        }

        // Check for background image (excluding gradients)
        const style = window.getComputedStyle(current);
        const bgImage = style.backgroundImage;
        if (bgImage && bgImage !== 'none' && bgImage !== 'initial' && bgImage !== '' && !bgImage.includes('gradient')) {
          return true;
        }

        // Check for data attribute to hide mouse light (e.g., hover gradient cards)
        if (current.hasAttribute && current.hasAttribute('data-hide-mouse-light')) {
          return true;
        }

        current = current.parentElement;
        depth++;
      }

      return false;
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });

      // Check if over visual element
      const overVisual = isOverVisualElement(e.clientX, e.clientY);
      // Show when NOT over visual, hide when over visual
      setIsVisible(!overVisual);
    };

    const handleMouseEnter = () => {
      // Show when mouse enters the document
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      // Only hide when mouse actually leaves the document
      setIsVisible(false);
    };

    // Set initial visibility
    setIsVisible(true);
    
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isDesktop]);

  if (!isVisible || !isDesktop) return null;

  return (
    <motion.div
      className="fixed pointer-events-none z-[70]"
      initial={{ left: mousePosition.x, top: mousePosition.y }}
      animate={{
        left: mousePosition.x,
        top: mousePosition.y,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 30,
      }}
      style={{
        width: "150px",
        height: "150px",
        background: "radial-gradient(circle, rgba(110, 175, 78, 0.7), transparent 70%)",
        filter: "blur(40px)",
        transform: "translate(-50%, -50%)",
      }}
    />
  );
}
