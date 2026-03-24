import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-67a4c50822e240c78b2f040321a1da26.r2.dev",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
