"use client";

import Link from "next/link";
import { useCallback, useState } from "react";
import { Upload, X } from "lucide-react";
import { CareerPageSection } from "@/components/career/CareerPageSection";
import { Typography } from "@/components/ui/Typography";
import { useCareerApplicationForm } from "@/hooks/useCareerApplicationForm";
import { CAREER_APPLICATION_POSITIONS } from "@/lib/careers/jobs";
import { ACCEPTED_RESUME_TYPES } from "@/lib/careers/validateCareerApplication";
import { cn } from "@/lib/utils";

const STEPS = [
  {
    number: "01",
    title: "Submit your application",
    body: "Fill in the form and attach your resume. Takes less than 2 minutes.",
  },
  {
    number: "02",
    title: "We review your profile",
    body: "Our team reviews every application personally. No bots, no auto-rejects.",
  },
  {
    number: "03",
    title: "We reach out within 5 days",
    body: "If there's a fit, we'll schedule a candid conversation — no fluff.",
  },
] as const;

const fieldClass =
  "w-full rounded-lg border border-[#27272a] bg-[#141414] px-4 py-3.5 text-sm text-white placeholder:text-zinc-500 outline-none transition-colors duration-200 focus:border-[#69AE44]";

const labelClass = "mb-2 block text-sm font-medium text-white";

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1.5 text-xs text-red-400">{message}</p>;
}

export default function CareerApplicationSection() {
  const {
    values,
    resume,
    errors,
    isSubmitting,
    submitStatus,
    fileInputRef,
    handleChange,
    setResumeFile,
    clearResume,
    handleSubmit,
  } = useCareerApplicationForm();

  const [isDragging, setIsDragging] = useState(false);

  const acceptResume = ACCEPTED_RESUME_TYPES.join(",");

  const pickResume = useCallback(
    (file: File | null) => {
      if (!file) return;
      setResumeFile(file);
    },
    [setResumeFile]
  );

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) pickResume(file);
  };

  return (
    <CareerPageSection
      id="career-application"
      className="border-t border-[#1f1f1f] bg-black pb-16 pt-4 sm:pb-24 sm:pt-8 lg:pb-28"
      innerClassName="text-left"
    >
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
        <div className="flex flex-col">
          <Typography
            as="p"
            variant="overline"
            className="mb-5 font-normal tracking-widest text-[#69AE44] sm:mb-6"
          >
            // Apply Now
          </Typography>

          <Typography
            as="h2"
            variant="display-2xl"
            className="mb-5 text-[28px] font-bold leading-tight text-white sm:text-[34px] lg:text-[40px]"
          >
            Join a team that builds with{" "}
            <span className="text-[#69AE44]">purpose.</span>
          </Typography>

          <Typography
            as="p"
            variant="body-lg"
            className="mb-10 max-w-md font-normal leading-relaxed text-[#A1A1AA] sm:mb-12"
          >
            We don&apos;t hire for roles. We hire for people. If you&apos;ve got
            the craft and the drive, we want to hear from you.
          </Typography>

          <ol className="mb-10 space-y-8 sm:mb-12">
            {STEPS.map((step) => (
              <li key={step.number} className="flex gap-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#69AE44] text-sm font-semibold text-[#69AE44]">
                  {step.number}
                </span>
                <div>
                  <Typography
                    as="p"
                    variant="body-lg"
                    className="mb-1 font-semibold text-white"
                  >
                    {step.title}
                  </Typography>
                  <Typography
                    as="p"
                    variant="body-lg"
                    className="font-normal leading-relaxed text-[#A1A1AA]"
                  >
                    {step.body}
                  </Typography>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="rounded-2xl border border-[#27272a] bg-[#0c0c0c] p-6 sm:p-8 lg:p-10">
          <div className="mb-8">
            <Typography
              as="h3"
              variant="h2"
              className="mb-1 text-xl font-semibold text-white sm:text-2xl"
            >
              Your Application
            </Typography>
            <Typography as="p" variant="caption" className="text-zinc-500">
              All fields marked * are required
            </Typography>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="firstName" className={labelClass}>
                  First Name *
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  placeholder="abc"
                  className={fieldClass}
                  autoComplete="given-name"
                />
                <FieldError message={errors.firstName} />
              </div>
              <div>
                <label htmlFor="lastName" className={labelClass}>
                  Last Name *
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  placeholder="Your Last Name"
                  className={fieldClass}
                  autoComplete="family-name"
                />
                <FieldError message={errors.lastName} />
              </div>
            </div>

            <div>
              <label htmlFor="email" className={labelClass}>
                Email Address *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                placeholder="abc@yourcompany.com"
                className={fieldClass}
                autoComplete="email"
              />
              <FieldError message={errors.email} />
            </div>

            <div>
              <label htmlFor="linkedIn" className={labelClass}>
                LinkedIn / Portfolio
              </label>
              <input
                id="linkedIn"
                name="linkedIn"
                type="url"
                value={values.linkedIn}
                onChange={handleChange}
                placeholder="https://linkedin.com/in/yourprofile"
                className={fieldClass}
              />
            </div>

            <div>
              <label htmlFor="phone" className={labelClass}>
                Phone Number *
              </label>
              <div className="flex overflow-hidden rounded-lg border border-[#27272a] bg-[#141414] focus-within:border-[#69AE44]">
                <span className="flex shrink-0 items-center gap-2 border-r border-[#27272a] px-3 text-sm text-zinc-400 sm:px-4">
                  <span aria-hidden>🇮🇳</span>
                  +91
                </span>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={values.phone}
                  onChange={handleChange}
                  placeholder="98765 43210"
                  className="min-w-0 flex-1 bg-transparent px-4 py-3.5 text-sm text-white placeholder:text-zinc-500 outline-none"
                  autoComplete="tel"
                />
              </div>
              <FieldError message={errors.phone} />
            </div>

            <div>
              <label htmlFor="position" className={labelClass}>
                Job Position *
              </label>
              <select
                id="position"
                name="position"
                value={values.position}
                onChange={handleChange}
                className={cn(
                  fieldClass,
                  "cursor-pointer appearance-none bg-[#141414]",
                  !values.position && "text-zinc-500"
                )}
              >
                {CAREER_APPLICATION_POSITIONS.map((role) => (
                  <option
                    key={role.value || "placeholder"}
                    value={role.value}
                    disabled={!role.value}
                    className="text-white"
                  >
                    {role.label}
                  </option>
                ))}
              </select>
              <FieldError message={errors.position} />
            </div>

            <div>
              <label className={labelClass}>Resume / CV *</label>
              <div
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    fileInputRef.current?.click();
                  }
                }}
                onDragOver={(e) => {
                  e.preventDefault();
                  setIsDragging(true);
                }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={onDrop}
                onClick={() => fileInputRef.current?.click()}
                className={cn(
                  "flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed px-6 py-10 text-center transition-colors duration-200",
                  isDragging
                    ? "border-[#69AE44] bg-[#69AE44]/5"
                    : "border-[#3f3f46] hover:border-[#69AE44]/60"
                )}
              >
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#69AE44]/15 text-[#69AE44]">
                  <Upload className="h-5 w-5" aria-hidden />
                </span>
                <Typography
                  as="p"
                  variant="body-lg"
                  className="mb-1 font-normal text-zinc-300"
                >
                  Drop your resume here or{" "}
                  <span className="font-medium text-[#69AE44]">
                    browse to upload
                  </span>
                </Typography>
                <Typography as="p" variant="caption" className="text-zinc-500">
                  PDF, DOC, DOCX — Max 5MB
                </Typography>
                {resume ? (
                  <div
                    role="presentation"
                    onClick={(e) => e.stopPropagation()}
                    className="mt-4 flex w-full max-w-md items-center gap-3 rounded-lg border border-[#69AE44]/40 bg-[#69AE44]/10 px-4 py-3"
                  >
                    <Typography
                      as="p"
                      variant="caption"
                      className="min-w-0 flex-1 truncate text-left font-medium text-[#69AE44]"
                    >
                      {resume.name}
                    </Typography>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        clearResume();
                      }}
                      className="flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-full text-zinc-400 transition-colors hover:bg-white/10 hover:text-white"
                      aria-label="Remove resume"
                    >
                      <X className="h-4 w-4" aria-hidden />
                    </button>
                  </div>
                ) : null}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept={acceptResume}
                  className="sr-only"
                  onChange={(e) => pickResume(e.target.files?.[0] ?? null)}
                />
              </div>
              <FieldError message={errors.resume} />
            </div>

            <label className="flex cursor-pointer items-start gap-3">
              <input
                type="checkbox"
                name="consent"
                checked={values.consent}
                onChange={handleChange}
                className="mt-1 h-4 w-4 shrink-0 cursor-pointer rounded border-zinc-600 bg-[#141414] accent-[#69AE44]"
              />
              <Typography
                as="span"
                variant="caption"
                className="text-left text-xs leading-relaxed text-zinc-400"
              >
                I agree to Geekonomy storing my details for recruitment
                purposes. My information will not be shared with third parties.{" "}
                <Link
                  href="/contact-us"
                  className="text-[#69AE44] underline-offset-2 hover:underline"
                >
                  View our Privacy Policy
                </Link>
                .
              </Typography>
            </label>
            <FieldError message={errors.consent} />

            {submitStatus === "success" ? (
              <p className="text-center text-sm font-medium text-[#69AE44]">
                Application submitted. We&apos;ll be in touch soon.
              </p>
            ) : null}
            {submitStatus === "error" ? (
              <p className="text-center text-sm font-medium text-red-400">
                Something went wrong. Please try again or email hr@geekonomy.in.
              </p>
            ) : null}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-full bg-[#69AE44] py-4 text-sm font-bold uppercase tracking-wide text-black transition-opacity duration-200 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Submitting…" : "Submit Application"}
            </button>
          </form>
        </div>
      </div>

      <Typography
        as="p"
        variant="caption"
        className="mt-10 w-full text-left text-xs leading-relaxed text-white sm:mt-12 lg:mt-14"
      >
        Geekonomy is an equal opportunity employer. We believe diverse teams build
        better products. All applications are reviewed without bias.
      </Typography>
    </CareerPageSection>
  );
}
