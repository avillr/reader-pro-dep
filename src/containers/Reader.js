import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import '../styles/Reader.css'

class Reader extends Component {
  render () {
    const { data } = this.props.post
    if (!data) return null
    console.log('in reader: ', data)
    const avgReadWpm = 250
    const readTime = Math.round(data.word_count / avgReadWpm)
    return (
      <div className='App-reader'>
        <h1>
          <a href={data.url}>{data.title}</a>
        </h1>
        <div>
          <h3>
            {data.author} - {readTime} min read
          </h3>
        </div>
        <div dangerouslySetInnerHTML={{ __html: data.content }} />
      </div>
    )
  }
}

Reader.propTypes = {
  post: PropTypes.object
}

const mapState = state => ({
  post: state.currentPost
})

export default connect(mapState)(Reader)
