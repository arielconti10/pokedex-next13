/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com/**",
      },
    ]
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
