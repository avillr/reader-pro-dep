'use strict'

const LiveReloadPlugin = require('webpack-livereload-plugin')
const devMode = process.env.NODE_ENV === 'development'

/**
 * Fast source maps rebuild quickly during development, but only give a link
 * to the line where the error occurred. The stack trace will show the bundled
 * code, not the original code. Keep this on `false` for slower builds but
 * usable stack traces. Set to `true` if you want to speed up development.
 */

const USE_FAST_SOURCE_MAPS = false

module.exports = {
  entry: './app/index.js',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  context: __dirname,
  devtool:
    devMode && USE_FAST_SOURCE_MAPS
      ? 'cheap-module-eval-source-map'
      : 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json', '*']
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader' // config in .babelrc
      },
      {
        test: /\.css/,
        loaders: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: devMode ? [new LiveReloadPlugin({ appendScriptTag: true })] : []
}
