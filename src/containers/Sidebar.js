import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

import logo from '../images/logo.svg'
import { setCurrentChannel } from '../store'
import '../styles/Sidebar.css'

class Sidebar extends Component {
  render () {
    const { channels, setCurrentChannel } = this.props
    console.log(channels)
    return (
      <div className='App-sidebar'>
        <img src={logo} className='App-logo' alt='logo' />
        <h1 className='App-title'>Reader</h1>
        <div className='sidebar-channel'>All</div>
        <hr />
        {channels.map(channel => (
          <NavLink to={`/${channel.name}`} key={channel.id}>
            <div
              className='sidebar-channel'
              onClick={() => setCurrentChannel(channel)}
            >
              {channel.name}
            </div>
          </NavLink>
        ))}
        <hr />
        <div className='sidebar-channel'>+</div>
        <div className='settings'>Settings</div>
      </div>
    )
  }
}

Sidebar.propTypes = {
  channels: PropTypes.array,
  setCurrentChannel: PropTypes.func
}

const mapState = state => ({
  channels: state.channels
})

const mapDispatch = { setCurrentChannel }

export default connect(mapState, mapDispatch)(Sidebar)
