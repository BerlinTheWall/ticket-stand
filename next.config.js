/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

// module.exports = nextConfig;

module.exports = {
  ...nextConfig, // Include the existing config options
  images: {
    domains: ["image.tmdb.org", "www.themoviedb.org"], // Allow images from this domain
  },
  async headers() {
    return [
      {
        source: "/",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=9999999999, must-revalidate",
          },
        ],
      },
    ];
  },
};
