/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true  // ← 이 설정이 있어야 next/image 작동
  },
  basePath: '',
  assetPrefix: '',
}

module.exports = nextConfig