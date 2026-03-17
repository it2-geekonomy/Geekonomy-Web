"use client";

import { useEffect } from "react";
import ContactUsForm from "@/components/forms/ContactUsForm";
import { Typography } from "@/components/ui/Typography";

export default function ContactPage() {
  const scrollToForm = () => {
    const formElement = document.getElementById("contact-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    // Check if there's a hash in the URL (e.g., #form)
    if (window.location.hash === "#form") {
      // Small delay to ensure the page is fully rendered
      setTimeout(scrollToForm, 300);
    }

    // Also listen for hash changes (in case navigation happens after mount)
    const handleHashChange = () => {
      if (window.location.hash === "#form") {
        setTimeout(scrollToForm, 100);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center w-full px-4 sm:px-6 lg:px-10 py-4 lg:pb-[clamp(1.5rem,1.5rem+1.5vw,8rem)]">
      <div className="mx-4 sm:mx-6 lg:mx-12 xl:mx-[clamp(0.5rem,0.5rem+8vw,10rem)] 2xl:mx-[clamp(1rem,1rem+12vw,22rem)]" id="contact-form">
        {/* Heading */}
        <h1 className="text-center font-semibold mb-6">
          <Typography as="p" variant="display-xl" className="text-white pb-5">
            Your Growth with Clarity <br className="hidden sm:block" />
            is just a call away!
          </Typography>
        </h1>
        {/* Contact Form */}
        <div>
          <ContactUsForm />
        </div>
      </div>
    </main>
  );
}