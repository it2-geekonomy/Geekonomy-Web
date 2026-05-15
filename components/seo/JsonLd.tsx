import type { ReactNode } from "react";

export function JsonLd({ data }: { data: object }): ReactNode {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
