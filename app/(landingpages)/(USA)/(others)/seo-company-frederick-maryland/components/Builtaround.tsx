
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
              Frederick Search
             </Typography>
           </div>

          <Typography variant="display-2xl" as="h2" className="text-white  leading-tight">
            Grow Your Business With SEO in Frederick
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
            Having a high level of search visibility means your business will be found when people are searching for what you provide. Geekonomy creates SEO campaigns to get your business ranking well on Google, drive targeted traffic to your website and increase your enquiries and sales.
          </Typography>
          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
            Our <span className="text-[#FFFFFF] font-semibold">SEO company Frederick MD</span> businesses can partner with for sustained growth, focusing on what affects local and organic search from targeted keywords and service page optimization, to technical SEO, local search enhancement and high-quality links. The end result is a search plan tailored to your business, your audience and the Frederick marketplace.
          </Typography>
        </div>

          <div className="order-2 mx-auto w-full max-w-95 lg:mx-0 lg:max-w-130 lg:justify-self-end">
            <div className="aspect-[3.5/4] w-full overflow-hidden rounded-[1rem] border border-white/10 bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
              <img
                src= "https://pub-67a4c50822e240c78b2f040321a1da26.r2.dev/landing-pages/Frederick-Maryland-h2.webp"
                alt="Business in Frederick"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          </div>
      </div>
    </section>
  );
}

