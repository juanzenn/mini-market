/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["uploadthing.com"],
  },
};

module.exports = nextConfig;
