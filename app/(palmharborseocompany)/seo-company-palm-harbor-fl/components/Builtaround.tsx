
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
              Fort Walton Beach Search
             </Typography>
           </div>

          <Typography variant="display-2xl" as="h2" className="text-white  leading-tight">
            Get Found by Customers Searching in Palm Harbor
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
            Anyone in Palm Harbor looking for a service will most likely search Google before they select a business. Your website must rank for the right types of searches not only for broad keywords but for local, service-oriented keywords with true buying intent.
          </Typography>
          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
            Geekonomy improves your company‘s visibility not only in organic search, but also throughout local results through mapping your local presence, website and content with the way your customers search. Starting with location-based keywords and service pages, how you get listed in Google Maps and optimized to maximize conversions, every detail is geared toward attracting relevant prospects to your business.
          </Typography>
          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
            Using the right <span className="text-[#FFFFFF] font-semibold">Palm Harbor SEO company</span> you can increase your search relevance for services related to your business, get found by your potential clients at just the right point in their buying cycle, and convert more local searches into enquiries.
          </Typography>
        </div>

          <div className="order-2 mx-auto w-full max-w-95 lg:mx-0 lg:max-w-130 lg:justify-self-end">
            <div className="aspect-[3.5/4] w-full overflow-hidden rounded-[1rem] border border-white/10 bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
              <img
                src= "https://pub-67a4c50822e240c78b2f040321a1da26.r2.dev/landing-pages/palm-harbor-h2.webp"
                alt="Business in Palm Harbor FL"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          </div>
      </div>
    </section>
  );
}

