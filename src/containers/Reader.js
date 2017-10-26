import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class Reader extends Component {
  render () {
    return (
      <div className='App-reader'>
        <h1>some content</h1>
        {this.props.post.data && this.props.post.data.content}
      </div>
    )
  }
}

// Reader.propTypes = {
//   src: PropTypes.string
// }

const mapState = state => ({
  post: state.currentPost
})

export default connect(mapState)(Reader)
