// next.config.js
const nextConfig = {
  webpack: (config) => {
      config.module.rules.push({
          test: /\.(mp4|webm)$/,
          use: {
              loader: 'file-loader',
              options: {
                  name: '[name].[hash].[ext]',
                  outputPath: 'videos/',
              },
          },
      });
      return config;
  },
};

export default nextConfig;
