
import { Typography } from "@/components/ui/Typography";
import { BulletPoints } from "../const/Localseo";

export default function LocalSeo() {
  return (
    <section id="service" className="bg-black py-6 lg:py-10 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-7 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="order-1 w-full lg:max-w-2xl text-center lg:text-left">
           <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
             <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
             <Typography variant="overline" className="text-white/80">
              Local SEO
             </Typography>
           </div>

          <Typography variant="display-2xl" as="h2" className="text-white  leading-tight">
            Why Local SEO Matters for Winchester Businesses
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
            When someone is searching for a service locally, location can be a determining factor of which businesses are listed. An effective local SEO campaign can help your business rank higher for the relevant searches relating to Winchester and the service that you are offering.
          </Typography>
          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
            Local <span className="text-[#FFFFFF] font-semibold">SEO in Winchester</span> can improve the visibility of businesses operating within this market both in traditional organic search listings and local search experiences. By optimizing your website, business details, service pages and local signals, you assist the search engines in understanding where you operate and what products or services you provide.
          </Typography>
        </div>

          <div className="order-2 mx-auto w-full max-w-95 lg:mx-0 lg:max-w-130 lg:justify-self-end">
            <div className="aspect-[4/4] w-full overflow-hidden rounded-[1rem] border border-white/10 bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
              <img
                src= "https://pub-67a4c50822e240c78b2f040321a1da26.r2.dev/landing-pages/Winchester-h2.webp"
                alt="Winchester Business"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        <ul className="mx-auto max-w-4xl ml-0 space-y-4 text-white/90">
        <Typography variant="body-xl" className="leading-relaxed text-white/90">
            Effective local SEO can help you:
          </Typography>
          {BulletPoints.map(({ point }) => (
            <li key={point} className="flex gap-4 ml-5">
              <span className="mt-2.5 inline-block h-2.5 w-2.5 shrink-0 rounded-full bg-[#69AE44]" />
              <Typography variant="body-xl" className="leading-relaxed">
                {point}
              </Typography>
            </li>
          ))}
        </ul>
        <Typography variant="body-xl" className="mt-7 leading-relaxed text-white/90">
          Avoid becoming just a random presence for a location keyword. The right plan will integrate local relevance, searcher intent, relevant content and conversion opportunities so that when a consumer needs what you‘re offering, they can find the right information.
        </Typography>
      </div>
    </section>
  );
}