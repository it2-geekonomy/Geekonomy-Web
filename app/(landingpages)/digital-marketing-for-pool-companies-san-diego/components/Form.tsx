"use client";

import { useState } from "react";
import { Typography } from "@/components/ui/Typography";
type FormState = {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState | "consent", string>>;

export default function ContactForm() {
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
  const [submitted, setSubmitted] = useState(false);

  const handleChange =
    (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
      if (errors[field])
        setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

  const handleSubmit = () => {
    const nextErrors: FormErrors = {};
    if (!form.name.trim()) nextErrors.name = "Name is required";
    if (!form.email.trim()) nextErrors.email = "Email is required";
    if (!form.phone.trim()) nextErrors.phone = "Phone is required";
    if (!form.message.trim()) nextErrors.message = "Message is required";
    if (!consent) nextErrors.consent = "Please provide consent to continue";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
    }
  };

  const inputBase =
    "w-full box-border bg-neutral-950 border rounded-lg px-4 py-3.5 text-white text-sm outline-none placeholder:text-neutral-500";

  return (
    <section id="contact" className="bg-neutral-950 px-4 sm:px-6 lg:px-10 py-6 lg:py-10 font-sans">
      <div className="w-full max-w-2xl mx-auto bg-neutral-900 border border-neutral-800 rounded-2xl px-5 sm:px-8 lg:px-11 py-8 sm:py-10 lg:py-12 shadow-2xl">
        <Typography
          variant="body-lg"
          as="p"
          className="text-center text-[#69AE44] font-bold tracking-widest mb-3"
        >
          GET IN TOUCH
        </Typography>

        <Typography
          variant="display-xl"
          as="p"
          className="text-white text-xl sm:text-2xl lg:text-3xl leading-[1.2] text-center mb-9 px-2 lg:px-0"
        >
          Contact Our Digital Marketing Agency Today and Start Generating
          More Qualified Leads.
        </Typography>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div className="flex flex-col w-full">
            <input
              className={`${inputBase} ${
                errors.name ? "border-red-400" : "border-neutral-800"
              }`}
              placeholder="Name*"
              value={form.name}
              onChange={handleChange("name")}
            />
            {errors.name && (
              <Typography variant="body-sm" as="p" className="text-red-300 mt-1.5 mb-0">
                {errors.name}
              </Typography>
            )}
          </div>
          <div className="flex flex-col w-full">
            <input
              className={`${inputBase} ${
                errors.email ? "border-red-400" : "border-neutral-800"
              }`}
              placeholder="Email*"
              value={form.email}
              onChange={handleChange("email")}
            />
            {errors.email && (
              <Typography variant="body-sm" as="p" className="text-red-300 mt-1.5 mb-0">
                {errors.email}
              </Typography>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div className="flex flex-col w-full">
            <input
              className={`${inputBase} ${
                errors.phone ? "border-red-400" : "border-neutral-800"
              }`}
              placeholder="Phone*"
              value={form.phone}
              onChange={handleChange("phone")}
            />
            {errors.phone && (
              <Typography variant="body-sm" as="p" className="text-red-300 mt-1.5 mb-0">
                {errors.phone}
              </Typography>
            )}
          </div>
          <div className="flex flex-col w-full">
            <input
              className={`${inputBase} border-neutral-800`}
              placeholder="Company"
              value={form.company}
              onChange={handleChange("company")}
            />
          </div>
        </div>

        <div className="mb-4 w-full">
          <input
            className={`${inputBase} ${
              errors.message ? "border-red-400" : "border-neutral-800"
            }`}
            placeholder="Message*"
            value={form.message}
            onChange={handleChange("message")}
          />
          {errors.message && (
            <Typography variant="body-sm" as="p" className="text-red-300 mt-1.5 mb-0">
              {errors.message}
            </Typography>
          )}
        </div>

        <div className="flex items-start gap-2.5 mb-2">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setConsent(e.target.checked);
              if (errors.consent)
                setErrors((prev) => ({ ...prev, consent: undefined }));
            }}
            className="mt-1 w-4 h-4 accent-[#69AE44] shrink-0"
          />
          <Typography
            variant="body-lg"
            as="p"
            className="text-neutral-300 leading-relaxed m-0 inline"
          >
            I consent to receive service-related SMS messages and phone calls
            from Geekonomy.{" "}
            {consentExpanded && (
              <span>
                Message and data rates may apply. See our{" "}
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="text-[#69AE44] underline"
                >
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="text-[#69AE44] underline"
                >
                  Terms &amp; Conditions
                </a>
                .{" "}
              </span>
            )}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setConsentExpanded((prev) => !prev);
              }}
              className="text-[#69AE44] underline whitespace-nowrap"
            >
              {consentExpanded ? "Show less" : "Read more"}
            </a>
          </Typography>
        </div>
        {errors.consent && (
          <Typography variant="body-sm" as="p" className="text-red-300 mt-0 mb-2">
            {errors.consent}
          </Typography>
        )}

        <div className="flex justify-center mt-7">
          <button
            onClick={handleSubmit}
            className="bg-[#69AE44] hover:bg-[#5c9a3a] transition-colors border-none rounded-full px-11 py-4 cursor-pointer"
          >
            <Typography variant="body-lg" as="p" className="text-white font-bold">
              Send Message
            </Typography>
          </button>
        </div>

        {submitted && (
          <Typography variant="body-lg" as="p" className="text-center text-[#69AE44] mt-4">
            Thanks — your message has been sent.
          </Typography>
        )}
      </div>
    </section>
  );
}