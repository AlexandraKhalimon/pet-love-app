import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.nytimes.com" },
      { protocol: "https", hostname: "media4.giphy.com" },
    ],
  },
  reactCompiler: true,
};

export default nextConfig;
