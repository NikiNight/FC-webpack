'use strict';
const webpack = require('webpack');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: ["./js/script"],
    output: {
        filename: "build.js"
    },
    watch: true,
    watchOptions: {
        aggregateTimeout: 100
    },
    devtool: "inline-source-map",
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        },
        {
            test: /\.scss$/,
            use: [{
                loader: "style-loader",
                options: {
                    sourceMap: true
                }
            }, {
                loader: "css-loader"
            }, {
                loader: 'resolve-url-loader',
                options: {
                    debug: true,
                    root: path.join(__dirname, './dist')
                }
            }, {
                loader: "sass-loader"
            }]
        },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {}
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        host: 'localhost',
        port: '8080',
        hot: true
    }
};