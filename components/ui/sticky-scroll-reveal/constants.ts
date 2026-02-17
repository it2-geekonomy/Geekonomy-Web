export const NAV_HEIGHT = 64;

export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
} as const;

export const IMAGE_HEIGHTS = {
  SM: "55vw",
  MD: "44vw",
  LG: "40vw",
} as const;

export const PADDING_MULTIPLIERS = {
  SM: 0.5,
  MD: 0.6,
  LG: 0.7,
} as const;

export const MEASUREMENT_DELAYS = [50, 150, 300] as const;
export const SCROLL_UPDATE_INTERVAL = 150;
export const VISIBILITY_THRESHOLD = 0.1;
export const OPACITY_TRANSITION = "opacity 0.2s ease-in-out";
