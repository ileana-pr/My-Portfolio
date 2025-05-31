import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === 'true';
const repoName = 'My-Portfolio';

const nextConfig: NextConfig = {
  // only use static export for github pages
  ...(isGithubPages && { output: 'export' }),
  
  // disable image optimization for static export
  images: {
    unoptimized: isGithubPages,
  },
  
  // set base path and asset prefix for github pages only
  ...(isGithubPages && {
    basePath: `/${repoName}`,
    assetPrefix: `/${repoName}/`,
    trailingSlash: true,
  }),
};

export default nextConfig;
