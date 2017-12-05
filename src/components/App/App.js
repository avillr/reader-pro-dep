import React, { Component } from 'react'
// import { Route } from 'react-router-dom'
import './App.css'

import { components } from '../components.js'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <components.Sidebar />
      </div>
    )
  }
}
// <Route path='/:feed' component={components.Feed} />

export default App
