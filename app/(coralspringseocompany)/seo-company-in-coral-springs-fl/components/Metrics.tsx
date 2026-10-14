
import { Typography } from "@/components/ui/Typography";
import { BulletPoint1, BulletPoint2, BulletPoint3 } from "../const/Metrics";

export default function Metrics() {
  return (
    <section id="strategy" className="bg-black py-6 lg:py-10 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-5xl text-center">
           <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
             <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
             <Typography variant="overline" className="text-white/80">
               Metrics
             </Typography>
           </div>

          <Typography variant="display-2xl" as="h2" className="text-white  leading-tight">
            Track the Metrics That Matter
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
            Measuring SEO performance should not be limited to what your keywords rank, ranks and traffic are metrics that are important, but their significance is determined by if they are actually attracting the right people to your business.
          </Typography>
          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
            We monitor the metrics that give a more accurate representation of your local and organic listings.
          </Typography>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-1 lg:grid-cols-3">
        <ul className="mx-auto max-w-4xl ml-0 space-y-4 text-white/90">
        <Typography variant="h3" as="h3" className=" text-white font-semibold">
           Organic Search Visibility
          </Typography>
          {BulletPoint1.map(({ point }) => (
            <li key={point} className="flex gap-4 ml-8">
              <span className="mt-2.5 inline-block h-2.5 w-2.5 shrink-0 rounded-full bg-[#69AE44]" />
              <Typography variant="body-xl" className="leading-relaxed">
                {point}
              </Typography>
            </li>
          ))}
        </ul>
        
        <ul className="mx-auto max-w-4xl ml-0 space-y-4 text-white/90">
        <Typography variant="h3" as="h3" className=" text-white font-semibold">
           Local Search Performance
          </Typography>
          {BulletPoint2.map(({ point }) => (
            <li key={point} className="flex gap-4 ml-8">
              <span className="mt-2.5 inline-block h-2.5 w-2.5 shrink-0 rounded-full bg-[#69AE44]" />
              <Typography variant="body-xl" className="leading-relaxed">
                {point}
              </Typography>
            </li>
          ))}
        </ul>

        <ul className="mx-auto max-w-4xl ml-0 space-y-4 text-white/90">
        <Typography variant="h3" as="h3" className=" text-white font-semibold">
           Lead & Conversion Performance
          </Typography>
          {BulletPoint3.map(({ point }) => (
            <li key={point} className="flex gap-4 ml-8">
              <span className="mt-2.5 inline-block h-2.5 w-2.5 shrink-0 rounded-full bg-[#69AE44]" />
              <Typography variant="body-xl" className="leading-relaxed">
                {point}
              </Typography>
            </li>
          ))}
        </ul>
        </div>
        <Typography variant="body-xl" className="mt-7 leading-relaxed text-white/90">
            In the role of an SEO Company in Coral Springs, we utilize these lessons to determine the successful aspects, unexploited possibilities and the areas of your campaign that need further focus. This ensures the SEO is related to tangible growth rather than an obsession with rankings.
          </Typography>
      </div>
    </section>
  );
}