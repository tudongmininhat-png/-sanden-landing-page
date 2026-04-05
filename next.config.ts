import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tudongtumat.com',
      },
      {
        protocol: 'https',
        hostname: 'sandenintercool.net',
      },
    ],
  },
};

export default nextConfig;
