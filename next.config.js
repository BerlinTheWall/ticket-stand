/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  ...nextConfig, // Include the existing config options
  images: {
    domains: ["tmdb.org", "www.themoviedb.org", "image.tmdb.org"],
  },
};
