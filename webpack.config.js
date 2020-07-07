var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'none',
  entry: {
    app: __dirname + '/src/Main.js',
  },
  devServer: {
    hot: true,
  },
  output: {
    path: __dirname + '/public',
    filename: "Bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
  ],
};