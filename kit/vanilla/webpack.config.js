module.exports = {

  mode: "development",
  devtool: "inline-source-map",

  entry: {
    app: "./app.js"
  },

  // See https://webpack.js.org/configuration/dev-server/
  devServer: {
    host: "localhost",
    port: 8080,
    clientLogLevel: "warn",
    stats: "errors-only"
  }
};