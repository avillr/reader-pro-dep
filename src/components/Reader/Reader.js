import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import './Reader.css'

// import { fetchCurrentPost } from '../store'

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

Reader.propTypes = {
  post: PropTypes.object
}

// const mapDispatch = { fetchCurrentPost }

export default withRouter(connect(null, null)(Reader))
