const path = require('path');
const { HtmlRspackPlugin } = require('@rspack/core');
const ReactRefreshPlugin = require('@rspack/plugin-react-refresh');

const isDev = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: isDev ? 'development' : 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'static/js/[name].[contenthash:8].js',
        publicPath: '/',
        clean: true,
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    experiments: {
        css: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'builtin:swc-loader',
                options: {
                    jsc: {
                        parser: {
                            syntax: 'ecmascript',
                            jsx: true,
                        },
                        transform: {
                            react: {
                                runtime: 'automatic',
                                development: isDev,
                                refresh: isDev,
                            },
                        },
                    },
                },
            },
            {
                test: /\.css$/,
                type: 'css/auto',
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|ico)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'static/media/[name].[hash:8][ext]',
                },
            },
        ],
    },
    plugins: [
        new HtmlRspackPlugin({
            template: './public/index.html',
        }),
        ...(isDev ? [new ReactRefreshPlugin()] : []),
    ],
    devServer: {
        port: 3000,
        historyApiFallback: true,
        hot: true,
        open: true,
        static: {
            directory: path.join(__dirname, 'public'),
        },
    },
};
