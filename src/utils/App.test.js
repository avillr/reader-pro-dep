import React from 'react'
import ReactDOM from 'react-dom'
import App from '../containers/App'

// eslint-disable-next-line
it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
})
