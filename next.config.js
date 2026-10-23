/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    agentUpgrade: "latest",
  },
  images: {
    domains: ["i.imgur.com"],
  },
};

module.exports = nextConfig;
