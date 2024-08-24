/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push(
      // Handle SVGs as React components
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack"],
      },
      // Handle SVGs as URLs (when imported with ?url)
      {
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
        type: "asset/resource",
      },
    );
    return config;
  },
};

export default nextConfig;
