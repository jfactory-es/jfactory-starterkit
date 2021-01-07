const HtmlWebpackPlugin = require("html-webpack-plugin");
const PRODUCTION = process.env.NODE_ENV === "production";

module.exports = {

  mode: process.env.NODE_ENV,
  devtool: PRODUCTION ? false : "inline-source-map",

  entry: {
    app: "./app.js"
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./app.html",
      title: "App",
      inject: "body"
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