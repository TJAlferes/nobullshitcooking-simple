'use strict';
const path = require('path');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin');
//const ExtractCssChunksPlugin = require('extract-css-chunks-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    chunkFilename: '[id].js',
    publicPath: '/'
  },
  resolve: {extensions: ['.js', '.jsx', '.scss']},
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(scss|css)$/,
        //exclude: /node_modules/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader', options: {importLoaders: 1}},
          {loader: 'sass-loader'},
          /*{
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                autoprefixer({browsers: ["> 1%", "last 2 versions"]})
              ]
            }
          },*/
          //ExtractTextPlugin
        ]
      },
      {
        test: /\.(ico|png|svg|jpe?g|gif)$/,
        loader: 'url-loader'
        /*use: [
          {
            loader: 'url-loader',
            options: {limit: 8000, fallback: 'file-loader'}
          }
        ]*/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/public/index.html',
      filename: 'index.html',
      inject: 'body'
    }),
    new UglifyJsWebpackPlugin(),
    new webpack.optimize.LimitChunkCountPlugin({maxChunks: 7})
  ]
};