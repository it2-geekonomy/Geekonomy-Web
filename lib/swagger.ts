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
          requestBody: {
            required: true,
            content: {
              "multipart/form-data": {
                schema: {
                  type: "object",
                  properties: {
                    files: {
                      type: "array",
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
          responses: {
            "200": { description: "List of images" },
          },
        },
      },
    },
  }
}
