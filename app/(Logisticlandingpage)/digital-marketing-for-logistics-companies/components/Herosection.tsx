import { TrendingUp, Search, ArrowRight } from "lucide-react";
import { Typography } from "@/components/ui/Typography";
import { handleScrollToContact } from "@/components/Scrolltosection/Scrolltocontact";

export default function Hero() {
    return (
        <section id="top" className="relative w-full bg-black overflow-hidden">
            <div className="pointer-events-none absolute -top-40 -right-40 h-125 w-125 rounded-full bg-[#69AE44]/20 blur-[7.5rem] " />
            <div className="pointer-events-none absolute bottom-0 left-0 h-100 w-100 rounded-full bg-[#69AE44]/10 blur-[6.25rem]" />

            <div className="relative mx-auto max-w-7xl px-6 py-4 md:py-8 lg:px-8">
                <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
                    <div className="text-center lg:text-left">
                        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2 backdrop-blur-sm">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
                            <Typography variant="overline" className="text-white text-nowrap">
                                Logistics Digital Marketing
                            </Typography>
                        </div>

                        <Typography variant="display-2xl" as="h1" className="text-white  leading-tight">

                            Digital Marketing for Logistics Companies{" "}
                            <span className="text-[#69AE44]">That Drives Qualified Leads</span>
                        </Typography>
                        <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90 px-6 lg:px-0 lg:max-w-xl text-left">
                            If you want to develop your logistics business, develop a digital marketing plan designed to attract the type of customers you want, improve the visibility of your online presence, and drive relevant traffic and long-tail traffic to your site in order to get more leads.
                        </Typography>
                        <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90 px-6 lg:px-0 lg:max-w-xl text-left">
                            We help logistics, transportation, freight, 3PL, warehousing, and supply chain companies convert online search into business, from the very basics of pay-per-click and SEO to the complex workings of content marketing and conversion.
                        </Typography>

                        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:flex-wrap sm:justify-center lg:justify-start">
                            <a href="#contact" onClick={handleScrollToContact} className="inline-flex w-72 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#69AE44] to-[#8FCB63] px-7 py-4 text-black transition-transform hover:scale-[1.03] sm:w-auto">
                                <Typography variant="body-lg" className="font-semibold text-black">
                                    Get a Free Marketing Strategy 
                                </Typography>
                                <ArrowRight className="h-4 w-4" />

                            </a>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative aspect-[4/4.4] w-full max-w-[20rem] overflow-hidden rounded-3xl border border-white/10 bg-white/5 mx-auto sm:max-w-105 lg:max-w-130 lg:mx-0">
                            <img
                                src= "https://pub-67a4c50822e240c78b2f040321a1da26.r2.dev/landing-pages/Herosectionlogistic.png"
                                alt="Pool company marketing and San Diego local visibility"
                                className="h-full w-full object-cover"
                            />

                            <div className="absolute left-6 top-6 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl">
                                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#69AE44]/10 text-[#69AE44]">
                                    <TrendingUp className="h-5 w-5" />
                                </div>
                                <div>
                                    <Typography variant="body-sm" className="font-bold text-black">
                                        + Qualified Leads
                                    </Typography>
                                    <Typography variant="caption" className="text-black/50">
                                        Calls & quote requests up
                                    </Typography>
                                </div>
                            </div>

                            <div className="absolute bottom-6 right-6 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl">
                                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#69AE44]/10 text-[#69AE44]">
                                    <Search className="h-5 w-5" />
                                </div>
                                <div>
                                    <Typography variant="body-sm" className="font-bold text-black">
                                        #1 Local Visibility
                                    </Typography>
                                    <Typography variant="caption" className="text-black/50">
                                        Google Search & Maps
                                    </Typography>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16 flex flex-col items-center gap-y-8 text-center sm:flex-row sm:flex-wrap sm:items-start sm:justify-between sm:text-left">
                    <div>
                        <Typography variant="display-xl" as="p" className="text-[#69AE44]">
                            B2B-ready
                        </Typography>
                        <Typography variant="body-lg" className="text-white">
                            Built for longer buying journeys
                        </Typography>
                    </div>
                    <div>
                        <Typography variant="display-xl" as="p" className="text-[#69AE44] whitespace-nowrap">
                            Quote-focused
                        </Typography>
                        <Typography variant="body-lg" className="text-white">
                           Optimized for RFQs
                        </Typography>
                    </div>
                    <div>
                        <Typography variant="display-xl" as="p" className="text-[#69AE44] whitespace-nowrap">
                           Full-funnel
                        </Typography>
                        <Typography variant="body-lg" className="text-white">
                           Demand to conversion
                        </Typography>
                    </div>
                </div>
            </div>

            <div className="relative border-t border-white/30">
                <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 py-10 text-center lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:text-left">
                    <Typography variant="body-lg" className="rounded-full bg-[#69AE44]/20 px-4 py-2 text-white font-semibold uppercase">
                        Multiple channels working together across the buying journey
                    </Typography>

                    <div className="flex max-w-md flex-wrap justify-center gap-4 lg:justify-start">
                        {[
                            "SEO",
                            "PPC & Paid Ads",
                            "Content Marketing",
                            "Local SEO",
                            "Conversion Optimization",
                        ].map((service) => (
                            <span key={service} className="w-fit whitespace-nowrap rounded-full border border-[#69AE44]/90 bg-white/5 px-4 py-2.5">
                                <Typography variant="body-sm" className="font-semibold text-white">
                                    {service}
                                </Typography>
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}