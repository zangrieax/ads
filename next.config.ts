import type { NextConfig } from "next"

const nextConfig = (phase: string): NextConfig => {
  return {
    images: {
      unoptimized: true,
    },
  };
};

export default nextConfig
