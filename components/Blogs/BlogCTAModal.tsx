"use client";

import { useState, useEffect, useLayoutEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import { Typography } from "@/components/ui/Typography";
import { cn } from "@/lib/utils";

interface BlogCTAModalProps {
  isOpen: boolean;
  onClose: () => void;
  blogName: string;
}

/** Above site chrome; fixed positioning must not sit inside transformed ancestors (e.g. motion/sticky). */
const PORTAL_Z = "z-[200]";

export function BlogCTAModal({ isOpen, onClose, blogName }: BlogCTAModalProps) {
  const [mounted, setMounted] = useState(false);

  useLayoutEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen || !mounted) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, mounted]);
  const [formData, setFormData] = useState({
    name: "",
    organisation: "",
    contact: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setFormData({
        name: "",
        organisation: "",
        contact: "",
        email: "",
        message: "",
      });
      setErrors({});
      setSubmitStatus("idle");
    }
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    
    if (!formData.contact.trim()) {
      newErrors.contact = "Contact number is required";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/send-blog-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          contact: formData.contact,
          organisation: formData.organisation || "",
          message: formData.message,
          blogName: blogName,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send email");
      }

      setSubmitStatus("success");
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (error: any) {
      console.error("Email Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const modal = (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className={`fixed inset-0 ${PORTAL_Z} bg-black/80 backdrop-blur-sm`}
            aria-hidden
          />

          {/* Modal: scrollable shell so short viewports / keyboard don’t clip content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            className={`fixed inset-0 ${PORTAL_Z} flex items-center justify-center overflow-y-auto overscroll-y-contain px-3 py-4 sm:px-4 sm:py-6`}
            role="dialog"
            aria-modal="true"
            aria-label={`Get in touch about: ${blogName}`}
            onClick={onClose}
          >
            <div
              className="relative w-full max-w-2xl min-w-0 my-auto max-h-[min(92dvh,calc(100vh-1.5rem))] sm:max-h-[min(90dvh,calc(100vh-3rem))] overflow-y-auto rounded-xl border-2 border-[#69AE44] bg-black/95 p-4 shadow-xl backdrop-blur-md sm:p-6 lg:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button — 44px min touch target */}
              <button
                type="button"
                onClick={onClose}
                className="absolute right-2 top-2 flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 sm:right-3 sm:top-3"
                aria-label="Close modal"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Blog Name — reserve space for close; break long titles */}
              <div className="mb-5 pr-10 sm:mb-6 sm:pr-12">
                <Typography
                  as="h2"
                  variant="h3"
                  className="wrap-break-word text-lg font-bold text-[#69AE44] sm:text-xl"
                >
                  Blog: {blogName}
                </Typography>
                <Typography as="p" variant="body-xl" className="mt-1 text-sm text-white/90 sm:text-base">
                  Fill out the form below and we&apos;ll get back to you soon.
                </Typography>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="min-w-0 space-y-5 sm:space-y-6">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
                  <div className="min-w-0">
                    <Typography as="label" variant="body-xl" className="mb-2 block text-sm text-white sm:text-base">
                      Name <span className="text-[#69AE44]">*</span>
                    </Typography>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      autoComplete="name"
                      className={cn(
                        "box-border w-full min-w-0 border-b border-white/60 bg-transparent py-2.5 text-base text-white outline-none focus:border-[#69AE44] sm:text-sm",
                        errors.name && "border-red-500"
                      )}
                    />
                    {errors.name && (
                      <Typography as="p" variant="body-xl" className="text-red-500 text-sm mt-1">
                        {errors.name}
                      </Typography>
                    )}
                  </div>

                  <div className="min-w-0">
                    <Typography as="label" variant="body-xl" className="mb-2 block text-sm text-white sm:text-base">
                      Organization
                    </Typography>
                    <input
                      type="text"
                      name="organisation"
                      value={formData.organisation}
                      onChange={handleChange}
                      autoComplete="organization"
                      className="box-border w-full min-w-0 border-b border-white/60 bg-transparent py-2.5 text-base text-white outline-none focus:border-[#69AE44] sm:text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
                  <div className="min-w-0">
                    <Typography as="label" variant="body-xl" className="mb-2 block text-sm text-white sm:text-base">
                      Email <span className="text-[#69AE44]">*</span>
                    </Typography>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      autoComplete="email"
                      inputMode="email"
                      className={cn(
                        "box-border w-full min-w-0 border-b border-white/60 bg-transparent py-2.5 text-base text-white outline-none focus:border-[#69AE44] sm:text-sm",
                        errors.email && "border-red-500"
                      )}
                    />
                    {errors.email && (
                      <Typography as="p" variant="body-xl" className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </Typography>
                    )}
                  </div>

                  <div className="min-w-0">
                    <Typography as="label" variant="body-xl" className="mb-2 block text-sm text-white sm:text-base">
                      Contact <span className="text-[#69AE44]">*</span>
                    </Typography>
                    <input
                      type="tel"
                      name="contact"
                      value={formData.contact}
                      onChange={handleChange}
                      autoComplete="tel"
                      inputMode="tel"
                      className={cn(
                        "box-border w-full min-w-0 border-b border-white/60 bg-transparent py-2.5 text-base text-white outline-none focus:border-[#69AE44] sm:text-sm",
                        errors.contact && "border-red-500"
                      )}
                    />
                    {errors.contact && (
                      <Typography as="p" variant="body-xl" className="text-red-500 text-sm mt-1">
                        {errors.contact}
                      </Typography>
                    )}
                  </div>
                </div>

                <div className="min-w-0">
                  <Typography as="label" variant="body-xl" className="mb-2 block 
                   text-white sm:text-base">
                    Message <span className="text-[#69AE44]">*</span>
                  </Typography>
                  <textarea
                    name="message"
                    value={formData.message}
                    rows={4}
                    onChange={(e) => {
                      handleChange(e);
                      e.target.style.height = "auto";
                      e.target.style.height = `${e.target.scrollHeight}px`;
                    }}
                    maxLength={500}
                    className={cn(
                      "box-border min-h-26 w-full min-w-0 resize-none overflow-hidden rounded-md border border-white/60 bg-transparent px-3 py-2.5 text-base text-white outline-none transition-colors duration-200 focus:border-[#69AE44] sm:min-h-22 sm:text-sm",
                      errors.message && "border-red-500"
                    )}
                  />
                  {errors.message && (
                      <Typography as="p" variant="body-xl" className="text-red-500 text-sm mt-1">
                        {errors.message}
                      </Typography>
                  )}
                </div>

                {submitStatus === "success" && (
                  <div className="p-4 bg-[#69AE44]/20 border border-[#69AE44] rounded-lg">
                    <Typography as="p" variant="body-xl" className="text-[#69AE44]">
                      ✓ Message sent successfully! We'll get back to you soon.
                    </Typography>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="p-4 bg-red-500/20 border border-red-500 rounded-lg">
                    <Typography as="p" variant="body-xl" className="text-red-500">
                      ✗ Failed to send message. Please try again.
                    </Typography>
                  </div>
                )}

                <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-end sm:gap-4 sm:pt-4">
                  <button
                    type="button"
                    onClick={onClose}
                    className="min-h-11 w-full rounded-full border border-white/60 px-5 py-2.5 text-center text-sm text-white transition-colors hover:border-white sm:w-auto sm:min-h-0 sm:px-6 sm:py-2"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={cn(
                      "min-h-11 w-full rounded-full bg-[#69AE44] px-5 py-2.5 text-center text-sm font-medium text-white transition-opacity hover:opacity-90 sm:w-auto sm:min-h-0 sm:px-6 sm:py-2",
                      isSubmitting && "cursor-not-allowed opacity-50"
                    )}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  if (!mounted) return null;
  return createPortal(modal, document.body);
}
