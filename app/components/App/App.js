import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'

import { components } from '../components.js'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <components.Sidebar />
        <Switch>
          <Route path='/:feed' component={components.Feed} />
        </Switch>
      </div>
    )
  }
}

export default App
