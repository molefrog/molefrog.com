const webpackMiddleware = require('webpack-dev-middleware')
const express = require('express')
const serveStatic = require('serve-static')
const webpack = require('webpack')
const pug = require('pug')
const path = require('path')

const webpackConfig = require('./webpack.config.js')
const app = express()

app.use(webpackMiddleware(
  webpack(webpackConfig), {
    publicPath: '/',
    stats: {
      colors: true
    }
  }
))

app.use(serveStatic(path.join(__dirname, 'app/assets')))

app.get('/', (req, res) => {
  res.send(pug.renderFile(
    path.join(__dirname, 'app', 'index.pug'),
    {
      isProduction: false
    })
  )
})

app.listen(3000)
