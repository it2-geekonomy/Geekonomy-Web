"use client"

import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"

type ApiDocsProps = {
  /** OpenAPI spec passed from server so no /api/swagger route is needed */
  spec?: object
}

const emptySpec = { openapi: "3.0.0", info: { title: "API", version: "1.0.0" }, paths: {} }

export default function ApiDocs({ spec }: ApiDocsProps) {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <SwaggerUI spec={spec ?? emptySpec} />
    </div>
  )
}
