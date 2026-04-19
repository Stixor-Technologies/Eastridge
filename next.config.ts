import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: "export",
  distDir: "dist",
  trailingSlash: true,
  basePath: "",
  images: {
    loader: "custom",
    imageSizes: [64, 128, 256, 384],
    deviceSizes: [640, 1080, 1920],
  },
  transpilePackages: ["next-image-export-optimizer"],
  env: {
    nextImageExportOptimizer_imageFolderPath: "public/images",
    nextImageExportOptimizer_exportFolderPath: "dist",
    nextImageExportOptimizer_quality: "75",
    nextImageExportOptimizer_storePicturesInWEBP: "true",
    nextImageExportOptimizer_generateAndUseBlurImages: "true",
    nextImageExportOptimizer_exportFolderName: "nextImageExportOptimizer",
  },
};

export default nextConfig;
