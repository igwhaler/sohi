const webpack = require("webpack");
const path = require('path');

const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const SpritesmithPlugin = require('webpack-spritesmith');

module.exports = function(env) {
    let environment = env === "production" ? './build/' : './dev/';
    let isProd = env === 'production';

    return {
        entry: {
            ep1: ['./src/js/example/ep1.js', './src/jsx/ep1.jsx'],
            ep2: './src/js/example/ep2.js',
            reactRouter1: ['./src/jsx/reactRouter1.jsx'],
            reactRouter2: ['./src/jsx/reactRouter2.jsx'],
            reactRouter3: ['./src/jsx/reactRouter3.jsx', "babel-polyfill"],
            reactRouterBasic: ['./src/jsx/components/reactRouterBasic.jsx'],
            reactRouterURLParamenters: ['./src/jsx/components/reactRouterURLParamenters.jsx'],
            vendor: ["jquery", "react", "react-dom","react-router", "babel-polyfill", "core"]
        },
        output: {
            path: environment,
            filename: "js/[name].bundle.js"
        },

        module: {
            rules: [
              {
                test: /\.(jsx|js)$/,
                exclude: './node_modules/',
                use: "babel-loader?cacheDirectory"
              },
              {
                test: /\.less$/,
                //use: ["style-loader", "css-loader", "less-loader"]
                exclude: './node_modules/',
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [`css-loader?minimize=${isProd}`, "less-loader"]
                })
              },
              {
                test: /\.(png|jpg|gif|jpeg)$/,
                exclude: './node_modules/',
                use: [
                    'url-loader?limit=2000&name=images/[name].[ext]&publicPath=../',
                    //输出文件【注意：这里的路径是相对样式文件css的路径】
                    {
                        loader: 'img-loader',
                        options: {
                          enabled: isProd,
                          optipng: true, // disabled
                          gifsicle: {
                            interlaced: false
                          },
                          mozjpeg: {
                            progressive: true,
                            arithmetic: false
                          },
                          pngquant: {
                            floyd: 0.5,
                            speed: 2
                          },
                          svgo: {
                            plugins: [
                              { removeTitle: true },
                              { convertPathData: false }
                            ]
                          }
                        }
                    }
                ]
              }
            ]
        },

        plugins: [
            new webpack.DefinePlugin({
              'process.env.NODE_ENV': JSON.stringify('production')
            }),
            //雪碧图
            new SpritesmithPlugin({
                src: {
                    cwd: path.join(__dirname, 'src/images/ico'),
                    glob: '*.png'
                },
                target: {
                    image: path.join(__dirname, 'src/images/sprite.png'),
                    css: path.join(__dirname, 'src/less/core/sprite.less')
                },
                apiOptions: {
                    cssImageRef: '../../images/sprite.png'
                }
            }),

            //压缩js
            new UglifyJSPlugin({
                beautify: false,
                comments: false,
                compress: {
                    warnings: false,
                    drop_console: isProd,
                    collapse_vars: true,
                    reduce_vars: false,
                }
            }),

            //提取公共js
            new webpack.optimize.CommonsChunkPlugin({
                name: "vendor",
                filename: "js/vendor.js",
                //输出文件【注意：这里的根路径是module.exports.output.path】
                miniChunks: Infinity
            }),

            //分离css
            new ExtractTextPlugin({
                filename: "css/[name].css",
                //输出文件【注意：这里的根路径是module.exports.output.path】
                disable: false,
                allChunks: true
            }),

            //生成模板
            new HtmlWebpackPlugin({
                template: "./pages/ep1.html",
                filename: "html/ep1.html",
                //输出文件【注意：这里的根路径是module.exports.output.path】
                inject: "body",
                chunks: ["vendor", "ep1"]
            }),
            new HtmlWebpackPlugin({
                template: "./pages/ep2.html",
                filename: "html/ep2.html",
                inject: "body",
                chunks: ["vendor", "ep2"]
            }),
            new HtmlWebpackPlugin({
                template: "./pages/react-router-1.html",
                filename: "html/react-router-1.html",
                inject: "body",
                chunks: ["vendor", "reactRouter1"]
            }),
            new HtmlWebpackPlugin({
                template: "./pages/react-router-2.html",
                filename: "html/react-router-2.html",
                inject: "body",
                chunks: ["vendor", "reactRouter2"]
            }),
            new HtmlWebpackPlugin({
                template: "./pages/react-router-3.html",
                filename: "html/react-router-3.html",
                inject: "body",
                chunks: ["vendor", "reactRouter3"]
            }),
            new HtmlWebpackPlugin({
                template: "./pages/reactRouter-Basic.html",
                filename: "html/reactRouter-Basic.html",
                inject: "body",
                chunks: ["vendor", "reactRouterBasic"]
            }),
            new HtmlWebpackPlugin({
                template: "./pages/reactRouter-URL-Paramenters.html",
                filename: "html/reactRouter-URL-Paramenters.html",
                inject: "body",
                chunks: ["vendor", "reactRouterURLParamenters"]
            })
        ],

        resolve: {
            extensions: [" ", ".js", "jsx", ".ces6", ".css", ".less", "png", "jpg", "jpeg"],
            alias: {
                "global": path.join(__dirname, "src/js/lib/global.js"),
                "core": path.join(__dirname, "src/less/core.less")
            }
        }
    };
};
