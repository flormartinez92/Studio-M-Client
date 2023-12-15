/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["www.google.com", "webimages.mongodb.com", "res.cloudinary.com"],
  },
};

module.exports = nextConfig;
