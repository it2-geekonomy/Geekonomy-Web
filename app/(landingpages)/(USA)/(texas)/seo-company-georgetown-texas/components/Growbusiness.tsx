import { Typography } from "@/components/ui/Typography";

export default function GrowBusiness() {
  return (
    <section id="strategy" className="bg-white/[0.02] py-6 lg:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="order-1 w-full lg:max-w-2xl text-center lg:text-left">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
            <Typography variant="overline" className="text-white/80">
              Grow Business
            </Typography>
          </div>

          <Typography variant="display-2xl" as="h2" className="text-white  leading-tight">
            Grow Your Georgetown Business With Search Engine Optimization
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
            Search Engines are becoming a critical way that customers reveal local business. When a customer searches for a service there is typically a comparison of at least a few businesses before choosing which one they will contact. Proper SEO allows your site to show up in the right searches and provides the visitor with the information needed to move to the next step.
          </Typography>

          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
            This is known as Geekonomy, which is using a combination of keyword research, site content optimization, technical improvements, local search strategies, and site conversion improvements to improve your organic presence. The aim is not just to generate more visitors to your website, but instead to generate more relevant visitors who are searching for products or services your business offers.
          </Typography>
          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
            A georgetown seo company strategy also needs to take into consideration the different regions, types of services and search habits which are relevant to your business. If tailored to match up with customer intent and local relevance, it will ensure there are more chances for a business to draw quality leads from organic search.
          </Typography>
        </div>

        <div className="order-2 mx-auto w-full max-w-95 lg:mx-0 lg:max-w-130 lg:justify-self-end">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-[1rem] border border-white/10 bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
              <img
                src= "https://pub-67a4c50822e240c78b2f040321a1da26.r2.dev/landing-pages/Georgetown-h2.webp"
                alt="Georgetown Business"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}