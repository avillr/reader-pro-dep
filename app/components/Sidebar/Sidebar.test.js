import React from 'react'
import ReactDOM from 'react-dom'
import Sidebar from './Sidebar'

// eslint-disable-next-line
it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Sidebar />, div)
})
