/*
 * Starter Kit for jFactory
 * The server must be reloaded after modifications in this file
 */

const webpack = require("webpack");

// NODE_ENV
// ----------------------------------------------------------------------------
// The NODE_ENV is used by "jfactory-es" to automatically select the module
// (for the demonstration we force the NODE_ENV but you can set it externally)

process.env.NODE_ENV = "development"; // selects the jFactory developer module
// process.env.NODE_ENV = "production"; // selects the jFactory production mode

// Alternatively, instead of importing "jfactory-es", you can ignore the
// NODE_ENV and manually import the distribution you want
// ex: import {jFactory} form "jfactory-es/dist/jFactory-devel.mjs"
// ex: import {jFactory} form "jfactory-es/dist/jFactory.mjs"

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