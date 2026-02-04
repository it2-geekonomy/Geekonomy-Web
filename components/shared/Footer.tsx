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
  // Google Maps embed URL - Replace with actual embed URL from Google Maps
  mapUrl: "https://www.google.com/maps?q=No.+1357,+Ground+Floor,+9th+Cross,+ITI+Layout,+JP+Nagar+1st+Phase,+Bengaluru,+Karnataka+560078&output=embed",
};

export default function Footer() {
  return (
    <footer className="bg-black text-white w-full">
      <div className="px-4 sm:px-6 lg:px-10 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Section - Logo and DMCA Badge */}
          <div className="flex flex-col justify-between">
            <div className="mb-8">
              <Link href="/" className="inline-flex items-center">
                <Image
                  src="/Geekonomy Logo.webp"
                  alt="GEEKONOMY Logo"
                  width={300}
                  height={100}
                  className="object-contain"
                  priority
                />
              </Link>
            </div>
          </div>

          {/* Middle Section - Navigation Links */}
          <div className="flex flex-col relative pl-0 md:pl-6 lg:pl-12">
            {/* Vertical separator line */}
            <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-gray-700" />
            <Typography
              as="h3"
              variant="lg"
              className="uppercase font-semibold mb-6 text-white"
            >
              WHAT WE DO
            </Typography>
            <nav>
              <ul className="flex flex-col gap-4">
                {FOOTER_NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="uppercase text-white hover:text-accent-green transition-colors duration-200"
                    >
                      <Typography as="span" variant="base">
                        {item.label}
                      </Typography>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Right Section - Address and Map */}
          <div className="flex flex-col">
            <Typography
              as="h3"
              variant="lg"
              className="uppercase font-semibold mb-6 text-white"
            >
              ADDRESS
            </Typography>
            <div className="mb-6">
              {ADDRESS.lines.map((line, index) => (
                <Typography
                  key={index}
                  as="p"
                  variant="base"
                  className="text-white mb-1"
                >
                  {line}
                </Typography>
              ))}
            </div>
            <div className="w-full h-64 lg:h-80 rounded-lg overflow-hidden border border-gray-800">
              <iframe
                src={ADDRESS.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className="border-t border-gray-800 px-4 sm:px-6 lg:px-10 py-6">
        <div className="flex justify-between items-center">
          <a
            href="//www.dmca.com/Protection/Status.aspx?ID=eea71184-71ee-4c73-a959-5852051246f6"
            title="DMCA.com Protection Status"
            className="dmca-badge inline-block"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://images.dmca.com/Badges/dmca_protected_sml_120n.png?ID=eea71184-71ee-4c73-a959-5852051246f6"
              alt="DMCA.com Protection Status"
              className="h-auto"
            />
          </a>
          <Typography as="p" variant="sm" className="text-white">
            © {new Date().getFullYear()} Geekonomy. All rights reserved
          </Typography>
        </div>
      </div>
    </footer>
  );
}
