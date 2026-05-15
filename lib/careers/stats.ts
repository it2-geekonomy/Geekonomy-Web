import { CAREER_JOBS } from "./jobs";

export function getCareerHeroStats() {
  const teamsWithRoles = new Set(CAREER_JOBS.map((job) => job.team));
  const teamCount = teamsWithRoles.size;

  return {
    openRoles: CAREER_JOBS.length,
    urgentRoles: CAREER_JOBS.filter((job) => job.urgent).length,
    departments: `Across ${teamCount} department${teamCount === 1 ? "" : "s"}`,
  };
}
