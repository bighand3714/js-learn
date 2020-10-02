const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: __dirname + '/app/main.js',
  output: {
    path: __dirname + '/build',
    filename: 'bundle-[hash].js',
  },
  devtool: 'none',
  devServer: {
    contentBase: './public',
    historyApiFallback: true,
    inline: true,
    hot: true,
  },
  module: {
    rules: [{
      
    }]
  }
}