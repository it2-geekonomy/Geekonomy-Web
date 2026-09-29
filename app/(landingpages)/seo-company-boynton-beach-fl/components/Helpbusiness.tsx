import { Typography } from "@/components/ui/Typography";

export default function HelpsBusiness() {
  return (
    <section id="service" className="bg-black py-8 lg:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-5xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
            <Typography variant="overline" className="text-white/80">
              Help Business
            </Typography>
          </div>

          <Typography variant="display-2xl" as="h2" className="text-white  leading-tight">
            How Geekonomy Helps Businesses Compete in Local Search
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
            Local search is highly competitive, and there’s no single factor that will secure a long-term advantage without additional ongoing efforts. Geekonomy employs an integrated method combining local keyword research, competitor investigation, on-page enhancement, technical SEO, content creation and authority development.
          </Typography>
          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
            We first build an understanding of your business, offerings, customers, and existing search presence. We then identify how we can enhance your site, and boost its relevance for desirable local searches. Our strategy aims to enhance search visibility AND conversions, not rankings.
          </Typography>
          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
            As a <span className="text-[#FFFFFF] font-semibold">seo company boynton</span>, Geekonomy implements a pragmatic seo plan that supports your business plan. We monitor results, discover new opportunities, and optimize campaigns as search practice and your competitive market evolve.
          </Typography>
        </div>
      </div>
  </section>
  );
}