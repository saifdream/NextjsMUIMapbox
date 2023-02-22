/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // webpack: config => {
  //   // Optional: Enables reading mapbox token from environment variable
  //   config.plugins.push(new webpack.EnvironmentPlugin({MapboxAccessToken: process.env.NEXT_PUBLIC_MAP_BOX}));
  //   return config;
  // }
}

module.exports = nextConfig
