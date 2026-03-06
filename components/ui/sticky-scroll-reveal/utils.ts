import { BREAKPOINTS, IMAGE_HEIGHTS, PADDING_MULTIPLIERS, NAV_HEIGHT } from "./constants";

export const getPaddingMultiplier = (w: number): number => {
  const width = w;
  if (width < BREAKPOINTS.SM) return PADDING_MULTIPLIERS.SM;
  if (width < BREAKPOINTS.MD) return PADDING_MULTIPLIERS.MD;
  if (width < BREAKPOINTS.LG) return PADDING_MULTIPLIERS.LG;
  return 0;
};

export const getImageHeight = (w: number): string => {
  const width = w;
  if (width < BREAKPOINTS.SM) return IMAGE_HEIGHTS.SM;
  if (width < BREAKPOINTS.MD) return IMAGE_HEIGHTS.MD;
  if (width < BREAKPOINTS.LG) return IMAGE_HEIGHTS.LG;
  return IMAGE_HEIGHTS.SM;
};

export const calculateContentPadding = (imgH: number, screenW: number): string => {
  if (imgH > 0) return `${NAV_HEIGHT + imgH * getPaddingMultiplier(screenW)}px`;
  return `calc(${NAV_HEIGHT}px + ${getImageHeight(screenW)})`;
};

/** Replace h2/h3/h4 with div so content does not add to document outline (for hidden view to avoid duplicate headings). */
export const stripHeadingTags = (html: string): string =>
  html
    .replace(/<h([2-4])(\s[^>]*)?>/gi, "<div$2>")
    .replace(/<\/h[2-4]>/gi, "</div>");
