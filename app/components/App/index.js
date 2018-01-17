import axios from 'axios'

// Include component
import component from './App.js'

// Action Definitions
const ADD_CHANNEL = 'ADD_CHANNEL'
const REMOVE_CHANNEL = 'REMOVE_CHANNEL'
const SET_CHANNELS = 'SET_CHANNELS'

// Initial State
const initialState = {
  channels: [
    {
      id: 'hacker-news',
      name: 'Hacker News',
      description:
        'Hacker News is a social news website focusing on computer science and entrepreneurship. It is run by Paul Graham\'s investment fund and startup incubator, Y Combinator. In general, content that can be submitted is defined as "anything that gratifies one\'s intellectual curiosity".',
      url: 'https://news.ycombinator.com',
      rss: 'https://hnrss.org/frontpage'
    }
  ]
}

// Make Actions
const actions = {
  addChannel: payload => ({ type: ADD_CHANNEL, payload }),
  removeChannel: payload => ({ type: REMOVE_CHANNEL, payload }),
  setChannels: payload => ({ type: SET_CHANNELS, payload }),
  fetchChannels: () => dispatch => {
    axios
      .get('/api/channels')
      .then(res => res.data)
      .then(channels => dispatch(actions.setChannels({ channels })))
      .catch(console.error)
  }
}

// Make Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHANNEL:
      return { ...state, ...action.payload }
    case REMOVE_CHANNEL:
      return { ...state, ...action.payload }
    case SET_CHANNELS:
      return { ...state, ...action.payload }
    default:
      return state
  }
}

// Export
export { component, actions, reducer }
