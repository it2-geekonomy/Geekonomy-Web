import { Typography } from "@/components/ui/Typography";

export default function GrowBusiness() {
  return (
  <section id="strategy" className="bg-white/[0.02] py-6 lg:py-10">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mb-12 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className=" w-full lg:max-w-2xl text-center lg:text-left">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
            <Typography variant="overline" className="text-white/80">
              Grow Business
            </Typography>
          </div>

          <Typography variant="display-2xl" as="h2" className="text-white  leading-tight">
            Grow Your Local Business With SEO in Boynton Beach
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
            Many local customers first search the internet and then make contact with a business. Whether they‘re searching for a local service provider, shopping around the local area or searching for a particular product, if your company shows up in the right place you can show up in front of potential customers.
          </Typography>
          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
            Geekonomy customizes local SEO tactics to make your site rank well on Boynton Beach related searches. Our approach utilizes service keywords, signals within your location, website optimizing, visibility on Google Maps and creating content directed to catching what your potential consumers are seeking.
          </Typography>
          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
            With a specific <span className="text-[#FFFFFF] font-semibold">seo company boynton</span> approach your business could increase stronger local search prominence, draw in more targeted visitors, and open up many more calls, questions, appointments, and sales.
          </Typography>
        </div>

        <div className=" mx-auto w-full max-w-95 lg:mx-0 lg:max-w-130 lg:justify-self-end">
          <div className="aspect-[4.5/5] w-full overflow-hidden rounded-[1rem] border border-white/10 bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
            <img
              src= "https://pub-67a4c50822e240c78b2f040321a1da26.r2.dev/landing-pages/Boynton-Beach-h2.webp"
              alt="Boynton Beach Business"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}