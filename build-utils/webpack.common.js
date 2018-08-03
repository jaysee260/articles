const commonPaths = require('./common-paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const config = {
  entry: {
    app: commonPaths.appEntry
  },
  output: {
    filename: '[name].bundle.js',
    path: commonPaths.outputPath
  },
  module: {
    rules: [
      {
        // Use babel-loader on any .js
        // or .jsx file you come across
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },
      {
        test: /\.png/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: commonPaths.templatePath
      //minify: {}
    })
  ]
}

module.exports = config;