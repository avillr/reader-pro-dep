import React, { Component } from 'react'

class Reader extends Component {
  render () {
    return (
      <div className='App-reader'>
        <iframe
          src={this.props.src}
          height={this.props.height}
          width={this.props.width}
        />
      </div>
    )
  }
}

export default Reader
