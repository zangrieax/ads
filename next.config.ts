import type { NextConfig } from "next"

const nextConfig = (phase: string): NextConfig => {
  return {
    images: {
      unoptimized: true,
      domains: ['fonts.googleapis.com', 'fonts.gstatic.com'],
    },
  };
};

export default nextConfig
