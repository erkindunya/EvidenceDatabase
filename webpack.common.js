const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const babelOptions = {
    "presets": [
        "env"
    ]
};


module.exports = {
    devtool: 'source-map',
    entry: [
        'babel-polyfill',
        "./scripts/main.ts",
        "./styles/main.scss"
    ],
    output: {
        filename: "./dist/js/bundle.js"
    },
    resolve: {
        modules: ['.', './node_modules'],
        extensions: [".ts", ".js"]
    },
    module: {
        rules: [
            {
                
                test: /\.ts$/,
                exclude: /(node_modules|bower_components)/,
                enforce: 'pre',
                use: [
                    {
                        loader: 'tslint-loader',
                        options: { configFile: './tslint.json' },
                    }
                ]
            },
            {
                test: /\.ts$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: babelOptions
                    },
                    {
                        loader: 'ts-loader'
                    }
                ]
            },
            { // regular css files
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    use: 'css-loader?importLoaders=1',
                }),
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: './dist/css/bundle.css',
            allChunks: true
        }),
        new StyleLintPlugin({
            context: 'styles'
        }),
    ]
};