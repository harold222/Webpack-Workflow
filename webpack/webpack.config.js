const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCss = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: 'recursos/js/bundle.min.js'
    }
    module: {
        rules:[
            {
               test: /\.(sa|sc|c)ss$/,
               use: [
                   miniCss.loader,
                   'css-loader',
                   'sass-loader'
               ]
            },
            {
                test: /\.hbs/,
                loader: 'handlebars-loader'
            },
            {
                test: /\.(jpg|png|gif|jpeg|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'recursos/img/',
                            useRelativePath: true
                        }
                    }
                ]
            },
            {
                loader: 'image-webpack-loader',
                options:  {
                    mozjpeg: {
                        progressive: true,
                        quality: 75
                      },
                      // optipng.enabled: false will disable optipng
                    optipng: {
                        enabled: true,
                    },
                    pngquant: {
                        quality: [0.75, 0.90],
                        speed: 4
                    },
                    gifsicle: {
                        interlaced: false,
                    },
                      // the webp option will enable WEBP
                    webp: {
                        quality: 75
                    }
                }
            }
        ]
    }, plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            hash: true,
            template: './src/index.hbs',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            }
        }),
        new htmlWebpackPlugin({
            filename: 'about.html',
            template: './src/about.hbs',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            }
        }),
        new miniCss({
            filename: 'recursos/css/[name].min.css'
        })
    ]
};

