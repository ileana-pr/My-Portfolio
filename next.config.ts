import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for GitHub Pages
  output: 'export',
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  
  // Set base path for GitHub Pages (will be overridden by environment variable)
  basePath: process.env.NODE_ENV === 'production' && process.env.GITHUB_PAGES ? '/portfolio' : '',
  
  // Ensure trailing slashes for GitHub Pages
  trailingSlash: true,
  
  // Disable server-side features for static export
  experimental: {
    // Remove any experimental features that require server
  },
};

export default nextConfig;
