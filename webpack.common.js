const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: __dirname + '/src/js/index.js',
  output: {
    path: path.resolve(__dirname, './public/assets/js'),
    filename: '[name].[chunkhash].js'
  },
  plugins: [
    new CleanWebpackPlugin('public/assets', {}),
    new HtmlWebpackPlugin({
      title: 'Production'
    })
  ],

}