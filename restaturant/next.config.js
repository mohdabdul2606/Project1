/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizeCss: false,
  },
  turbopack: {
    // ensure the workspace root is the project -- optional if needed
    root: "./",
  },
};

module.exports = nextConfig;
