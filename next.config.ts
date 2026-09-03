import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable gzip compression for faster transfer
  compress: true,

  images: {
    // Prioritize modern formats: AVIF (smallest) > WebP > original
    formats: ['image/avif', 'image/webp'],
    // Cache optimized images for 60 days
    minimumCacheTTL: 5184000,
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '5000',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '5000',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**',
      }
    ],
  },

  // Reduce unused JS in production
  experimental: {
    optimizePackageImports: ['react-icons'],
  },
};

export default nextConfig;
