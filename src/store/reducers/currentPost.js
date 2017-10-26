const SET_CURRENT_POST = 'SET_CURRENT_POST'

export function setCurrentPost (url) {
  return { type: SET_CURRENT_POST, url }
}

export default function reducerCurrentPost (state = '', action) {
  switch (action.type) {
    case SET_CURRENT_POST:
      return action.url
    default:
      return state
  }
}
