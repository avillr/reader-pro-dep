import React, { Component } from 'react'
import '../styles/App.css'

import Sidebar from './Sidebar'
import Feed from './Feed'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Sidebar />
        <div className='App-main'>
          <Feed />
        </div>
      </div>
    )
  }
}

export default App
