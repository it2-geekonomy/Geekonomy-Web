
import { Typography } from "@/components/ui/Typography";
import { BulletPoints } from "../const/Builtaround";

export default function BuiltAround() {
  return (
    <section id="strategy" className="bg-black py-6 lg:py-10 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="order-1 w-full lg:max-w-2xl text-center lg:text-left">
           <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
             <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
             <Typography variant="overline" className="text-white/80">
              Across Carmel, Indiana
             </Typography>
           </div>

          <Typography variant="display-2xl" as="h2" className="text-white  leading-tight">
            SEO Built Around How Carmel Indiana Customers Search
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
            The way the people of Carmel use Google varies greatly. One customer searching for an emergency service may search from their phone and contact a nearby service immediately while a customer researching a professional service may search through numerous businesses before deciding who to call. Your SEO strategy should cater to both of these potential buying scenarios.
          </Typography>
          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
            The best Carmel SEO company focuses not just on keywords but on what people are actually attempting to do. This involves finding high intent services searches, location based searches, “near me” searches, informational searches, and searches leading to a purchase or an inquiry.
          </Typography>
        </div>

          <div className="order-2 mx-auto w-full max-w-95 lg:mx-0 lg:max-w-130 lg:justify-self-end">
            <div className="aspect-[4/4] w-full overflow-hidden rounded-[1rem] border border-white/10 bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
              <img
                src= "https://pub-67a4c50822e240c78b2f040321a1da26.r2.dev/landing-pages/carmelindiana-h2.png"
                alt="Ocean Springs Business"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          </div>

        <ul className="mx-auto max-w-4xl ml-0 space-y-4 text-white/90">
        <Typography variant="body-xl" className="leading-relaxed text-white/90">
            Our strategy can focus on opportunities such as:
          </Typography>
          {BulletPoints.map(({ point }) => (
            <li key={point} className="flex gap-4">
              <span className="mt-2.5 inline-block h-2.5 w-2.5 shrink-0 rounded-full bg-[#69AE44]" />
              <Typography variant="body-xl" className="leading-relaxed">
                {point}
              </Typography>
            </li>
          ))}
        </ul>
        <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
            With this Carmel SEO agency, Geekonomy leverages these trends to understand what pages to optimize, what topics to cover, and where local relevance will help you find more opportunities. This isn‘t about ranking for all terms, it's about establishing visibility around consumer searches relevant to your business. 
          </Typography>
      </div>
    </section>
  );
}

