import type { Metadata } from "next";
import Link from "next/link";
import { Typography } from "@/components/ui/Typography";

export const metadata: Metadata = {
  title: "Thank You | Geekonomy",
  description: "Thanks for reaching out. Our team will get back to you shortly.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <main className="min-h-[70vh] bg-neutral-950 px-4 sm:px-6 lg:px-10 py-16 lg:py-24 font-sans flex items-center">
      <div className="w-full max-w-2xl mx-auto bg-neutral-900 border border-neutral-800 rounded-2xl px-6 sm:px-10 py-12 sm:py-14 text-center shadow-2xl">
        <Typography
          variant="body-lg"
          as="p"
          className="text-[#69AE44] font-bold tracking-widest mb-3"
        >
          THANK YOU
        </Typography>

        <Typography
          variant="display-xl"
          as="h1"
          className="text-white text-2xl sm:text-3xl lg:text-4xl leading-[1.2] mb-5"
        >
          We’ve received your message
        </Typography>

        <Typography
          variant="body-lg"
          as="p"
          className="text-neutral-300 max-w-lg mx-auto mb-10"
        >
          Thanks for contacting Geekonomy. Our team will review your request and
          get back to you shortly.
        </Typography>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/digital-marketing-for-pool-companies-san-diego"
            className="inline-flex items-center justify-center bg-[#69AE44] hover:bg-[#5c9a3a] transition-colors rounded-full px-8 py-3.5 text-white font-bold no-underline"
          >
            Back to page
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center border border-neutral-700 hover:border-[#69AE44] transition-colors rounded-full px-8 py-3.5 text-white font-medium no-underline"
          >
            Go to home
          </Link>
        </div>
      </div>
    </main>
  );
}
