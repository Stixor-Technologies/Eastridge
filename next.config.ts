import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/webp'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ycck088k4g8w44c0wc48ocos.91.99.180.200.sslip.io",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
