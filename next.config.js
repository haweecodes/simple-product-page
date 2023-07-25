/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/product/tables',
        permanent: true,
      },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'secundo-pms-prod-bucket.s3.eu-west-1.amazonaws.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'eco-prod-bucket.s3.eu-west-1.amazonaws.com',
        port: '',
        pathname: '**',
      },
    ],
  },
}

module.exports = nextConfig
