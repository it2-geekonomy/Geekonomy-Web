import { Typography } from "@/components/ui/Typography";

const cards = [
  {
    title: "United States — CCPA, FTC & California Advertising Standards",
    description:
      "With respect to data collection and sharing, in California, the CCPA imposes some of the most aggressive regulations for data collection and handling in the United States. All landing pages and lead capture forms we build for you contain easy-to-read privacy and cookie disclosures and data handling disclosures that comply with the CCPA. All advertising copy is compliant with the FTC’s guidelines for advertising. Prospect data captured through your campaigns is used solely for stated purposes, and is not supplied to third parties other than the technological platforms necessary to run the ads."
  },
  {
    title: "Canada — CASL, PIPEDA & Email Consent Requirements",
    description:
      "We follow the rules of Canada‘s Anti-Spam Legislation (CASL) for all email marketing and PIPEDA principles for data management for campaigns and communication with a Canadian element. We always obtain consent prior to the start of email sequences; unsubscribe processes are clear and functioning in all emails; data is kept no longer than needed-minimization of data is always a priority; privacy policy disclosures are in easily understandable language – not formulating complex sentences with the aim to philosophize with the obvious.",
  },
  {
    title: "United Kingdom — UK GDPR & ICO Compliance",
    description:
      "In the context of anything related to a campaign involving UK markets, we have a notice that falls under the UK GDPR regime administered by the ICO. We have a lawful processing basis for the collection of any personal data for paid campaigns. Our cookie consent notices meet ICO requirements. Paid email marketing campaigns to UK contacts had prior consent confirmed, and we have data processing agreements in place with all campaign distribution platforms. Our compliance records are available for review if required."
  },
  {
    title: "Europe — EU GDPR & ePrivacy Directive",
    description:
      "For campaigns targeting the EU, we use the General Data Protection Regulation and the ePrivacy Directive for electronic communications and cookie permissions. We ensure consent management is activated, platform data agreements are in place, and all personal data usage practices include purpose limitation and data minimisation before any EU campaign goes live. Privacy is an operational norm, not a voluntary compliance check completed and forgotten."
  },
];

export default function DataCompliance() {
  return (
    <section className="bg-black py-8 lg:py-10">
      <div className="mx-auto max-w-[90rem] px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
            <Typography variant="overline" className="text-white/80 text-nowrap">
              PRIVACY &amp; DATA COMPLIANCE
            </Typography>
          </div>

          <Typography
            variant="display-xl"
            as="h2"
            className="mx-auto max-w-4xl text-white text-2xl sm:text-4xl lg:text-5xl leading-[1.1]"
          >
            Protecting Your Client’s Data at Every Stage of Your Campaigns
          </Typography>

          <Typography variant="body-xl" className="mx-auto max-w-3xl mt-5 leading-relaxed text-white/90">
            All the campaigns we run for San Diego pool businesses (and truly all the markets we target) are designed from the very beginning with data privacy in mind. Here’s a look at how that plays out in the markets we cover.
          </Typography>
        </div>

        <div className="mt-12 grid grid-cols-1 place-items-center gap-6 lg:grid-cols-2 lg:place-items-stretch">
          {cards.map((card) => (
            <div
              key={card.title}
              className="w-full max-w-xl rounded-2xl border border-white/10 border-t-4 border-t-[#69AE44] bg-[#69AE44]/[0.04] p-8 lg:max-w-none"
            >
              <Typography variant="h4" as="h3" className="text-white">
                {card.title}
              </Typography>
              <Typography variant="body-lg" className="mt-4 leading-relaxed text-white/90">
                {card.description}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}