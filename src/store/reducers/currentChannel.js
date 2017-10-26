const SET_CURRENT_CHANNEL = 'SET_CURRENT_CHANNEL'

export function setCurrentChannel (channel) {
  return { type: SET_CURRENT_CHANNEL, channel }
}

const initialState = {
  id: 0,
  name: 'Reddit',
  url: 'http://www.reddit.com/.rss'
}

export default function reducerCurrentChannel (state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_CHANNEL:
      return action.channel
    default:
      return state
  }
}