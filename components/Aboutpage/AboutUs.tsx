"use client";

import { Typography } from "@/components/ui/Typography";

export default function AboutUs() {
    return (
        <section className="bg-black text-white py-10 lg:py-20 mx-4 sm:mx-6 lg:mx-12 xl:mx-[clamp(0.5rem,0.5rem+8vw,10rem)] 2xl:mx-[clamp(1rem,1rem+12vw,22rem)]">
            {/* Heading */}
            <div className="text-center mb-12">
                <Typography
                    as="h1"
                    variant="display-2xl"
                    className="text-white font-semibold"
                >
                    ABOUT US
                </Typography>
            </div>

            <div className="">
                {/* Subtitle */}
                <Typography
                    as="p"
                    variant="h4"
                    className="text-white font-light w-full px-4 sm:px-6 lg:px-10"
                >
                    {/* Wrap in a span and force break at lg */}
                    <span className="lg:block">
                        We build growth systems for businesses that want to move forward.
                    </span>
                    <span className="lg:block">
                        
                    </span>
                </Typography>

                {/* About Paragraphs */}
                <div className="space-y-6 mt-6 w-full lg:w-4/5 w-full px-4 sm:px-6 lg:px-10">
                    <Typography
                        as="p"
                        variant="body-xl"
                        className="text-white font-light">
                        <span className="text-[#69AE44] font-semibold">Geekonomy</span> is a growth systems company
                        that partners with businesses to create structure, clarity and momentum in how they grow.
                        We believe growth is not achieved through isolated efforts, but through well-built systems
                        that work together over time. <br className="hidden lg:block" />Our work sits at the intersection of strategy, technology, branding, and marketing, bringing
                        these elements together into integrated systems designed to scale.
                    </Typography>
                </div>
            </div>
        </section>
    );
}