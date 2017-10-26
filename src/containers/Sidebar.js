import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

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
        <div>All</div>
        {channels.map(channel => <div key={channel.id}>{channel.name}</div>)}
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

const mapDispatch = { setCurrentChannel }

export default connect(mapState, mapDispatch)(Sidebar)
