/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  images: {
    domains: ['localhost'],
  },
  async rewrites() {
    return [
      {
        source: '/api/prometheus/:path*',
        destination: 'http://localhost:9090/api/v1/:path*',
      },
      {
        source: '/api/loki/:path*',
        destination: 'http://localhost:3100/loki/api/v1/:path*',
      },
      {
        source: '/api/alertmanager/:path*',
        destination: 'http://localhost:9093/api/v2/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
