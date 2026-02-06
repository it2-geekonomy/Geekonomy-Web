"use client";

import Image from "next/image";
import Link from "next/link";
import { Typography } from "@/components/ui/Typography";
import { ADDRESS } from "@/lib/constants";
import { FOOTER_NAV_ITEMS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-black w-full border-t-2 border-gray-600">
      <div className="px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-22">

          {/* Logo */}
          <div className="flex flex-col items-center justify-center sm:col-span-2 lg:col-span-1 text-center md:text-left relative pl-4 lg:pr-8">
            <div className="hidden lg:block absolute -right-6 top-0 bottom-0 w-[2px] bg-gray-700" />
            <div className="mb-0 sm:mb-2 lg:mb-8">
              <Link href="/" className="inline-flex items-center justify-center w-full">
                <Image
                  src="/Geekonomy Logo.webp"
                  alt="GEEKONOMY Logo"
                  width={1200}
                  height={336}
                  className="object-contain mx-auto w-full h-auto scale-95 sm:scale-100 lg:scale-145 xl:scale-145"
                  priority
                />
              </Link>
            </div>
          </div>
          {/* WHAT WE DO */}
          <div
            className="flex flex-col relative items-center sm:items-start text-center sm:text-left sm:border-r sm:border-gray-700 lg:border-none sm:px-6 lg:px-12 lg:translate-x-8 mt-0 lg:mt-8"
          >
            {/* Divider for desktop */}
            <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[2px] bg-gray-700" />

            {/* Header */}
            <Typography
              as="h3"
              variant="base"
              className="uppercase mb-4 text-white relative
      after:block after:h-[2px] after:w-full after:bg-white after:mt-2 sm:after:hidden font-light text-xs sm:text-sm md:text-base lg:text-lg"
            >
              WHAT WE DO
            </Typography>

            {/* Nav items */}
            <nav>
              <ul className="flex flex-col gap-5 items-start translate-x-8 sm:-translate-x-0">
                {FOOTER_NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="uppercase">
                      <Typography
                        variant="base"
                        className="font-light text-white hover:text-[#6FAF4E] transition-colors duration-200"
                      >
                        {item.label}
                      </Typography>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* ADDRESS */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="w-full mx-auto sm:mx-0 items-start">
              <Typography
                as="h3"
                variant="base"
                className="uppercase mb-3 sm:mb-6 inline-block text-left relative
                  after:block after:h-[2px] after:w-full after:bg-white after:mt-2 sm:after:hidden text-white -translate-x-5 sm:-translate-x-0"
              >
                ADDRESS
              </Typography>
            </div>

            <div className="mb-6 w-full flex flex-col items-center sm:items-start gap-1">
              {ADDRESS.lines.map((line, index) => (
                <Typography
                  key={index}
                  as="p"
                  variant="base"
                  className="w-full text-white mb-1 text-center sm:text-left break-words"
                >
                  {line}
                </Typography>
              ))}
            </div>


            {/* Map */}
            <div className="rounded-lg overflow-hidden border border-gray-800 w-full max-w-[463px] aspect-[463/276] h-auto sm:h-[276px] lg:h-[276px]">
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
      <div className="px-4 sm:px-6 lg:px-10 py-0">
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4">
          <a
            href="//www.dmca.com/Protection/Status.aspx?ID=eea71184-71ee-4c73-a959-5852051246f6"
            title="DMCA.com Protection Status"
            className="dmca-badge inline-block mb-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://images.dmca.com/Badges/dmca_protected_sml_120n.png?ID=eea71184-71ee-4c73-a959-5852051246f6"
              alt="DMCA.com Protection Status"
              className="h-auto"
            />
          </a>

          <Typography
            as="p"
            variant="sm"
            className="text-gray-300 text-center sm:text-right mb-4"
          >
            © {new Date().getFullYear()} Geekonomy. All rights reserved
          </Typography>
        </div>
      </div>
    </footer>
  );
}