import {
  Phone,
  TrendingUp,
  MapPin,
  LayoutGrid,
  LayoutTemplate,
  Clock,
  BriefcaseBusiness,
} from "lucide-react";
import { Typography } from "@/components/ui/Typography";

const metrics = [
  {
    icon: Phone,
    title: "Drive Organic Traffic",
    desc: "To your website by increasing the amount of targeted traffic visiting it from major search engines, such as Google.",
  },
  {
    icon: TrendingUp,
    title: "Keyword Visibility",
    desc: "Enhanced positioning for both the Commercial and Informational searches that matter.",
  },
  {
    icon: MapPin,
    title: "Local Search Visibility",
    desc: "Enhance your visibility in all related Carlsbad and local search listings.",
  },
  {
    icon: LayoutGrid,
    title: "Qualified Leads",
    desc: "Generate calls, inquiries, consultation requests, and more from organic search traffic.",
  },
  {
    icon: LayoutTemplate,
    title: "Conversions",
    desc: "Enhance the proportion of visitors who convert on your site.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Business Growth",
    desc: " Relate SEO performance to meaningful organizational results.",
  },
];

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
            variant="display-xl"
            as="h2"
            className="text-white text-2xl sm:text-4xl lg:text-5xl leading-[1.1]"
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
              className="w-[380px] max-w-full mx-auto sm:w-auto sm:mx-0 rounded-[20px] border border-white/10 bg-white/[0.03] p-7 transition-all hover:-translate-y-1 hover:border-[#69AE44]/40"
            >
              <div className="mb-3.5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#69AE44]/10 text-[#69AE44]">
                <Icon className="h-[22px] w-[22px]" strokeWidth={1.8} />
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