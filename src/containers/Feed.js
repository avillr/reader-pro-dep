import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import '../styles/Feed.css'
import { getPosts, fetchCurrentPost, setCurrentChannel } from '../store'
import FeedEntryList from '../components/FeedEntryList'

class Feed extends Component {
  componentDidMount () {
    this.props.setCurrentChannel(this.props.match.params.feed)
    this.props.getPosts(this.props.match.params.feed)
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.match.params.feed !== nextProps.match.params.feed) {
      this.props.setCurrentChannel(this.props.match.params.feed)
      this.props.getPosts(this.props.match.params.feed)
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
  fetchCurrentPost: PropTypes.func
}

const mapState = state => ({
  posts: state.posts,
  currentChannel: state.currentChannel
})

const mapDispatch = { getPosts, fetchCurrentPost, setCurrentChannel }

export default withRouter(connect(mapState, mapDispatch)(Feed))
