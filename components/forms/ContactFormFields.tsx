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
    <div className="space-y-6 relative text-left pl-0 lg:pl-5 xl:pl-14 min-w-0">
      <div className="hidden lg:block absolute left-0 top-0 h-full w-px bg-white/50" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20">
        <div>
          <Typography as="label" variant="base" className="text-white block mb-2">
            Name
          </Typography>
          <input
            name="name"
            value={values.name}
            onChange={handleChange}
            className="w-full box-border bg-transparent border-b border-white/60 focus:border-[#6FAF4E] outline-none py-1 lg:py-1 pr-1 text-white"
          />
        </div>
        <div>
          <Typography as="label" variant="base" className="text-white block mb-2">
            Organization
          </Typography>
          <input
            name="organisation"
            value={values.organisation}
            onChange={handleChange}
            className="w-full box-border bg-transparent border-b border-white/60 focus:border-[#6FAF4E] outline-none py-1 lg:py-1 pr-1 text-white"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-22">
        <div>
          <Typography as="label" variant="base" className="text-white block mb-2">
            Email
          </Typography>
          <input
            name="email"
            value={values.email}
            onChange={handleChange}
            className="w-full box-border bg-transparent border-b border-white/60 focus:border-[#6FAF4E] outline-none py-1 lg:py-1 pr-1 text-white"
          />
        </div>
        <div>
          <Typography as="label" variant="base" className="text-white block mb-2">
            Contact Number
          </Typography>
          <input
            name="phone"
            value={values.phone}
            onChange={handleChange}
            className="w-full box-border bg-transparent border-b border-white/60 focus:border-[#6FAF4E] outline-none py-1 lg:py-1 pr-1 text-white"
          />
        </div>
      </div>

      <div>
        <Typography as="p" variant="base" className="text-[#69AE44] py-6">
          How can we be your Growth Partners
        </Typography>
        <div className="grid grid-cols-1 gap-y-8 gap-x-12 sm:grid-cols-2">
          {CONTACT_SUBJECTS.map((item) => (
            <label key={item.id} className="flex items-center gap-5 text-white">
              <input
                type="checkbox"
                className="hidden"
                checked={values.subject.includes(item.id as any)}
                onChange={() => toggleSubject(item.id)}
              />
              <span
                className={cn(
                  "w-5 h-5 border-2 border-[#69AE44] flex items-center justify-center transition bg-black",
                  values.subject.includes(item.id as any) && "bg-black"
                )}
              >
                {values.subject.includes(item.id as any) && (
                  <span className="text-[#69AE44] text-[14px] leading-none font-bold">✓</span>
                )}
              </span>
              <div className="flex flex-col leading-tight">
                <Typography as="span" variant="base" className="text-white">
                  {item.title}
                </Typography>

                {item.sub && (
                  <span className="text-white text-lg lg:text-[14px] xl:text-lg">
                    ({item.sub})
                  </span>
                )}

              </div>

            </label>
          ))}
        </div>
      </div>


     <div>
  <Typography
    as="label"
    variant="base"
    className="text-white block mb-1 lg:mb-2"
  >
    Message
  </Typography>

 <textarea
  name="message"
  value={values.message}
  rows={4}
  onChange={(e) => {
    handleChange(e);
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
  }}
  maxLength={500}
  className="w-full box-border bg-transparent border border-white/60 focus:border-[#6FAF4E] rounded-md px-3 py-2 text-white outline-none resize-none overflow-hidden transition-colors duration-200"
/>
</div>
    </div>
  );
}