import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getEntries } from '../store'

import FeedEntryList from '../components/FeedEntryList'

class Feed extends Component {
  componentDidMount () {
    this.props.getEntries('http://www.reddit.com/.rss')
  }

  render () {
    console.log(this.props)
    if (this.props.feedEntries.length) {
      return <FeedEntryList entries={this.props.feedEntries} />
    }
    return <h3>Loading...</h3>
  }
}

const mapState = state => ({
  feedEntries: state.feedEntries
})

const mapDispatch = { getEntries }

export default connect(mapState, mapDispatch)(Feed)
