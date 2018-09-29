var webpack = require("webpack")
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: __dirname + "/src/js/app.js",
  output: {
    path: __dirname + "/build",
    filename: "[name]-[hash:6].js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: __dirname + '/index.html'
    })
  ],
  module: {
    rules:[
      { test: /\.css$/, loader: 'style-loader!css-loader' }
    ]
  },
  resolve:{
    extensions:['.js','.css','.json' ]
  }
}