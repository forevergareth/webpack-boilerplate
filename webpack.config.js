'use strict'

const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin')
//const devMode = process.env.NODE_ENV !== 'production'


module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, './public/js'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.((sa|sc|c)ss)$/,
        use: [{
          loader: MiniCssExtractPlugin.loader,
        }, {
            loader: 'css-loader',
          }, {
            loader: 'sass-loader'
        }]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin('public',{}),
    new MiniCssExtractPlugin({filename: '../css/app.css',})

  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    publicPath: '/js/'
  },
  stats: {
    // Colored output
    colors: true
  },
  // Create Sourcemaps for the bundle
  devtool: 'source-map'
}