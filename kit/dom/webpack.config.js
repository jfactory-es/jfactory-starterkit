const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const PRODUCTION = process.env.NODE_ENV === "production";

module.exports = {

  mode: process.env.NODE_ENV,
  devtool: PRODUCTION ? false : "inline-source-map",

  entry: {
    app: "./app.js"
  },

  output: {
    path: __dirname + '/dist',
  },

  module: {
    rules: [
      {
        test: /\.(js|mjs)$/,
        // exclude: /node_modules/,
        enforce: "pre",
        use: ["source-map-loader"]
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./app.html",
      title: "App",
      inject: "body"
    }),
    new CopyPlugin({
      patterns: [
        { from: "./assets", to: "assets" },
      ],
    })
  ],

  // See https://webpack.js.org/configuration/dev-server/
  devServer: {
    host: "localhost",
    port: 8080,
    clientLogLevel: "warn",
    stats: "errors-only",
    hot: false,
    liveReload: true,
    publicPath: "/"
  }
};