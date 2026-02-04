/**
 * Typography Configuration
 * Modern fluid typography using clamp() for responsive scaling across all screen sizes
 * Follows best practices used by senior developers
 * 
 * All font sizes use clamp() for fluid, responsive scaling across all screen sizes
 * Mobile (320px) → Desktop (1920px+)
 */

export const typography = {
  fontSize: {
    // Precise fluid typography: clamp(minSize, preferredSize, maxSize)
    // Scales from 320px (20rem) to 1920px (120rem) viewport
    // Formula: preferred = minSize + (maxSize - minSize) * ((100vw - 20rem) / 100rem)
    // Example for lg: clamp(1rem, 0.975rem + 0.125vw, 1.125rem)
    // At 320px: 1rem (16px), At 1920px: 1.125rem (18px)
    xs: [
      "clamp(0.625rem, 0.575rem + 0.125vw, 0.75rem)",
      { lineHeight: "1.5", letterSpacing: "0.05em" },
    ],
    sm: [
      "clamp(0.75rem, 0.7rem + 0.125vw, 0.875rem)",
      { lineHeight: "1.5", letterSpacing: "0.025em" },
    ],
    base: [
      "clamp(1rem, 1rem + 0.5vw, 1.2rem)",
      { lineHeight: "1.6", letterSpacing: "0" },
    ],
    lg: [
      "clamp(1.125rem, 1rem + 0.5vw, 1.5rem)",
      { lineHeight: "1.6", letterSpacing: "-0.025em" },
    ],
    xl: [
      "clamp(1.25rem, 1.125rem + 0.5vw, 1.75rem)",
      { lineHeight: "1.5", letterSpacing: "-0.025em" },
    ],
    "2xl": [
      "clamp(1.5rem, 1.25rem + 1vw, 2.25rem)",
      { lineHeight: "1.4", letterSpacing: "-0.025em" },
    ],
    "3xl": [
      "clamp(1.875rem, 1.5rem + 1.5vw, 3rem)",
      { lineHeight: "1.3", letterSpacing: "-0.05em" },
    ],
    "4xl": [
      "clamp(2.25rem, 1.75rem + 2vw, 4rem)",
      { lineHeight: "1.2", letterSpacing: "-0.05em" },
    ],
    "5xl": [
      "clamp(3rem, 2.25rem + 3vw, 5.5rem)",
      { lineHeight: "1.1", letterSpacing: "-0.05em" },
    ],
    "6xl": [
      "clamp(3.75rem, 2.75rem + 4vw, 7rem)",
      { lineHeight: "1.1", letterSpacing: "-0.05em" },
    ],
    "7xl": [
      "clamp(4.5rem, 3.5rem + 5vw, 9rem)",
      { lineHeight: "1", letterSpacing: "-0.05em" },
    ],
    "8xl": [
      "clamp(5.5rem, 4.5rem + 6vw, 11rem)",
      { lineHeight: "1", letterSpacing: "-0.05em" },
    ],
    "9xl": [
      "clamp(3.5rem, 3rem + 8vw, 10rem)",
      { lineHeight: "1", letterSpacing: "-0.05em" },
    ],
  },

  fontFamily: {
    sans: ["var(--font-poppins)", "Poppins", "system-ui", "sans-serif"],
    mono: ["monospace"],
  },

  letterSpacing: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0em",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },

  lineHeight: {
    none: "1",
    tight: "1.25",
    snug: "1.375",
    normal: "1.5",
    relaxed: "1.625",
    loose: "2",
  },
};
