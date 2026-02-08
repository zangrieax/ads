import type { NextConfig } from "next"

const nextConfig = (phase: string): NextConfig => {
  const isProd = process.env.NODE_ENV === 'production';
  const assetPrefix = process.env.NEXT_PUBLIC_ASSET_PREFIX ?? ''
  return {
    output: 'export',
    distDir: isProd ? 'docs' : 'out',
    basePath: isProd ? assetPrefix : '',
    assetPrefix: isProd ? assetPrefix : '',
    trailingSlash: true,
    images: {
      unoptimized: true,
    },
  };
};

export default nextConfig
