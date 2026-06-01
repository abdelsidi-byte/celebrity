import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
      },
      {
        protocol: "https",
        hostname: "assets.vogue.com",
      },
      {
        protocol: "https",
        hostname: "pagesix.com",
      },
      {
        protocol: "https",
        hostname: "people.com",
      },
      {
        protocol: "https",
        hostname: "minimax-algeng-chat-tts-us.oss-us-east-1.aliyuncs.com",
      },
    ],
  },
};

export default nextConfig;
