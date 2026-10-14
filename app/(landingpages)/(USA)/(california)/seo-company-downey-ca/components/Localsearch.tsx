import { Typography } from "@/components/ui/Typography";

export default function LocalSearch() {
  return (
    <section id="service" className="bg-black py-6 lg:py-10 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-5xl text-center">
           <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
             <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
             <Typography variant="overline" className="text-white/80">
               Local Search
             </Typography>
           </div>

          <Typography variant="display-2xl" as="h2" className="text-white  leading-tight">
            Get Found by Customers Searching in Downey, CA
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
            Local Searching Google is the most common search engine for customers when they are looking for a product or service in their local area. Incorporate a city, neighborhood or service, or even use the phrase “near me” so that local customers can find your website with a great online presence.
          </Typography>
          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
            Targeted local SEO strategy to help your business establish visibility for searches related to both the services you provide and your service areas. This will encompass content on your website, business location data, Google Business Profile, Business information and other local search signals to help search engines understand your business.
          </Typography>
          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
            Local strategy We help your business meet the demand behind local search intent. Our local strategies help your business improve visibility and relevance, by creating valuable location-based content and improving those pages that users are more likely to visit when they look for your services.
          </Typography>
          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
            Partnering with an expert downey seo company allows you to make sure your local strategy complements your overall SEO efforts. Know the job will be done right and get a partner to address local search without siloing local as a stand-alone task.
          </Typography>
        </div>
      </div>
    </section>
  );
}