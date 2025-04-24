import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // remotePatterns: [
    //   {
    //     hostname = "a0.muscache.com",
    //     protocol = "https",
    //     port = "",
    //   },
    // ],
    domains: ["a0.muscache.com", "lh3.googleusercontent.com"],
  },
};

export default nextConfig;
    