/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: process.env.GITHUB_ACTIONS ? "/testnext" : "",
  trailingSlash: true,
  images: {
    // 画像最適化：OFF（利用先を設定しないとVercel以外SSG不可）
    unoptimized: true,
  },
}

module.exports = nextConfig
