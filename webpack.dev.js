'use strict';
const path = require('path');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    overlay: {warnings: true, errors: true},
    proxy: {
      '/api': {
        target: 'http://localhost:3003',
        pathRewrite: {'^/api' : ''},
        changeOrigin: true,
        secure: false
      }
    }
  },
  //devtool: 'cheap-module-eval-source-map', // or cheap-module-source-map ?
  devtool: 'source-map',
  entry: './src/index.js',
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
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        loader: "ts-loader"
      },
      {
        test: /\.(scss|css)$/,
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
          },
          {loader: 'sass-loader'}
        ]
      },
      {
        test: /\.(ico|png|svg|jpe?g|gif)$/,
        loader: 'url-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/public/index.html',
      filename: 'index.html',
      inject: 'body'
    }),
    new webpack.optimize.LimitChunkCountPlugin({maxChunks: 7}),
    //new BundleAnalyzerPlugin({generateStatsFile: true})
  ]
};