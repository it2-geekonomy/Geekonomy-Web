"use client";

import { useState, type ChangeEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Typography } from "@/components/ui/Typography";

type FormState = {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState | "consent", string>>;

type LandingPageFormProps = {
  landingPageSlug: string;
    headline?: string;
};

export default function LandingPageForm({ 
  landingPageSlug,
  headline = "Contact Our Digital Marketing Agency Today and Start Generating More Qualified Leads.",
 }: LandingPageFormProps) {
  const router = useRouter();
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [consent, setConsent] = useState(false);
  const [consentExpanded, setConsentExpanded] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange =
    (field: keyof FormState) => (event: ChangeEvent<HTMLInputElement>) => {
      setForm((previous) => ({ ...previous, [field]: event.target.value }));
      if (errors[field]) setErrors((previous) => ({ ...previous, [field]: undefined }));
    };

  const handleSubmit = async () => {
    const nextErrors: FormErrors = {};
    if (!form.name.trim()) nextErrors.name = "Name is required";
    if (!form.email.trim()) nextErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = "Enter a valid email";
    }
    if (!form.phone.trim()) nextErrors.phone = "Phone is required";
    if (!form.message.trim()) nextErrors.message = "Message is required";
    if (!consent) nextErrors.consent = "Please provide consent to continue";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/send-landing-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          contact: form.phone.trim(),
          organisation: form.company.trim(),
          message: form.message.trim(),
          landingPage: landingPageSlug,
        }),
      });

      const responseText = await response.text();
      let data: { error?: string } = {};
      try {
        data = JSON.parse(responseText) as { error?: string };
      } catch {
        throw new Error(`Form request failed (${response.status}). Please try again.`);
      }

      if (!response.ok) throw new Error(data.error || "Failed to send message");
      router.push(`/${landingPageSlug}/thank-you`);
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : "Failed to send message. Please try again."
      );
      setIsSubmitting(false);
    }
  };

  const inputBase =
    "w-full box-border bg-neutral-950 border rounded-lg px-4 py-3.5 text-white text-sm outline-none placeholder:text-neutral-500";

  return (
    <section id="contact" className="bg-neutral-950 px-4 sm:px-6 lg:px-10 py-6 lg:py-10 font-sans">
      <div className="w-full max-w-2xl mx-auto bg-neutral-900 border border-neutral-800 rounded-2xl px-5 sm:px-8 lg:px-11 py-8 sm:py-10 lg:py-12 shadow-2xl">
        <Typography variant="body-lg" as="p" className="text-center text-[#69AE44] font-bold tracking-widest mb-3">
          GET IN TOUCH
        </Typography>
        <Typography variant="display-xl" as="p" className="text-white text-xl sm:text-2xl lg:text-3xl leading-[1.2] text-center mb-9 px-2 lg:px-0">
          {headline}
        </Typography>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <Field label="Name*" value={form.name} error={errors.name} onChange={handleChange("name")} inputBase={inputBase} />
          <Field label="Email*" value={form.email} error={errors.email} onChange={handleChange("email")} inputBase={inputBase} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <Field label="Phone*" value={form.phone} error={errors.phone} onChange={handleChange("phone")} inputBase={inputBase} />
          <Field label="Company" value={form.company} onChange={handleChange("company")} inputBase={inputBase} />
        </div>
        <Field label="Message*" value={form.message} error={errors.message} onChange={handleChange("message")} inputBase={inputBase} />

        <div className="flex items-start gap-2.5 mb-2 mt-4">
          <input
            id="landing-consent"
            type="checkbox"
            checked={consent}
            onChange={(event) => {
              setConsent(event.target.checked);
              if (errors.consent) setErrors((previous) => ({ ...previous, consent: undefined }));
            }}
            className="mt-1 w-4 h-4 accent-[#69AE44] shrink-0"
          />
          <div className="text-neutral-300 text-[14px] sm:text-[14px] md:text-[15px] lg:text-[15px] leading-relaxed m-0">
            <label htmlFor="landing-consent" className="cursor-pointer">
              I consent to receive service-related communications from Geekonomy.
            </label>{" "}
            {consentExpanded && (
              <span>
                Message and data rates may apply. See our{" "}
                <Link href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#69AE44] underline hover:opacity-80">
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link href="/terms-and-conditions" target="_blank" rel="noopener noreferrer" className="text-[#69AE44] underline hover:opacity-80">
                  Terms &amp; Conditions
                </Link>
                .{" "}
              </span>
            )}
            <button
              type="button"
              onClick={() => setConsentExpanded((previous) => !previous)}
              className="text-[#69AE44] underline whitespace-nowrap bg-transparent border-none p-0 cursor-pointer font-inherit"
            >
              {consentExpanded ? "Show less" : "Read more"}
            </button>
          </div>
        </div>
        {errors.consent && <Typography variant="body-sm" as="p" className="text-red-300 mt-0 mb-2">{errors.consent}</Typography>}

        <div className="flex justify-center mt-7">
          <button type="button" onClick={() => void handleSubmit()} disabled={isSubmitting} className="bg-[#69AE44] hover:bg-[#5c9a3a] transition-colors border-none rounded-full px-11 py-4 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed">
            <Typography variant="body-lg" as="p" className="text-white font-bold">{isSubmitting ? "Sending..." : "Send Message"}</Typography>
          </button>
        </div>
        {submitError && <Typography variant="body-lg" as="p" className="text-center text-red-400 mt-4">{submitError}</Typography>}
      </div>
    </section>
  );
}

type FieldProps = {
  label: string;
  value: string;
  error?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  inputBase: string;
};

function Field({ label, value, error, onChange, inputBase }: FieldProps) {
  return (
    <div className="flex flex-col w-full mb-4">
      <input className={`${inputBase} ${error ? "border-red-400" : "border-neutral-800"}`} placeholder={label} value={value} onChange={onChange} />
      {error && <Typography variant="body-sm" as="p" className="text-red-300 mt-1.5 mb-0">{error}</Typography>}
    </div>
  );
}