import { Eye, TrendingUp, Search, ArrowRight } from "lucide-react";
import { Typography } from "@/components/ui/Typography";
import heroImage from "../images/herosection.jpg";

export default function Hero() {
    return (
        <section id="top" className="relative w-full bg-black overflow-hidden">
            <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#69AE44]/20 blur-[120px]" />
            <div className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-[#69AE44]/10 blur-[100px]" />

            <div className="relative mx-auto max-w-7xl px-6 py-4 md:py-8 lg:px-8">
                <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
                    <div className="text-center lg:text-left">
                        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2 backdrop-blur-sm">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
                            <Typography variant="overline" className="text-white text-nowrap">
                                Carlsbad SEO Company
                            </Typography>
                        </div>

                        <Typography variant="display-xl" as="h1" className="text-white text-2xl sm:text-4xl lg:text-5xl leading-[1.1]">
                            Carlsbad SEO Company That Helps{" "}
                            <span className="text-[#69AE44]">Turn Searches Into Customers</span>
                        </Typography>
                        <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90 px-6 lg:px-0 lg:max-w-xl text-left">
                            Geekonomy is a  <span className="text-[#FFFFFF] font-semibold">Carlsbad SEO</span> firm. We help local companies get more searched-usayition by expanding your organic visibility, loading in more pre-sell customers, and converting more legitimate leads from search. Our methods include a blend of 
                           <span className="text-[#FFFFFF] font-semibold"> local SEO,</span> technical, <span className="text-[#FFFFFF] font-semibold"> semantic</span> optimization, on and off-page 
                           <span className="text-[#FFFFFF] font-semibold"> content and authority</span> optimization to help get your business in front of searchers.
                        </Typography>
                        <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90 px-6 lg:px-0 lg:max-w-xl text-left">
                            From increasing your ranking in Google to optimizing your presence in local search, or growing your website organically over time, we develop an SEO plan based on your business objectives-not a cookie-cutter approach.
                        </Typography>

                        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:flex-wrap sm:justify-center lg:justify-start">
                            <a href="#contact" className="inline-flex w-72 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#69AE44] to-[#8FCB63] px-7 py-4 text-black transition-transform hover:scale-[1.03] sm:w-auto">
                                <Typography variant="body-lg" className="font-semibold text-black">
                                    Get Your Free SEO Strategy
                                </Typography>
                            </a>
                        </div>
                        <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:flex-wrap sm:justify-center lg:justify-start">
                            <a href="#services" className="inline-flex w-72 items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 text-white backdrop-blur-sm transition-colors hover:bg-white/10 sm:w-auto">
                                <Typography variant="body-lg" className="font-semibold text-white">
                                    Request a Free SEO Audit
                                </Typography>
                            </a>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative aspect-[4/4.4] w-full max-w-[320px] overflow-hidden rounded-3xl border border-white/10 bg-white/5 mx-auto sm:max-w-[420px] lg:max-w-[520px] lg:mx-0">
                            <img
                                src={heroImage.src}
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
                            9+
                        </Typography>
                        <Typography variant="body-lg" className="text-white">
                            Carlsbad areas served
                        </Typography>
                    </div>
                    <div>
                        <Typography variant="display-xl" as="p" className="text-[#69AE44] whitespace-nowrap">
                            Intent-led
                        </Typography>
                        <Typography variant="body-lg" className="text-white">
                           Every page mapped to search intent
                        </Typography>
                    </div>
                    <div>
                        <Typography variant="display-xl" as="p" className="text-[#69AE44] whitespace-nowrap">
                           AI-ready
                        </Typography>
                        <Typography variant="body-lg" className="text-white">
                           Built for modern search
                        </Typography>
                    </div>
                </div>
            </div>

            <div className="relative border-t border-white/30">
                <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 py-10 text-center lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:text-left">
                    <Typography variant="body-lg" className="rounded-full bg-[#69AE44]/20 px-4 py-2 text-white font-semibold uppercase">
                        A complete search foundation across every ranking factor
                    </Typography>

                    <div className="flex max-w-md flex-wrap justify-center gap-4 lg:justify-start">
                        {[
                            "Local SEO",
                            "Technical SEO",
                            "Semantic SEO",
                            "Content SEO",
                            "Google Maps SEO",
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