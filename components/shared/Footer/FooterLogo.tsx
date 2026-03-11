import Image from "next/image";
import Link from "next/link";

interface FooterLogoProps {
  logoScale?: string;
  iconSize?: string;
  logoHeight?: string;
  socialJustify?: string;
}

export function FooterLogo({
  logoScale = "scale-70",
  iconSize = "w-5 h-5",
  logoHeight = "h-[100px]",
  socialJustify = "justify-center",
}: FooterLogoProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <Link href="/" className={`inline-flex items-center justify-center w-full ${logoHeight}`}>
        <Image
          src="/Geekonomy Logo.webp"
          alt="GEEKONOMY Logo"
          width={1200}
          height={336}
          className={`object-contain mx-auto w-full h-auto ${logoScale}`}
          priority
        />
      </Link>
      
      {/* Social Media Icons */}
      <div className={`flex items-center gap-3 ${socialJustify}`}>
        <Link
          href="https://x.com/TheGeekonomy?s=20"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Geekonomy on X"
          className="hover:opacity-70 transition-opacity"
        >
          <Image
            src="/contactimages/twitter.svg"
            alt="twitter"
            width={38}
            height={38}
            className={iconSize}
          />
        </Link>

        <Link
          href="https://www.facebook.com/thegeekonomy"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Geekonomy on Facebook"
          className="hover:opacity-70 transition-opacity"
        >
          <Image
            src="/contactimages/facebook.svg"
            alt="facebook"
            width={38}
            height={38}
            className={iconSize}
          />
        </Link>

        <Link
          href="https://www.instagram.com/thegeekonomy?igsh=ejl5aDFpejl0Y2ht"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Geekonomy on Instagram"
          className="hover:opacity-70 transition-opacity"
        >
          <Image
            src="/contactimages/instagram.svg"
            alt="instagram"
            width={38}
            height={38}
            className={iconSize}
          />
        </Link>

        <Link
          href="https://www.linkedin.com/company/thegeekonomy/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Geekonomy on LinkedIn"
          className="hover:opacity-70 transition-opacity"
        >
          <Image
            src="/contactimages/linkedin.svg"
            alt="linkedin"
            width={38}
            height={38}
            className={iconSize}
          />
        </Link>
      </div>
    </div>
  );
}
