import fs from "fs";
import path from "path";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { r2 } from "../lib/r2";

const bucket = process.env.R2_BUCKET!;
const publicUrl = process.env.R2_PUBLIC_URL!;

// Directories whose contents we want to migrate
const ROOT_DIR = process.cwd();
const PUBLIC_DIR = path.join(ROOT_DIR, "public");
const TARGET_DIRS = [
  path.join(PUBLIC_DIR, "blog image"),
  path.join(PUBLIC_DIR, "case-studies"),
];

type Mapping = {
  localPath: string; // e.g. /blog image/UXUI Design UK/UXUI Design UK image2.webp
  key: string;       // key in R2 bucket
  url: string;       // public URL
};

async function walk(dir: string, baseForLocalPath: string, acc: string[] = []): Promise<string[]> {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(full, baseForLocalPath, acc);
    } else {
      // Only handle obvious binary assets
      if (/\.(png|jpe?g|webp|avif|gif|pdf)$/i.test(entry.name)) {
        const relFromPublic = path.relative(PUBLIC_DIR, full);
        const localPath = `/${relFromPublic.replace(/\\/g, "/")}`;
        acc.push(localPath);
      }
    }
  }
  return acc;
}

function toKey(localPath: string): string {
  // Strip leading slash, keep folder structure, but normalize spaces to dashes for cleaner keys
  const withoutLeading = localPath.replace(/^\//, "");
  return withoutLeading.replace(/\s+/g, "-");
}

async function uploadFile(localPath: string): Promise<Mapping> {
  const fileOnDisk = path.join(PUBLIC_DIR, localPath.replace(/^\/public\//, "").replace(/^\//, ""));
  const buffer = fs.readFileSync(fileOnDisk);

  const key = toKey(localPath.replace(/^\/public\//, ""));

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

function guessContentType(filePath: string): string {
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

function findTsFiles(): string[] {
  const libBlogDataDir = path.join(ROOT_DIR, "lib", "blog", "data");
  const seoDir = path.join(ROOT_DIR, "lib", "blog");
  const files: string[] = [];

  function walkDir(d: string) {
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

function applyReplacements(mappings: Mapping[]) {
  const tsFiles = findTsFiles();
  const sorted = [...mappings].sort((a, b) => b.localPath.length - a.localPath.length);

  for (const file of tsFiles) {
    let content = fs.readFileSync(file, "utf8");
    let changed = false;

    for (const m of sorted) {
      // Replace both /blog image/... and https://.../blog image/... variants
      if (content.includes(m.localPath)) {
        content = content.split(m.localPath).join(m.url);
        changed = true;
      }
    }

    if (changed) {
      fs.writeFileSync(file, content, "utf8");
      // eslint-disable-next-line no-console
      console.log(`Updated ${path.relative(ROOT_DIR, file)}`);
    }
  }
}

async function main() {
  if (!bucket || !publicUrl) {
    // eslint-disable-next-line no-console
    console.error("R2_BUCKET and R2_PUBLIC_URL must be set in the environment.");
    process.exit(1);
  }

  const allLocalPaths: string[] = [];
  for (const dir of TARGET_DIRS) {
    if (!fs.existsSync(dir)) continue;
    const relBase = path.relative(PUBLIC_DIR, dir).replace(/\\/g, "/");
    const localPaths = await walk(dir, relBase);
    allLocalPaths.push(...localPaths);
  }

  if (!allLocalPaths.length) {
    // eslint-disable-next-line no-console
    console.log("No matching assets found under public/blog image or public/case-studies.");
    return;
  }

  // eslint-disable-next-line no-console
  console.log(`Uploading ${allLocalPaths.length} assets to R2...`);

  const mappings: Mapping[] = [];
  for (const localPath of allLocalPaths) {
    const m = await uploadFile(localPath);
    mappings.push(m);
    // eslint-disable-next-line no-console
    console.log(`${localPath} -> ${m.url}`);
  }

  // Replace occurrences in TS files
  applyReplacements(mappings);

  // Also write a JSON mapping for reference
  const outPath = path.join(ROOT_DIR, "scripts", "migrateImagesToR2.mapping.json");
  fs.writeFileSync(outPath, JSON.stringify(mappings, null, 2), "utf8");
  // eslint-disable-next-line no-console
  console.log(`Wrote mapping file to ${outPath}`);
}

// eslint-disable-next-line no-console
main().catch((err) => {
  console.error(err);
  process.exit(1);
});

