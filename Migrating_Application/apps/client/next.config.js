/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages : ["ui" , "store" , "db"]
}

module.exports = nextConfig
