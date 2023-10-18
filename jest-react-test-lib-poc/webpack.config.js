const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    mode: process.env.NODE_ENV,
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'MyApp.js', //'[name].bundle.js',
        // publicPath: '/',
        assetModuleFilename: 'assets/images/[hash][ext][query]' //LOGIC: ALLOWS TO KEEP ASSETS IMPORTED IN src FOLDER TO BE OUTPUT UNDER SPECIFIC FOLDER
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: { loader: "babel-loader" },
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(sa|sc|le|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    "css-loader",
                    "sass-loader"
                ]
            },
            // {
            //     test: /\.(png|jpg|gif|ttf|woff|eot|jpeg|svg|woff2|otf|webp)$/,  //|svg /\.(png|jpg|gif|ttf|woff|eot|jpeg|svg|woff2|otf|webp)$/
            //     type: 'asset/resource',
            // }
        ]
    },
    resolve: {
        extensions: ['.jsx', '.js']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            favicon: './public/favicon.ico',
            templateParameters: {
                APP_CONTEXT_PATH: process.env.NODE_ENV === 'development' ? '' : ''
            }
        }),
        new MiniCssExtractPlugin({
            filename: 'MyApp.css'
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: process.env.NODE_ENV === 'development' ? './public/config/local.app.config.js' : './public/config/app.config.js',
                    to: './app.config.js'
                },
                {
                    from: './public/assets',
                    to: './assets'
                }
            ]
        }),
        process.env.NODE_ENV === 'development' ? new BundleAnalyzerPlugin() : () => { },
    ],
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerWebpackPlugin(),
            new TerserWebpackPlugin({
                test: /\.js(\?.*)?$/i,
                exclude: /node_modules/,
                extractComments: false
            }),
            new webpack.optimize.AggressiveMergingPlugin()
        ],
        // splitChunks: {
        //     cacheGroups: {
        //         mui: { test: /[\\/]node_modules[\\/](@mui|@emotion)[\\/]/, name: 'mui', chunks: 'all' }, //  /[\\/]node_modules[\\/]([\\@]mui)[\\/]/
        //         common: { test: /[\\/]node_modules[\\/](?!(@mui|@emotion))[\\/]/, name: 'common', chunks: 'all' }   ///[\\/]node_modules[\\/]/
        //     }
        // }
    },
    devtool: process.env.NODE_ENV === 'development' ? 'source-map' : 'source-map',  //eval for development
    stats: {
        errorDetails: true
    },
    devServer: {
        port: 3000,
        hot: true,
        compress: true,
        open: true
    },
};