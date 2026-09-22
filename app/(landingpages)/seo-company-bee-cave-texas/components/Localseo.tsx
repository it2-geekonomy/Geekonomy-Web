
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
            Turn Local Searches Into Qualified Leads
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
            Getting visitors to your site is just one element of an effective SEO plan. Ultimately, you want to bring the right visitors to your website, those who are actively searching for what you have to offer and guide them toward the action you want them to take.
          </Typography>
          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
            Our method is aimed at bridging the gap between what people are searching for and the corresponding landing pages, content and conversions. If your website matches high intent search queries then you can tap into the potential customer base when they are researching, comparing products or contacting businesses.
          </Typography>
        </div>

          <div className="order-2 mx-auto w-full max-w-95 lg:mx-0 lg:max-w-130 lg:justify-self-end">
            <div className="aspect-[4/4] w-full overflow-hidden rounded-[1rem] border border-white/10 bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
              <img
                src= "https://pub-67a4c50822e240c78b2f040321a1da26.r2.dev/landing-pages/Bee-Cave-h2.webp"
                alt="Bee Cave Business"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        <ul className="mx-auto max-w-4xl ml-0 space-y-4 text-white/90">
          <Typography variant="body-xl" className="leading-relaxed text-white/90">
            A focused SEO strategy can help improve:
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
          Any local <span className="text-[#FFFFFF] font-semibold">seo company bee cave tx</span> businesses can work with, geekonomy provides search optimization together with conversion centered website changes so that organic visibility leads to greater business growth.
        </Typography>
      </div>
    </section>
  );
}