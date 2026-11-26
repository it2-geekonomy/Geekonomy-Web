import type { BlogDates } from "../types";
import { Typography } from "@/components/ui/Typography";

export function BlogBylineDates({ published, updated }: BlogDates) {
  return (
    <>
      {updated ? (
        <Typography
          as="p"
          variant="body-sm"
          className="pt-1 text-white"
        >
          Updated On : <time dateTime={updated.iso}>{updated.label}</time>
        </Typography>
      ) : published ? (
        <Typography
          as="p"
          variant="body-sm"
          className="pt-1  text-white "
        >
          Published On : <time dateTime={published.iso}>{published.label}</time>
        </Typography>
      ) : null}
    </>
  );
}
