"use client";

import { Typography } from "@/components/ui/Typography";
import { ADDRESS } from "@/lib/constants/company";
import { FooterLogo } from "./Footer/FooterLogo";
import { FooterNavigation } from "./Footer/FooterNavigation";
import { FooterAddress } from "./Footer/FooterAddress";
import { FooterDivider } from "./Footer/FooterDivider";
import { FooterBottom } from "./Footer/FooterBottom";

export default function Footer() {
  return (
    <footer className="bg-black w-full border-t-2 border-gray-600">
      <div className="px-4 sm:px-6 lg:px-8 py-2 lg:py-3">
        {/* Mobile Layout (below sm) */}
        <div className="flex flex-col gap-4 sm:hidden">
          {/* Logo & Social Media */}
          <FooterLogo logoScale="scale-70" iconSize="w-5 h-5" logoHeight="h-[100px]" socialJustify="justify-center" />

          {/* Navigation */}
          <div className="relative pt-3">
            <FooterDivider orientation="horizontal" position="top-0" showAccent={true} />
            <FooterNavigation layout="grid" textAlign="text-left" />
          </div>

          {/* Address & Map */}
          <div className="flex flex-col items-center gap-2 relative pt-3">
            <FooterDivider orientation="horizontal" position="top-0" showAccent={true} />
            <Typography
              variant="body-xl"
              className="uppercase mb-0.5 inline-block text-center relative
                after:block after:h-[2px] after:w-full after:bg-white after:mt-1.5 text-white"
            >
              ADDRESS
            </Typography>

            <div className="mb-1.5 w-full flex flex-col items-center gap-0.5">
              {ADDRESS.lines.map((line, index) => (
                <Typography
                  key={index}
                  as="p"
                  variant="body-xl"
                  className="w-full text-white mb-0.5 text-center break-words max-w-[310px]"
                >
                  {line}
                </Typography>
              ))}
            </div>

            {/* Map */}
            <div className="rounded-lg overflow-hidden border border-gray-800 w-full max-w-[250px] h-[160px]">
              <iframe
                src={ADDRESS.mapUrl}
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* Tablet Layout (sm to lg) */}
        <div className="hidden sm:flex lg:hidden flex-col gap-6">
          {/* Logo & Social Media */}
          <FooterLogo logoScale="scale-50" iconSize="w-5 h-5 md:w-[24px] md:h-[24px]" logoHeight="h-[100px]" socialJustify="justify-center" />

          {/* Navigation & Address Grid */}
          <div className="grid grid-cols-2 gap-6 relative pt-3">
            {/* Divider line */}
            <FooterDivider orientation="horizontal" position="top-0" showAccent={true} />
            
            {/* Navigation - Left */}
            <div className="flex flex-col relative h-full">
              {/* Divider for tablet */}
              <FooterDivider orientation="vertical" position="right-5" showAccent={true} />
              <FooterNavigation layout="list" textAlign="text-left" className="flex-1" navClassName="items-center" />
            </div>

            {/* Address - Right */}
            <div className="flex flex-col items-start text-left translate-y-5">
              <div className="w-full">
                <Typography
                  variant="body-xl"
                  className="uppercase mb-0.5 inline-block text-left relative
                    after:block after:h-[2px] after:w-full after:bg-white after:mt-1.5 text-white"
                >
                  ADDRESS
                </Typography>
              </div>

              <div className="mb-1.5 w-full flex flex-col items-start gap-0.5">
                {ADDRESS.lines.map((line, index) => (
                  <Typography
                    key={index}
                    as="p"
                    variant="body-lg"
                    className="w-full text-white mb-0.5 text-left break-words max-w-[450px]"
                  >
                    {line}
                  </Typography>
                ))}
              </div>

              {/* Map */}
              <div className="rounded-lg overflow-hidden border border-gray-800 w-full max-w-[250px] h-[150px]">
                <iframe
                  src={ADDRESS.mapUrl}
                  className="w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout (lg and above) */}
        <div className="hidden lg:grid grid-cols-3 gap-8">
          {/* Logo */}
          <div className="flex flex-col items-center justify-center text-center md:text-left relative">
            <FooterDivider orientation="vertical" position="-right-6" showAccent={true} className="hidden lg:block" />
            <div className="mb-2">
              <FooterLogo
                logoScale="scale-70 sm:scale-90 lg:scale-95 xl:scale-100"
                iconSize="w-5 h-5 md:w-[24px] md:h-[24px]"
                logoHeight=""
                socialJustify="justify-center lg:justify-start"
              />
            </div>
          </div>
          
          {/* WHAT WE DO */}
          <div className="flex flex-col relative items-center justify-center text-center sm:border-r sm:border-gray-700 lg:border-none sm:px-6 xl:px-12">
            {/* Divider for desktop */}
            <FooterDivider orientation="vertical" position="right-5" showAccent={true} className="hidden lg:block" />

            {/* Nav items */}
            <FooterNavigation layout="list" textAlign="text-left" navClassName="items-start translate-y-5" />
          </div>

          {/* ADDRESS */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left translate-y-5">
            <div className="w-full mx-auto sm:mx-0">
              <Typography
                variant="body-xl"
                className="uppercase mb-0.5 sm:mb-1 inline-block text-center sm:text-left relative
                  after:block after:h-[2px] after:w-full after:bg-white after:mt-1.5 sm:after:hidden text-white"
              >
                ADDRESS
              </Typography>
            </div>

            <div className="mb-1.5 w-full flex flex-col items-center sm:items-start gap-0.5">
              {ADDRESS.lines.map((line, index) => (
                <Typography
                  key={index}
                  as="p"
                  variant="body-lg"
                  className="w-full text-white mb-0.5 text-center sm:text-left break-words max-w-[450px]"
                >
                  {line}
                </Typography>
              ))}
            </div>


            {/* Map */}
            <div className="rounded-lg overflow-hidden border border-gray-800 w-full max-w-[250px] sm:max-w-[300px] lg:max-w-[250px]  h-[160px] lg:h-[150px]">
              <iframe
                src={ADDRESS.mapUrl}
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <FooterBottom />
    </footer>
  );
}
