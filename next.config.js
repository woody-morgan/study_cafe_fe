/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = withBundleAnalyzer({
  env: {
    BASE_URL: process.env.BASE_URL,
    API_BASE_URL: process.env.API_BASE_URL,
    GOOGLE_MAP_KEY: process.env.GOOGLE_MAP_KEY,
    APP_TITLE: process.env.APP_TITLE,
  },
  compress: true,
  sassOptions: {
    includePaths: [path.join(__dirname, './src/styles')],
  },
  images: {
    domains: ['images.unsplash.com', 'study-cafe-bucket.s3.ap-northeast-2.amazonaws.com'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  webpack(config) {
    const prod = process.env.NODE_ENV === 'production';
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    const plugins = [...config.plugins];
    if (prod) {
      plugins.push(new CompressionPlugin());
    }
    return {
      ...config,
      mode: prod ? 'production' : 'development',
      plugins: plugins,
    };
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
});
