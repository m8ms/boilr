const configs = require('./webpack.common.config');

for (const config of configs) {

    config.devServer = {
        port: 8081,
        contentBase: __dirname + '/dist/' + config.name,
        historyApiFallback: true,
        publicPath: '/' + config.name,
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    };
}

module.exports = configs;
