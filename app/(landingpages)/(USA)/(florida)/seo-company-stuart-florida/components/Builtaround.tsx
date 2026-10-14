
import { Typography } from "@/components/ui/Typography";

export default function BuiltAround() {
  return (
    <section id="strategy" className="bg-black py-6 lg:py-10 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="order-1 w-full lg:max-w-2xl text-center lg:text-left">
           <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
             <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
             <Typography variant="overline" className="text-white/80">
              Stuart SEO
             </Typography>
           </div>

          <Typography variant="display-2xl" as="h2" className="text-white  leading-tight">
            Grow Your Business With SEO in Stuart, FL
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
            Achieving continuous search visibility requires more than peppering your site with keywords. Geekonomy implements targeted SEO campaigns aimed at increasing organic visibility, driving qualified prospects and converting search demand into actionable growth.
          </Typography>
          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
            Industry-specific SEO services: Local services, corporations, retailers, or emerging companies – a targeted SEO campaign can bring your website visitors who are actually looking for your solutions. Geekonomy‘s marketing campaigns are built on your company‘s goals, your website‘s audience, competition, and search opportunities ensuring your every optimization has a purpose.
          </Typography>
          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
            To enhance the architecture of the site, to build our local search footprint and to produce content based on customer intent, we intend to build a more robust organic platform that can continue to yield visibility and qualified traffic over a period of time.
          </Typography>
        </div>

          <div className="order-2 mx-auto w-full max-w-95 lg:mx-0 lg:max-w-130 lg:justify-self-end">
            <div className="aspect-[4/4] w-full overflow-hidden rounded-[1rem] border border-white/10 bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
              <img
                src= "https://pub-67a4c50822e240c78b2f040321a1da26.r2.dev/landing-pages/Stuart-h2.webp"
                alt="Business in Stuart"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          </div>
      </div>
    </section>
  );
}

