const maplibreVersion = require("maplibre-gl/package.json").version;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
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

    // Self-host the MapLibre GL web worker (see components/ui/map.tsx). `?url`
    // imports are copied as-is; a version-scoped folder keeps the worker next
    // to the shared chunk it imports and gives every upgrade a fresh URL.
    config.module.rules.unshift({
      test: /maplibre-gl-(worker|shared)\.mjs$/,
      resourceQuery: /url/,
      type: "asset/resource",
      sideEffects: true,
      generator: {
        filename: `static/maplibre-gl@${maplibreVersion}/[name][ext]`,
      },
    });

    return config;
  },
  experimental: {
    urlImports: ["https://ficus.io", "https://classic.ficus.io"],
  },
};

module.exports = nextConfig;
