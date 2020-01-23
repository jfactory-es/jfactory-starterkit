module.exports = {

  mode: "development",

  entry: {
    app: "./kit-vuejs/app.js"
  },

  // See https://webpack.js.org/configuration/dev-server/
  devServer: {
    // host: '0.0.0.0',
    clientLogLevel: "silent"
  }

};