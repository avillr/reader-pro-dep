import axios from 'axios'

const SET_CURRENT_POST = 'SET_CURRENT_POST'

export function setCurrentPost (post) {
  return { type: SET_CURRENT_POST, post }
}

export default function reducerCurrentPost (state = {}, action) {
  switch (action.type) {
    case SET_CURRENT_POST:
      return action.post
    default:
      return state
  }
}

export function fetchCurrentPost (url) {
  return function thunk (dispatch) {
    const mercuryUrl = 'https://mercury.postlight.com/parser?url='
    axios
      .get(mercuryUrl + url, {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'UG7xoJRskI1NiXl8p5tx0RY8ipW9lsepbcAlssug'
        }
      })
      .then(data => dispatch(setCurrentPost(data)))
      .catch(console.error)
  }
}
