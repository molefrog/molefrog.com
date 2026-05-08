const createMDX = require("@next/mdx");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  pageExtensions: ["ts", "tsx", "js", "jsx", "mdx"],
  images: {
    // disable Next Image Optimization API for remote images
    unoptimized: true,
  },
  reactStrictMode: true,
  webpack: (config) => {
    // load static asset urls using Asset Modules
    // https://webpack.js.org/guides/asset-modules/
    config.module.rules.unshift({
      test: /\.(mp4|webm|mp3|mov)$/,
      type: "asset/resource",
      generator: {
        filename: "static/[hash][ext][query]",
      },
    });

    return config;
  },
  experimental: {
    urlImports: ["https://ficus.io", "https://classic.ficus.io"],
  },
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

module.exports = withMDX(nextConfig);
