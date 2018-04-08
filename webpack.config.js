const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const path = require('path');


module.exports = {
    entry: {
        app: __dirname + '/src/js/app.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                    'eslint-loader'
                ]
            },
            {
                test: /\.(s*)css$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'fast-sass-loader']
                })
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                exclude: [/node_modules/, /fonts/],
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name]-[hash].[ext]'
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true
                        }
                    }
                ]
            },
            {
                test: /\.(eot|woff2?|ttf|svg)$/,
                exclude: [/node_modules/, /img/],
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name]-[hash].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new StyleLintPlugin({
            configFile: __dirname + '/src/sass/stylelint.config.js',
        }),
        new HtmlWebPackPlugin({
            template: __dirname + '/src/index.html'
        }),
        new ExtractTextPlugin({filename: '[name]-[hash].css'})
    ],

    devtool: 'eval-source-map',
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: '[name]-[hash].js'
    },
    devServer: {
        contentBase: __dirname + '/dist',
        publicPath: '/',
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    }
};
