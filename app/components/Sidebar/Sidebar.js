import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

import './Sidebar.css'

const mapState = state => ({
  ...state.App
})

class Sidebar extends Component {
  render () {
    return (
      <div className='App-sidebar'>
        <h1 className='App-title'>Reader</h1>
        <NavLink to={`/index`} className='sidebar-channel'>
          Index
        </NavLink>
        <hr />
        {this.props.channels.map(channel => (
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

export default connect(mapState)(Sidebar)
