import { NextResponse } from "next/server"
import { getSwaggerSpec } from "@/lib/swagger"

export async function GET() {
  try {
    const spec = getSwaggerSpec()
    return NextResponse.json(spec, {
      headers: { "Cache-Control": "no-store" },
    })
  } catch (e) {
    return NextResponse.json(
      { openapi: "3.0.0", info: { title: "Blog Image API", version: "1.0.0" }, paths: {} },
      { status: 200 }
    )
  }
}
