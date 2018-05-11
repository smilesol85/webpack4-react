const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

const clientPath = 'client';
const serverPath = 'server';
const outputPath = 'dist';

module.exports = {
    // instead of entry, output
    // "dev": "webpack --mode development ./src/js/index.js --output ./dist/main.js",
    // "build": "webpack --mode production ./src/js/index.js --output ./dist/main.js"
    entry: {
        app: `./${clientPath}/js/index.js`,
        print: `./${clientPath}/js/print.js`
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, `${outputPath}`),
        publicPath: '/'
    },
    module: {
        rules: [
            // instead of rules
            // "scripts": {
            //     "dev": "webpack --mode development --module-bind js=babel-loader",
            //     "build": "webpack --mode production --module-bind js=babel-loader"
            // }
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        // new HtmlWebPackPlugin({
        //     template: `./${clientPath}/index.html`,
        //     filename: `./index.html`
        // }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
};