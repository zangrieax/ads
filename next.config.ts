const isProd = process.env.NODE_ENV === 'production';

const assetPrefix = process.env.NEXT_PUBLIC_ASSET_PREFIX ?? ''

module.exports = {
  output: 'export',
  distDir: isProd ? 'docs' : 'out',
  basePath: isProd ? assetPrefix : '',
  assetPrefix: isProd ? assetPrefix : '',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['fonts.googleapis.com', 'fonts.gstatic.com'],
  },
}
