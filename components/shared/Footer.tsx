
"use client";

import Image from "next/image";
import Link from "next/link";
import { Typography } from "@/components/ui/Typography";

const FOOTER_NAV_ITEMS = [
  { label: "INDUSTRIES", href: "/industries" },
  { label: "OUR WORK", href: "/our-work" },
  { label: "ABOUT", href: "/about" },
  { label: "GEEKONOMY", href: "/geekonomy" },
  { label: "CAREER", href: "/career" },
  { label: "BLOGS", href: "/blogs" },
  { label: "CONTACT US", href: "/contact" },
] as const;

const ADDRESS = {
  lines: [
    "No. 1357, Ground Floor, 9th Cross, ITI Layout,",
    "JP Nagar 1st Phase, Bengaluru, Karnataka - 560 078",
  ],
  mapUrl:
    "https://www.google.com/maps?q=No.+1357,+Ground+Floor,+9th+Cross,+ITI+Layout,+JP+Nagar+1st+Phase,+Bengaluru,+Karnataka+560078&output=embed",
};

export default function Footer() {
  return (
    <footer className="bg-black w-full border-t-2 border-gray-600">
      <div className="px-4 sm:px-6 lg:px-10 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">

          {/* Logo */}
          <div className="flex flex-col items-center justify-center sm:col-span-2 lg:col-span-1 text-center md:text-left relative translate-x-12">
            <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-px bg-gray-700" />
            <div className="mb-0 sm:mb-2 lg:mb-8">
              <Link href="/" className="inline-flex items-center justify-center w-full">
                <Image
                  src="/Geekonomy Logo.webp"
                  alt="GEEKONOMY Logo"
                  width={300}
                  height={100}
                  className="object-contain mx-auto lg:w-[600px] lg:h-[168px]"
                  priority
                />
              </Link>
            </div>
          </div>

          {/* WHAT WE DO */}
          <div
            className="flex flex-col relative items-center sm:items-start text-left sm:text-left sm:border-r sm:border-gray-700 lg:border-none sm:px-18 lg:px-20"
          >
            <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-px bg-gray-700" />

            <Typography
              as="h3"
              variant="base"
              className="uppercase mb-4 text-white text-left relative
                after:block after:h-[2px] after:w-full after:bg-white after:mt-2 sm:after:hidden font-light tracking-[-1.1px] text-xs sm:text-sm md:text-base lg:text-lg"
            >
              WHAT WE DO
            </Typography>

            <nav>
              <ul className="flex flex-col gap-5 items-start">
                {FOOTER_NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="uppercase hover:text-accent-green transition-colors duration-200"
                    >
                      <Typography
                        as="span"
                        variant="base"
                        className="font-light tracking-[-1.1px] text-white text-xs sm:text-sm md:text-base lg:text-base"
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
            <div className="w-full max-w-xs mx-auto sm:mx-0 items-start">
              <Typography
                as="h3"
                variant="base"
                className="uppercase mb-3 sm:mb-6 inline-block text-left relative
                  after:block after:h-[2px] after:w-full after:bg-white after:mt-2 sm:after:hidden font-medium text-white text-xs sm:text-sm md:text-base lg:text-lg -translate-x-5 sm:-translate-x-0"
              >
                ADDRESS
              </Typography>
            </div>

            <div className="mb-6 w-full flex flex-col items-center sm:items-start gap-1">
              {ADDRESS.lines.map((line, index) => (
                <Typography
                  key={index}
                  as="p"
                  variant="sm"
                  className="
        text-white max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl
        mb-1 leading-[1.3] text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px]
        text-center sm:text-left break-words
      "
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
            variant="base"
            className="text-gray-400 text-sm text-center sm:text-right mb-4 text-xs sm:text-sm md:text-base lg:text-base"
          >
            © {new Date().getFullYear()} Geekonomy. All rights reserved
          </Typography>
        </div>
      </div>
    </footer>
  );
}
