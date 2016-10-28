/**
 * Created by YYW on 2016/10/27.
 */
var webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: __dirname + "/app/main.js",
    output: {
        path: __dirname + "/build",
        filename: "bundle.js"
    },
  
    loaders: [
        {
            test: /\.scss$/,
            loader: "style!css!sass"
        }]
    // ,
    //
    // module: {
    //     loaders: [
    //         {
    //             test: /\.json$/,
    //             loader: "json"
    //         },
    //         {
    //             test: /\.js$/,
    //             exclude: /node_modules/,
    //             loader: 'babel'
    //         },
    //         {
    //             test: /\.css$/,
    //             loader: ExtractTextPlugin.extract('style', 'css?modules!postcss')
    //         }
    //     ]
    // },
    // postcss: [
    //     require('autoprefixer')
    // ],
    //
    // plugins: [
    //     new HtmlWebpackPlugin({
    //         template: __dirname + "/app/index.tmpl.html"
    //     }),
    //     new webpack.optimize.OccurenceOrderPlugin(),
    //     new webpack.optimize.UglifyJsPlugin(),
    //     new ExtractTextPlugin("[name]-[hash].css")
    // ]
}