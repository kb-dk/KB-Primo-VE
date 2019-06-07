const path = require('path');

// - Convert 
module.exports = {
  entry: {
    app: ['./src/js/main.js']
  },
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: 'primo-kb-design.js'
  },
  module: {
    rules: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['@babel/env']
      }
    }]
  }
}