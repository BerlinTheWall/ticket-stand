/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  runtimeCaching,
});

module.exports = withPWA({
  ...nextConfig, // Include the existing config options
  images: {
    domains: ["tmdb.org", "www.themoviedb.org", "image.tmdb.org"],
  },
});
