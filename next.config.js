/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: process.env.BASE_URL_PATH,
  trailingSlash: true,
  images: {
    // 画像最適化：OFF（利用先を設定しないとVercel以外SSG不可）
    unoptimized: true,
  },
}

module.exports = nextConfig
