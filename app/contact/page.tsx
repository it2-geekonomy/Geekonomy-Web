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
        <div id="contact-form">
          <ContactUsForm />
        </div>
      </div>
    </main>
  );
}