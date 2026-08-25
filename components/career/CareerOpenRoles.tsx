"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { CareerPageSection } from "@/components/career/CareerPageSection";
import { Typography } from "@/components/ui/Typography";
import {
  CAREER_EMPTY_TEAM_COPY,
  CAREER_FILTERS,
  CAREER_JOBS,
  CAREER_SECTION_ORDER,
  type CareerFilter,
  type CareerJob,
  type CareerTeam,
} from "@/lib/careers/jobs";

function JobRow({ job }: { job: CareerJob }) {
  const content = (
    <>
      <div className="min-w-0 flex-1 text-left">
        <Typography
          as="h3"
          variant="h2"
          className="mb-2 text-[20px] font-semibold text-white transition-colors duration-200 group-hover:text-[#69AE44] sm:text-[22px] lg:text-[25px]"
        >
          {job.title}
        </Typography>
        <Typography
          as="p"
          variant="body-lg"
          className="font-normal text-[#A1A1AA] transition-colors duration-200 group-hover:text-white"
        >
          {job.location} · {job.employmentType} · {job.experience}
        </Typography>
      </div>
    </>
  );

  const rowClassName =
    "group flex w-full flex-col gap-4 border-b border-[#1f1f1f] py-9 transition-colors duration-200 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:py-10 lg:py-12";

  if (job.applicationUrl) {
    return (
      <Link
        href={job.applicationUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`${rowClassName} cursor-pointer no-underline`}
      >
        {content}
      </Link>
    );
  }

  return <article className={rowClassName}>{content}</article>;
}

function TeamEmptyState({ team }: { team: CareerTeam }) {
  const copy = CAREER_EMPTY_TEAM_COPY[team];

  return (
    <div className="border-b border-[#1f1f1f] py-9 text-left sm:py-10 lg:py-12">
      <Typography
        as="p"
        variant="body-lg"
        className="mb-2 font-medium text-white/90"
      >
        {copy.headline}
      </Typography>
      <Typography as="p" variant="body-lg" className="max-w-3xl font-normal text-[#A1A1AA]">
        {copy.body}
      </Typography>
    </div>
  );
}

function TeamSection({
  team,
  jobs,
  showHeader = true,
}: {
  team: CareerTeam;
  jobs: CareerJob[];
  showHeader?: boolean;
}) {
  return (
    <section className="text-left">
      {showHeader ? (
        <Typography
          as="p"
          variant="overline"
          className="mb-4 font-normal tracking-widest text-[#A1A1AA] sm:mb-5"
        >
          {team}
        </Typography>
      ) : null}

      {jobs.length > 0 ? (
        <div>
          {jobs.map((job) => (
            <JobRow key={job.id} job={job} />
          ))}
        </div>
      ) : (
        <TeamEmptyState team={team} />
      )}
    </section>
  );
}

export default function CareerOpenRoles() {
  const [activeFilter, setActiveFilter] = useState<CareerFilter>("ALL");

  const jobsForTeam = (team: CareerTeam) =>
    CAREER_JOBS.filter((job) => job.team === team);

  const filteredJobs = useMemo(() => {
    if (activeFilter === "ALL") return CAREER_JOBS;
    return jobsForTeam(activeFilter);
  }, [activeFilter]);

  return (
    <CareerPageSection className="bg-black pb-10 pt-2 sm:pb-12 sm:pt-4 lg:pb-14 lg:pt-6">
      <div className="mb-10 flex justify-start gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mb-14 sm:flex-wrap sm:overflow-visible">
        {CAREER_FILTERS.map((filter) => {
          const isActive = activeFilter === filter.id;
          return (
            <button
              key={filter.id}
              type="button"
              onClick={() => setActiveFilter(filter.id)}
              className={`shrink-0 rounded-full border px-5 py-2.5 text-xs font-semibold uppercase tracking-wide transition-colors sm:text-sm ${
                isActive
                  ? "border-[#69AE44] bg-[#69AE44] text-black"
                  : "border-[#3f3f46] bg-transparent text-white/90 hover:border-[#52525b] hover:text-white"
              }`}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      {activeFilter === "ALL" ? (
        <div className="space-y-12 sm:space-y-14 lg:space-y-16">
          {CAREER_SECTION_ORDER.filter(
            (team) => jobsForTeam(team).length > 0
          ).map((team) => (
            <TeamSection key={team} team={team} jobs={jobsForTeam(team)} />
          ))}
        </div>
      ) : (
        <TeamSection
          team={activeFilter}
          jobs={filteredJobs}
          showHeader={false}
        />
      )}
    </CareerPageSection>
  );
}
