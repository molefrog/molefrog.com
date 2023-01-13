/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // disable Next Image Optimization API for remote images
    unoptimized: true,
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
