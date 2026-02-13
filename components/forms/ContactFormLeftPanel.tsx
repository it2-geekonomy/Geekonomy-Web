import Image from "next/image";
import Link from "next/link";
import { Typography } from "@/components/ui/Typography";

export function ContactFormLeftPanel() {
  return (
    <div className="space-y-12 lg:space-y-22">
      <Typography as="p" variant="xl" className="text-white">
        Let's Get Your Portfolio Strategy
      </Typography>

      <div className="space-y-12 lg:space-y-22">
        <div className="flex items-center gap-5">
          <Image
            src="/contactimages/phone.svg"
            alt="phone"
            width={34}
            height={34}
            className="w-6 h-6 sm:w-[38px] sm:h-[38px]"
          />
          <Typography as="p" variant="base" className="text-white">
            +91 90000 05968
          </Typography>
        </div>

        <div className="flex items-center gap-5">
          <Image
            src="/contactimages/email.svg"
            alt="email"
            width={34}
            height={34}
            className="w-7 h-7 sm:w-[38px] sm:h-[38px]"
          />
          <Typography as="p" variant="base" className="text-white">
            connect@geekonomy.in
          </Typography>
        </div>

        <div className="flex items-start gap-5 max-w-sm">
          <Image
            src="/contactimages/location.svg"
            alt="location"
            width={34}
            height={34}
            className="w-7 h-7 sm:w-[38px] sm:h-[38px]"
          />
          <Typography as="p" variant="base" className="text-white leading-relaxed">
            No. 1357, Ground Floor, 9th Cross, ITI Layout, JP Nagar 1st Phase,
            Bengaluru, Karnataka - 560 078.
          </Typography>
        </div>
      </div>

      <div className="flex items-center gap-4 pt-4 mb-8 justify-center lg:justify-start lg:mb-0">
        <Link
          href="https://x.com/TheGeekonomy?s=20"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Geekonomy on X"
        >
          <Image
            src="/contactimages/twitter.svg"
            alt="twitter"
            width={38}
            height={38}
            className="w-6 h-6 sm:w-[38px] sm:h-[38px]"
          />
        </Link>

        <Link
          href="https://www.facebook.com/geekonomytechpvtltd"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Geekonomy on Facebook"
        >
          <Image
            src="/contactimages/facebook.svg"
            alt="facebook"
            width={38}
            height={38}
            className="w-7 h-7 sm:w-[38px] sm:h-[38px]"
          />
        </Link>

        <Link
          href="https://www.instagram.com/geekonomy_?igsh=MTlpdTMzaG83ZmJ5MA%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Geekonomy on Instagram"
        >
          <Image
            src="/contactimages/instagram.svg"
            alt="instagram"
            width={38}
            height={38}
            className="w-7 h-7 sm:w-[38px] sm:h-[38px]"
          />
        </Link>

        <Link
          href="https://www.linkedin.com/company/geekonomy-technology-private-limited/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Geekonomy on LinkedIn"
        >
          <Image
            src="/contactimages/linkedin.svg"
            alt="linkedin"
            width={38}
            height={38}
            className="w-7 h-7 sm:w-[38px] sm:h-[38px]"
          />
        </Link>
      </div>
    </div>
  );
}
