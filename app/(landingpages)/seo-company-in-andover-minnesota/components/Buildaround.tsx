import { Typography } from "@/components/ui/Typography";
import { BulletPoints } from "../const/Buildaround";

export default function BuiltAround() {
  return (
    <section id="strategy" className="bg-black py-6 lg:py-10 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-7 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="order-1 w-full lg:max-w-2xl text-center lg:text-left">
           <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
             <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
             <Typography variant="overline" className="text-white/80">
              Across Andover, Minnesota
             </Typography>
           </div>

          <Typography variant="display-2xl" as="h2" className="text-white  leading-tight">
            SEO That Helps Andover Businesses Reach More Customers
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
            Most searches occur when people are looking for something to buy, to compare businesses to use, or to find service or to do all these things. Your business needs to be visible at this critical moment.
          </Typography>
          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
            Geekonomy develops SEO tactics that bring your site to the forefront of relevant searches in Andover and its vicinity. Our aim is to increase your organic visibility, draw appropriate visitors and convert search traffic into serious inquiries.
          </Typography>
        </div>

          <div className="order-2 mx-auto w-full max-w-95 lg:mx-0 lg:max-w-130 lg:justify-self-end">
            <div className="aspect-[4.2/4] w-full overflow-hidden rounded-[1rem] border border-white/10 bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
              <img
                src= "https://pub-67a4c50822e240c78b2f040321a1da26.r2.dev/landing-pages/Andover-h2.webp"
                alt="Andover Business"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          </div>

        <ul className="mx-auto max-w-4xl ml-0 space-y-4 text-white/90">
          <Typography variant="body-xl" className=" leading-relaxed text-white/90">
            Our approach can help you:
          </Typography>
          {BulletPoints.map(({ point }) => (
            <li key={point} className="flex gap-4">
              <span className="mt-2.5 ml-5 inline-block h-2.5 w-2.5 shrink-0 rounded-full bg-[#69AE44]" />
              <Typography variant="body-xl" className="leading-relaxed">
                {point}
              </Typography>
            </li>
          ))}
        </ul>
        <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
          We combine search intent, website optimization, content, and local signals to create a strategy aligned with how your customers actually search. 
        </Typography>
      </div>
    </section>
  );
}