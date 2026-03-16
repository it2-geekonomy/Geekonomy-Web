import { Typography } from "@/components/ui/Typography";

export function FooterBottom() {
  return (
    <div className="px-4 sm:px-6 lg:px-10 py-2">
      <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-3">
        <a
          href="//www.dmca.com/Protection/Status.aspx?ID=eea71184-71ee-4c73-a959-5852051246f6"
          title="DMCA.com Protection Status"
          className="dmca-badge inline-block mb-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://images.dmca.com/Badges/dmca_protected_sml_120n.png?ID=eea71184-71ee-4c73-a959-5852051246f6"
            alt="DMCA.com Protection Status"
            className="h-auto"
          />
        </a>

        <Typography
          as="p"
          variant="body-sm"
          className="text-gray-300 text-center sm:text-right mb-2"
        >
          © {new Date().getFullYear()} Geekonomy. All rights reserved
        </Typography>
      </div>
    </div>
  );
}
