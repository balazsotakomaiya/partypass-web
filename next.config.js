/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/checkout",
        destination: "/checkout/plan",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
