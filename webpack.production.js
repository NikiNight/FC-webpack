'use strict';
const webpack = require('webpack');
const path = require('path');

module.exports = {
    mode: 'production',
    entry: ["./js/script"],
    output: {
        filename: "build.js"
    },
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
    }
};