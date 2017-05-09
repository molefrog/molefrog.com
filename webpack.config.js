const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const isProduction = process.env.NODE_ENV === 'production'

const extractStyles = new ExtractTextPlugin({
  filename: '[name].[contenthash].css',
  disable: !isProduction
})

module.exports = {
  entry: './app/initialize.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: isProduction ? '[name].[chunkhash].js' : 'main.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.scss$/,
        use: extractStyles.extract({
          use: [
            'css-loader',
            'sass-loader'
          ],
          fallback: 'style-loader'
        })
      }
    ]
  },
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'app')
    ]
  },
  plugins: [
    extractStyles
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'app', 'assets'),
    overlay: true,
    setup: (app) => {
      const pug = require('pug')
      app.get('/', (req, res) => {
        res.send(pug.renderFile(
          path.join(__dirname, 'app', 'index.pug'),
          {
            isProduction: false
          })
        )
      })
    }
  }
}
