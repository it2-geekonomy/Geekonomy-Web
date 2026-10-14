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
              Henderson Search
             </Typography>
           </div>

          <Typography variant="display-2xl" as="h2" className="text-white  leading-tight">
            SEO Built Around Your Henderson Market
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
            Henderson customers are looking for local business, services, and solutions online. You need to show up when they are searching, not just another line of traffic to your site.
          </Typography>
          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
            We bring together a blend of local search optimization and organic SEO to get you more visibility in the exact relevant Google searches associated with your business. We analyze your services, your competition, user query, and the local landscape to craft a strategy tailored for Henderson.
          </Typography>
          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
            Location based searches, high intent service searches and everything in between, we are ready to help your business target the right customers and translate search visibility into opportunities.
          </Typography>
        </div>

          <div className="order-2 mx-auto w-full max-w-95 lg:mx-0 lg:max-w-130 lg:justify-self-end">
            <div className="aspect-[3.5/4] w-full overflow-hidden rounded-[1rem] border border-white/10 bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
              <img
                src= "https://pub-67a4c50822e240c78b2f040321a1da26.r2.dev/landing-pages/Henderson-h2.webp"
                alt="Business in Henderson"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          </div>
      </div>
    </section>
  );
}