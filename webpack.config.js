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
            { test: /\.vue$/, loader: 'vue-loader' },
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
    devServer: {
        historyApiFallback: true,
        noInfo: true
    },
    devtool: '#eval-source-map'


};
if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
}
