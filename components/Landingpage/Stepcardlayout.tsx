import { Typography } from "@/components/ui/Typography";
import { Boldtext } from "./Boldtext";
<<<<<<< HEAD

export interface ProcessStep {
  n: string | number;
  title: string;
  desc: string[];
}

export interface OurProcessContent {
  label: string;
  heading: string;
  intro: string[];
  bottom?: string[];
  steps: ProcessStep[];
}

interface OurProcessProps {
  content: OurProcessContent;
}

export default function StepSection({ content }: OurProcessProps) {
  const { label, heading, intro, bottom, steps } = content;

  return (
    <section id="process" className="bg-white/[0.02] py-6 lg:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-5xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
=======
import { OurProcessProps } from "@/lib/constants/Landingpagetypes";

export default function StepSection({ content }: Readonly<OurProcessProps>) {
  const { label, heading, intro, bottom, steps } = content;

  return (
    <section id="process" className="flex w-full flex-col items-center bg-black py-6 lg:py-10">
      <div className="flex w-full max-w-7xl flex-col gap-10 px-6 lg:gap-14 lg:px-8">
        <div className="flex w-full flex-col items-center gap-5 text-center">
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
            <span className="size-1.5 rounded-full bg-[#69AE44]" />
>>>>>>> 90330df232d63e4529553dd5d67ba34e58ee68f8
            <Typography variant="overline" className="text-white/80">
              {label}
            </Typography>
          </div>

          <Typography variant="display-2xl" as="h2" className="text-white leading-tight">
            {heading}
          </Typography>

<<<<<<< HEAD
          <div className="mt-5 space-y-4">
=======
          <div className="flex w-full flex-col gap-4">
>>>>>>> 90330df232d63e4529553dd5d67ba34e58ee68f8
            {intro.map((paragraph, i) => (
              <Typography key={i} variant="body-xl" className="leading-relaxed text-white/90">
                {Boldtext(paragraph)}
              </Typography>
            ))}
          </div>
        </div>

<<<<<<< HEAD
        <div className="grid gap-4">
          {steps.map((s) => (
            <div
              key={s.n}
              className="step-glow-card relative grid grid-cols-[auto_1fr] items-start gap-6 rounded-[1.25rem] border border-white/10 bg-white/[0.03] p-7 transition-transform hover:translate-x-1.5 sm:p-8"
            >
              <span className="flex h-14.5 w-14.5 flex-none items-center justify-center rounded-[0.8125rem] bg-[#69AE44] text-2xl font-extrabold text-black">
                {s.n}
              </span>
              <div>
=======
        <div className="flex flex-col gap-4">
          {steps.map((s) => (
            <div
              key={s.n}
              className="step-glow-card relative grid grid-cols-[auto_1fr] items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition-transform hover:translate-x-1.5 sm:gap-6 sm:p-8"
            >
              <span className="flex size-14 flex-none items-center justify-center rounded-xl bg-[#69AE44] text-2xl font-extrabold text-black">
                {s.n}
              </span>

              <div className="flex flex-col gap-2">
>>>>>>> 90330df232d63e4529553dd5d67ba34e58ee68f8
                <Typography variant="h3" as="h3" className="mb-2 text-white font-semibold">
                  {s.title}
                </Typography>

                {s.desc.map((sentence, i) => (
                  <Typography
                    key={i}
                    variant="body-lg"
<<<<<<< HEAD
                    className={`leading-relaxed text-white/90 ${i > 0 ? "mt-2" : ""}`}
=======
                    className="leading-relaxed text-white/90"
>>>>>>> 90330df232d63e4529553dd5d67ba34e58ee68f8
                  >
                    {sentence}
                  </Typography>
                ))}
              </div>
            </div>
          ))}
        </div>
<<<<<<< HEAD
        {bottom && (
          <div className="mt-5 space-y-4">
=======

        {!!bottom?.length && (
          <div className="flex w-full flex-col gap-4">
>>>>>>> 90330df232d63e4529553dd5d67ba34e58ee68f8
            {bottom.map((paragraph, i) => (
              <Typography key={i} variant="body-xl" className="leading-relaxed text-white/90">
                {Boldtext(paragraph)}
              </Typography>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}