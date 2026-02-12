"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CONTACT_SUBJECTS } from "@/lib/constants";
import { ContactFormValues } from "@/types/ContactTypes";
import { validateContactForm } from "@/lib/validations";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/ui/Typography";

export default function ContactUsForm() {
    const [values, setValues] = useState<ContactFormValues>({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        organization: "",
        subject: [],
        message: "",
    });

    const [errors, setErrors] = useState<any>({});

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const toggleSubject = (id: string) => {
        setValues((prev) => ({
            ...prev,
            subject: prev.subject.includes(id as any)
                ? prev.subject.filter((s) => s !== id)
                : [...prev.subject, id as any],
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors = validateContactForm(values);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            console.log("FORM DATA:", values);
        }
    };
    return (
        <form
            onSubmit={handleSubmit}
            className="relative w-full mx-auto grid grid-cols-1 place-items-center lg:place-items-stretch lg:grid-cols-[40%_60%] gap-8 p-6 lg:p-18 bg-black/80 backdrop-blur-md border border-white/20"
        >
            {/* Green corner strokes */}
            <span className="absolute top-0 left-0 w-5 h-5 border-t border-l border-[#6FAF4E]/70" />
            <span className="absolute top-0 right-0 w-5 h-5 border-t border-r border-[#6FAF4E]/70" />
            <span className="absolute bottom-0 left-0 w-5 h-5 border-b border-l border-[#6FAF4E]/70" />
            <span className="absolute bottom-0 right-0 w-5 h-5 border-b border-r border-[#6FAF4E]/70" />
            {/* LEFT PANEL */}
            <div className="space-y-12 lg:space-y-22">
                <Typography as="p" variant="xl" className="text-white">
                    Let’s Get Your Portfolio Strategy
                </Typography>

                <div className="space-y-12 lg:space-y-22">
                    <div className="flex items-center gap-5">
                        <Image src="/contactimages/phone.svg" alt="phone" width={34} height={34} className="w-6 h-6 sm:w-[38px] sm:h-[38px]"/>
                        <Typography as="p" variant="base" className="text-white">
                            +91 90000 05968
                        </Typography>
                    </div>

                    <div className="flex items-center gap-5">
                        <Image src="/contactimages/email.svg" alt="email" width={34} height={34} className="w-7 h-7 sm:w-[38px] sm:h-[38px]"/>
                        <Typography as="p" variant="base" className="text-white">
                            connect@geekonomy.in
                        </Typography>
                    </div>

                    <div className="flex items-start gap-5 max-w-sm">
                        <Image src="/contactimages/location.svg" alt="location" width={34} height={34} className="w-7 h-7 sm:w-[38px] sm:h-[38px]"/>
                        <Typography as="p" variant="base" className="text-white leading-relaxed">
                            No. 1357, Ground Floor, 9th Cross, ITI Layout, JP Nagar 1st Phase,
                            Bengaluru, Karnataka - 560 078.
                        </Typography>
                    </div>
                </div>
                {/* Social icons */}
                <div className="flex items-center gap-4 pt-4 mb-8 lg:mb-0">
                    <Link
                        href="https://x.com/TheGeekonomy?s=20"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Geekonomy on X"
                    >
                         <Image src="/contactimages/twitter.svg" alt="twitter" width={38} height={38} className="w-6 h-6 sm:w-[38px] sm:h-[38px]" />
                    </Link>

                    <Link
                        href="https://www.facebook.com/geekonomytechpvtltd"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Geekonomy on Facebook"
                    >
                        <Image src="/contactimages/facebook.svg" alt="facebook" width={38} height={38} className="w-7 h-7 sm:w-[38px] sm:h-[38px]" />
                    </Link>

                    <Link
                        href="https://www.instagram.com/geekonomy_?igsh=MTlpdTMzaG83ZmJ5MA%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Geekonomy on Instagram"
                    >
                        <Image src="/contactimages/instagram.svg" alt="instagram" width={38} height={38} className="w-7 h-7 sm:w-[38px] sm:h-[38px]" />
                    </Link>

                    <Link
                        href="https://www.linkedin.com/company/geekonomy-technology-private-limited/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Geekonomy on LinkedIn"
                    >
                        <Image src="/contactimages/linkedin.svg" alt="linkedin" width={38} height={38} className="w-7 h-7 sm:w-[38px] sm:h-[38px]" />
                    </Link>
                </div>
            </div>
            {/* RIGHT PANEL */}
            <div className=" space-y-6 lg:space-y-16 relative text-left pl-0 lg:pl-14 min-w-0">
                {/* Divider */}
                <div className="hidden lg:block absolute left-0 top-0 h-full w-px bg-white/50" />
                {/* Inputs row 1 */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-22">
                    {["firstName", "lastName"].map((field) => (
                        <div key={field}>
                            <Typography as="label" variant="base" className="text-white block mb-2">
                                {field === "firstName" ? "First Name" : "Last Name"}
                            </Typography>
                            <input
                                name={field}
                                onChange={handleChange}
                                className="w-full box-border bg-transparent border-b border-white/60 focus:border-[#A0A0A0] outline-none py-1 lg:py-6 pr-1 text-white"
                            />
                        </div>
                    ))}
                </div>
                {/* Inputs row 2 */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-22">
                    {["email", "phone"].map((field) => (
                        <div key={field}>
                            <Typography as="label" variant="base" className="text-white block mb-2">
                                {field === "email" ? "Email" : "Contact Number"}
                            </Typography>
                            <input
                                name={field}
                                onChange={handleChange}
                                className="w-full box-border bg-transparent border-b border-white/60 focus:border-[#A0A0A0] outline-none py-1 lg:py-6 pr-1 text-white"
                            />
                        </div>
                    ))}
                </div>
                {/* Subjects */}
                <div>
                    <Typography as="p" variant="base" className="text-white mb-8">
                        Select Subject?
                    </Typography>

                    <div className="grid grid-cols-1 gap-y-10 gap-x-12 grid-cols-1 sm:grid-cols-2">
                        {CONTACT_SUBJECTS.map((item) => (
                            <label key={item.id} className="flex items-center gap-6 text-white">
                                <input
                                    type="checkbox"
                                    className="hidden"
                                    checked={values.subject.includes(item.id as any)}
                                    onChange={() => toggleSubject(item.id)}
                                />
                                <span
                                    className={cn(
                                        "w-5 h-5 border-2 border-[#6FAF4E] flex items-center justify-center transition bg-black",
                                        values.subject.includes(item.id as any) && "bg-black"
                                    )}
                                >
                                    {values.subject.includes(item.id as any) && (
                                        <span className="text-[#6FAF4E] text-[14px] leading-none font-bold">✓</span>
                                    )}
                                </span>
                                <Typography as="span" variant="base" className="text-white">
                                    {item.label}
                                </Typography>
                            </label>
                        ))}
                    </div>
                </div>
                {/* Organization */}
                <div>
                    <Typography as="label" variant="base" className="text-white block mb-1 lg:mb-2">
                        Organization
                    </Typography>
                    <input
                        name="organization"
                        onChange={handleChange}
                        className="w-full box-border bg-transparent border-b border-white/60 focus:border-[#A0A0A0] outline-none py-1 lg:py-6 pr-1 text-white"
                    />
                </div>
                {/* Message */}
                <div>
                    <Typography as="label" variant="base" className="text-white block mb-1 lg:mb-2">
                        Message
                    </Typography>
                    <textarea
                        name="message"
                        rows={1}
                        onChange={handleChange}
                        className="w-full box-border bg-transparent border-b border-white/60 focus:border-[#A0A0A0] outline-none py-1 lg:py-6 pr-1 text-white resize-none"
                    />
                </div>
                {/* Button */}
                <div className="pt-6 flex justify-center lg:justify-end">
                    <button
                        type="submit"
                        className="block lg:ml-auto bg-[#6FAF4E] text-white border-2 border-transparent px-12 py-3 rounded-full transition-all hover:bg-black hover:text-[#6FAF4E] hover:border-[#6FAF4E] hover:scale-105"
                    >
                        <Typography as="span" variant="base" className="font-normal">
                            Send Message
                        </Typography>
                    </button>
                </div>
            </div>
        </form>
    );
}