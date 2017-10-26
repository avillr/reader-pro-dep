import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import '../styles/Feed.css'
import { getPosts } from '../store'
import FeedEntryList from '../components/FeedEntryList'

class Feed extends Component {
  componentDidMount () {
    this.props.getPosts('http://www.reddit.com/.rss')
  }

  render () {
    const { posts } = this.props
    return (
      <div className='App-main'>
        {posts.length ? <FeedEntryList entries={posts} /> : <h3>Loading...</h3>}
      </div>
    )
  }
}

Feed.propTypes = {
  posts: PropTypes.array,
  getPosts: PropTypes.func
}

const mapState = state => ({
  posts: state.posts
})

const mapDispatch = { getPosts }

export default connect(mapState, mapDispatch)(Feed)
