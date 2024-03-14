/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'csimg.nyc3.cdn.digitaloceanspaces.com',
        port: ""
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: ""
      }
    ]

  },
};

export default nextConfig;