/**
 * Created by YYW on 2016/10/27.
 */

// webpack.config.js
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var extractCSS = new ExtractTextPlugin('qwert.css');
module.exports = {
    entry: __dirname + "/app/main.js",
    output: {
        path: __dirname + "/build",
        filename: "bundle.js"
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false,
            },

        }),
        extractCSS
    ],
    module: {
        loaders: [
            {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            {
                test: /\.(png|jpg)$/,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            },
            {

                test: /\.scss$/,
                loader: extractCSS.extract(['css','sass'])
                // loader: "style!css!sass",
            }
            ]
    },

}