/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d8bqz0vtilftd.cloudfront.net",
        port: "",
        pathname: "/rivonia-hair-salon-nails/**",
      },
    ],
  },
}

module.exports = nextConfig
