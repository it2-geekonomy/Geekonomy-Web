
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
              Why Need SEO
             </Typography>
           </div>

          <Typography variant="display-2xl" as="h2" className="text-white  leading-tight">
            Why Businesses Need a Strong SEO Strategy in Winter Springs
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
            Today, consumers turn to search engines to find local businesses, evaluate options and determine whom to contact. The right SEO tactics will make sure your website shows up when consumers are searching for the solutions your business provides.
          </Typography>
          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
            With seo company winter springs florida, the emphasis is on creating relevant search exposure for actual business services and areas covered. It might involve unearthing and refining critical service pages, creating geo-specific content, optimizing local search factors and resolving site technical problems.
          </Typography>
          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
            A well thought out plan takes into account your competitors and the searcher’s intent (information it’s searching for) when it comes to your key terms. Rather than attracting all traffic, your aim is to bring traffic in who is a better fit for what you offer, and establish routes to turning visitors into leads or buyers.
          </Typography>
        </div>

          <div className="order-2 mx-auto w-full max-w-95 lg:mx-0 lg:max-w-130 lg:justify-self-end">
            <div className="aspect-[3.5/4] w-full overflow-hidden rounded-[1rem] border border-white/10 bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
              <img
                src= "https://pub-67a4c50822e240c78b2f040321a1da26.r2.dev/landing-pages/Winter-Springs-h2.webp"
                alt="Business in Winter Springs"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          </div>
      </div>
    </section>
  );
}

