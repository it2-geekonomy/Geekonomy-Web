
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
              Tomball SEO
             </Typography>
           </div>

          <Typography variant="display-2xl" as="h2" className="text-white  leading-tight">
            Results-Driven SEO Services for Tomball Businesses
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
            But traffic isn’t enough. Businesses need visibility in front of potential customers who are searching for them. As a seo company tomball, Geekonomy works to improve your websites organic visibility and generate a direct path from search results to potential clients.
          </Typography>
          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
            Our SEO services may involve technical site improvements, local search, keywords, content, internal linking, optimization of the Google Business Profile, and conversion-based website recommendations. Every campaign is built around your business objectives, competitors, services, and audience.
          </Typography>
          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
            Continuously optimize, improve, and measure the results of your website and it will grow your search exposure and generate more calls, leads, appointments and sales.
          </Typography>
        </div>

          <div className="order-2 mx-auto w-full max-w-95 lg:mx-0 lg:max-w-130 lg:justify-self-end">
            <div className="aspect-[4/4] w-full overflow-hidden rounded-[1rem] border border-white/10 bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
              <img
                src= "https://pub-67a4c50822e240c78b2f040321a1da26.r2.dev/landing-pages/Tomball-h2.webp"
                alt="Business in Tomball"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          </div>
      </div>
    </section>
  );
}

