import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['flowbite.s3.amazonaws.com','images.unsplash.com'],
  },
  reactStrictMode: true,
    eslint: {
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;
