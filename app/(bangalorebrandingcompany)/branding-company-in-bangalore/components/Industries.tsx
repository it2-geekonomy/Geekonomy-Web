
import { Typography } from "@/components/ui/Typography";
import { metrics } from "../const/Industries";

export default function Industries() {
  return (
    <section id="results" className="bg-black py-8 lg:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-5xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
            <Typography variant="overline" className="text-white/80">
              Industries
            </Typography>
          </div>
          <Typography
            variant="display-xl"
            as="h2"
            className="text-white text-2xl sm:text-4xl lg:text-5xl leading-[1.1]"
          >
           Branding for Bangalore’s Most Competitive Industries
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
            Various brand positioning strategies will be effective for different industries. For example, a startup company from a high tech industry would need the ability to convey credibility and innovation, whereas a D2C Brand may be required to establish a visual identity that encourages near immediate recognition and defines consumer preferencing which is essential for high branding.
          </Typography>
          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
            From there, their team of branding and marketing consultants will create brand strategies specifically targeted to your industry, designed for your audience, and going head-to-head with your competition, a way that synergizes well with top branding agencies.
          </Typography>
        </div>

        <div className="mb-11 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {metrics.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="w-[380px] max-w-full mx-auto sm:w-auto sm:mx-0 rounded-[20px] border border-white/10 bg-white/[0.03] p-7 transition-all hover:-translate-y-1 hover:border-[#69AE44]/40"
            >
              <div className="mb-3.5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#69AE44]/10 text-[#69AE44]">
                <Icon className="h-[22px] w-[22px]" strokeWidth={1.8} />
              </div>
              <Typography variant="h3" as="h3" className="mb-2 text-white font-semibold">
                {title}
              </Typography>
              <Typography variant="body-lg" className="leading-relaxed text-white/90">
                {desc}
              </Typography>
            </div>
          ))}
        </div>
        <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
           Are you creating a new venture or repositioning an existing one? Our branding methodology is flexible and evolves to complement the latest dynamics of the market you operate in and the clients you aim to serve.
        </Typography>
      </div>
    </section>
  );
}