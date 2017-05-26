// Require styles and browser polyfills
require('./styles/index.scss')
require('babel-polyfill')

import React from 'react'
import { render } from 'react-dom'

import App from 'components/App'

document.addEventListener('DOMContentLoaded', () => {
  render(<App />, document.querySelector('.site__app'))
})


