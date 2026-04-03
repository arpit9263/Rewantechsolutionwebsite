/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },

  // 🔥 ADD THIS
  trailingSlash: true,
};

export default nextConfig;