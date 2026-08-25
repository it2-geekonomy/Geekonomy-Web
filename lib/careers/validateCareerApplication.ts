import type {
  CareerApplicationErrors,
  CareerApplicationValues,
} from "@/types/CareerApplicationTypes";

const ACCEPTED_RESUME_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

const MAX_RESUME_BYTES = 5 * 1024 * 1024;

export function validateCareerApplication(
  values: CareerApplicationValues,
  resume: File | null
): CareerApplicationErrors {
  const errors: CareerApplicationErrors = {};

  if (!values.firstName.trim()) errors.firstName = "First name is required";
  if (!values.lastName.trim()) errors.lastName = "Last name is required";
  if (!values.email.trim() || !values.email.includes("@")) {
    errors.email = "Valid email is required";
  }
  if (!values.phone.trim()) errors.phone = "Phone number is required";
  if (!values.position) errors.position = "Please select a role";

  if (!resume) {
    errors.resume = "Resume is required";
  } else if (!ACCEPTED_RESUME_TYPES.includes(resume.type)) {
    errors.resume = "Upload PDF, DOC, or DOCX only";
  } else if (resume.size > MAX_RESUME_BYTES) {
    errors.resume = "File must be 5MB or smaller";
  }

  if (!values.consent) {
    errors.consent = "You must agree before submitting";
  }

  return errors;
}

export { ACCEPTED_RESUME_TYPES, MAX_RESUME_BYTES };
