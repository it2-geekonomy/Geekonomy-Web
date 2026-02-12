import ContactUsForm from "@/components/forms/ContactUsForm";
import { Typography } from "@/components/ui/Typography";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-2 lg:px-4 py-4 lg:py-24">
      <div className="w-full max-w-7xl">
        {/* Heading */}
        <h1 className="text-center font-semibold mb-6 lg:mb-22">
          <Typography as="p" variant="4xl" className="text-white !text-[28px] sm:!text-5xl lg:!text-7xl">
            Your Growth with Clarity <br className="hidden sm:block" />
            is just a call away!
          </Typography>
        </h1>
        {/* Contact Form */}
        <ContactUsForm />
      </div>
    </main>
  );
}