"use client";

import { useRef, useState } from "react";
import { CAREER_APPLICATION_POSITIONS } from "@/lib/careers/jobs";
import { validateCareerApplication } from "@/lib/careers/validateCareerApplication";
import type {
  CareerApplicationErrors,
  CareerApplicationValues,
} from "@/types/CareerApplicationTypes";

const initialValues: CareerApplicationValues = {
  firstName: "",
  lastName: "",
  email: "",
  linkedIn: "",
  phone: "",
  position: "",
  consent: false,
};

export function useCareerApplicationForm() {
  const [values, setValues] = useState<CareerApplicationValues>(initialValues);
  const [resume, setResume] = useState<File | null>(null);
  const [errors, setErrors] = useState<CareerApplicationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;

    setValues((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const setResumeFile = (file: File | null) => {
    setResume(file);
    if (errors.resume) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next.resume;
        return next;
      });
    }
  };

  const clearResume = () => {
    setResume(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateCareerApplication(values, resume);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const positionLabel =
        CAREER_APPLICATION_POSITIONS.find((p) => p.value === values.position)
          ?.label ?? values.position;

      const body = new FormData();
      body.append("firstName", values.firstName);
      body.append("lastName", values.lastName);
      body.append("email", values.email);
      body.append("linkedIn", values.linkedIn || "Not provided");
      body.append("phone", values.phone);
      body.append("position", positionLabel);
      if (resume) body.append("resume", resume);

      const response = await fetch("/api/send-career-application", {
        method: "POST",
        body,
      });

      if (!response.ok) {
        throw new Error("Failed to submit application");
      }

      setSubmitStatus("success");
      setValues(initialValues);
      setResume(null);
      if (fileInputRef.current) fileInputRef.current.value = "";

      setTimeout(() => setSubmitStatus("idle"), 6000);
    } catch {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 6000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    values,
    resume,
    errors,
    isSubmitting,
    submitStatus,
    fileInputRef,
    handleChange,
    setResumeFile,
    clearResume,
    handleSubmit,
  };
}
