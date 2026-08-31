import { ArrowRight, MapPin } from "lucide-react";
import { Typography } from "@/components/ui/Typography";
import { cards, jaipurareas } from "../const/Acrossjaipur";

export default function ServiceAreas() {
  return (
    <section id="areas" className="bg-white/[0.02] py-6 lg:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="order-1 w-full lg:max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
              <Typography variant="overline" className="text-white/80 uppercase">
                Across Jaipur, Rajasthan
              </Typography>
            </div>
            <Typography
              variant="display-xl"
              as="h2"
              className="text-white text-2xl sm:text-4xl lg:text-5xl"
            >
              Digital Marketing for Businesses Across Jaipur
            </Typography>
            <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
            Jaipur is the place your customers are searching not just for businesses, but for solutions, services and providers! On Google Search and Maps, through paid advertising and social media, every click could be your business's growth and success.
            </Typography>
             <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
             Geekonomy develops internet marketing campaigns based on the principles of the best digital marketing practices tailored for Rajasthan. research into the locations that your customers are searching, what they look for, and what strategies to customize for your audience. makes businesses grow by leveraging innovative marketing techniques.
            </Typography>
            <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90 font-semibold">
            We can build location-aware strategies for businesses serving areas such as:
            </Typography>
          </div>

          <div className="order-2 mx-auto w-full max-w-95 lg:mx-0 lg:max-w-130 lg:justify-self-end">
            <div className="aspect-[4/4] w-full overflow-hidden rounded-[1rem] border border-white/10 bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
              <img
                src="https://pub-67a4c50822e240c78b2f040321a1da26.r2.dev/landing-pages/jaipur-areas.png"
                alt="Map of San Diego County service areas"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mb-12 flex flex-wrap gap-3">
          {jaipurareas.map((area) => (
            <Typography
              key={area}
              as="span"
              variant="body-lg"
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 font-medium text-white/90 transition-all hover:-translate-y-0.5 hover:border-[#69AE44]/40 hover:bg-[#69AE44]/10 hover:text-white"
            >
              <MapPin className="h-3.5 w-3.5 text-[#69AE44]" />
              {area}
            </Typography>
          ))}
        </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {cards.map((card) => (
                  <div key={card.title} className="rounded-[1.25rem] border border-white/10 bg-white/[0.03] p-8">
                      <Typography variant="h3" as="h3" className="mb-2.5 text-white font-semibold">
                          {card.title}
                      </Typography>
                      {card.paragraphs.map((para, i) => (
                          <Typography
                              key={i}
                              variant="body-lg"
                              className={`leading-relaxed text-white/90 ${i > 0 ? "mt-2" : ""}`}>
                              {para}
                          </Typography>
                      ))}
                  </div>
              ))}
          </div>

          <Typography variant="body-xl" className="mt-7 leading-relaxed text-white/90">
            This is what the Jaipur digital marketing strategy boils down to: it’s not about the dream of being everywhere, but about being the leading digital marketing provider in the pink city. More Recognizable brands are built through effective website design and development company services., relevant, and competitive where trusted digital marketing solutions are essential.
        </Typography>
        <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
            Potential Customers are actually more likely to engage with a brand that understands their journey and offers customized solutions. searching for personalized marketing strategies that yield measurable results.
        </Typography>

        <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center">
        <a href="#contact" className="inline-flex w-auto items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#69AE44] to-[#8FCB63] px-7 py-4 text-sm font-semibold text-black transition-transform hover:scale-[1.03] sm:w-auto">
            <Typography variant="body-lg" className="font-semibold text-black">
            Get Your Free Digital Marketing Strategy
            </Typography>
            <ArrowRight/>
        </a>
        </div>

      </div>
    </section>
  );
}