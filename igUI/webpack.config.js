const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const NodeEnv = process.env.NODE_ENV;
const isEnvDevelopment = NodeEnv === 'development';
const isEnvProduction = NodeEnv === 'production';

module.exports = {
    mode: NodeEnv,
    entry: './site/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        pathinfo: false,
        filename: isEnvProduction
            ? 'static/js/[name].[contenthash:8].js'
            : 'static/js/[name].bundle.js',
        chunkFilename: isEnvProduction
            ? 'static/js/[name].[contenthash:8].chunk.js'
            : 'static/js/[name].chunk.js',
    },
    optimization: {
        minimize: isEnvProduction,
        splitChunks: {
            chunks: 'all',
            name(module, chunks, cacheGroupKey) {
                const allChunksNames = chunks.map((item) => item.name).join('~');

                return `${allChunksNames}`;
            }
        },
        runtimeChunk: true
    },
    plugins: [
        new HtmlWebpackPlugin(
            Object.assign(
                {
                    inject: true,
                    template: './site/index.html',
                },
                isEnvProduction
                ? {
                    minify: {
                        removeComments: true,
                        collapseWhitespace: true,
                        removeRedundantAttributes: true,
                        useShortDoctype: true,
                        removeEmptyAttributes: true,
                        removeStyleLinkTypeAttributes: true,
                        keepClosingSlash: true,
                        minifyJS: true,
                        minifyCSS: true,
                        minifyURLs: true
                    }
                }
                : {}
            )
        )
    ],
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './site',
    },
    module: {
        rules: [
            {
                test: /\.(js|mjs|jsx|ts|tsx)$/,
                include: path.resolve(__dirname, 'site'),
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
};
