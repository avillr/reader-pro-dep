import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import '../styles/Feed.css'
import { getPosts, fetchCurrentPost } from '../store'
import FeedEntryList from '../components/FeedEntryList'

class Feed extends Component {
  componentDidMount () {
    this.props.currentChannel.url &&
      this.props.getPosts(this.props.currentChannel.url)
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.currentChannel.url !== this.props.currentChannel.url) {
      this.props.getPosts(nextProps.currentChannel.url)
    }
  }

  render () {
    const { posts, fetchCurrentPost } = this.props
    return (
      <div className='App-feed'>
        {posts.length ? (
          <FeedEntryList posts={posts} fetchCurrentPost={fetchCurrentPost} />
        ) : (
          <h3>Loading...</h3>
        )}
      </div>
    )
  }
}

Feed.propTypes = {
  posts: PropTypes.array,
  getPosts: PropTypes.func,
  fetchCurrentPost: PropTypes.func,
  currentChannel: PropTypes.object
}

const mapState = state => ({
  posts: state.posts,
  currentChannel: state.currentChannel
})

const mapDispatch = { getPosts, fetchCurrentPost }

export default connect(mapState, mapDispatch)(Feed)
