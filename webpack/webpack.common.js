const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Common = require('./webpack.common.js');
const { getFavIcon } = require('./src/utils/WebpackUtils');
const { PROJECT: { PROJECT_TITLE }, MODE: { PRODUCTION }, PORTALS: { ADMIN } } = require('./src/configs/project');

module.exports = merge(Common, {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true, // Clean the output directory before emit
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            filename: 'index.html',
            template: './public/index.html',
            title: 'Project Tilte App',
            favicon: path.resolve(getFavIcon(PROJECT_TITLE)),
            meta: {
                author: 'Project Tilte App',
                Project: 'Project Tilte App Web Site'
            }
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
        new webpack.DefinePlugin({
            ENV_MODE: JSON.stringify({ PROJECT: PROJECT_TITLE, MODE: PRODUCTION, PORTAL: ADMIN })
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    devtool: 'source-map',
});
