/**
 * Created by YYW on 2016/10/27.
 */

// webpack.config.js
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
// var extractCSS = new ExtractTextPlugin('../stylesheets/qwert.css');
module.exports = {
    entry: __dirname + "/app/main.js",
    output: {
        path: __dirname + "/public/build",
        filename: "bundle.js"
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false,
            },

        }),
        new ExtractTextPlugin('../stylesheets/css/qwert.css', {
            allChunks: true,
        }),
        // ,
        // extractCSS
    ],
    module: {
        loaders: [
            { test: /\.vue$/, loader: 'vue' },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader'),
            },
            {//es6的加载器
                test:/.js$/,
                loader: 'babel-loader',
                exclude:"/node_modules/"
            },
            { test: /\.(html|tpl)$/, loader: 'html-loader' }
            ]
    },
    vue: {
        loaders: {
            css: 'style!css!autoprefixer',
            html:'vue-html-loader',
            scss:'style!css!sass'
        }
    }

};