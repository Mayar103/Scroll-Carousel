/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["gsap"],
  webpack: (config) => {
    config.resolve.extensionAlias = {
      ".js": [".js", ".jsx"],
    };
    return config;
  },
};

export default nextConfig;
