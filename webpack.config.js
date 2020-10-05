const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'client', 'index.js'),
  output: {
    path: path.resolve(__dirname, "./public/dist"),
    filename: "bundle.js",
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.js'],
  },
};