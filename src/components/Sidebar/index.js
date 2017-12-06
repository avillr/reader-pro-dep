// Include component
import component from './Sidebar.js'

// Action Definitions
const ADD_CHANNEL = 'ADD_CHANNEL'
const REMOVE_CHANNEL = 'REMOVE_CHANNEL'

// Initial State
const initialState = {
  channels: [
    {
      id: 'ars-technica',
      name: 'Ars Technica',
      description:
        "The PC enthusiast's resource. Power users and the tools they love, without computing religion.",
      url: 'http://arstechnica.com',
      category: 'technology',
      language: 'en',
      country: 'us',
      urlsToLogos: {
        small: '',
        medium: '',
        large: ''
      },
      sortBysAvailable: ['top', 'latest']
    },
    {
      id: 'hacker-news',
      name: 'Hacker News',
      description:
        'Hacker News is a social news website focusing on computer science and entrepreneurship. It is run by Paul Graham\'s investment fund and startup incubator, Y Combinator. In general, content that can be submitted is defined as "anything that gratifies one\'s intellectual curiosity".',
      url: 'https://news.ycombinator.com',
      category: 'technology',
      language: 'en',
      country: 'us',
      urlsToLogos: {
        small: '',
        medium: '',
        large: ''
      },
      sortBysAvailable: ['top', 'latest']
    },
    {
      id: 'recode',
      name: 'Recode',
      description:
        'Get the latest independent tech news, reviews and analysis from Recode with the most informed and respected journalists in technology and media.',
      url: 'http://www.recode.net',
      category: 'technology',
      language: 'en',
      country: 'us',
      urlsToLogos: {
        small: '',
        medium: '',
        large: ''
      },
      sortBysAvailable: ['top']
    },
    {
      id: 'techcrunch',
      name: 'TechCrunch',
      description:
        'TechCrunch is a leading technology media property, dedicated to obsessively profiling startups, reviewing new Internet products, and breaking tech news.',
      url: 'https://techcrunch.com',
      category: 'technology',
      language: 'en',
      country: 'us',
      urlsToLogos: {
        small: '',
        medium: '',
        large: ''
      },
      sortBysAvailable: ['top', 'latest']
    },
    {
      id: 'the-verge',
      name: 'The Verge',
      description:
        'The Verge covers the intersection of technology, science, art, and culture.',
      url: 'http://www.theverge.com',
      category: 'technology',
      language: 'en',
      country: 'us',
      urlsToLogos: {
        small: '',
        medium: '',
        large: ''
      },
      sortBysAvailable: ['top', 'latest']
    }
  ]
}

// Make Actions
const actions = {
  addChannel: payload => ({ type: ADD_CHANNEL, payload }),
  removeChannel: payload => ({ type: REMOVE_CHANNEL, payload })
}

// Make Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHANNEL:
      return { ...state, ...action.payload }
    case REMOVE_CHANNEL:
      return { ...state, ...action.payload }
    default:
      return state
  }
}

// Export
export { component, actions, reducer }
