import { NextResponse } from "next/server"
import { PutObjectCommand, ListObjectsV2Command } from "@aws-sdk/client-s3"
import { r2 } from "@/lib/r2"
import { v4 as uuid } from "uuid"

const bucket = process.env.R2_BUCKET!
const publicUrl = process.env.R2_PUBLIC_URL!

/**
 * @swagger
 * /api/upload-images:
 *   post:
 *     summary: Upload single or multiple images
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               files:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: binary
 *     responses:
 *       200:
 *         description: Images uploaded
 */
export async function POST(req: Request) {
  const formData = await req.formData()

  const files = formData.getAll("files") as File[]

  if (!files.length) {
    return NextResponse.json({ error: "No files uploaded" }, { status: 400 })
  }

  const uploaded = []

  for (const file of files) {
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    const fileName = `${uuid()}-${file.name}`

    await r2.send(
      new PutObjectCommand({
        Bucket: bucket,
        Key: fileName,
        Body: buffer,
        ContentType: file.type,
      })
    )

    uploaded.push({
      name: fileName,
      url: `${publicUrl}/${fileName}`,
    })
  }

  return NextResponse.json({ uploaded })
}

/**
 * @swagger
 * /api/upload-images:
 *   get:
 *     summary: Get all uploaded images
 *     responses:
 *       200:
 *         description: List images
 */
export async function GET() {
  const data = await r2.send(
    new ListObjectsV2Command({
      Bucket: bucket,
    })
  )

  const files =
    data.Contents?.map((file) => ({
      key: file.Key,
      url: `${publicUrl}/${file.Key}`,
    })) || []

  return NextResponse.json(files)
}