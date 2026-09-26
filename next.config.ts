import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: process.env.NODE_ENV === "production" ? "/My-worklife" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/My-worklife/" : "",
};

export default nextConfig;
