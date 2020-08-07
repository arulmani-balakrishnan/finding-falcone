const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: ['regenerator-runtime/runtime', './src/geekTrust.js'],
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'eval',
    mode: 'development',
    devServer: {
        historyApiFallback: true
    },
    optimization: {
        minimizer: [new TerserJSPlugin({
            terserOptions: {
                keep_fnames: true
            }
        })],
        splitChunks: {
            chunks: 'all'
        }
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            inject: 'body'
        }),
        new CopyWebpackPlugin({
            patterns: [
                {from: 'public/favicon.ico', to: 'favicon.ico'},
                {from: 'public/logo.png', to: 'logo.png'}
            ]
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    module: {
        rules: [
            {
                exclude: [
                    /\.html$/,
                    /\.(js|jsx)$/,
                    /\.css$/,
                    /\.json$/
                ],
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'static/media/[name].[hash:8].[ext]',
                    },
                }
            },
            {
                test: /\.(js|jsx)?$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: [
                            require("@babel/plugin-transform-runtime"),
                            require("@babel/plugin-proposal-object-rest-spread"),
                            require("@babel/plugin-proposal-class-properties"),
                            require("fast-async")
                        ]
                    },
                },
                include: path.resolve(__dirname, "src"),
                exclude: [/node_modules/]
            },
            {
                test: /\.(css)$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'}
                ]
            },
            {
                test: /\.(jpe?g|gif|png|svg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000
                        }
                    }
                ]
            }
        ]
    },
    node: {
        fs: 'empty'
    }
};
