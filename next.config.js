/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports = {
  async rewrites() {
    return [
      {
        source: '/admin/:path*',
        destination: '/api/:path*',
      },
    ]
  },
}
module.exports = {
  env: {
    IMPRESILK_TOKEN: process.env.IMPRESILK_TOKEN,
  },
};