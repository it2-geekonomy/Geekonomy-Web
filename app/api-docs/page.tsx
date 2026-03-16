import { getSwaggerSpec } from "@/lib/swagger"
import ApiDocs from "@/backend/api-docs/page"

export default function ApiDocsPage() {
  return <ApiDocs spec={getSwaggerSpec()} />
}
