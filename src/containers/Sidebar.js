import React, { Component } from 'react'
import { connect } from 'react-redux'

import logo from '../images/logo.svg'
import { setCurrentChannel } from '../store'

class Sidebar extends Component {
  render () {
    const { channels } = this.props
    console.log(channels)
    return (
      <div className='App-sidebar'>
        <img src={logo} className='App-logo' alt='logo' />
        <h1 className='App-title'>Reader</h1>
        <ul>
          <li>First Channel</li>
          {channels.list.map(channel => <li>channel</li>)}
        </ul>
      </div>
    )
  }
}

const mapState = state => ({
  channels: state.channels
})

const mapDispatch = { setCurrentChannel }

export default connect(mapState, mapDispatch)(Sidebar)
