import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import '../styles/Reader.css'

class Reader extends Component {
  render () {
    const { data } = this.props.post
    if (!data) return null
    console.log('in reader: ', data)
    return (
      <div className='App-reader'>
        <h1>{data.title}</h1>
        <img className='lead-image' src={data.lead_image_url} />
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
