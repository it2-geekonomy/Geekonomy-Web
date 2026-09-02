
import { Typography } from "@/components/ui/Typography";
import { steps } from "../const/Businessgoal";

export default function BusinessGoal() {
  return (
    <section id="how" className="bg-white/[0.02] py-6 lg:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-5xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
            <Typography variant="overline" className="text-white/80">
              Business Goal
            </Typography>
          </div>

            <Typography variant="display-2xl" as="h2" className="text-white  leading-tight">
            A Digital Marketing Strategy Built Around Your Business Goals
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
          Digital marketing isn‘t an exact science everyone can follow with a proven formula. It really is a matter of what you sell, who you want to reach, how your customers buy, how competitive your field is and what you are trying to achieve.       
          </Typography>
          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
          Being a digital marketing agency in Madurai, what we do is we first understand your business and then see how your time and dollars are to be spent in various channels.      
          </Typography>
        </div>

        <div className="mb-11 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map(({ icon: Icon, title, desc }) => (
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

        <Typography variant="h3" as="h3" className=" text-white font-semibold">
          We Don't Use the Same Strategy for Every Business
        </Typography>

        <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
          Very different customer journeys can exist for a local shop, hospital, estate agent, manufacturer and professional services business. Make sure your digital marketing reflects those differences.
        </Typography>
        <Typography variant="body-xl" className="mt-3 leading-relaxed text-white/90">
          The goal is to develop a targeted, result-oriented marketing framework that can ensure sustained success and establishment of a distinct brand. This strategy enables your business to reach out to the appropriate target market and convert your web presence into long-term sustainability by effective digital marketing.
        </Typography>

      </div>
    </section>
  );
}