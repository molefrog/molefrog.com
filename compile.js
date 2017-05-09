const fs = require('fs')
const pug = require('pug')
const path = require('path')
const shell = require('shelljs')
const colorIt = require('color-it')

const webpack = require('webpack')
const config = require('./webpack.config.js')

const log = (icon, text) => console.log(`  ${icon}  ${colorIt(text).greenSea()}`)

const publicPath = path.resolve(__dirname, 'public')
const appPath = path.resolve(__dirname, 'app')

shell.rm('-rf', 'public/*')
log('💥', 'Wiped off all files inside public/ folder')

webpack(config, (err, stats) => {
  if (err || stats.hasErrors()) {
    log('👻', err)
    return
  }

  const assets = stats.toJson().assetsByChunkName.main
  log('🐣', `Bundled ${assets.length} assets using Webpack`)

  const html = pug.renderFile(
    path.join(appPath, 'index.pug'),
    {
      isProduction: true,
      assets: {
        css: assets.filter(as => as.match(/\.css$/)),
        js: assets.filter(as => as.match(/\.js$/))
      }
    })

  fs.writeFileSync(path.join(publicPath, 'index.html'), html)
  log('🐥', `Generated index.html file`)

  shell.cp('-R', 'app/assets/*', 'public/')
  log('🐔', `Copied all static assets to public/ folder`)
  log('🐓', `All is done!`)
})

