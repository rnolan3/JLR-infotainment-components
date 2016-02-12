/* eslint no-var: 0 */
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var fs = require('fs')
var path = require('path')

var sassLoader = [
  'css?modules&importLoaders=2&sourceMap&localIdentName=HVAC--[name]--[local]__[hash:base64:5]',
  'postcss?browsers=last 2 version',
  'sass'
]

var examplesDir = path.join(__dirname, '/examples')

module.exports = {
  devtool: 'inline-source-map',

  entry: fs.readdirSync(examplesDir).reduce(function (entries, dir) {
    if (fs.statSync(path.join(examplesDir, dir)).isDirectory()
      && !/^(__|\.|node_modules)/.test(dir)) {
      entries[dir] = path.join(examplesDir, dir, 'index.js')
    }
    return entries
  }, {}),

  output: {
    path: __dirname + '/__build__',
    filename: '[name].js',
    publicPath: '/__build__/'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', sassLoader)
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin('styles.css')
  ]
}
