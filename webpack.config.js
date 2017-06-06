const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: "./client/index.html",
  filename: "index.html",
  inject: "body",
});

const AssetsCopy = new CopyWebpackPlugin([{ from: "client/assets", to: "assets" }]);

module.exports = {
  entry: ["./client/index.jsx", "./client/less/app.less"],
  output: {
    path: path.resolve("dist"),
    filename: "index_bundle.js",
  },
  devServer: {
    historyApiFallback: true,
  },
  devtool: "source-map",
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader", // creates style nodes from JS strings
        }, {
          loader: "css-loader", // translates CSS into CommonJS
        }, {
          loader: "autoprefixer-loader", // translates CSS into CommonJS
        }, {
          loader: "less-loader", // compiles Less to CSS
        }],
      },
    ],
  },
  plugins: [HtmlWebpackPluginConfig, AssetsCopy],
};
