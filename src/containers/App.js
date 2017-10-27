import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import '../styles/App.css'

import Sidebar from './Sidebar'
import Feed from './Feed'
import Reader from './Reader'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Sidebar />
        <Route path='/:feed' component={Feed} />
        <Reader path='/:feed/:post' component={Reader} />
      </div>
    )
  }
}

export default App
