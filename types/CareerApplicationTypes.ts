export interface CareerApplicationValues {
  firstName: string;
  lastName: string;
  email: string;
  linkedIn: string;
  phone: string;
  position: string;
  consent: boolean;
}

export type CareerApplicationErrors = Partial<
  Record<keyof CareerApplicationValues | "resume", string>
>;
