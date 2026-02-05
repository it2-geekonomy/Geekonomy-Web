/**
 * Animation configuration constants for ProcessSection
 */

export const ANIMATION_EASING = [0.16, 1, 0.3, 1] as const;

export const ANIMATION_DURATIONS = {
  fast: 0.5,
  normal: 0.6,
  slow: 0.8,
  slower: 0.9,
  slowest: 1.2,
} as const;

export const ANIMATION_DELAYS = {
  phaseStagger: 0.25,
  markerOffset: 0.1,
  contentOffset: 0.2,
  titleOffset: 0.3,
  checkmarkOffset: 0.4,
  checkmarkInnerOffset: 0.45,
  questionOffset: 0.5,
} as const;

export const VIEWPORT_OPTIONS = {
  once: true,
  margin: "-50px",
} as const;

export const VIEWPORT_OPTIONS_WIDE = {
  once: true,
  margin: "-100px",
} as const;
