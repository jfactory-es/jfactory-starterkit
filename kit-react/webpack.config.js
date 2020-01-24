module.exports = {

  mode: "development",

  entry: {
    app: "./kit-react/app.jsx"
  },

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
    // host: '0.0.0.0',
    clientLogLevel: "silent"
  }

};