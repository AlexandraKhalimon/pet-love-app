import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.nytimes.com" },
      { protocol: "https", hostname: "media4.giphy.com" },
      { protocol: "https", hostname: "ftp.goit.study" },
      { protocol: "https", hostname: "test.png" },
      { protocol: "https", hostname: "test2.webp" },
      { protocol: "https", hostname: "test.webp" },
    ],
  },
  reactCompiler: true,
};

export default nextConfig;
