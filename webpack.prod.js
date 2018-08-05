const merge =  require('webpack-merge');
const common = require('./webpack.config.js');
const path = require('path');
const BUILD_DIR = path.join(__dirname, '/react-client/build');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    output: {
        path: BUILD_DIR,
        publicPath: "/build/",
        filename: 'bundle.min.js',
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'react-client/src/index.html'
        })
    ]
});