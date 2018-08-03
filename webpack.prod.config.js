const configs = require('./webpack.common.config');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');


for (const config of configs) {

    config.plugins.push(new OptimizeCSSAssetsPlugin({}));

    config.optimization = {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all"
                }
            }
        }
    };
}

module.exports = configs;
