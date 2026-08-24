/** Optional CDN folders for Swagger upload. Empty/omit = legacy root upload. */
export const CDN_UPLOAD_FOLDERS = ["landing-pages"] as const;

export type CdnUploadFolder = (typeof CDN_UPLOAD_FOLDERS)[number];

export function getSwaggerSpec() {
  return {
    openapi: "3.0.0",
    info: {
      title: "Blog Image API",
      version: "1.0.0",
    },
    paths: {
      "/api/upload-images": {
        post: {
          summary: "Upload single or multiple images",
          description:
            "Leave folder empty to upload as before (root). Select landing-pages to store files in the separate CDN folder.",
          requestBody: {
            required: true,
            content: {
              "multipart/form-data": {
                schema: {
                  type: "object",
                  required: ["files"],
                  properties: {
                    folder: {
                      type: "string",
                      description:
                        "Optional CDN folder. Use landing-pages for landing page assets. Leave unset for normal uploads.",
                      enum: [...CDN_UPLOAD_FOLDERS],
                    },
                    files: {
                      type: "array",
                      description:
                        "Upload in bulk: click 'Add string item' to add one box per image, choose one file for each box. All files are sent in a single request.",
                      items: { type: "string", format: "binary" },
                    },
                  },
                },
              },
            },
          },
          responses: {
            "200": { description: "Images uploaded" },
          },
        },
        get: {
          summary: "Get all uploaded images",
          description:
            "Without folder: lists everything (including existing root uploads). With folder=landing-pages: filters that folder only.",
          parameters: [
            {
              name: "folder",
              in: "query",
              required: false,
              schema: {
                type: "string",
                enum: [...CDN_UPLOAD_FOLDERS],
              },
              description: "Optional filter, e.g. landing-pages",
            },
          ],
          responses: {
            "200": { description: "List of images" },
          },
        },
      },
    },
  };
}
