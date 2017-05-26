import React from 'react'
import ReactDOM from 'react-dom'

import Site from './Site'

class App extends React.Component {
  componentDidMount() {
    const rootNode = ReactDOM.findDOMNode(this)

    if (!rootNode) {
      return
    }

    if (!PRERENDER_MODE) {
      const legacyPreview = require('./legacy-preview').default
      legacyPreview(rootNode)
    }
  }

  render() {
    return (
      <Site
        {...this.props}
        ref={el => this._root = el} />
    )
  }
}

export default App


