/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["www.google.com", "webimages.mongodb.com", "res.cloudinary.com"],
  },
  swcMinify: true,
  eslint: {
    dirs: ["pages", "src", "__tests__", "cypress"],
  },
  webpack: (config) => {
    config.snapshot = {
      ...(config.snapshot ?? {}),
      // Add all node_modules but @next module to managedPaths
      // Allows for hot refresh of changes to @next module
      managedPaths: [/^(.+?[\\/]node_modules[\\/])(?!@next)/],
    };
    return config;
  },
};

if (process.env.ANALYZE === "true") {
  const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: true,
  });
  config = withBundleAnalyzer(config);
}

module.exports = nextConfig;
