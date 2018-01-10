import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import './Reader.css'

import { actions } from './index.js'

const mapState = state => ({
  ...state.Reader
})
const mapDispatch = dispatch => ({
  fetchCurrentPost: url => {
    dispatch(actions.fetchCurrentPost(url))
  }
})

class Reader extends Component {
  componentWillReceiveProps (nextProps) {
    if (this.props.post.active !== nextProps.post.active) {
      console.log(nextProps)
    }
  }
  render () {
    const post = this.props.post
    console.log('in reader: ', post)
    // const avgReadWpm = 250
    // const readTime = Math.round(post.word_count / avgReadWpm)
    return (
      <div>
        <h3>
          <a href={post.url}>{post.title}</a>
        </h3>
        {/* <div dangerouslySetInnerHTML={{ __html: post.content }} /> */}
      </div>
    )
  }
}

export default withRouter(connect(mapState, mapDispatch)(Reader))
