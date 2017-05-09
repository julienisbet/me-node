const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
})
const AssetsCopy = new CopyWebpackPlugin([ { from: 'client/assets', to: 'assets' } ])
module.exports = {
  entry: './client/index.jsx',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js',
  },
  devServer: {
    historyApiFallback: true
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/}
    ]
  },
  plugins: [HtmlWebpackPluginConfig, AssetsCopy]
}