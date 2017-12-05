import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withRouter, NavLink } from 'react-router-dom'

import '../styles/Sidebar.css'

class Sidebar extends Component {
  render () {
    const { channels } = this.props
    return (
      <div className='App-sidebar'>
        <h1 className='App-title'>Reader</h1>
        <NavLink to={`/index`} className='sidebar-channel'>
          Index
        </NavLink>
        <hr />
        {channels.map(channel => (
          <NavLink
            key={channel.id}
            to={`/${channel.id}`}
            className='sidebar-channel'
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
  channels: PropTypes.array
}

const mapState = state => ({
  channels: state.channels
})

export default withRouter(connect(mapState)(Sidebar))
