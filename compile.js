const fs = require('fs')
const pug = require('pug')
const path = require('path')
const shell = require('shelljs')
const colorIt = require('color-it')

const ReactDOMServer = require('react-dom/server')
const React = require('react')

const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.js')

// fancy logger
const log = (icon, text) => console.log(`  ${icon}  ${colorIt(text).greenSea()}`)

// paths
const publicPath = path.resolve(__dirname, 'public')
const appPath = path.resolve(__dirname, 'app')

// Extracts paths to CSS/JS assets from
// the stats object returned by Webpack
const getAssets = stats => {
  let assets = stats.toJson().assetsByChunkName.main

  if (typeof assets === 'string') {
    assets = [ assets ]
  }

  return {
    css: assets.filter(x => x.match(/\.css$/)),
    js: assets.filter(x => x.match(/\.js$/))
  }
}

const ssrConfig = merge(baseConfig, {
  entry: './app/components/App.js',
  target: 'node',
  output: {
    libraryTarget: 'commonjs2'
  },
  plugins: [
    new webpack.DefinePlugin({ PRERENDER_MODE: true })
  ]
})

shell.rm('-rf', 'public/*')
log('💥', 'Wiped off all files inside \`public` folder')

webpack(baseConfig, (err, stats) => {
  if (err || stats.hasErrors()) {
    log('👻 Error bundling', err.toString())
    return
  }

  const assets = getAssets(stats)
  log('🐣', `Bundled ${assets.js.length} assets using Webpack`)

  webpack(ssrConfig, (err, stats) => {
    if (err || stats.hasErrors()) {
      log('👻 Error bundling ssr version', err.toString())
      return
    }

    const ssrAssets = getAssets(stats)
    const App = require('./public/' + ssrAssets.js[0]).default

    const prerendered = ReactDOMServer.renderToString(
      React.createElement(App))

    log('🐥', `Prerendered React application`)

    const html = pug.renderFile(
      path.join(appPath, 'index.pug'),
      {
        isProduction: true,
        assets: assets,
        prerender: prerendered
      })

    fs.writeFileSync(path.join(publicPath, 'index.html'), html)
    log('🐔', `Generated index.html file`)

    shell.cp('-R', 'app/assets/*', 'public/')
    log('🐓', `Copied all static assets to \`public\` folder`)
    setTimeout(() => log('🍜', `All is done, sir.`), 800)
  })
})

