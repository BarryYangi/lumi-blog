import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: "/Users/barry/Documents/Project/i/lumi-blog",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
