import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

import '../styles/Feed.css'
import { getPosts, setCurrentPost, setCurrentChannel } from '../store'
import Reader from '../containers/Reader'

class Feed extends Component {
  componentDidMount () {
    const feed = this.props.match.params.feed
    this.props.setCurrentChannel(feed)
    this.props.getPosts(feed)
  }

  componentWillReceiveProps (nextProps) {
    const feed = this.props.match.params.feed
    if (feed !== nextProps.match.params.feed) {
      this.props.setCurrentChannel(feed)
      this.props.getPosts(feed)
    }
  }

  render () {
    const { posts, fetchCurrentPost } = this.props
    return (
      <div className='App-feed'>
        {posts.length && (
          <div>
            {posts.map((post, index) => {
              return <Reader post={post} />
            })}
          </div>
        )}
      </div>
    )
  }
}

Feed.propTypes = {
  posts: PropTypes.array,
  getPosts: PropTypes.func,
  fetchCurrentPost: PropTypes.func
}

const mapState = state => ({
  posts: state.posts,
  currentChannel: state.currentChannel
})

const mapDispatch = { getPosts, setCurrentPost, setCurrentChannel }

export default withRouter(connect(mapState, mapDispatch)(Feed))
