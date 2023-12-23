/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  ...nextConfig, // Include the existing config options
  // images: {
  //   domains: ["image.tmdb.org", "www.themoviedb.org"], // Allow images from this domain
  // },
  images: {
    domains: ["tmdb.org", "www.themoviedb.org"],
  },
};
