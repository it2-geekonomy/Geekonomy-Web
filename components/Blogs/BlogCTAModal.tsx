"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Typography } from "@/components/ui/Typography";
import { cn } from "@/lib/utils";

interface BlogCTAModalProps {
  isOpen: boolean;
  onClose: () => void;
  blogName: string;
}

export function BlogCTAModal({ isOpen, onClose, blogName }: BlogCTAModalProps) {
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

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full max-w-2xl bg-black/95 backdrop-blur-md border-2 border-[#69AE44] rounded-xl p-6 lg:p-8 max-h-[90vh] overflow-y-auto">
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Blog Name */}
              <div className="mb-6">
                <Typography as="h2" variant="base" className="text-[#69AE44] text-xl font-bold mb-2">
                  Blog: {blogName}
                </Typography>
                <Typography as="p" variant="base" className="text-white/70 text-sm">
                  Fill out the form below and we'll get back to you soon.
                </Typography>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Typography as="label" variant="base" className="text-white block mb-2">
                      Name <span className="text-[#69AE44]">*</span>
                    </Typography>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={cn(
                        "w-full bg-transparent border-b border-white/60 focus:border-[#69AE44] outline-none py-2 text-white",
                        errors.name && "border-red-500"
                      )}
                    />
                    {errors.name && (
                      <Typography as="p" variant="base" className="text-red-500 text-sm mt-1">
                        {errors.name}
                      </Typography>
                    )}
                  </div>

                  <div>
                    <Typography as="label" variant="base" className="text-white block mb-2">
                      Organization
                    </Typography>
                    <input
                      type="text"
                      name="organisation"
                      value={formData.organisation}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-white/60 focus:border-[#69AE44] outline-none py-2 text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Typography as="label" variant="base" className="text-white block mb-2">
                      Email <span className="text-[#69AE44]">*</span>
                    </Typography>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={cn(
                        "w-full bg-transparent border-b border-white/60 focus:border-[#69AE44] outline-none py-2 text-white",
                        errors.email && "border-red-500"
                      )}
                    />
                    {errors.email && (
                      <Typography as="p" variant="base" className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </Typography>
                    )}
                  </div>

                  <div>
                    <Typography as="label" variant="base" className="text-white block mb-2">
                      Contact <span className="text-[#69AE44]">*</span>
                    </Typography>
                    <input
                      type="tel"
                      name="contact"
                      value={formData.contact}
                      onChange={handleChange}
                      className={cn(
                        "w-full bg-transparent border-b border-white/60 focus:border-[#69AE44] outline-none py-2 text-white",
                        errors.contact && "border-red-500"
                      )}
                    />
                    {errors.contact && (
                      <Typography as="p" variant="base" className="text-red-500 text-sm mt-1">
                        {errors.contact}
                      </Typography>
                    )}
                  </div>
                </div>

                <div>
                  <Typography as="label" variant="base" className="text-white block mb-2">
                    Message <span className="text-[#69AE44]">*</span>
                  </Typography>
                  <textarea
                    name="message"
                    value={formData.message}
                    rows={4}
                    onChange={(e) => {
                      handleChange(e);
                      e.target.style.height = "auto";
                      e.target.style.height = e.target.scrollHeight + "px";
                    }}
                    maxLength={500}
                    className={cn(
                      "w-full box-border bg-transparent border border-white/60 focus:border-[#69AE44] rounded-md px-3 py-2 text-white outline-none resize-none overflow-hidden transition-colors duration-200",
                      errors.message && "border-red-500"
                    )}
                  />
                  {errors.message && (
                    <Typography as="p" variant="base" className="text-red-500 text-sm mt-1">
                      {errors.message}
                    </Typography>
                  )}
                </div>

                {submitStatus === "success" && (
                  <div className="p-4 bg-[#69AE44]/20 border border-[#69AE44] rounded-lg">
                    <Typography as="p" variant="base" className="text-[#69AE44]">
                      ✓ Message sent successfully! We'll get back to you soon.
                    </Typography>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="p-4 bg-red-500/20 border border-red-500 rounded-lg">
                    <Typography as="p" variant="base" className="text-red-500">
                      ✗ Failed to send message. Please try again.
                    </Typography>
                  </div>
                )}

                <div className="flex justify-end gap-4 pt-4">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-6 py-2 border border-white/60 text-white rounded-full hover:border-white transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={cn(
                      "px-6 py-2 bg-[#69AE44] text-white rounded-full hover:opacity-90 transition-opacity",
                      isSubmitting && "opacity-50 cursor-not-allowed"
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
}
