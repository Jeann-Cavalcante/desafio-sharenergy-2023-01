/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'https://http.cat',
        port: '',
        pathname: '/http.cat/**',
      },
    ],
  },
}

module.exports = nextConfig
