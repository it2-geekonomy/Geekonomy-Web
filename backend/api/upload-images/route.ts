import { NextResponse } from "next/server";
import {
  ListObjectsV2Command,
  PutObjectCommand,
} from "@aws-sdk/client-s3";
import { r2 } from "@/lib/r2";
import { v4 as uuid } from "uuid";
import { CDN_UPLOAD_FOLDERS, type CdnUploadFolder } from "@/lib/swagger";

const bucket = process.env.R2_BUCKET!;
const publicUrl = process.env.R2_PUBLIC_URL!;

function sanitizeFileName(name: string): string {
  return name.replace(/\s+/g, "-").replace(/[^a-zA-Z0-9._-]/g, "");
}

function isAllowedFolder(value: string): value is CdnUploadFolder {
  return (CDN_UPLOAD_FOLDERS as readonly string[]).includes(value);
}

/**
 * @swagger
 * /api/upload-images:
 *   post:
 *     summary: Upload single or multiple images
 */
export async function POST(req: Request) {
  const formData = await req.formData();
  const folderRaw = String(formData.get("folder") || "").trim();
  const files = formData.getAll("files") as File[];

  if (!files.length) {
    return NextResponse.json({ error: "No files uploaded" }, { status: 400 });
  }

  // Folder is optional — omit it to keep legacy root uploads working
  if (folderRaw && !isAllowedFolder(folderRaw)) {
    return NextResponse.json(
      {
        error: "Invalid folder",
        allowed: CDN_UPLOAD_FOLDERS,
      },
      { status: 400 }
    );
  }

  const uploaded = [];

  for (const file of files) {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Legacy path (no folder): same as before — root + uuid prefix
    // With landing-pages: separate CDN folder
    const key = folderRaw
      ? `${folderRaw}/${sanitizeFileName(file.name)}`
      : `${uuid()}-${file.name}`;

    await r2.send(
      new PutObjectCommand({
        Bucket: bucket,
        Key: key,
        Body: buffer,
        ContentType: file.type || "application/octet-stream",
      })
    );

    uploaded.push({
      ...(folderRaw ? { folder: folderRaw } : {}),
      name: key,
      url: `${publicUrl}/${key}`,
    });
  }

  return NextResponse.json({ uploaded });
}

/**
 * @swagger
 * /api/upload-images:
 *   get:
 *     summary: Get all uploaded images
 */
export async function GET(req: Request) {
  const folder = new URL(req.url).searchParams.get("folder")?.trim();

  // No filter → all files (existing 1k+ root uploads still listed)
  // With landing-pages → only that folder
  const prefix =
    folder && isAllowedFolder(folder) ? `${folder}/` : undefined;

  if (folder && !isAllowedFolder(folder)) {
    return NextResponse.json(
      {
        error: "Invalid folder",
        allowed: CDN_UPLOAD_FOLDERS,
      },
      { status: 400 }
    );
  }

  const data = await r2.send(
    new ListObjectsV2Command({
      Bucket: bucket,
      Prefix: prefix,
    })
  );

  const files =
    data.Contents?.map((file) => ({
      key: file.Key,
      url: `${publicUrl}/${file.Key}`,
    })) || [];

  return NextResponse.json(files);
}
