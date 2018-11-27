'use strict';

module.exports = {
    mode: 'development',
    entry: ["@babel/polyfill", "./js/script"],
    output: {
        filename: "../build.js"
    },
    watch: true,
    watchOptions: {
        aggregateTimeout: 100
    },
    devtool: "inline-source-map",
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader'
        }]
    }
};