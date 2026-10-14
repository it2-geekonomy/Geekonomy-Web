
import { Typography } from "@/components/ui/Typography";
import { ArrowRight } from "lucide-react";
import { handleScrollToContact } from "@/components/Scrolltosection/Scrolltocontact";

export default function LocalSearch() {
  return (
    <section id="how" className="bg-black py-6 lg:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-5xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
            <Typography variant="overline" className="text-white/80">
              Local
            </Typography>
          </div>

            <Typography variant="display-2xl" as="h2" className="text-white  leading-tight">
            Local Digital Marketing for Businesses Across Ghaziabad
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
          Your existing clients may be searching for a service they want by City, Locality or even “near me”. Robust local marketing should tap into how users are truly searching all over Ghaziabad through good web design.       
          </Typography>
           <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
          Easy Business Growth Online By Creating Visibility For Your Business On All Key Localities like NCR with the help of trusted Digital Marketing Partner of yours. Indirapuram, Vaishali, Vasundhara, Raj Nagar, Raj Nagar Extension, Kaushambi and Kavi Nagar, always concentrating on relevant services and true customer demand on customized digital approach.        
          </Typography>
          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
          Our local seo and paid marketing can be targeted by your actual service area based on your website development rather than the whole city as one market or edit your business to cover the possible searched areas so you rank higher on Google and connect your services with people searching for those in the areas you provide in NCR with services like seo, online marketing etc.      
          </Typography>
          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
          Whether you are from Indirapuram, target your customers of entire Ghaziabad or aiming at any particular locality, synchronize your local search, landing pages and targeted Google Ads as well as conversion strategy is a must for your small or medium business seeking for a reliable digital marketing partner. Synchronize your business goals with the best digital marketing agency approaches for new brand development.  
          </Typography>
          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
          The aim Be where your potential customers are searching and make it easy to choose you.
          </Typography>
        </div>

        <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center">
        <a href="#contact" onClick={handleScrollToContact} className="inline-flex w-auto items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#69AE44] to-[#8FCB63] px-7 py-4 text-sm font-semibold text-black transition-transform hover:scale-[1.03] sm:w-auto">
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