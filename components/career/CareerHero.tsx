import { Typography } from "@/components/ui/Typography";
import { getCareerHeroStats } from "@/lib/careers/stats";

const STAT_NUMBER = "font-bold leading-none tracking-tight text-[#69AE44]";

interface CareerHeroStats {
  openRoles: number;
  departments: string;
}

interface CareerHeroProps {
  stats?: CareerHeroStats;
}

const DEFAULT_STATS: CareerHeroStats = {
  openRoles: 6,
  departments: "Across 2 departments",
};

export default function CareerHero({ stats = DEFAULT_STATS }: CareerHeroProps) {
  return (
    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">

      {/* ── Left: copy ── */}
      <div className="flex flex-col justify-center text-left">
        <p className="mb-5 text-[11px] font-normal tracking-[0.2em] uppercase text-[#69AE44] sm:mb-6 lg:mb-8">
          // Open Positions
        </p>

        <h1 className="mb-5 max-w-[28rem] text-[32px] font-bold leading-[1.08] tracking-tight text-white sm:mb-6 sm:text-[40px] md:text-[44px] lg:mb-8 lg:text-[48px] xl:text-[52px]">
          Build the future
          <br />
          <span className="text-[#69AE44]">of growth systems.</span>
        </h1>

        <p className="max-w-md text-base font-normal leading-relaxed text-[#A1A1AA] sm:text-[17px]">
          We&apos;re a team building work that punches far above its size. If
          you care about sharp thinking, great craft, and solving problems that
          actually matter — you&apos;ll feel at home here.
        </p>
      </div>

      {/* ── Right: stats panel ── */}
      <div className="grid w-full grid-cols-1 grid-rows-[1.3fr_1fr] border border-[#2a2a2a] bg-[#141414] min-h-[300px] sm:min-h-[340px] lg:min-h-[400px]">

        {/* Open roles — full width top */}
        <div className="flex flex-col items-center justify-center gap-2 border-b border-[#2a2a2a] px-6 py-10 text-center sm:py-12 lg:py-14">
          <span className={`text-[clamp(3.5rem,10vw,5.5rem)] leading-none ${STAT_NUMBER}`}>
            {stats.openRoles}
          </span>
          <p className="text-[15px] font-semibold tracking-wide text-white sm:text-[17px]">
            Open roles
          </p>
          <p className="text-[13px] font-normal text-[#A1A1AA] sm:text-[14px]">
            {stats.departments}
          </p>
        </div>

        {/* Culture — full width bottom */}
        <div className="flex flex-col items-center justify-center gap-2 px-6 py-8 text-center sm:px-10 sm:py-10 lg:py-12">
          <p className="text-[17px] font-bold leading-[1.25] tracking-tight text-white sm:text-[19px] lg:text-[22px]">
            Ambitious ideas.
            <br />
            Meticulous execution.
          </p>
          <p className="text-[13px] font-normal text-[#A1A1AA] sm:text-[14px]">
            That&apos;s our kind of team.
          </p>
        </div>

      </div>
    </div>
  );
}