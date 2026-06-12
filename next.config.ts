import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/booking",
        destination: "/book",
        permanent: true
      },
      {
        source: "/about-us",
        destination: "/about",
        permanent: true
      },
      {
        source: "/2025/01/22/hello-world",
        destination: "/",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
