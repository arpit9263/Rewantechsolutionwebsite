/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Compress output
  compress: true,
  // Power by header removal for security
  poweredByHeader: false,
};

export default nextConfig;
