import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import './Feed.css'
import { actions } from './index.js'
import { components } from '../components.js'

const mapState = state => ({
  ...state.Feed
})
const mapDispatch = dispatch => ({
  getPosts: feed => {
    dispatch(actions.getPosts(feed))
  }
})

class Feed extends Component {
  componentDidMount () {
    const feed = this.props.match.params.feed
    this.props.getPosts(feed)
  }

  render () {
    console.log(this.props)
    const { posts } = this.props
    return (
      <div className='App-feed'>
        {posts.length && (
          <div>
            {posts.map((post, index) => {
              return <components.Reader key={post.id} post={post} />
            })}
          </div>
        )}
      </div>
    )
  }
}

export default withRouter(connect(mapState, mapDispatch)(Feed))
