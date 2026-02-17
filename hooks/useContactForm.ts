import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { CONTACT_SUBJECTS } from "@/lib/constants";
import { ContactFormValues } from "@/types/ContactTypes";
import { validateContactForm } from "@/lib/validations";

export function useContactForm() {
  const [values, setValues] = useState<ContactFormValues>({
    name: "",
    email: "",
    phone: "",
    organisation: "",
    subject: [],
    message: "",
  });

  const [errors, setErrors] = useState<any>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  useEffect(() => {
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init(publicKey);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateContactForm(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      setSubmitStatus("idle");

      try {
        const selectedSubjects = CONTACT_SUBJECTS.filter((item) =>
          values.subject.includes(item.id as any)
        ).map((item) => item.title);

        const subjectText = selectedSubjects.join(", ") || "Not specified";

        const templateParams = {
          name: values.name,
          email: values.email,
          phoneNumber: values.phone,
          selectSubject: subjectText,
          subject: subjectText,
          organisation: values.organisation || "Not provided",
          message: values.message,
        };

        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_CONTACT;
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
          throw new Error("EmailJS configuration is missing. Please check your environment variables.");
        }

        await emailjs.send(serviceId, templateId, templateParams, publicKey);

        setSubmitStatus("success");
        setValues({
          name: "",
          email: "",
          phone: "",
          organisation: "",
          subject: [],
          message: "",
        });

        setTimeout(() => {
          setSubmitStatus("idle");
        }, 5000);
      } catch (error: any) {
        console.error("EmailJS Error:", error);
        setSubmitStatus("error");
        setTimeout(() => {
          setSubmitStatus("idle");
        }, 5000);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return {
    values,
    errors,
    isSubmitting,
    submitStatus,
    handleChange,
    toggleSubject,
    handleSubmit,
  };
}
