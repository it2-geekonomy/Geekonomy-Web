import { Typography } from "@/components/ui/Typography";
import { metrics } from "../const/Growth";

export default function Results() {
  return (
    <section id="results" className="bg-black py-8 lg:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-5xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
            <Typography variant="overline" className="text-white/80">
              MEASURABLE GROWTH
            </Typography>
          </div>
          <Typography
            variant="display-2xl"
            as="h2"
            className="text-white leading-tight "
          >
            SEO Results That Matter to Your Business
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
            Success in SEO doesn’t just mean ranking for a few nice keywords. Geekonomy built itself on sustainable business growth achieved through search visibility and the right kind of activity.Our SEO campaigns are measured against meaningful performance indicators such as:
          </Typography>
        </div>

        <div className="mb-11 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {metrics.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="w-95 max-w-full mx-auto sm:w-auto sm:mx-0 rounded-[1.25rem] border border-white/10 bg-white/[0.03] p-7 transition-all hover:-translate-y-1 hover:border-[#69AE44]/40"
            >
              <div className="mb-3.5 flex h-11 w-11 items-center justify-center rounded-[0.75rem] bg-[#69AE44]/10 text-[#69AE44]">
                <Icon className="h-5.5 w-5.5" strokeWidth={1.8} />
              </div>
              <Typography variant="h3" as="h3" className="mb-2 text-white font-semibold">
                {title}
              </Typography>
              <Typography variant="body-lg" className="leading-relaxed text-white/90">
                {desc}
              </Typography>
            </div>
          ))}
        </div>
        <Typography variant="h3" as="h3" className="mt-6 max-w-7xl text-white font-semibold">
        Strategy, Execution, Measurement:
        </Typography>

         <Typography variant="body-xl" className="mt-6 max-w-7xl leading-relaxed text-white/90">
            As a rule, all SEO projects start with an honest appraisal of your current position and prospects. We utilize technical and content audits, semantic search and local SEO, authority building, and the like to optimize your organic performance.        
        </Typography>
        <Typography variant="body-xl" className="mt-6 max-w-7xl leading-relaxed text-white/90">
            As your visibility increases, we constantly monitor what is bringing in the most results and fine-tune the plan.        
        </Typography>
        <Typography variant="body-xl" className="mt-6 max-w-7xl leading-relaxed text-white/90">
            Accept only traffic that is working to improve your position. Create and execute an SEO plan that is built around the right audience, the right search terms, and the right results.        
        </Typography>
      </div>
    </section>
  );
}