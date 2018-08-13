var webpack = require('webpack')
var path = require('path')

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'app', 'main.js'),
  output: {
    path: path.join(__dirname, 'public'),
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "src"), //默认目录
    port: 7200,
    host: '0.0.0.0',
    stats: "errors-only"
  }

}