import { Typography } from "@/components/ui/Typography";
import { getCareerHeroStats } from "@/lib/careers/stats";

const STAT_NUMBER =
  "font-bold leading-none tracking-tight text-[#69AE44]";

export default function CareerHero() {
  const stats = getCareerHeroStats();

  return (
    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
      {/* Left — copy */}
      <div className="flex flex-col justify-center text-left">
        <Typography
          as="p"
          variant="overline"
          className="mb-5 font-normal tracking-widest text-[#69AE44] sm:mb-6 lg:mb-8"
        >
          // OPEN POSITIONS
        </Typography>

        <Typography
          as="h1"
          variant="display-2xl"
          className="mb-5 max-w-[28rem] text-[32px] font-bold leading-[1.08] tracking-tight text-white sm:mb-6 sm:text-[40px] md:text-[44px] lg:mb-8 lg:text-[48px] xl:text-[52px]"
        >
          Build the future
          <br />
          <span className="text-[#69AE44]">of growth systems.</span>
        </Typography>

        <Typography
          as="p"
          variant="body-xl"
          className="max-w-md font-normal leading-relaxed text-[#A1A1AA]"
        >
          We&apos;re a team building work that punches far above its size. If you care about sharp thinking, great craft, and solving problems that actually matter - you&apos;ll feel at home here.
        </Typography>
      </div>

      {/* Right — stats panel (single box, T-shaped dividers) */}
      <div className="grid min-h-[300px] w-full grid-cols-2 grid-rows-[1.15fr_1fr] border border-[#2a2a2a] bg-[#141414] sm:min-h-[340px] lg:min-h-[400px]">
        {/* Open roles — full width, centered */}
        <div className="col-span-2 flex flex-col items-center justify-center border-b border-[#2a2a2a] px-6 py-10 text-center sm:py-12 lg:py-14">
          <span
            className={`mb-3 text-[clamp(3.25rem,9vw,5.25rem)] sm:mb-4 ${STAT_NUMBER}`}
          >
            {stats.openRoles}
          </span>
          <Typography
            as="p"
            variant="h3"
            className="mb-1.5 font-normal text-white sm:mb-2"
          >
            Open roles
          </Typography>
          <Typography
            as="p"
            variant="body-sm"
            className="font-normal text-[#A1A1AA]"
          >
            {stats.departments}
          </Typography>
        </div>

        {/* Urgent roles */}
        <div className="flex flex-col items-center justify-center border-r border-[#2a2a2a] px-6 py-8 text-center sm:px-8 sm:py-10 lg:py-12">
          <span
            className={`mb-2 text-[clamp(2.25rem,7vw,3.75rem)] sm:mb-3 ${STAT_NUMBER}`}
          >
            {stats.urgentRoles}
          </span>
          <Typography
            as="p"
            variant="body-xl"
            className="mb-1 font-normal text-white"
          >
            Urgent roles
          </Typography>
          <Typography
            as="p"
            variant="body-lg"
            className="font-normal text-[#A1A1AA]"
          >
            Immediate joining
          </Typography>
        </div>

        {/* Culture */}
        <div className="flex flex-col items-center justify-center px-6 py-8 text-center sm:px-8 sm:py-10 lg:py-12">
          <p className="mb-2 text-[15px] font-bold leading-[1.2] text-white sm:text-[16px] lg:text-[20px]">
          Ambitious ideas.
            <br />
            Meticulous execution.
          </p>
          <Typography
            as="p"
            variant="body-lg"
            className="font-normal text-[#A1A1AA]"
          >
            That’s our kind of team.
          </Typography>
        </div>
      </div>
    </div>
  );
}
