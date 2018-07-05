const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = merge(common, {
    module: {
        rules: [
            { // sass / scss loader for webpack
                test: /\.(sass|scss)$/,
                loader: ExtractTextPlugin.extract(['css-loader?url=false', 'sass-loader'])
            }
        ]
    },
    plugins: [
        new FileManagerPlugin({
            onStart: { copy: [{source: 'static', destination: 'dist'}] },
            // Remember to update the destination to your own folder
            // onEnd: { copy: [{source: 'dist', destination: '\\\\content-mykier@SSL\\DavWWWRoot\\sites\\EDBUAT\\App'}] },

            onEnd: { copy: [{source: 'dist', destination: '\\\\content-mykier@SSL\\DavWWWRoot\\sites\\EDBUAT\\Style Library\\EvidenceDB\\Export'}] },
        }),
        new webpack.DefinePlugin({
            DEVELOPMENT: JSON.stringify(true)            
        })
    ]
});