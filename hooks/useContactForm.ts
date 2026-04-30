import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { CONTACT_SUBJECTS } from "@/lib/constants";
import { ContactFormValues } from "@/types/ContactTypes";
import { validateContactForm } from "@/lib/validations";

type ContactEmailPayload = {
  name: string;
  email: string;
  phone: string;
  organisation: string;
  subject: string;
  message: string;
};

async function sendContactEmailFallback(payload: ContactEmailPayload) {
  const response = await fetch("/api/send-contact-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    let details = "Unknown error";
    try {
      const data = await response.json();
      details = data?.error || data?.details || details;
    } catch {
      // Ignore JSON parse failure and keep fallback details.
    }
    throw new Error(`Fallback email API failed: ${details}`);
  }
}

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

        // Send data to external CRM API
        try {
          await fetch("https://crm.geekonomy.in/api/leads/external", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "x-api-key": "jhfgdsiughjkdfgh",
            },
            body: JSON.stringify({
              name: values.name,
              email: values.email,
              phone: values.phone,
              organization: values.organisation,
              subject: subjectText,
              message: values.message,
            }),
          });
        } catch (apiError) {
          console.error("CRM API Error:", apiError);
        }

        try {
          await emailjs.send(serviceId, templateId, templateParams, publicKey);
        } catch (emailJsError) {
          console.error("EmailJS Error, switching to fallback:", emailJsError);
          await sendContactEmailFallback({
            name: values.name,
            email: values.email,
            phone: values.phone,
            organisation: values.organisation || "Not provided",
            subject: subjectText,
            message: values.message,
          });
        }

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
