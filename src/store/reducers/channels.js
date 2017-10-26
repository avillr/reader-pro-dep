const ADD_CHANNEL = 'ADD_CHANNEL'
const REMOVE_CHANNEL = 'REMOVE_CHANNEL'

export function addChannel (url) {
  return { type: ADD_CHANNEL, url }
}

export function removeChannel (url) {
  return { type: REMOVE_CHANNEL, url }
}

const initialState = [
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
    id: 'engadget',
    name: 'Engadget',
    description:
      'Engadget is a web magazine with obsessive daily coverage of everything new in gadgets and consumer electronics.',
    url: 'https://www.engadget.com',
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
