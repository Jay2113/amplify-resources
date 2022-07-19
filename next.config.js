/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/stores/jewels'
      }
    ]
  }
}

module.exports = nextConfig
