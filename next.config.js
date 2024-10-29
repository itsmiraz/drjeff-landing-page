/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    // Rule for video files
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|swf|ogv|mp3|wav|flac|aac)$/,
      use: {
        loader: "file-loader",
        options: {
          publicPath: "/_next/static/videos",
          outputPath: "static/videos",
          name: "[name].[ext]",
          esModule: false,
        },
      },
    });

    return config;
  },
}

module.exports = nextConfig
