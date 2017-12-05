import React from 'react'
import { connect } from 'react-redux'

import { actions } from './index.js'

const mapState = (state) => ({
  ...state.Example
})

const mapDispatch = (dispatch) => ({
  dummyAction: () => {
    dispatch(actions.dummyAction())
  }
})

const Example = () => {
  return (
    <div>Example -- Stateless w/ Redux</div>
  )
}

const connectedExample = connect(mapState, mapDispatch)(Example)

export default connectedExample
