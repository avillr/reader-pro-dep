import React, { Component } from 'react'
import '../styles/App.css'

import Sidebar from './Sidebar'
import Feed from './Feed'
import Reader from './Reader'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Sidebar />
        <Feed />
        <Reader />
      </div>
    )
  }
}

export default App
