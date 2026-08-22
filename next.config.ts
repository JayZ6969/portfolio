import type { NextConfig } from "next";
import bundleAnalyzer from '@next/bundle-analyzer'

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
}

export default bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})(nextConfig);
