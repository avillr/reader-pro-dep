// Include component
import component from './Example.js'

// Action Definitions
const DUMMY_ACTION = 'DUMMY_ACTION'

// Initial State
const initialState = {
  dummyState: false
}

// Make Actions
const actions = {
  dummyAction: payload => ({ type: DUMMY_ACTION, payload }),
  dummyThunkAction: payload => dispatch => {
    // async function here
    dispatch(actions.dummyAction(payload))
  }
}

// Make Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DUMMY_ACTION:
      return { ...state, ...action.payload }
    default:
      return state
  }
}

// Export
export { component, actions, reducer }
