const ADD_CHANNEL = 'ADD_CHANNEL'
const REMOVE_CHANNEL = 'REMOVE_CHANNEL'
const SET_CURRENT_CHANNEL = 'SET_CURRENT_CHANNEL'

export function addChannel (url) {
  return { type: ADD_CHANNEL, url }
}

export function removeChannel (url) {
  return { type: REMOVE_CHANNEL, url }
}

export function setCurrentChannel (url) {
  return { type: SET_CURRENT_CHANNEL, url }
}

const initialState = {
  currentChannel: '',
  list: ['http://www.reddit.com/.rss', 'http://www.wsj.com/xml/rss/3_7455.xml']
}
export default function reducerChannels (state = initialState, action) {
  switch (action.type) {
    case ADD_CHANNEL:
      return state
    case REMOVE_CHANNEL:
      return state
    default:
      return state
  }
}
