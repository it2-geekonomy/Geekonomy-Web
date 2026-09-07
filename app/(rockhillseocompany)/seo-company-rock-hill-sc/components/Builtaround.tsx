
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
              Rock Hill Market
             </Typography>
           </div>

          <Typography variant="display-2xl" as="h2" className="text-white  leading-tight">
            SEO That Fits the Rock Hill Market
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
            In your local search market, the Rock Hill companies are looking at a potential customer who is going to shop around, so being found for a too generic keyword isn‘t very effective. Instead, be found for the specific products and services you‘re offering!
          </Typography>
          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
            We look at how consumers search in Rock Hill, what your competitors are ranking for and what searches have the highest chance of bringing in enquiries. We link your Website Content, service pages, local signals and GMB visibility to those opportunities.
          </Typography>
          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
            Instead of having to use the same approach for each business, Geekonomy develops an SEO campaign custom-tailored to your industry, your customers and your competitors. This allows a Rock Hill SEO company‘s strategy to target searches relevant to your market rather than looking for rankings that aren't actually translating into business.
          </Typography>
          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
            Whether it means better Local visibility, or stronger Organic Search authority, the entire campaign is designed to make you easier to spot, and easier to select.
          </Typography>
        </div>

          <div className="order-2 mx-auto w-full max-w-95 lg:mx-0 lg:max-w-130 lg:justify-self-end">
            <div className="aspect-[3.5/4] w-full overflow-hidden rounded-[1rem] border border-white/10 bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
              <img
                src= "https://pub-67a4c50822e240c78b2f040321a1da26.r2.dev/landing-pages/rock-hill-h2.png"
                alt="Business in Rock hill"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          </div>
      </div>
    </section>
  );
}

