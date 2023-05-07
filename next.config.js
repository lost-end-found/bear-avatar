/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "replicate.delivery",
      },
      {
        protocol: "https",
        hostname: "imgur.com",
      },
    ],
  },
  redirects: async () => [
    {
      source: '/:path*',
      has: [{ type: 'host', value: 'www.aivatar.studio' }],
      destination: 'https://aivatar.studio/:path*',
      permanent: true
    }
  ]
};

module.exports = nextConfig;
