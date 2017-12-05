import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import './Feed.css'
import { components, store } from '../components.js'

class Feed extends Component {
  componentDidMount () {
    const feed = this.props.match.params.feed
    this.props.getPosts(feed)
  }

  componentWillReceiveProps (nextProps) {
    const feed = this.props.match.params.feed
    if (feed !== nextProps.match.params.feed) {
      this.props.getPosts(feed)
    }
  }

  render () {
    const { posts } = this.props
    return (
      <div className='App-feed'>
        {posts.length && (
          <div>
            {posts.map((post, index) => {
              return <components.Reader post={post} />
            })}
          </div>
        )}
      </div>
    )
  }
}

const mapState = state => ({
  posts: state.posts
})

// const mapDispatch = { getPosts, setCurrentPost }

export default withRouter(connect(mapState)(Feed))
