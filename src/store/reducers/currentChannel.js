const SET_CURRENT_CHANNEL = 'SET_CURRENT_CHANNEL'

export function setCurrentChannel (channel) {
  return { type: SET_CURRENT_CHANNEL, channel }
}

export default function reducerCurrentChannel (state = {}, action) {
  switch (action.type) {
    case SET_CURRENT_CHANNEL:
      return action.channel
    default:
      return state
  }
}
