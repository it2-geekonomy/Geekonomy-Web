"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function MouseLight() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
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

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isDesktop]);

  if (!isVisible || !isDesktop) return null;

  return (
    <motion.div
      className="fixed pointer-events-none z-50"
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
