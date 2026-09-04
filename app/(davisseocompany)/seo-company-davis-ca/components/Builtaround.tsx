
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
              Across Davis, CA
             </Typography>
           </div>

          <Typography variant="display-2xl" as="h2" className="text-white  leading-tight">
            SEO Built for Businesses in Davis, CA
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
            Positioning Davis is not achieved by just name dropping in website content or by optimizing a few local terms. Customers search differently based upon their need, location, and willingness, which are crucial factors for any business owner to consider. Effective search engine optimization correlates these search differences to the proper pages, content, and local signals.
          </Typography>
          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
            We begin by getting to know your market, competitors, services, and customers. We find out what searches will send your business visitors and then develop your website based on the information we find.
          </Typography>
          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
            What are searches for your potential clients? From Google Maps and local listings to service-specific organic searches, our efforts contribute to increased visibility exactly where your potential clients are searching for you. We also specialize in on-site factors including search intent, website architecture, local relevance, content quality and conversion elements.
          </Typography>
          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
            What you get is an SEO approach that is aimed not only at improving impressions, but also at getting your business more targeted visits, enquiries, calls and customers from search.
          </Typography>
        </div>

          <div className="order-2 mx-auto w-full max-w-95 lg:mx-0 lg:max-w-130 lg:justify-self-end">
            <div className="aspect-[3.5/4] w-full overflow-hidden rounded-[1rem] border border-white/10 bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
              <img
                src= "https://pub-67a4c50822e240c78b2f040321a1da26.r2.dev/landing-pages/across-davis-h2.png"
                alt="Business in Davis"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          </div>
      </div>
    </section>
  );
}

