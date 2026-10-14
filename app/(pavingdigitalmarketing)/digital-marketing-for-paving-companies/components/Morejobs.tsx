
import { Typography } from "@/components/ui/Typography";
import { flow } from "../const/Morejobs";

export default function MoreJobs() {
  return (
    <section id="Morejobs" className="bg-white/[0.02] py-6 lg:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="order-1 w-full lg:max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
              <Typography variant="overline" className="text-white/80 ">
                More Jobs, Not Just Clicks
              </Typography>
            </div>
            <Typography
              variant="display-2xl"
              as="h2"
              className="text-white leading-tight"
            >
              Digital Marketing That Helps Paving Companies Get More Jobs
            </Typography>
            <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
            It‘s No Use Being Good If No One Knows You are Good When potential clients are looking for paving contractors, they tend to find the company online first. A good digital marketing plan allows your company to stand out when customers are searching for paving contractors, establishes confidence in your work, and is easy to get an estimate from through online marketing for paving contractors.
            </Typography>
             <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
             Across all forms of marketing, from local search visibility to paid advertising and conversion-driven paving websites, all channels should ultimately be working to one end: generating leads for local paving. more quality paving leads for your company.
            </Typography>
            <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90 ">
            Whatever the focus of your contractor paving business residential driveways, commercial paving, parking lots, installation of asphalt, resurfacing, etc. you can market yourself to your targeted area with the proper digital approach.
            </Typography>
          </div>

          <div className="order-2 mx-auto w-full max-w-95 lg:mx-0 lg:max-w-130 lg:justify-self-end">
            <div className="aspect-[4/4] w-full overflow-hidden rounded-[1rem] border border-white/10 bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
              <img
                src="https://pub-67a4c50822e240c78b2f040321a1da26.r2.dev/landing-pages/paving-job.png"
                alt="Digital Marketing That Helps Paving Companies Get More Jobs"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-11 overflow-x-auto lg:overflow-visible rounded-[1.25rem] border border-[#69AE44] bg-[#69AE44]/10 p-7">
        <div className="flex w-max items-center gap-3 lg:w-full lg:flex-wrap lg:justify-center">
            {flow.map((s, i) => (
            <div key={s} className="flex items-center gap-3">
                <span
                className={`whitespace-nowrap rounded-full px-4 py-2.5 text-sm font-semibold ${i === flow.length - 1
                    ? "bg-[#69AE44] text-black"
                    : "border border-white/10 bg-white/10 text-white/80"
                    }`}
                >
                {s}
                </span>
                {i < flow.length - 1 && <span className="text-[#69AE44]">→</span>}
            </div>
            ))}
        </div>
        </div> 
      </div>
    </section>
  );
}