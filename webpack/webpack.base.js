const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = env => {
    const isAnalize = env && env.anlz ? new BundleAnalyzerPlugin() : [];

    return {
        devtool: 'source-map',
        entry: {
            app: './client/src',
            vendor: [
                'babel-polyfill',
                'react',
                'react-dom',
                'axios',
                './.modernizrrc'
            ]
        },
        output: {
            path: path.resolve(__dirname, '../client/public/dist'),
            filename: '[name].js'
        },
        resolve: {
            extensions: ['.js', '.scss'],
            modules: [
                'node_modules'
            ],
            alias: {
                modernizr$: path.resolve(__dirname, '../.modernizrrc'),
                settings: path.resolve(__dirname, '../client/src/global/scss/settings/index.scss')
            }
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader'
                    }
                },
                {
                    test: /\.hbs$/,
                    loader: 'handlebars-loader'
                },
                {
                    test: /\.modernizrrc(\.json)?$/,
                    use: ['modernizr-loader', 'json-loader']
                },
                {
                    test: /\.(png|svg|jpe?g|gif)$/,
                    exclude: /icons[\/\\]/,
                    loader: 'file-loader',
                    options: {
                        name: 'images/[name].[ext]'
                    }
                },
                {
                    test: /\.(woff2?|eot|ttf)$/,
                    loader: 'file-loader',
                    options: {
                        name: 'fonts/[name].[ext]'
                    }
                },
                {
                    test: /\.svg$/,
                    include: /icons[\/\\]/,
                    loader: 'svg-sprite-loader',
                    options: {
                        symbolId: 'icon-[name]'
                    }
                }
            ]
        },
        plugins: [
            new CleanWebpackPlugin('dist', {
                root: path.resolve(__dirname, '../client/public/')
            }),
            // new HtmlWebpackPlugin({
            //     template: './client/public/index.html'
            // }),
            new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/),
            new webpack.NamedModulesPlugin(),
            new webpack.NamedChunksPlugin(),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor'
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'runtime'
            })
        ].concat(isAnalize),
        stats: {
            children: false
        }
    };
};
