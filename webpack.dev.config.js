const config = require('./webpack.common.config');
const StyleLintPlugin = require('stylelint-webpack-plugin');

console.log(__dirname + '/src/sass/stylelint.config.js');

config.plugins.unshift(
    new StyleLintPlugin({
        configFile: __dirname + '/src/sass/stylelint.config.js'
    }));

config.devServer = {
    contentBase: __dirname + '/dist',
        historyApiFallback: true,
        publicPath: '/',
        headers: {
        'Access-Control-Allow-Origin': '*'
    }
};

module.exports = config;
