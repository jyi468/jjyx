// Webpack is used to bundle modules together. Using the configuration, we can create different bundles for different uses
// If you wanted to only bundle part of the app, you can specify that in the webpack configuration
const path = require('path');
const SRC_DIR = path.join(__dirname, '/react-client/src');
const DIST_DIR = path.join(__dirname, '/react-client/dist');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: `${SRC_DIR}/index.jsx`,
    output: {
        path: DIST_DIR,
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.css']
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: "file-loader?name=/react-client/resources/images/[name].[ext]"
            },
            {
                test: /\.(js|jsx)?/,
                include: SRC_DIR,
                loader: 'babel-loader',
                exclude: [path.join(SRC_DIR, '/index.html')],
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader',
                query: {
                    limit: '10000',
                    mimetype: 'application/octet-stream',
                    name: 'fonts/[name].[ext]'
                }
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    mimetype: 'application/font-woff',
                    name: 'fonts/[name].[ext]'
                }
            },
            {
                test: /\.eot(\?.*$|$)/,
                loader: 'file-loader',
                query: {
                    name: 'fonts/[name].[ext]'
                }
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'svg-url-loader',
                query: {
                    limit: '10000',
                    mimetype: 'application/svg+xml',
                    name: 'fonts/[name].[ext]'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'react-client/src/index.html'
        })
    ]
}
;