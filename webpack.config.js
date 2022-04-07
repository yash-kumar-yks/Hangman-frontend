module.exports = {
  mode: "development",
  entry: "./app.js", // entry point of react application(hangman)
  module: {
    rules: [
      {
        test: /\.js/, // regex
        loader: "babel-loader", // tif ends with .js then use babel-loader
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react']
        }
      }
    ]
  }
}