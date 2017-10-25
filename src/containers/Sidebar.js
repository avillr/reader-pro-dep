import React, { Component } from 'react'
import logo from '../images/logo.svg'

class Sidebar extends Component {
  render () {
    return (
      <div className='App-sidebar'>
        <img src={logo} className='App-logo' alt='logo' />
        <h1 className='App-title'>Reader</h1>
      </div>
    )
  }
}

export default Sidebar
