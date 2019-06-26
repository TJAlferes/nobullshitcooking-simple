'use strict';
const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    chunkFilename: '[id].js',
    publicPath: '/'
  },
  resolve: {extensions: ['.js', '.jsx']},
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader', options: {importLoaders: 1}},
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                autoprefixer({browsers: ["> 1%", "last 2 versions"]})
              ]
            }
          }
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
    new UglifyJsWebpackPlugin()
  ]
};