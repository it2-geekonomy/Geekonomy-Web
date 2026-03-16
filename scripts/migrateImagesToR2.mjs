import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import dotenv from "dotenv";

// Resolve project root (directory containing this scripts folder)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.join(__dirname, "..");
const PUBLIC_DIR = path.join(ROOT_DIR, "public");

// Load environment variables from .env at project root
dotenv.config({ path: path.join(ROOT_DIR, ".env") });

// R2 client (duplicate of lib/r2.ts, but in JS for Node)
const r2 = new S3Client({
  region: "auto",
  endpoint: process.env.R2_ENDPOINT,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY,
    secretAccessKey: process.env.R2_SECRET_KEY,
  },
});

const bucket = process.env.R2_BUCKET;
const publicUrl = process.env.R2_PUBLIC_URL;

const TARGET_DIRS = [
  path.join(PUBLIC_DIR, "blog image"),
  path.join(PUBLIC_DIR, "case-studies"),
];

async function walk(dir, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(full, acc);
    } else {
      if (/\.(png|jpe?g|webp|avif|gif|pdf)$/i.test(entry.name)) {
        const relFromPublic = path.relative(PUBLIC_DIR, full);
        const localPath = `/${relFromPublic.replace(/\\/g, "/")}`;
        acc.push(localPath);
      }
    }
  }
  return acc;
}

function toKey(localPath) {
  const withoutLeading = localPath.replace(/^\//, "");
  return withoutLeading.replace(/\s+/g, "-");
}

function guessContentType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  switch (ext) {
    case ".png":
      return "image/png";
    case ".jpg":
    case ".jpeg":
      return "image/jpeg";
    case ".webp":
      return "image/webp";
    case ".avif":
      return "image/avif";
    case ".gif":
      return "image/gif";
    case ".pdf":
      return "application/pdf";
    default:
      return "application/octet-stream";
  }
}

async function uploadFile(localPath) {
  const fileOnDisk = path.join(PUBLIC_DIR, localPath.replace(/^\//, ""));
  const buffer = fs.readFileSync(fileOnDisk);
  const key = toKey(localPath);

  await r2.send(
    new PutObjectCommand({
      Bucket: bucket,
      Key: key,
      Body: buffer,
      ContentType: guessContentType(fileOnDisk),
    }),
  );

  const url = `${publicUrl}/${key}`;
  return { localPath, key, url };
}

function findTsFiles() {
  const libBlogDataDir = path.join(ROOT_DIR, "lib", "blog", "data");
  const seoDir = path.join(ROOT_DIR, "lib", "blog");
  const files = [];

  function walkDir(d) {
    if (!fs.existsSync(d)) return;
    const entries = fs.readdirSync(d, { withFileTypes: true });
    for (const e of entries) {
      const full = path.join(d, e.name);
      if (e.isDirectory()) {
        walkDir(full);
      } else if (full.endsWith(".ts") || full.endsWith(".tsx")) {
        files.push(full);
      }
    }
  }

  walkDir(libBlogDataDir);
  walkDir(seoDir);
  return files;
}

function applyReplacements(mappings) {
  const tsFiles = findTsFiles();
  const sorted = [...mappings].sort(
    (a, b) => b.localPath.length - a.localPath.length,
  );

  for (const file of tsFiles) {
    let content = fs.readFileSync(file, "utf8");
    let changed = false;

    for (const m of sorted) {
      if (content.includes(m.localPath)) {
        content = content.split(m.localPath).join(m.url);
        changed = true;
      }
    }

    if (changed) {
      fs.writeFileSync(file, content, "utf8");
      console.log(`Updated ${path.relative(ROOT_DIR, file)}`);
    }
  }
}

async function main() {
  if (!bucket || !publicUrl) {
    console.error("R2_BUCKET and R2_PUBLIC_URL must be set in the environment.");
    process.exit(1);
  }

  const allLocalPaths = [];
  for (const dir of TARGET_DIRS) {
    const localPaths = await walk(dir, []);
    allLocalPaths.push(...localPaths);
  }

  if (!allLocalPaths.length) {
    console.log(
      "No matching assets found under public/blog image or public/case-studies.",
    );
    return;
  }

  console.log(`Uploading ${allLocalPaths.length} assets to R2...`);

  const mappings = [];
  for (const localPath of allLocalPaths) {
    const m = await uploadFile(localPath);
    mappings.push(m);
    console.log(`${localPath} -> ${m.url}`);
  }

  applyReplacements(mappings);

  const outPath = path.join(
    ROOT_DIR,
    "scripts",
    "migrateImagesToR2.mapping.json",
  );
  fs.writeFileSync(outPath, JSON.stringify(mappings, null, 2), "utf8");
  console.log(`Wrote mapping file to ${outPath}`);
}

// Run if called directly
main().catch((err) => {
  console.error(err);
  process.exit(1);
});

