const path = require('path');
const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {

  entry: './client/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query:{ presets:['es2015','react'] }
      }
    ],
  },
  output: {
    path: path.join(__dirname + '/build'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [new CompressionPlugin()],
};