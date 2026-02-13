export interface GrowthSystemPhase {
  number: string;
  name: string;
}

export const GROWTH_SYSTEM_PHASES: readonly GrowthSystemPhase[] = [
  { number: "STEP 01", name: "Clear brand positioning and digital identity" },
  { number: "STEP 02", name: "Technology platforms that support operations and scale" },
  { number: "STEP 03", name: "Marketing systems that create consistency and demand" },
  { number: "STEP 04", name: "Processes that bring clarity and reduce friction" },
  { number: "STEP 05", name: "Each part is built to support the whole." },
] as const;
