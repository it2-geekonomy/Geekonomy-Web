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
            Grow Your Pompano Beach Business With Local SEO
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
            Local customers search for a product or service in the area using Google. A local SEO campaign will get your business in front of these hungry customers right when they are in buying mode, allowing you to generate relevant traffic, phone calls, inquiries and new business.
          </Typography>

          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
            In our capacity as a <span className="text-[#FFFFFF] font-semibold">pompano seo company</span>, Geekonomy structures your campaigns around your business location, service and those markets you are seeking to target, all based on search. We will refine critical aspects of your online profile to give search engines the clues they require to understand what you do and where you do it.
          </Typography>
          <Typography variant="h3" as="h3" className="mt-6 text-white font-semibold">
            Turn Local Searches Into Customers
          </Typography>
          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
            Local SEO helps your business reach those who already have the need and are searching for a solution. When you appear high in the search results for localized keywords relevant to your business, you‘ll be gaining visitors who are more likely to convert by requesting a quote, shopping in your store or calling your business.
          </Typography>
          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
            Geekonomy integrates local keyword focus, website optimization, Google Business Profile enhancements, content creation, and regular performance monitoring to establish a more comprehensive base for long-term local search success.
          </Typography>
        </div>

        <div className=" mx-auto w-full max-w-95 lg:mx-0 lg:max-w-130 lg:justify-self-end">
          <div className="aspect-[4/5] w-full overflow-hidden rounded-[1rem] border border-white/10 bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
            <img
              src= "https://pub-67a4c50822e240c78b2f040321a1da26.r2.dev/landing-pages/Pompano-Beach-h2.webp"
              alt="Pompano Beach Business"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}