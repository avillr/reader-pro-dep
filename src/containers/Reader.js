import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import '../styles/Reader.css'

import { fetchCurrentPost } from '../store'
import ReaderDisplay from '../components/ReaderDisplay'

class Reader extends Component {
  componentDidMount () {
    this.props.fetchCurrentPost(this.props.match.params.post)
  }
  componentWillReceiveProps (nextProps) {
    console.log(this.props.match.params.post)
    if (this.props.match.params.post !== nextProps.match.params.post) {
      this.props.fetchCurrentPost(this.props.match.params.post)
    }
  }

  render () {
    const { post } = this.props.match.params
    if (!post) return null
    console.log('in reader: ', post)
    const avgReadWpm = 250
    const readTime = Math.round(post.word_count / avgReadWpm)
    return <ReaderDisplay post={post} readTime={readTime} />
  }
}

Reader.propTypes = {
  post: PropTypes.object
}

const mapState = state => ({
  post: state.currentPost
})

const mapDispatch = { fetchCurrentPost }

export default withRouter(connect(mapState, mapDispatch)(Reader))
