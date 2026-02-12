"use client";

import { Typography } from "@/components/ui/Typography";

export default function AboutUs() {
    return (
        <section className="w-full bg-black text-white py-10 lg:py-20 px-6 sm:px-8 md:px-12 lg:px-16">
            {/* Heading */}
            <div className="text-center mb-12">
                <Typography
                    as="h1"
                    variant="4xl"
                    className="font-semibold"
                >
                    ABOUT US
                </Typography>
            </div>

            <div className="px-0 sm:px-2 md:px-4 lg:px-0 xl:px-12 2xl:px-38">
                {/* Subtitle */}
                <Typography
                    as="p"
                    variant="2xl"
                    className="text-white font-light"
                >
                    {/* Wrap in a span and force break at lg */}
                    <span className="lg:block">
                        We build growth systems for businesses
                    </span>
                    <span className="lg:block">
                        that want to move forward.
                    </span>
                </Typography>

                {/* About Paragraphs */}
                <div className="space-y-6 mt-6 w-full lg:w-2/2 xl:w-2/4">
                    <Typography
                        as="p"
                        variant="base"
                        className="text-[#A0A0A0] font-light">
                        <span className="text-[#6FAF4E] font-semibold">Geekonomy</span> is a growth systems company
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