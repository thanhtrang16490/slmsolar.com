/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

module.exports = nextConfig;

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "app.slmsolar.com",
      },
    ],
  },

  // images: {
  //   domains: ["app.slmsolar.com"],
  // },
};
