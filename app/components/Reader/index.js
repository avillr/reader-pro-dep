import axios from 'axios'

// Include component
import component from './Reader.js'

// Action Definitions
const SET_CURRENT_POST = 'SET_CURRENT_POST'

// Initial State
const initialState = {
  currentPost: {}
}

// Make Actions
const actions = {
  setCurrentPost: payload => ({ type: SET_CURRENT_POST, payload }),
  fetchCurrentPost: url => dispatch => {
    const MERCURY_URL = 'https://mercury.postlight.com/parser?url='
    axios
      .get(MERCURY_URL + url, {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': process.env.REACT_APP_MERCURY_API_KEY
        }
      })
      .then(res => res.data)
      .then(post => dispatch(actions.setCurrentPost(post)))
      .catch(console.error)
  }
}

// Make Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_POST:
      return { ...state, currentPost: action.payload }
    default:
      return state
  }
}

// Export
export { component, actions, reducer }
