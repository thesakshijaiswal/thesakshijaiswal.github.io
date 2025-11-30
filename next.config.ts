import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  ...(process.env.DEPLOY_TARGET === 'github' && {
    output: 'export',
  }),
};

export default nextConfig;
