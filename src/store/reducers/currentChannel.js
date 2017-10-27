const SET_CURRENT_CHANNEL = 'SET_CURRENT_CHANNEL'

export function setCurrentChannel (channelName) {
  return { type: SET_CURRENT_CHANNEL, channelName }
}

export default function reducerCurrentChannel (state = '', action) {
  switch (action.type) {
    case SET_CURRENT_CHANNEL:
      return action.channelName
    default:
      return state
  }
}
