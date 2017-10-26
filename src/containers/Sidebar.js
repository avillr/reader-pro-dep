import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withRouter, NavLink } from 'react-router-dom'

import { setCurrentChannel } from '../store'
import '../styles/Sidebar.css'

class Sidebar extends Component {
  render () {
    const { channels, setCurrentChannel } = this.props
    return (
      <div className='App-sidebar'>
        <h1 className='App-title'>Reader</h1>
        <div className='sidebar-channel'>All</div>
        <hr />
        {channels.map(channel => (
          <NavLink
            key={channel.id}
            to={`/${channel.name}`}
            className='sidebar-channel'
            onClick={() => setCurrentChannel(channel)}
          >
            {channel.name}
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

export default withRouter(connect(mapState, mapDispatch)(Sidebar))
