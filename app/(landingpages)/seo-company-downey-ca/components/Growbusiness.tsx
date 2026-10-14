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
            Grow Your Business With a Downey SEO Strategy
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
            Each business has unique customers and competitors, as well as unique search possibilities. We formulate SEO campaigns based on your business instead of building only for the masses. It is our aspiration to make your website more targeted to the searches important for your business and your customers.  
          </Typography>

          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
            As a downey search engine optimization professional, we consider the entire search process like of your potential customers; the keyword searches they enter and the page they finally arrive on after they discover your organization. That involves improving your web site framework, refining highly targeted service pages, creating applicable content material, boosting native search requirements, and fixing technical SEO points which may have an effect on your visibility.
          </Typography>
          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
            Off-page seo services providers like us not only come with proven results but also differentiate between people just surfing, researching the product when someone has a sense of urgency to call, quote or book an appointment or make a purchase. With search intent and conversion algorithms, your site will smartly perform at all levels of the sales funnel.
          </Typography>
        </div>

        <div className="order-2 mx-auto w-full max-w-95 lg:mx-0 lg:max-w-130 lg:justify-self-end">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-[1rem] border border-white/10 bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
              <img
                src= "https://pub-67a4c50822e240c78b2f040321a1da26.r2.dev/landing-pages/Downey-h2.webp"
                alt="Downey Business"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}