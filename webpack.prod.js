const merge = require('webpack-merge')
const common = require('./webpack.common')

const webpack = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')


module.exports = merge(common, {
  mode: 'production',
  module: {
    // TODO: Image resolution
    // TODO: Font linking
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.png$/,
        loader: 'file-loader',
        options: {
          name: '/imgs/[name].[ext]'
        }

      }, {
        test: /\.((sa|sc|c)ss)$/,
        use: [{
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              //url: false
            }
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '../css/app.css'
    }),
    new UglifyJsPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
  ],
})

