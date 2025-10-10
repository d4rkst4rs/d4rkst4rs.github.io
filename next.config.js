/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // 이 설정이 필수!
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // basePath와 assetPrefix는 제거 또는 빈 문자열
}

module.exports = nextConfig