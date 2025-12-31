import type { NextConfig } from "next";

const imageHost = process.env.NEXT_PUBLIC_IMAGE_HOST || "";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp"],
    remotePatterns: imageHost
      ? [
          {
            protocol: "http",
            hostname: imageHost,
            port: "1337",
            pathname: "/**",
          },
        ]
      : [],
  },
};

export default nextConfig;
