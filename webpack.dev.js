const merge = require('webpack-merge')
const common = require('./webpack.common')
const path = require('path')

module.exports = merge(common, {
  mode: 'development',
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
            loader: "style-loader"
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
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    publicPath: '/assets/js',
    compress: true,
    //hot: true,
    open: true
  },
  stats: {
    // Colored output
    colors: true
  },
  devtool: 'source-map'
})