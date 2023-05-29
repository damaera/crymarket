const rewrites = () => {
  return [
    {
      source: "/pintuApi/:slug*",
      destination: "https://api.pintu.co.id/:slug*",
    },
  ];
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites,
};

module.exports = nextConfig;
