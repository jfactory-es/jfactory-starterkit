const webpack = require("webpack");

module.exports = {

  mode: "development",

  entry: {
    app: "./app.js"
  },

  plugins: [
    // By default webpack injects a "process.env.NODE_ENV" in the bundle
    // with the value of its "mode" option, so you shouldn't need to
    // specify a process.env.NODE_ENV (changing the "mode" to "production"
    // will load the "production" module of jFactory)
    // However, it's a developer server and for faster recompilations
    // we may want to set our own NODE_ENV regardless of "mode"
    // (to load jFactory in production mode, while keeping webpack in dev mode)
    // This is achieved by enabling this line:
    // new webpack.EnvironmentPlugin(['NODE_ENV'])
  ],

  // See https://webpack.js.org/configuration/dev-server/
  devServer: {
    // host: '0.0.0.0',
    clientLogLevel: "silent"
  }
};