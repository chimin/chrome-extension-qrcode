const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        background: './src/background.ts',
        popup: './src/popup.ts',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'popup.html',
            template: 'src/popup.html',
            chunks: ['popup'],
        })
    ],
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "ts-loader" }
        ]
    }
};