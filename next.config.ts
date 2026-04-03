import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  // Indexed / bookmarked typo URLs — keep 308s so equity consolidates on the real slug.
  async redirects() {
    return [
      {
        source: "/blog/seo-for-plumbers-proven-techniques-to-rank-on-google",
        destination: "/blog/seo-for-plumbers-proven-techniques-to-rank",
        permanent: true,
      },
      {
        source: "/blog/why-responsive-web-design-is-essential",
        destination: "/blog/what-makes-a-good-business-website-in-the-uk",
        permanent: true,
      },
    ];
  },
  images: {
    unoptimized: true,
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
