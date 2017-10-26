import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class Reader extends Component {
  render () {
    return (
      <div className='App-reader'>
        <iframe
          title='reader-iframe'
          src={this.props.src}
          height='100%'
          width='100%'
        />
      </div>
    )
  }
}

Reader.propTypes = {
  src: PropTypes.string
}

const mapState = state => ({
  src: state.currentPost
})

export default connect(mapState)(Reader)
