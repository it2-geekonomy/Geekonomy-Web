// lib/Contact.ts

import { ContactFormValues } from "@/types/ContactTypes";

export const validateContactForm = (values: ContactFormValues) => {
  const errors: Partial<Record<keyof ContactFormValues, string>> = {};

  if (!values.firstName.trim()) errors.firstName = "First name is required";
  if (!values.lastName.trim()) errors.lastName = "Last name is required";
  if (!values.email.includes("@")) errors.email = "Invalid email";
  if (!values.phone.trim()) errors.phone = "Contact number is required";
  if (!values.subject.length) errors.subject = "Select at least one subject";
  if (!values.message.trim()) errors.message = "Message is required";

  return errors;
};
