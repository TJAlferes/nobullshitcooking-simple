'use strict';
const path = require('path');
//const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin');
//const ExtractCssChunksPlugin = require('extract-css-chunks-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    chunkFilename: '[id].js',
    publicPath: '/'
  },
  resolve: {extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss']},
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
          options: {
            silent: process.argv.indexOf("--json") !== -1,
            useBabel: true,
            babelOptions: {
              plugins: node
                ? [
                  "react-imported-component/babel",
                  "babel-plugin-dynamic-import-node"
                ]
                : ["react-imported-component/babel"]
            }
          }
        }
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },
      {
        test: /\.(scss|css)$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader', options: {importLoaders: 1}},
          {loader: 'sass-loader'}
        ]
      },
      {
        test: /\.(ico|png|svg|jpe?g|gif)$/,
        loader: 'url-loader'
      }
    ]
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/public/index.html',
      filename: 'index.html',
      inject: 'body'
    }),
    new UglifyJsWebpackPlugin(),
    new webpack.optimize.LimitChunkCountPlugin({maxChunks: 12}),
    new webpack.optimize.MinChunkSizePlugin({minChunkSize: 10000})
  ]
};