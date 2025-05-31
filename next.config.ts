import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === 'true';
const repoName = 'My-Portfolio';

const nextConfig: NextConfig = {
  // Enable static export for GitHub Pages
  output: 'export',
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  
  // Set base path and asset prefix for GitHub Pages
  basePath: isGithubPages ? `/${repoName}` : '',
  assetPrefix: isGithubPages ? `/${repoName}/` : '',
  
  // Ensure trailing slashes for GitHub Pages
  trailingSlash: true,
  
  // Disable server-side features for static export
  experimental: {
    // Remove any experimental features that require server
  },
};

export default nextConfig;
