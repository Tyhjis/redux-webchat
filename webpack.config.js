var webpack = require('webpack');
var path = require('path');

var SOURCE_DIR = path.resolve(__dirname, 'src/client');
var BUILD_DIR = path.resolve(__dirname, 'build');

module.exports = {
  entry: SOURCE_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.js$/,
        include: SOURCE_DIR,
        exclude: __dirname + '/node_modules',
        loader: 'babel-loader'
      }
    ]
  }
};
