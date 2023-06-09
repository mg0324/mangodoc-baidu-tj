const path = require('path')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')


const pluginName = 'mangodoc-baidu-tj'

module.exports = {
  mode: 'production',
  entry: {
    [pluginName]: [path.join(process.cwd(), 'src', 'index.js')],
    [pluginName + '.min']: [path.join(process.cwd(), 'src', 'index.js')]
  },
  output: {
    path: path.join(process.cwd(), 'dist'),
    filename: '[name].js',
    library: 'MangodocBaiduTj',
    libraryTarget: 'umd',
    libraryExport: 'default',
    sourceMapFilename: '[file].map',
    globalObject: 'this'
  },
  optimization: {
    minimizer: [
      new TerserWebpackPlugin({
        include: /\.min\.js$/,
        parallel: true,
        extractComments: false,
        terserOptions: {
          format: {
            comments: false
          },
          compress: true,
          ie8: false,
          ecma: 5,
          warnings: false
        }
      })
    ]
  },
  plugins: [
    // new CopyPlugin({
    //   patterns: [
    //     {
    //       from: path.join(process.cwd(), 'src', 'baidu-tj.css'),
    //       to: path.join(process.cwd(), 'dist', 'baidu-tj.css')
    //     }
    //     // {
    //     //   from: path.join(process.cwd(), 'src', 'assets', 'dark.css'),
    //     //   to: path.join(process.cwd(), 'dist', 'dark.css')
    //     // }
    //   ]
    // })
  ],
  module: {}
}