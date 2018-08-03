const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const I18nPlugin = require('i18n-webpack-plugin');
const webpack = require('webpack');

const locale = {
    en: {
        animals: {
            hedgehog: 'hedgehog is a bunny',
            walrus: 'walrus'
        }
    },
    pl: {
        animals: {
            hedgehog: 'jeż',
            walrus: 'mors'
        }
    }
}

const config = Object.keys(locale).map(lang => ({
    name: lang,
    entry: {
        app: __dirname + '/src/js/app.jsx'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: './.babel-cache'
                        }
                    },
                    'eslint-loader'
                ]
            },
            {
                test: /\.(s*)css$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                exclude: [/fonts/],
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
                exclude: [/img/],
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
        new HtmlWebPackPlugin({
            template: __dirname + '/src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name]-[contenthash].css',
            chunkFilename: '[id].css'
        }),
        new I18nPlugin(locale[lang], {nested: true}),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
    ],

    resolve: {
        extensions: ['*', '.js', '.jsx']
    },

    output: {
        path: __dirname + '/dist/' + lang,
        publicPath: '/' + lang,
        filename: '[name]-[chunkhash].js'
    }
}));

module.exports = config;
