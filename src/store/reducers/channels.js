const ADD_CHANNEL = 'ADD_CHANNEL'
const REMOVE_CHANNEL = 'REMOVE_CHANNEL'

export function addChannel (url) {
  return { type: ADD_CHANNEL, url }
}

export function removeChannel (url) {
  return { type: REMOVE_CHANNEL, url }
}

const initialState = [
  { id: 0, name: 'Reddit', url: 'http://www.reddit.com/.rss' },
  { id: 1, name: 'WSJ', url: 'http://www.wsj.com/xml/rss/3_7455.xml' }
]

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
