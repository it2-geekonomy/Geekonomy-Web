import { Suspense } from "react";
import BlogsPageClient from "./BlogsPageClient";
import BlogsPageLoading from "./BlogsPageLoading";

export default function BlogsPage() {
  return (
    <Suspense fallback={<BlogsPageLoading />}>
      <BlogsPageClient />
    </Suspense>
  );
} 
