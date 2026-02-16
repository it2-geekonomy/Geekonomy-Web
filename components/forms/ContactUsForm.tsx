"use client";

import { useContactForm } from "@/hooks/useContactForm";
import { ContactFormLeftPanel } from "./ContactFormLeftPanel";
import { ContactFormFields } from "./ContactFormFields";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/ui/Typography";

export default function ContactUsForm() {
  const {
    values,
    errors,
    isSubmitting,
    submitStatus,
    handleChange,
    toggleSubject,
    handleSubmit,
  } = useContactForm();

  return (
    <form
      onSubmit={handleSubmit}
      className="relative w-full mx-auto grid grid-cols-1 place-items-center lg:place-items-stretch lg:grid-cols-[40%_60%] gap-8 p-6 lg:p-18 bg-black/80 backdrop-blur-md border border-white/20"
    >
      <span className="absolute top-0 left-0 w-5 h-5 border-t border-l border-[#69AE44]" />
      <span className="absolute top-0 right-0 w-5 h-5 border-t border-r border-[#69AE44]" />
      <span className="absolute bottom-0 left-0 w-5 h-5 border-b border-l border-[#69AE44]" />
      <span className="absolute bottom-0 right-0 w-5 h-5 border-b border-r border-[#69AE44]" />

      <ContactFormLeftPanel />

      <div className="relative">
        <ContactFormFields
          values={values}
          errors={errors}
          handleChange={handleChange}
          toggleSubject={toggleSubject}
        />

        {submitStatus === "success" && (
          <div className="pt-4">
            <Typography as="p" variant="base" className="text-[#69AE44]">
              ✓ Message sent successfully! We'll get back to you soon.
            </Typography>
          </div>
        )}

        {submitStatus === "error" && (
          <div className="pt-4">
            <Typography as="p" variant="base" className="text-red-500">
              ✗ Failed to send message. Please try again or contact us directly.
            </Typography>
          </div>
        )}

        <div className="pt-6 flex justify-center lg:justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className={cn(
              "block lg:ml-auto bg-[#69AE44] text-white border-2 border-transparent px-12 py-3 rounded-full transition-all hover:bg-black hover:text-[#69AE44] hover:border-[#69AE44] hover:scale-105",
              isSubmitting && "opacity-50 cursor-not-allowed hover:scale-100"
            )}
          >
            <Typography as="span" variant="base" className="font-normal">
              {isSubmitting ? "Sending..." : "Send Message"}
            </Typography>
          </button>
        </div>
      </div>
    </form>
  );
}
