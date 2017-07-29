var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'react-client/dist');
var APP_DIR = path.resolve(__dirname, 'react-client/src');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader',
        query: {
            presets: ['react', 'es2015']
         }
      }
    ]
  }
};

module.exports = config;
