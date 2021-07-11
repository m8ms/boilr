const withPlugins = require("next-compose-plugins");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withPlugins([[withBundleAnalyzer]], {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg)$/i,
      use: [
        {
          loader: "file-loader",
        },
      ],
    });

    return config;
  },
  future: {
    webpack5: true,
  },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? "/",
});
