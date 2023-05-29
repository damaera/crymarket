const rewrites = () => {
  return [
    {
      source: "/pintuApi/:slug*",
      destination: "https://api.pintu.co.id/:slug*",
    },
    {
      source: "/pintuAssets/:slug*",
      destination:
        "https://s3-ap-southeast-1.amazonaws.com/static.pintu.co.id/assets/:slug*",
    },
  ];
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites,
};

module.exports = nextConfig;
