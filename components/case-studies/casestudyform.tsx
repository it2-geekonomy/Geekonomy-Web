"use client";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { CaseStudy } from "@/types";
import Button from "@/components/ui/Button";
import { Typography } from "../ui/Typography";

export default function CaseStudyForm({ post }: { post: CaseStudy }) {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        contact: "",
        organization: "",
    });

    const [errors, setErrors] = useState({
        firstName: "",
        lastName: "",
        email: "",
        contact: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    // Initialize EmailJS
    useEffect(() => {
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
        if (publicKey) {
            emailjs.init(publicKey);
        }
    }, []);

    // ✅ Load + clear localStorage
    useEffect(() => {
        try {
            const savedData = localStorage.getItem("projectInsightsForm");
            if (savedData) setFormData(JSON.parse(savedData));
        } catch (error) {
            console.error("Error reading localStorage:", error);
        }

        localStorage.removeItem("projectInsightsForm");
    }, []);

    // ✅ Auto-save form data
    useEffect(() => {
        try {
            localStorage.setItem("projectInsightsForm", JSON.stringify(formData));
        } catch (error) {
            console.error("Error saving to localStorage:", error);
        }
    }, [formData]);

    // ✅ Handle input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: "" }));
    };

    // ✅ Validation logic
    const validateForm = () => {
        const newErrors = { firstName: "", lastName: "", email: "", contact: "" };
        let hasError = false;

        if (!formData.firstName.trim()) {
            newErrors.firstName = "First name is required";
            hasError = true;
        }

        if (!formData.lastName.trim()) {
            newErrors.lastName = "Last name is required";
            hasError = true;
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
            hasError = true;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Enter a valid email address";
            hasError = true;
        }

        if (!formData.contact.trim()) {
            newErrors.contact = "Contact number is required";
            hasError = true;
        } else if (!/^\d{10}$/.test(formData.contact)) {
            newErrors.contact = "Enter a valid 10-digit contact number";
            hasError = true;
        }

        setErrors(newErrors);
        return !hasError;
    };

    // Helper function to get PDF path based on case study slug
    const getPdfPath = (slug: string): string => {
        const pdfMap: Record<string, string> = {
            "divyasree-builders": "/case-studies/DivyaShree.pdf",
            "hindustan-power": "/case-studies/Hindustan.pdf",
            "vst-group": "/case-studies/VST.pdf",
            "mushashi-delta": "/case-studies/Musashi.pdf",
            "kinfolk-montessori": "/case-studies/Kinfolk.pdf",
        };
        return pdfMap[slug] || post.pdfUrl || "/case-studies/default.pdf";
    };

    // Function to download PDF
    const downloadPDF = (pdfPath: string) => {
        const link = document.createElement("a");
        link.href = pdfPath;
        link.download = pdfPath.split("/").pop() || "case-study.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleViewDetails = async () => {
        if (!validateForm()) return;

        setIsSubmitting(true);
        setSubmitStatus("idle");

        try {
            // Prepare template parameters for EmailJS
            const templateParams = {
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                contact: formData.contact,
                organization: formData.organization || "Not provided",
                projectName: post.title || post.internalTitle || "Case Study",
                projectSlug: post.slug,
            };

            // Get environment variables
            const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
            const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_PROJECT;
            const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

            // Validate environment variables
            if (!serviceId || !templateId || !publicKey) {
                throw new Error("EmailJS configuration is missing. Please check your environment variables.");
            }

            console.log("Sending project insights email with params:", templateParams);

            // Send email using EmailJS
            await emailjs.send(
                serviceId,
                templateId,
                templateParams,
                publicKey
            );

            console.log("Email sent successfully");

            setSubmitStatus("success");

            // Download PDF after successful email submission
            const pdfPath = getPdfPath(post.slug);
            setTimeout(() => {
                downloadPDF(pdfPath);
            }, 500);

            // Clear form data from localStorage after successful submission
            localStorage.removeItem("projectInsightsForm");

            // Reset form
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                contact: "",
                organization: "",
            });

        } catch (error: any) {
            console.error("EmailJS Error:", error);
            console.error("Error details:", {
                text: error?.text,
                status: error?.status,
                message: error?.message,
            });
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="max-w-[85%] md:max-w-[70%] mx-auto mt-4 md:mt-8 mb-20">
            <div className="flex flex-col gap-4 bg-[#18181B] bg-opacity-80 border border-gray-700 rounded-2xl p-6 md:p-10">
                <Typography
                    as="h2"
                    variant="lg"
                    className="font-medium text-white mb-4"
                >
                    Please fill the details to view the project insights
                </Typography>

                {/* Form Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col">
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First Name *"
                            value={formData.firstName}
                            onChange={handleChange}
                            className={`px-4 py-2 rounded-lg bg-transparent border ${errors.firstName ? "border-red-500" : "border-gray-600"
                                } text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#6FAF4E]/80`}
                        />
                        {errors.firstName && (
                            <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                        )}
                    </div>
                    <div className="flex flex-col">
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name *"
                            value={formData.lastName}
                            onChange={handleChange}
                            className={`px-4 py-2 rounded-lg bg-transparent border ${errors.lastName ? "border-red-500" : "border-gray-600"
                                } text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#6FAF4E]/80`}
                        />
                        {errors.lastName && (
                            <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                        )}
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email *"
                            value={formData.email}
                            onChange={handleChange}
                            className={`px-4 py-2 rounded-lg bg-transparent border ${errors.email ? "border-red-500" : "border-gray-600"
                                } text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#6FAF4E]/80`}
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                        )}
                    </div>
                    <div className="flex flex-col">
                        <input
                            type="tel"
                            name="contact"
                            placeholder="Contact Number *"
                            value={formData.contact}
                            onChange={handleChange}
                            className={`px-4 py-2 rounded-lg bg-transparent border ${errors.contact ? "border-red-500" : "border-gray-600"
                                } text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#6FAF4E]/80`}
                        />
                        {errors.contact && (
                            <p className="text-red-500 text-sm mt-1">{errors.contact}</p>
                        )}
                    </div>
                </div>
                {/* Organization Field - Optional */}
                <div className="flex flex-col">
                    <input
                        type="text"
                        name="organization"
                        placeholder="Organization"
                        value={formData.organization}
                        onChange={handleChange}
                        className="px-4 py-2 rounded-lg bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#6FAF4E]/80"
                    />
                </div>
                {/* Status Messages */}
                {submitStatus === "success" && (
                    <div className="mt-4">
                        <Typography as="p" variant="base" className="text-[#6FAF4E] text-center">
                            ✓ Form submitted successfully! Downloading PDF...
                        </Typography>
                    </div>
                )}
                {submitStatus === "error" && (
                    <div className="mt-4">
                        <Typography as="p" variant="base" className="text-red-500 text-center">
                            ✗ Failed to submit form. Please try again.
                        </Typography>
                    </div>
                )}

                <Button
                    onClick={handleViewDetails}
                    disabled={isSubmitting}
                    variant="primary"
                    className={`mt-4 md:mt-8 mx-auto text-[clamp(0.7rem,1.5vw,1.1rem)] normal-case ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                    <div className="flex items-center gap-3">
                        <span>{isSubmitting ? "Submitting..." : "Submit and View"}</span>
                    </div>
                </Button>
            </div>
        </div>
    );
}