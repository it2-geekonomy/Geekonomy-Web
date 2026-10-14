
import { Typography } from "@/components/ui/Typography";
import { steps } from "../const/Ourprocess";

export default function OurProcess() {
  return (
    <section id="process" className="bg-white/[0.02] py-6 lg:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-5xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
            <Typography variant="overline" className="text-white/80">
              Our Process
            </Typography>
          </div>

          <Typography variant="display-2xl" as="h2" className="text-white  leading-tight">
            Our Coral Springs SEO Process
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
            Good SEO is a continual process of research, optimization, measuring and refining. We tailor each campaign to your business objectives; we then use statistical analysis to identify the next step.
          </Typography>
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
                    className={`leading-relaxed text-white/90 ${i > 0 ? "mt-2" : ""}`}>
                    {sentence}
                </Typography>
                ))}
              </div>
            </div>
          ))}
        </div>
        <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
          This organized method enables us to continue improving your SEO strategy as your business, competitors and search environment evolves.
        </Typography>
      </div>
    </section>
  );
}