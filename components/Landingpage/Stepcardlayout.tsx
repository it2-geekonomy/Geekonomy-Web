import { Typography } from "@/components/ui/Typography";
import { Boldtext } from "./Boldtext";

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
            <Typography variant="overline" className="text-white/80">
              {label}
            </Typography>
          </div>

          <Typography variant="display-2xl" as="h2" className="text-white leading-tight">
            {heading}
          </Typography>

          <div className="mt-5 space-y-4">
            {intro.map((paragraph, i) => (
              <Typography key={i} variant="body-xl" className="leading-relaxed text-white/90">
                {Boldtext(paragraph)}
              </Typography>
            ))}
          </div>
        </div>

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
                <Typography variant="h3" as="h3" className="mb-2 text-white font-semibold">
                  {s.title}
                </Typography>

                {s.desc.map((sentence, i) => (
                  <Typography
                    key={i}
                    variant="body-lg"
                    className={`leading-relaxed text-white/90 ${i > 0 ? "mt-2" : ""}`}
                  >
                    {sentence}
                  </Typography>
                ))}
              </div>
            </div>
          ))}
        </div>
        {bottom && (
          <div className="mt-5 space-y-4">
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