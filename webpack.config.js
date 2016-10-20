var path = require('path');
var webpack = require('webpack');
var tsLoader = require('ts-loader');
var sourceMap = require('source-map-loader');

var rootPath = path.resolve(__dirname);
var srcPath = path.resolve(rootPath, 'src');
var binPath = path.resolve(rootPath, 'bin');

module.exports = {
  entry: {
    app: path.resolve(srcPath, 'app.ts')
  },
  output: {
    path:binPath,
    filename: '[name].bundle.js',
    publicPath: '/bin/'
  },
  resolve: {
    extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
  },
  devServer: {
    inline: true,
    port: 8080,
    hot: true
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
      }
    ],
    preLoaders: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        loader: 'source-map-loader'
      }
    ]
  }
};
