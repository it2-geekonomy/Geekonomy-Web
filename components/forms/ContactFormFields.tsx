import { CONTACT_SUBJECTS } from "@/lib/constants";
import { ContactFormValues } from "@/types/ContactTypes";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/ui/Typography";

interface ContactFormFieldsProps {
  values: ContactFormValues;
  errors: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  toggleSubject: (id: string) => void;
}

export function ContactFormFields({
  values,
  errors,
  handleChange,
  toggleSubject,
}: ContactFormFieldsProps) {
  return (
    <div className="space-y-6 lg:space-y-16 relative text-left pl-0 lg:pl-14 min-w-0">
      <div className="hidden lg:block absolute left-0 top-0 h-full w-px bg-white/50" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-22">
        {["firstName", "lastName"].map((field) => (
          <div key={field}>
            <Typography as="label" variant="base" className="text-white block mb-2">
              {field === "firstName" ? "First Name" : "Last Name"}
            </Typography>
            <input
              name={field}
              value={values[field as keyof ContactFormValues] as string}
              onChange={handleChange}
              className="w-full box-border bg-transparent border-b border-white/60 focus:border-[#A0A0A0] outline-none py-1 lg:py-6 pr-1 text-white"
            />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-22">
        {["email", "phone"].map((field) => (
          <div key={field}>
            <Typography as="label" variant="base" className="text-white block mb-2">
              {field === "email" ? "Email" : "Contact Number"}
            </Typography>
            <input
              name={field}
              value={values[field as keyof ContactFormValues] as string}
              onChange={handleChange}
              className="w-full box-border bg-transparent border-b border-white/60 focus:border-[#A0A0A0] outline-none py-1 lg:py-6 pr-1 text-white"
            />
          </div>
        ))}
      </div>

      <div>
        <Typography as="p" variant="base" className="text-white mb-8">
          Select Subject?
        </Typography>
        <div className="grid grid-cols-1 gap-y-10 gap-x-12 sm:grid-cols-2">
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

      <div>
        <Typography as="label" variant="base" className="text-white block mb-1 lg:mb-2">
          Organisation
        </Typography>
        <input
          name="organisation"
          value={values.organisation}
          onChange={handleChange}
          className="w-full box-border bg-transparent border-b border-white/60 focus:border-[#A0A0A0] outline-none py-1 lg:py-6 pr-1 text-white"
        />
      </div>

      <div>
        <Typography as="label" variant="base" className="text-white block mb-1 lg:mb-2">
          Message
        </Typography>
        <textarea
          name="message"
          value={values.message}
          rows={1}
          onChange={handleChange}
          className="w-full box-border bg-transparent border-b border-white/60 focus:border-[#A0A0A0] outline-none py-1 lg:py-6 pr-1 text-white resize-none"
        />
      </div>
    </div>
  );
}
