const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {

  mode: "development",
  devtool: "inline-source-map",

  entry: {
    app: "./app.jsx"
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./app.html",
      title: "App",
      inject: "body"
    })
  ],

  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/react']
          }
        }
      }
    ]
  },

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