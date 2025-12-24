import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: process.env.BASE_URL!,
      },
    ],
  },
};

export default nextConfig;
