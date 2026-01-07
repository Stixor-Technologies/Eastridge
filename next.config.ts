import type { NextConfig } from "next";

const imageHost = process.env.IMAGE_HOST;

const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp"],
    remotePatterns: imageHost
      ? [
          {
            protocol: "https",
            hostname: imageHost,
            pathname: "/**",
          },
        ]
      : [],
  },
};

export default nextConfig;
