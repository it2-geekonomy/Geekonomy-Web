"use client";

/**
 * Re-export from the folder implementation so there is a single source of truth.
 * Import from "@/components/ui/sticky-scroll-reveal" (this file or the folder's index) — both resolve to the same component.
 */
export { StickyScroll } from "./sticky-scroll-reveal/sticky-scroll-reveal";
export type { StickyScrollContent, StickyScrollProps } from "./sticky-scroll-reveal/types";
