
import { Typography } from "@/components/ui/Typography";

export default function BussinessStrategy() {
  return (
    <section id="strategy" className="bg-white/[0.02] py-6 lg:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="order-1 w-full lg:max-w-2xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
            <Typography variant="overline" className="text-white/80">
              Business Strategy 
            </Typography>
          </div>

          <Typography variant="display-2xl" as="h2" className="text-white  leading-tight">
            Why Businesses in Guwahati Need a Stronger Digital Marketing Strategy
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
          Guwahati is a competitive marketplace where consumers can now Google your business, look for local services, check google reviews and see who they want to ring. A website alone or solely managing social media accounts will not suffice. In the new digital world.     
          </Typography>

          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
           A carefully executed digital marketing strategy helps companies establish visibility everywhere it counts on Google Search, Maps, paid ads, and social media and leading prospects to do business with you requires different strategies in different industries, markets, target groups, and with different goals so driving results is not one-size-fits-all.
          </Typography>
          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
            For businesses serving customers in Guwahati, this includes optimizing to be found in local search, developing pages for your most valuable services, targeting the right audience through paid promotion and converting more visitors into enquiries.
          </Typography>
          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
            Geekonomy integrates all of them with a defined business goal, so your investment in digital marketing is targeted towards the right customers instead of just having more traffic online.
          </Typography>
        </div>

        <div className="order-2 mx-auto w-full max-w-95 lg:mx-0 lg:max-w-130 lg:justify-self-end">
            <div className="aspect-[3/4] w-full overflow-hidden rounded-[1rem] border border-white/10 bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
              <img
                src="https://pub-67a4c50822e240c78b2f040321a1da26.r2.dev/landing-pages/guwahati-h2.png"
                alt="Guwahati Need a Stronger Digital Marketing Strategy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}