// Starter Kit for jFactory
// (the server must be reloaded after modifications)

const webpack = require("webpack");

// ----------------------------------------------------------------------------
// Force the NODE_ENV for the demonstration (but you can use external ENV)
// ----------------------------------------------------------------------------

process.env.NODE_ENV = "development"; // enable jFactory developer mode
// process.env.NODE_ENV = "production"; // disable jFactory developer mode

// ----------------------------------------------------------------------------
// Webpack Config
// ----------------------------------------------------------------------------

module.exports = {
  mode: "development",

  entry: {
    app: "./app.js"
  },

  plugins: [
    // By default webpack rewrites all "process.env.NODE_ENV"
    // with the value of the "mode" option (see above)
    // However, in this developer server, we want to be able to switch ENV
    // without altering the "mode"
    new webpack.EnvironmentPlugin(['NODE_ENV'])
  ],

  // See https://webpack.js.org/configuration/dev-server/
  devServer: {
    // host: '0.0.0.0',
  }
};