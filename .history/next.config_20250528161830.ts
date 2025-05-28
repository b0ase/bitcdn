import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: '/readme',
        destination: '/readme.html',
      },
    ]
  },
};

export default nextConfig;
