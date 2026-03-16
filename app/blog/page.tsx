import { Suspense } from "react";
import BlogsPageClient from "./BlogsPageClient";
import { Typography } from "@/components/ui/Typography";

function BlogsPageLoading() {
  return (
    <main className="bg-black min-h-screen py-[clamp(2.5rem,2.5rem+2vw,8rem)] flex items-center justify-center">
      <Typography as="p" variant="body-xl" className="text-white">
        Loading...
      </Typography>
    </main>
  );
}

export default function BlogsPage() {
  return (
    <Suspense fallback={<BlogsPageLoading />}>
      <BlogsPageClient />
    </Suspense>
  );
}
