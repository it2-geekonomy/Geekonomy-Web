// types/ContactTypes.ts

export type ContactSubject =
  | "general"
  | "branding"
  | "digi360"
  | "codecraft";

export interface ContactFormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  organisation: string;
  subject: ContactSubject[];
  message: string;
}
