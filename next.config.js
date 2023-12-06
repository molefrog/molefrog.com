/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    // disable Next Image Optimization API for remote images
    unoptimized: true,
  },
  reactStrictMode: true,
  experimental: {
    urlImports: ["https://fast-fit-fun.vercel.app/"],
  },
  webpack: (config) => {
    // load static asset urls using Asset Modules
    // https://webpack.js.org/guides/asset-modules/
    config.module.rules.unshift({
      test: /\.(mp4|webm)$/,
      type: "asset/resource",
      generator: {
        filename: "static/[hash][ext][query]",
      },
    });

    return config;
  },
};

module.exports = nextConfig;
