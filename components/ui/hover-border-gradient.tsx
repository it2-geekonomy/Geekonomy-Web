"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type HoverBorderGradientProps = {
  children: React.ReactNode;
  containerClassName?: string;
  className?: string;
  as?: React.ElementType;
};

export const HoverBorderGradient = ({
  children,
  containerClassName,
  className,
  as: Component = "div",
}: HoverBorderGradientProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn("relative group", containerClassName)}
      data-hide-mouse-light="true"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Animated gradient border - only visible on hover */}
      {isHovered && (
        <>
          <motion.div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, #6eaf4c, #4ade80, #22c55e, transparent 70%)`,
              filter: "blur(20px)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
          {/* Inner background to create border effect */}
          <div className="absolute inset-[2px] bg-[#111111] z-10" />
        </>
      )}
      <Component
        className={cn(
          "relative z-20",
          className
        )}
      >
        {children}
      </Component>
    </div>
  );
};
