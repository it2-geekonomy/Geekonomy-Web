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
      "clamp(0.875rem, 0.825rem + 0.125vw, 1rem)",
      { lineHeight: "1.6", letterSpacing: "0" },
    ],
    lg: [
      "clamp(1rem, 0.95rem + 0.125vw, 1.125rem)",
      { lineHeight: "1.6", letterSpacing: "-0.025em" },
    ],
    xl: [
      "clamp(1.125rem, 1.075rem + 0.125vw, 1.25rem)",
      { lineHeight: "1.5", letterSpacing: "-0.025em" },
    ],
    "2xl": [
      "clamp(1.25rem, 1.1rem + 0.25vw, 1.5rem)",
      { lineHeight: "1.4", letterSpacing: "-0.025em" },
    ],
    "3xl": [
      "clamp(1.5rem, 1.35rem + 0.25vw, 1.875rem)",
      { lineHeight: "1.3", letterSpacing: "-0.05em" },
    ],
    "4xl": [
      "clamp(1.75rem, 1.6rem + 0.25vw, 2.25rem)",
      { lineHeight: "1.2", letterSpacing: "-0.05em" },
    ],
    "5xl": [
      "clamp(2rem, 1.7rem + 0.5vw, 3rem)",
      { lineHeight: "1.1", letterSpacing: "-0.05em" },
    ],
    "6xl": [
      "clamp(2.5rem, 2.2rem + 0.5vw, 3.75rem)",
      { lineHeight: "1.1", letterSpacing: "-0.05em" },
    ],
    "7xl": [
      "clamp(3rem, 2.7rem + 0.5vw, 4.5rem)",
      { lineHeight: "1", letterSpacing: "-0.05em" },
    ],
    "8xl": [
      "clamp(3.5rem, 3.2rem + 1vw, 6rem)",
      { lineHeight: "1", letterSpacing: "-0.05em" },
    ],
    "9xl": [
      "clamp(4.5rem, 4.2rem + 1vw, 8rem)",
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
